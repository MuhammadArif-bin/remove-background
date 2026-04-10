import UploadArea from '@/components/upload-area';
import BeforeAfterCard from '@/components/before-after-card';
import FeatureShowcase from '@/components/feature-showcase';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-lg">BR</span>
              </div>
              <span className="font-bold text-xl text-foreground hidden sm:inline">
                BackRemove
              </span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Features
              </a>
              <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Pricing
              </a>
              <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                API
              </a>
            </div>

            {/* CTA Button */}
            <button className="px-4 py-2 rounded-lg bg-primary text-white font-medium text-sm hover:bg-blue-700 transition-colors duration-200 glass">
              Sign In
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
              Remove Backgrounds
              <span className="block text-primary">Instantly & Perfectly</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
              Professional background remover powered by advanced AI. Upload your image and get crystal-clear results in seconds.
            </p>
          </div>
        </div>
      </section>

      {/* Upload Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <UploadArea />
      </section>

      {/* Preview Cards Section */}
      <section className="bg-card py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Before & After Results
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See the quality of our background removal. Crystal-clear edges and perfect details. Hover or click to see the transformation.
            </p>
          </div>

          {/* Sample Preview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <BeforeAfterCard
              beforeImage="/sample-1-before.jpg"
              afterImage="/sample-1-after.jpg"
              title="Portrait Photography"
            />
            <BeforeAfterCard
              beforeImage="/sample-2-before.jpg"
              afterImage="/sample-2-after.jpg"
              title="Product Photography"
            />
            <BeforeAfterCard
              beforeImage="/sample-3-before.jpg"
              afterImage="/sample-3-after.jpg"
              title="Pet Photography"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <FeatureShowcase />

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center text-muted-foreground text-sm">
            <p>&copy; 2024 BackRemove. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
