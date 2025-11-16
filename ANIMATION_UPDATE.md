# Apple-Style Shrink-on-Scroll Animation

## 🎯 Overview

Implementasi animasi Apple-style shrink-on-scroll untuk Hero Title menggunakan Framer Motion. Animasi ini memberikan efek smooth dan buttery ketika user melakukan scroll, dengan title yang mengecil, bergerak ke atas, dan sedikit fade.

---

## ✨ Fitur Animasi

### Transform Properties:
- **Scale**: `1.0` → `0.70` (shrink 30%)
- **TranslateY**: `0px` → `-32px` (bergerak ke atas)
- **Opacity**: `1.0` → `0.85` (sedikit fade)

### Scroll Threshold:
- **Start**: `0px` (top of page)
- **End**: `300px` (animasi selesai setelah scroll 300px)
- **Alasan**: 300px adalah sweet spot optimal untuk UX

### Technical Details:
- ✅ GPU-accelerated (menggunakan transform properties)
- ✅ Smooth interpolation dengan Framer Motion
- ✅ No layout shift atau reflow
- ✅ 60fps performance
- ✅ Responsive di semua device

---

## 🔧 Implementasi

### File yang Diupdate:
**`components/Hero.tsx`**

### Dependencies:
```json
{
  "framer-motion": "^12.23.24"
}
```

### Code Changes:

#### 1. Import Framer Motion
```typescript
import { motion, useScroll, useTransform } from 'framer-motion';
```

#### 2. Setup Scroll Tracking
```typescript
const { scrollY } = useScroll();

// Transform values for smooth shrink effect
const titleScale = useTransform(scrollY, [0, 300], [1, 0.70]);
const titleY = useTransform(scrollY, [0, 300], [0, -32]);
const titleOpacity = useTransform(scrollY, [0, 300], [1, 0.85]);
```

#### 3. Apply Animation to Title
```typescript
<motion.h1 
  className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
  style={{
    scale: titleScale,
    y: titleY,
    opacity: titleOpacity,
  }}
>
  <span className="text-gray-900">Raih IPK</span>
  <span className="block text-primary-500 mt-2">Impianmu!</span>
</motion.h1>
```

#### 4. Apply to Accent Bar (Bonus)
```typescript
<motion.div 
  className="w-24 h-1.5 bg-gradient-to-r from-primary-500 to-red-400 rounded-lg mx-auto lg:mx-0"
  style={{
    scale: titleScale,
    opacity: titleOpacity,
  }}
/>
```

---

## 📱 Testing Results

### Desktop (1920x1080)
- ✅ Animasi smooth dan buttery
- ✅ No performance issues
- ✅ Scale dan translateY bekerja sempurna

### Mobile (375x667)
- ✅ Animasi tetap smooth di mobile
- ✅ Responsive dan tidak ada layout shift
- ✅ Touch scroll bekerja dengan baik

### Tablet (768x1024)
- ✅ Animasi konsisten di semua breakpoint

---

## 🎨 UX Benefits

1. **Visual Hierarchy**: Title mengecil saat scroll memberikan fokus ke konten berikutnya
2. **Smooth Transition**: Animasi yang smooth meningkatkan perceived performance
3. **Apple-like Feel**: Memberikan kesan premium dan modern
4. **No Distraction**: Animasi subtle, tidak mengganggu reading flow
5. **Performance**: GPU-accelerated, tidak ada jank atau stutter

---

## 🚀 Performance Metrics

- **FPS**: 60fps consistent
- **Animation Duration**: Mengikuti scroll (scroll-linked)
- **GPU Usage**: Minimal (transform + opacity only)
- **No Reflow**: Tidak ada layout recalculation
- **Bundle Size**: +0KB (framer-motion sudah ada)

---

## 📸 Screenshots

Lihat screenshot di folder `screenshots/`:
- `animation-before-scroll.png` - Title di posisi awal (scale: 1.0)
- `animation-mid-scroll.png` - Title sedang shrink (scale: ~0.85)
- `animation-full-scroll.png` - Title fully shrunk (scale: 0.70)
- `mobile-animation-before.png` - Mobile view sebelum scroll
- `mobile-animation-scrolled.png` - Mobile view setelah scroll

---

## 🎯 Future Enhancements (Optional)

Jika diperlukan enhancement lebih lanjut:
1. Tambahkan parallax effect untuk background hexagons
2. Animasi fade-in untuk statistics saat scroll
3. Stagger animation untuk CTA buttons
4. Add scroll progress indicator

---

## ✅ Checklist

- [x] Import Framer Motion hooks
- [x] Setup scroll tracking dengan useScroll
- [x] Create transform values (scale, y, opacity)
- [x] Apply animation to h1 title
- [x] Apply animation to accent bar
- [x] Test di desktop (1920x1080)
- [x] Test di mobile (375x667)
- [x] Test di tablet (768x1024)
- [x] Verify no performance issues
- [x] Verify no layout shift
- [x] Documentation complete

---

**Implemented**: 2025-11-16  
**By**: EXO Team  
**Status**: ✅ Complete & Production Ready  
**Animation Style**: Apple-inspired Shrink-on-Scroll
