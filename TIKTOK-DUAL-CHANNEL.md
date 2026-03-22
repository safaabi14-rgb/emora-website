# 🎵 TikTok Dual Channel Feature

## ✨ Fitur Baru: 2 Channel TikTok

Website EMORA sekarang memiliki sistem redirect untuk **2 channel TikTok berbeda**:
1. **TikTok Live Channel** - Untuk live streaming & konten harian
2. **TikTok Official Store** - Untuk toko resmi & penawaran eksklusif

---

## 📍 Lokasi TikTok Button

Di **Social Media Section** (sebelum footer), ada 3 icon sosial:
- 🎵 **TikTok** (klik untuk buka modal pilihan)
- 💬 **WhatsApp** (direct link)
- 📷 **Instagram** (direct link)

---

## 🎯 Cara Menggunakan

### Untuk User:
1. Scroll ke **"Connect With Us"** section
2. **Klik TikTok icon** (icon musik/note)
3. Modal popup muncul dengan 2 pilihan
4. **Pilih channel** yang ingin diikuti
5. Otomatis redirect ke TikTok channel tersebut

---

## 🎨 Modal Design

### Tampilan Modal:

```
┌─────────────────────────────────────────┐
│ Choose TikTok Channel            ✕     │
│ Select which channel you want to follow │
│                                         │
│ [📹] Live Channel                  →   │
│      Watch live streaming & daily      │
│                                         │
│ [🏪] Official Store                →   │
│      Shop our products & deals         │
│                                         │
└─────────────────────────────────────────┘
```

### Fitur Modal:
- ✨ Smooth slide-in animation
- 🖱️ Hover effects pada options
- 🔘 Close button (X) di top-right
- ⌨️ Close dengan tombol Escape
- 🖱️ Click outside untuk close
- 📱 Fully responsive

---

## 🔗 Link Destinations

### TikTok Live Channel:
```
https://www.tiktok.com/@emora_live
```
**Update ini jika username berbeda!**

### TikTok Official Store:
```
https://www.tiktok.com/@emora_official
```
**Update ini jika username berbeda!**

---

## ⚙️ Cara Update Link TikTok

Jika ingin mengubah username TikTok, edit di **index.html**:

### Cari bagian TikTok Modal:
```html
<a href="https://www.tiktok.com/@emora_live" target="_blank" class="tiktok-option">
```

**Ubah `@emora_live` menjadi username Anda**

Dan untuk official store:
```html
<a href="https://www.tiktok.com/@emora_official" target="_blank" class="tiktok-option">
```

**Ubah `@emora_official` menjadi username Anda**

---

## 🌐 Multi-Language Support

### English Version:
- Title: "Choose TikTok Channel"
- Live: "Live Channel" + "Watch live streaming & daily content"
- Store: "Official Store" + "Shop our products & exclusive deals"

### Indonesian Version:
- Title: "Pilih Channel TikTok"
- Live: "Channel Live" + "Tonton live streaming & konten harian"
- Store: "Toko Resmi" + "Belanja produk & penawaran eksklusif"

**Otomatis berubah sesuai pilihan bahasa user!** 🌍

---

## 📋 Modal Features

### Interactions:
- ✅ Hover animation pada options
- ✅ Icon berubah ukuran pada hover
- ✅ Smooth transition
- ✅ Slide/translate effect

### User Experience:
- ✅ Clear visual distinction antara 2 options
- ✅ Icon yang mudah dipahami (Video & Store)
- ✅ Deskripsi jelas masing-masing channel
- ✅ Arrow indicator (→) menunjukkan clickable

---

## 🎭 Styling Details

### Colors:
- Modal background: Adaptive (light/dark mode)
- Options background: Gradient transition
- Hover color: Gold gradient (#C8A27A → #D4AF37)
- Icons: Responsive size

### Animation:
- Slide up: 0.4s ease
- Hover effect: 0.3s smooth
- Backdrop blur: 5px for elegance

---

## 📱 Responsive Design

| Device | Modal Size | Button Size |
|--------|-----------|-------------|
| Desktop | 500px max | 70x70px |
| Tablet | 500px max | 65x65px |
| Mobile | 90% width | 55x55px |

Modal optimal di semua ukuran screen! ✨

---

## 🔧 HTML Structure

```html
<!-- Social Media Section -->
<section class="social-section">
    <div class="social-links">
        <button class="social-icon tiktok-btn" id="tiktok-modal-btn">
            <i class="fab fa-tiktok"></i>
        </button>
        <!-- ... lainnya -->
    </div>
</section>

<!-- TikTok Modal -->
<div class="modal" id="tiktok-modal">
    <div class="modal-content">
        <!-- Modal content -->
    </div>
</div>
```

---

## 📜 JavaScript Logic

```javascript
// Open modal on TikTok button click
tiktokBtn.addEventListener('click', () => {
    tiktokModal.classList.add('show');
    document.body.style.overflow = 'hidden';
});

// Close various ways
- Click X button
- Click outside modal
- Press Escape key
```

---

## ✅ Testing Checklist

- [ ] Klik TikTok icon → Modal muncul
- [ ] Hover pada options → Hover effect jalan
- [ ] Klik Live Channel → Buka YouTube/TikTok @emora_live
- [ ] Klik Official Store → Buka TikTok @emora_official
- [ ] Klik X → Modal tutup
- [ ] Klik outside → Modal tutup
- [ ] Tekan Escape → Modal tutup
- [ ] Mobile view → Modal responsive
- [ ] Dark mode → Modal looks good
- [ ] Light mode → Modal looks good
- [ ] EN language → English text
- [ ] ID language → Indonesian text

---

## 🎯 Next Steps (Optional)

Bisa ditambah:
- 📊 Analytics tracking (measure clicks)
- 🎨 Custom icons per channel
- ⏱️ Auto-close modal after 5s
- 🔔 Notification badge
- 🎬 Video preview in modal
- 🎁 Promo code in modal

---

## 🆘 Troubleshooting

### Modal tidak muncul saat klik TikTok?
- Check: Browser console (F12) untuk errors
- Check: `#tiktok-modal-btn` ID ada di HTML
- Check: CSS class `.show` ter-apply

### Link TikTok salah?
- Edit index.html bagian modal
- Ubah URL `https://www.tiktok.com/@username`
- Pastikan format tepat

### Mobile view tidak responsive?
- Check: viewport meta tag di head
- Check: media query CSS ter-load
- Refresh browser (Ctrl+F5)

---

**Dual TikTok Channel fully implemented! 🎵✨**

*Users dapat dengan mudah memilih channel yang ingin diikuti!*

---

Last Updated: **March 22, 2026**
