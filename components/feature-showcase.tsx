'use client';

import { Zap, Sparkles, Package } from 'lucide-react';

export default function FeatureShowcase() {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Remove backgrounds in seconds with our powerful AI technology. Get instant results without waiting.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Sparkles,
      title: 'Perfect Quality',
      description: 'Crystal-clear results with precision edge detection. Every pixel processed with advanced algorithms.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Package,
      title: 'Batch Processing',
      description: 'Process multiple images at once and save valuable time. Perfect for bulk projects and workflows.',
      color: 'from-blue-500 to-cyan-500',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, idx) => {
          const IconComponent = feature.icon;
          return (
            <div
              key={idx}
              className="group p-6 md:p-8 rounded-xl border border-border bg-white hover:shadow-lg hover:border-secondary transition-all duration-300"
            >
              {/* Icon Container */}
              <div
                className={`
                  w-12 h-12 md:w-14 md:h-14 rounded-lg bg-gradient-to-br ${feature.color}
                  flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300
                `}
              >
                <IconComponent className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
