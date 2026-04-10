# BackRemove - Background Remover Website

## 🎯 Features Overview

### 1. **Upload Area Component** (`components/upload-area.tsx`)
A modern, fully interactive upload component with:
- **Drag & Drop Support**: Large dropzone area with dashed blue border
- **File Preview**: Shows uploaded image with file name and size
- **Start Remove Button**: Initiates background removal processing
- **Processing State**: Shows loading animation during processing
- **Responsive Design**: Mobile-first layout with adaptive sizing
- **Glassmorphism Effects**: Modern glass effect on buttons

### 2. **Removal Result Component** (`components/removal-result.tsx`)
Displays before/after comparison with:
- **Before & After Grid**: Side-by-side image comparison
- **Processing Animation**: Real-time processing feedback
- **Download Option**: Download processed image as PNG
- **Start New**: Quick action to remove another image
- **File Information**: Display original filename and details

### 3. **Before/After Card Component** (`components/before-after-card.tsx`)
Interactive preview cards featuring:
- **Hover Effect**: Smooth transition between before/after images
- **Click Toggle**: Toggle between before and after states
- **Status Labels**: Badge showing "Before" or "After" state
- **File Description**: Additional context for each sample
- **Sample Gallery**: 3 professional sample images included

### 4. **Feature Showcase Component** (`components/feature-showcase.tsx`)
Highlights key features with:
- **Icon Features**: Lightning Fast, Perfect Quality, Batch Processing
- **Gradient Icons**: Colorful gradient backgrounds for visual appeal
- **Hover Animations**: Scale effect on hover for interactivity
- **Responsive Grid**: 1 column (mobile) to 3 columns (desktop)

## 🎨 Design System

### Color Palette
- **Primary Blue**: `#1e40af` - Main actions and branding
- **Secondary Cyan**: `#38bdf8` - Accent colors and highlights
- **Background**: `#ffffff` - Clean white background
- **Foreground**: `#1a1a2e` - Dark text color
- **Muted**: `#f1f5f9` - Soft gray for secondary elements

### Typography
- **Font Family**: Geist (modern, clean sans-serif)
- **Font Scale**: Responsive sizes from 12px to 64px
- **Font Weight**: 400 (regular) to 700 (bold)

### Effects
- **Glassmorphism**: `backdrop-blur-md bg-white/30 border border-white/20`
- **Transitions**: Smooth 200-300ms transitions for all interactive elements
- **Shadows**: Subtle hover shadows for depth

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 640px
- **Tablet**: 641px - 1024px
- **Desktop**: 1025px+

## 🔄 User Workflow

1. **Landing**: User sees hero section with upload prompt
2. **Upload**: Drag-drop or click to select image
3. **Preview**: Image preview with file information
4. **Process**: Click "Start Remove" to process image
5. **Result**: See before/after comparison
6. **Download**: Download processed image or start new

## 📊 Sample Images

Three professional sample images included:
1. **sample-1-before/after**: Portrait photography (business professional)
2. **sample-2-before/after**: Product photography (white headphones)
3. **sample-3-before/after**: Pet photography (golden retriever)

## 🎯 Key Implementation Details

### Drag & Drop States
- **Idle**: Dashed border, white background
- **Drag Over**: Solid border, light blue background
- **Drop**: File processed and preview shown

### Processing
- Simulated 3-second processing time
- Loading animation with spinner
- Before/after comparison display

### Download
- Processed image saved as PNG
- Filename: `[original-name]-no-bg.png`
- Native browser download trigger

## 🚀 Future Enhancements

- Batch image processing
- Advanced AI background removal
- Multiple output formats (PNG, WebP, JPEG)
- Background replacement options
- Real-time preview during processing
- User accounts and image history
- API integration for enterprise use

## 📦 Dependencies

- React 19.2+
- Next.js 16+
- Tailwind CSS v4
- Lucide React (icons)
- TypeScript

---

**Last Updated**: April 2026
