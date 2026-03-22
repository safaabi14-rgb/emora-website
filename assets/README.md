# EMORA Website Assets Folder

Folder ini berisi semua aset untuk website EMORA Perfume Brand.

## 📁 Struktur Folder

```
assets/
├── images/
│   ├── products/        # Foto produk perfume
│   ├── hero/           # Background/banner hero section
│   └── about/          # Foto untuk about section
└── README.md
```

## 📸 Panduan Upload Foto

### 1. **Folder: `images/products/`**
Tempat menyimpan foto semua produk perfume EMORA.

**Naming Convention (Rekomendasi):**
```
belle-fleur.jpg
belle-fleur-hover.jpg

dots-vanille.jpg
dots-vanille-hover.jpg

lumer-citrus.jpg
lumer-citrus-hover.jpg

be-influencer.jpg
be-influencer-hover.jpg

royale-amber.jpg              (Featured Product)
royale-amber-hover.jpg

nuit-elixir.jpg
nuit-elixir-hover.jpg

velvet-oud.jpg
velvet-oud-hover.jpg
```

**Spesifikasi Foto:**
- Format: JPG, PNG, atau WebP
- Ukuran: 600x800px (landscape) atau 400x500px (square)
- File Size: Max 2MB per foto
- Background: Putih atau transparan untuk aesthetic luxury

### 2. **Folder: `images/hero/`**
Tempat menyimpan background atau banner untuk hero section.

**Naming Convention:**
```
hero-banner.jpg
hero-background.jpg
hero-pattern.jpg
```

**Spesifikasi:**
- Format: JPG atau WebP
- Ukuran: Min 1920x1080px (Full HD)
- File Size: Optimized untuk performa web

### 3. **Folder: `images/about/`**
Tempat menyimpan foto untuk about section.

**Naming Convention:**
```
about-collection.jpg
about-story.jpg
about-essence.jpg
```

**Spesifikasi:**
- Format: JPG atau PNG
- Ukuran: 600x600px atau 800x800px
- File Size: Max 2MB

## 🔄 Cara Update HTML

Setelah upload foto, update path di `index.html`:

### Untuk Product Card:
```html
<div class="product-image">
    <img src="assets/images/products/belle-fleur.jpg" alt="Belle Fleur Perfume">
</div>
```

### Untuk Hero Section:
```css
.hero {
    background-image: url('assets/images/hero/hero-banner.jpg');
    background-size: cover;
}
```

### Untuk About Section:
```html
<div class="about-image">
    <img src="assets/images/about/about-collection.jpg" alt="EMORA Collection">
</div>
```

## 💡 Tips

1. **Optimasi Gambar:**
   - Gunakan TinyPNG, ImageOptim, atau Squoosh.app
   - Kompresi tanpa mengurangi kualitas

2. **Responsive Images:**
   - Siapkan 2 versi: Desktop dan Mobile
   - Gunakan `srcset` attribute untuk efficiency

3. **Format Modern:**
   - Gunakan WebP untuk file lebih kecil
   - Fallback ke JPG untuk browser lama

4. **Alt Text:**
   - Selalu tambahkan deskripsi untuk SEO
   - Contoh: `alt="Belle Fleur EDP Perfume 100ml"`

## 📝 Contoh File Upload Lengkap

```
assets/
├── images/
│   ├── products/
│   │   ├── belle-fleur.jpg
│   │   ├── dots-vanille.jpg
│   │   ├── lumer-citrus.jpg
│   │   ├── be-influencer.jpg
│   │   ├── royale-amber.jpg
│   │   ├── nuit-elixir.jpg
│   │   └── velvet-oud.jpg
│   ├── hero/
│   │   └── hero-banner.jpg
│   └── about/
│       └── about-collection.jpg
└── README.md
```

---

**Last Updated:** March 2026
**Version:** 1.0
