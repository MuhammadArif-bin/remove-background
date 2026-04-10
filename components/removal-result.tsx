'use client';

import { useState, useEffect } from 'react';
import { Download, RefreshCw, Check } from 'lucide-react';

interface RemovalResultProps {
  originalImage: string;
  fileBlob?: File;
  fileName: string;
  onStartNew: () => void;
}

export default function RemovalResult({
  originalImage,
  fileBlob,
  fileName,
  onStartNew,
}: RemovalResultProps) {
  const [isProcessing, setIsProcessing] = useState(true);
  const [processedImage, setProcessedImage] = useState<string | null>(null);

  useEffect(() => {
    const processImageWithAI = async () => {
      try {
        const { removeBackground } = await import('@imgly/background-removal');

        // Remove background using accurate AI model
        const imageBlob = await removeBackground(fileBlob || originalImage, {
          progress: (key, current, total) => {
            console.log(`Downloading model ${key}: ${current} / ${total}`);
          }
        });

        // Create an object URL from the returned blob
        const url = URL.createObjectURL(imageBlob);
        setProcessedImage(url);
        setIsProcessing(false);

      } catch (error) {
        console.error('Error removing background:', error);
        setProcessedImage(originalImage); // fallback to original
        setIsProcessing(false);
        // We could also set an error state here and show an alert
        alert("Failed to remove background. Ensure you are connected to the internet.");
      }
    };

    processImageWithAI();

  }, [originalImage, fileBlob]);

  const handleDownload = () => {
    if (!processedImage) return;

    const link = document.createElement('a');
    link.href = processedImage;
    link.download = `${fileName.split('.')[0]}-no-bg.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <div className="rounded-2xl border border-border bg-white overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-secondary p-6 md:p-8">
          <div className="flex items-center gap-3">
            {isProcessing ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <Check className="w-5 h-5 text-white" />
            )}
            <h3 className="text-xl md:text-2xl font-bold text-white">
              {isProcessing ? 'Processing your image...' : 'Background removed successfully!'}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Before & After Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Before */}
            <div>
              <p className="text-sm font-semibold text-foreground mb-3">Original Image</p>
              <div className="relative rounded-lg overflow-hidden border border-border bg-gray-100">
                <img
                  src={originalImage}
                  alt="Original"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>

            {/* After */}
            <div>
              <p className="text-sm font-semibold text-foreground mb-3">
                {isProcessing ? 'Processing...' : 'Processed Image'}
              </p>
              <div className="relative rounded-lg overflow-hidden border border-border bg-gradient-to-br from-gray-50 to-gray-100 h-64 flex items-center justify-center">
                {processedImage ? (
                  <img
                    src={processedImage}
                    alt="Processed"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-8 h-8 border-3 border-primary border-t-transparent rounded-full animate-spin" />
                    <p className="text-sm text-muted-foreground">Removing background...</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* File Info */}
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6">
            <p className="text-sm text-blue-900">
              <span className="font-semibold">File:</span> {fileName}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={handleDownload}
              disabled={isProcessing || !processedImage}
              className="
                flex items-center justify-center gap-2
                px-6 md:px-8 py-3 rounded-lg font-semibold
                bg-primary text-white hover:bg-blue-700
                disabled:opacity-50 disabled:cursor-not-allowed
                transition-all duration-200 ease-in-out
                active:scale-95
              "
            >
              <Download className="w-4 h-4" />
              Download Result
            </button>

            <button
              onClick={onStartNew}
              className="
                flex items-center justify-center gap-2
                px-6 md:px-8 py-3 rounded-lg font-semibold
                bg-muted text-foreground hover:bg-border
                transition-all duration-200 ease-in-out
                active:scale-95
              "
            >
              <RefreshCw className="w-4 h-4" />
              Remove Another
            </button>
          </div>

          {/* Info Text */}
          <p className="text-xs md:text-sm text-muted-foreground text-center mt-6">
            Results are generated using advanced AI background removal technology.
          </p>
        </div>
      </div>
    </div>
  );
}
