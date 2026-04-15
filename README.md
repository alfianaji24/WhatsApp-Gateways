# WhatsApp Gateway

WhatsApp Gateway multi-device, multi-instance berbasis Baileys untuk mengirim dan menerima pesan WhatsApp melalui API.

## 🚀 Fitur

- **Multi-Device Support** - Mendukung WhatsApp Web multi-device
- **Multi-Instance** - Dapat menjalankan beberapa instance WhatsApp dalam satu server
- **RESTful API** - API lengkap untuk mengirim pesan, media, dan lainnya
- **Real-time Communication** - WebSocket untuk komunikasi real-time
- **AI Integration** - Integrasi dengan ChatGPT, Claude AI, dan Gemini AI
- **File Manager** - Sistem manajemen file terintegrasi
- **Database Support** - Support MySQL untuk penyimpanan data
- **Proxy Support** - Dukungan proxy untuk koneksi
- **Sticker Maker** - Fitur pembuatan stiker
- **Spreadsheet Integration** - Integrasi dengan Google Sheets

## 📋 Persyaratan

- Node.js 16+ 
- PHP 7.3+ atau 8.0+
- MySQL/MariaDB
- Composer
- NPM/Yarn

## 🛠️ Instalasi

### 1. Clone Repository
```bash
git clone https://github.com/alfianaji24/WhatsApp-Gateway.git
cd WhatsApp-Gateway
```

### 2. Install Dependencies

**Backend (Node.js):**
```bash
npm install
# atau
yarn install
```

**Frontend (Laravel):**
```bash
composer install
```

### 3. Konfigurasi Environment

**Backend (.env):**
```env
PORT_NODE=8000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=whatsapp_gateway
```

**Frontend (.env):**
```bash
cp .env.example .env
php artisan key:generate
```

### 4. Database Setup
```bash
php artisan migrate
```

### 5. Jalankan Aplikasi

**Development:**
```bash
# Backend
npm run dev

# Frontend (di terminal lain)
php artisan serve
```

**Production:**
```bash
# Backend
npm start

# Frontend
php artisan serve --port=8001
```

## 📖 Penggunaan

### 1. Start WhatsApp Connection
Buka browser dan akses `http://localhost:8001`, scan QR code untuk koneksi.

### 2. API Endpoint

#### Kirim Pesan Teks
```bash
POST /api/send-message
{
  "number": "628123456789",
  "message": "Hello World!"
}
```

#### Kirim Media
```bash
POST /api/send-media
{
  "number": "628123456789",
  "caption": "Media caption",
  "file": "path/to/file.jpg"
}
```

#### Kirim Stiker
```bash
POST /api/send-sticker
{
  "number": "628123456789",
  "sticker": "path/to/sticker.webp"
}
```

### 3. Webhook
Setup webhook untuk menerima pesan masuk:
```bash
POST /webhook
{
  "event": "message",
  "data": {
    "from": "628123456789",
    "message": "pesan masuk",
    "type": "text"
  }
}
```

## 🔧 Konfigurasi

### Environment Variables
- `PORT_NODE` - Port untuk Node.js server
- `DB_HOST` - Database host
- `DB_USER` - Database username  
- `DB_PASSWORD` - Database password
- `DB_NAME` - Database name

### AI Integration
```env
OPENAI_API_KEY=your_openai_key
CLAUDE_API_KEY=your_claude_key  
GEMINI_API_KEY=your_gemini_key
```

## 📁 Struktur Proyek

```
WhatsApp-Gateway/
├── server/                 # Node.js Backend
│   ├── whatsapp.js        # WhatsApp connection handler
│   ├── controllers/       # API controllers
│   ├── plugins/          # AI & utility plugins
│   └── database/         # Database models
├── app/                   # Laravel Frontend
├── public/               # Public assets
├── resources/            # Views & assets
├── routes/               # Laravel routes
└── config/               # Configuration files
```

## 🤝 Kontribusi

1. Fork repository
2. Buat branch fitur (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buka Pull Request

## 📝 License

Proyek ini dilisensikan under MIT License - lihat file [LICENSE](LICENSE) untuk detail.

## 📞 Support

- **Author**: M-Pedia.co.id
- **Email**: ilmansunannudin2@gmail.com
- **WhatsApp**: +6282298859671
- **Website**: https://m-pedia.co.id

## ⭐ Acknowledgments

- [Baileys](https://github.com/WhiskeySockets/Baileys) - WhatsApp Web API
- [Laravel](https://laravel.com/) - PHP Framework
- [Express.js](https://expressjs.com/) - Node.js Framework
- [Socket.IO](https://socket.io/) - Real-time Communication
