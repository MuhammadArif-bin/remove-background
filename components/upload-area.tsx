'use client';

import { useState, useRef, ChangeEvent, DragEvent } from 'react';
import { Cloud, X, Loader } from 'lucide-react';
import RemovalResult from './removal-result';

interface UploadedFile {
  file: File;
  preview: string;
}

export default function UploadArea() {
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<UploadedFile | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);

    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      processFile(files[0]);
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files;
    if (files && files.length > 0) {
      processFile(files[0]);
    }
  };

  const processFile = (file: File) => {
    // Validate file is image
    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file');
      return;
    }

    // Create preview URL
    const reader = new FileReader();
    reader.onloadend = () => {
      setUploadedFile({
        file,
        preview: reader.result as string,
      });
    };
    reader.readAsDataURL(file);
  };

  const handleClearFile = () => {
    setUploadedFile(null);
    setShowResult(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleClickUpload = () => {
    fileInputRef.current?.click();
  };

  const handleStartRemove = async () => {
    if (!uploadedFile) return;
    
    setIsProcessing(true);
    // Simulate processing time
    setTimeout(() => {
      setIsProcessing(false);
      setShowResult(true);
    }, 3000);
  };

  const handleStartNew = () => {
    handleClearFile();
    setShowResult(false);
  };

  // Show result screen after processing
  if (showResult && uploadedFile) {
    return (
      <RemovalResult
        originalImage={uploadedFile.preview}
        fileBlob={uploadedFile.file}
        fileName={uploadedFile.file.name}
        onStartNew={handleStartNew}
      />
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto px-4">
      {/* Dropzone Area */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`
          relative flex flex-col items-center justify-center
          rounded-2xl border-2 transition-all duration-300 ease-in-out
          min-h-[320px] md:min-h-[400px] cursor-pointer
          ${
            isDragOver
              ? 'border-solid border-secondary bg-blue-50'
              : 'border-dashed border-secondary bg-white'
          }
        `}
        onClick={handleClickUpload}
      >
        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
          aria-label="Upload image file"
        />

        {uploadedFile ? (
          // Preview State
          <div className="flex flex-col items-center gap-4 w-full h-full p-6">
            <div className="relative w-full h-48 md:h-64 flex items-center justify-center overflow-hidden rounded-lg bg-gray-100">
              <img
                src={uploadedFile.preview}
                alt="Preview"
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="text-center">
              <p className="text-sm md:text-base font-medium text-foreground">
                {uploadedFile.file.name}
              </p>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">
                {(uploadedFile.file.size / 1024).toFixed(2)} KB
              </p>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleClearFile();
              }}
              className="
                flex items-center gap-2 px-4 py-2 rounded-lg
                bg-muted text-muted-foreground hover:bg-border
                transition-colors duration-200
                text-sm font-medium
              "
            >
              <X className="w-4 h-4" />
              Remove
            </button>
          </div>
        ) : (
          // Default State
          <div className="flex flex-col items-center gap-4 px-6 py-12">
            {/* Cloud Icon */}
            <Cloud className="w-16 h-16 md:w-20 md:h-20 text-secondary" />

            {/* Primary Text */}
            <div className="text-center">
              <p className="text-lg md:text-xl font-semibold text-foreground">
                Drag & drop image
              </p>
              <p className="text-sm md:text-base text-muted-foreground mt-1">
                or click to upload
              </p>
            </div>

            {/* Supported formats info */}
            <p className="text-xs md:text-sm text-muted-foreground text-center">
              Supported: JPG, PNG, WebP, GIF (Max 10MB)
            </p>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
        {uploadedFile ? (
          <>
            <button
              onClick={handleStartRemove}
              disabled={isProcessing}
              className={`
                px-6 md:px-8 py-3 rounded-lg font-semibold text-base
                transition-all duration-200 ease-in-out
                text-white flex items-center justify-center gap-2
                ${
                  isProcessing
                    ? 'bg-primary/70 cursor-not-allowed'
                    : 'bg-primary hover:bg-blue-700 active:scale-95'
                }
                backdrop-blur-sm
              `}
            >
              {isProcessing ? (
                <>
                  <Loader className="w-4 h-4 animate-spin" />
                  Processing...
                </>
              ) : (
                'Start Remove'
              )}
            </button>

            <button
              onClick={handleClearFile}
              disabled={isProcessing}
              className="
                px-6 md:px-8 py-3 rounded-lg font-semibold text-base
                transition-all duration-200 ease-in-out
                bg-muted text-foreground hover:bg-border
                active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed
              "
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            onClick={handleClickUpload}
            className={`
              px-6 md:px-8 py-3 rounded-lg font-semibold text-base
              transition-all duration-200 ease-in-out
              text-white
              bg-primary hover:bg-blue-700 active:scale-95
              glass
              backdrop-blur-sm
            `}
          >
            Upload Image
          </button>
        )}
      </div>

      {/* Additional Info */}
      {uploadedFile && (
        <div className="mt-6 p-4 rounded-lg bg-blue-50 border border-blue-100">
          <p className="text-sm text-blue-900">
            ✓ Image ready for processing. Click upload to start removing the background.
          </p>
        </div>
      )}
    </div>
  );
}
