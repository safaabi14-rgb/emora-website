# 🌙 EMORA Dark Mode & Light Mode Feature

## ✨ Fitur yang Ditambahkan

Website EMORA sekarang memiliki **Dark Mode** dan **Light Mode** yang dapat ditukar dengan mudah!

---

## 🎨 Tema Mode

### **Light Mode** (Default)
- Background: Cream (#F5EFE6)
- Text: Dark Brown (#3E2C23)
- Cards: White (#FFFFFF)
- Navbar: Transparent cream with blur

### **Dark Mode**
- Background: Deep Dark (#0f0a07)
- Text: Light (#f5f5f5)
- Cards: Dark Brown (#1a1510)
- Navbar: Dark with blur

---

## 📍 Lokasi Theme Switcher

Tombol theme switcher terletak di **navbar (atas)** sebelah kanan:
- **Sun icon ☀️** = Light Mode (aktif)
- **Moon icon 🌙** = Dark Mode (aktif)

### Layout Navbar:
```
[EMORA Logo] [Navigation Links] [EN|ID] [☀️/🌙]
```

---

## 🖱️ Cara Menggunakan

1. **Buka website EMORA**
2. **Lihat navbar atas** - ada icon sun/moon di kanan
3. **Klik icon** untuk toggle antara light/dark mode
4. **Tema akan tersimpan** otomatis di browser

---

## 💾 Local Storage

Pilihan tema disimpan di **localStorage** dengan key: `emoraTheme`

**Cara kerja:**
- Saat user toggle tema → tersimpan di browser
- Saat user kembali ke website → tema sebelumnya ditampilkan
- Tidak perlu login atau database

---

## 🎨 CSS Variables yang Digunakan

Website menggunakan CSS custom properties untuk theme switching:

### Light Mode (Default):
```css
:root {
    --bg-primary: #F5EFE6;           /* Main background */
    --bg-secondary: #FFFFFF;          /* Card/section background */
    --bg-tertiary: #EDE5D8;          /* Tertiary background */
    --text-primary: #3E2C23;         /* Main text */
    --text-secondary: #666666;       /* Secondary text */
    --navbar-bg: rgba(245, 239, 230, 0.95);
    --card-bg: #FFFFFF;
    --input-bg: #FFFFFF;
}
```

### Dark Mode:
```css
body.dark-mode {
    --bg-primary: #0f0a07;           /* Deep dark */
    --bg-secondary: #1a1510;         /* Dark background */
    --bg-tertiary: #2a1f1a;          /* Tertiary dark */
    --text-primary: #f5f5f5;         /* Light text */
    --text-secondary: #cccccc;       /* Secondary light */
    --navbar-bg: rgba(26, 21, 16, 0.95);
    --card-bg: #1a1510;
    --input-bg: #2a1f1a;
}
```

---

## 🔄 Transisi Smooth

Semua perubahan warna memiliki transisi smooth:

```css
transition: background-color 0.3s ease, color 0.3s ease;
```

**Perubahan berjalan halus tanpa flash/lag** ✨

---

## 📋 Elemen yang Berubah

### Navbar:
- Background color
- Text color
- Border colors

### Sections:
- About section background
- Products section background
- Testimonials section background
- Social section background

### Components:
- Product cards background
- Testimonial cards background
- Filter buttons
- Text colors (primary & secondary)

### Footer:
- Background gradient
- Text color
- Link colors

---

## 🌐 System Preference Detection

Website juga support deteksi system preference:

```javascript
@media (prefers-color-scheme: dark) {
    /* Otomatis enable dark mode jika system prefer dark */
}
```

**Tapi user dapat override dengan manual toggle** 🎯

---

## 💡 JavaScript Implementation

### Theme Toggle Function:
```javascript
function setTheme(theme) {
    if (theme === 'dark') {
        body.classList.add('dark-mode');
        localStorage.setItem('emoraTheme', 'dark');
        // Change icon to moon
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('emoraTheme', 'light');
        // Change icon to sun
    }
}
```

### Icon Changes:
- **Light Mode:** ☀️ Sun icon (Font Awesome: fa-sun)
- **Dark Mode:** 🌙 Moon icon (Font Awesome: fa-moon)

---

## 🎬 Browser Compatibility

Dark mode feature kompatibel dengan:
- ✅ Chrome/Edge (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Opera (Latest)
- ✅ Mobile browsers (iOS Safari, Chrome mobile)

---

## 🔧 Customization

### Jika ingin ubah warna dark mode:

Edit di **style.css**:
```css
body.dark-mode {
    --bg-primary: #0f0a07;    /* Ubah warna ini */
    --bg-secondary: #1a1510;
    /* ... dst */
}
```

### Jika ingin ubah warna light mode:

Edit di **:root**:
```css
:root {
    --bg-primary: #F5EFE6;    /* Ubah warna ini */
    --bg-secondary: #FFFFFF;
    /* ... dst */
}
```

---

## 📱 Responsive

Theme switcher tombol:
- **Desktop:** 40x40px dengan hover animation
- **Tablet:** Sama ukuran
- **Mobile:** 35x35px (lebih kecil untuk space efficiency)

---

## ✅ Fitur Lengkap

✨ **Fitur Dark Mode:**
- ✅ Smooth transitions antar tema
- ✅ Icon yang berubah (sun ↔ moon)
- ✅ LocalStorage persistence
- ✅ System preference detection
- ✅ Fully responsive
- ✅ All elements supported
- ✅ Elegant & professional look

---

## 🎯 User Experience

**Saat Dark Mode ON:**
- 👀 Lebih nyaman di mata saat malam
- 🔋 Hemat battery (terutama OLED screens)
- 🌃 Aesthetic modern dark theme
- 💎 Warna gold/cream lebih menonjol

**Saat Light Mode ON:**
- ☀️ Classic light theme
- 📖 Lebih jelas untuk reading
- ✨ Fresh & elegant appearance
- 🎨 Standard luxury look

---

## 🚀 Testing Dark Mode

### Cara test:
1. Buka website EMORA
2. Lihatlevel navbar atas - ada icon sun/moon
3. **Klik icon** - website berubah ke dark/light mode
4. **Refresh page** - tema tetap sama (dari localStorage)
5. Buka browser console → Cek: `localStorage.getItem('emoraTheme')`

### Expected Output:
```javascript
localStorage.getItem('emoraTheme')
// "dark" atau "light"
```

---

## 📚 Technical Details

### Files Modified:
1. **index.html** - Tambah theme switcher button
2. **style.css** - Tambah CSS variables & dark mode styles
3. **script.js** - Tambah theme toggle logic

### New Classes/IDs:
- `.dark-mode` - Class untuk dark mode
- `#theme-toggle` - ID untuk theme button
- `.theme-switcher` - Container
- `.theme-btn` - Button styling

---

## 💬 Future Enhancements

Bisa ditambah:
- 🎨 Mode tema custom (3+ pilihan)
- ⏰ Auto dark mode by time
- 🎭 Theme selector dengan multiple colors
- 🌅 Sunset/sunrise transition
- 🔊 Sound effect saat toggle

---

**Dark Mode & Light Mode fully implemented! 🌙☀️✨**

*Nikmati experience luxury perfume website dengan tema pilihan Anda!*

---

Last Updated: **March 22, 2026**
