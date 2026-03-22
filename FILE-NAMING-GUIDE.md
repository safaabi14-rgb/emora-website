# ✅ CONTOH FILE NAMING & CARA UPLOAD

## 📸 Daftar Foto yang Diperlukan

| No. | Nama Produk | Nama File (HARUS) | Ukuran Rekomendasi | Path Upload |
|-----|------------|-------------------|-------------------|-------------|
| 1 | Belle Fleur | `belle-fleur.jpg` | 600x800px | `assets/images/products/` |
| 2 | Dots Vanille | `dots-vanille.jpg` | 600x800px | `assets/images/products/` |
| 3 | Lumer Citrus | `lumer-citrus.jpg` | 600x800px | `assets/images/products/` |
| 4 | Be Influencer | `be-influencer.jpg` | 600x800px | `assets/images/products/` |
| 5 | Royale Amber | `royale-amber.jpg` | 600x800px | `assets/images/products/` |
| 6 | Nuit Elixir | `nuit-elixir.jpg` | 600x800px | `assets/images/products/` |
| 7 | Velvet Oud | `velvet-oud.jpg` | 600x800px | `assets/images/products/` |

---

## 🔴 CONTOH YANG SALAH ❌

❌ `Belle Fleur.jpg` - Ada spasi (JANGAN!)  
❌ `BELLE-FLEUR.JPG` - Uppercase (mungkin) tidak sesuai path  
❌ `belle fleur.jpg` - Ada spasi (JANGAN!)  
❌ `beauteFleur.jpg` - Nama tidak sesuai (JANGAN!)  
❌ `belle_fleur.jpg` - Pakai underscore bukan dash  
❌ `belle-fleur-01.jpg` - Nama tambahan (JANGAN!)  

---

## 🟢 CONTOH YANG BENAR ✅

✅ `belle-fleur.jpg` - Lowercase, dash, jpg  
✅ `belle-fleur.png` - Atau bisa PNG  
✅ `belle-fleur.webp` - Atau WebP (lebih ringan)  

---

## 📍 PATH YANG BENAR

**Lokasi folder:**
```
D:\Emora-website\assets\images\products\
```

**Setelah upload harus terlihat seperti ini:**
```
D:\Emora-website\assets\images\products\
├── belle-fleur.jpg
├── dots-vanille.jpg
├── lumer-citrus.jpg
├── be-influencer.jpg
├── royale-amber.jpg
├── nuit-elixir.jpg
└── velvet-oud.jpg
```

---

## 🎨 BONUS: FOTO TAMBAHAN (Optional)

### Hero Section Background
- File: `hero-banner.jpg`
- Path: `assets/images/hero/`
- Ukuran: 1920x1080px (Full HD)
- Peruntukan: Background animasi hero

### About Section Image
- File: `about-collection.jpg`
- Path: `assets/images/about/`
- Ukuran: 600x600px atau 800x800px
- Peruntukan: Foto koleksi di about section

---

## 🛠️ CARA RENAME FILE

### Jika foto Anda punya nama berbeda:

**Windows:**
1. Right-click pada file
2. Pilih "Rename"
3. Ganti ke nama yang sesuai (contoh: `belle-fleur.jpg`)
4. Tekan Enter

**Mac:**
1. Click pada file
2. Tekan Enter (atau Space+Enter)
3. Ganti ke nama yang sesuai
4. Tekan Enter

**CMD/Terminal:**
```bash
# Windows
ren "old-name.jpg" "belle-fleur.jpg"

# Mac/Linux
mv old-name.jpg belle-fleur.jpg
```

---

## 📏 RESIZE FOTO DENGAN ONLINE TOOL

### Jika foto Anda perlu resize:

1. Buka: https://squoosh.app/
2. Upload foto
3. Set ukuran ke: 600px width, 800px height
4. Download
5. Rename ke nama yang benar
6. Upload ke folder assets

---

## 🗂️ STEP-BY-STEP UPLOAD

### Step 1: Siapkan Folder
```
Buka: D:\Emora-website\assets\images\products\
```

### Step 2: Siapkan 7 Foto
- Setiap foto sudah diresize ke 600x800px
- Setiap foto sudah dikompresi < 500KB
- Nama sudah benar (lowercase, dash)

### Step 3: Paste Semua Foto
- Copy semua 7 foto ke folder yang sudah dibuka

### Step 4: Verify
- Pastikan ada 7 file di folder
- Nama sesuai dengan tabel di atas
- Folder path-nya benar

### Step 5: Test
- Buka index.html di browser
- Lihat apakah foto muncul di product cards

---

## ❓ FAQ

**Q: Kenapa foto tidak muncul?**  
A: Cek apakah nama file benar-benar sesuai (case matters untuk path). Refresh browser dengan Ctrl+F5.

**Q: Bisa tidak pakai foto?**  
A: Bisa, placeholder akan muncul. Tapi website akan terlihat lebih bagus dengan foto real.

**Q: Format apa yang terbaik?**  
A: JPG untuk foto biasa, PNG untuk transparent, WebP untuk file paling ringan.

**Q: Berapa ukuran file maksimal?**  
A: Ideal < 500KB per foto, maksimal 1MB.

---

## 📊 Size Conversion Reference

Jika Anda unclear tentang ukuran:

- **600x800px** = Portrait (tinggi > lebar) - untuk bottle
- **800x800px** = Square - untuk collection
- **1920x1080px** = Landscape (lebar > tinggi) - untuk background

---

**Siap upload foto produk Anda! 📸✨**

*Jika masih ada pertanyaan, baca file UPLOAD-GUIDE.md untuk info lebih lengkap.*
