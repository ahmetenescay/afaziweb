# Afazi Bilgilendirme Web Sitesi

Bu proje, afazi hakkında bilgilendirici içerik sunan bir web sitesidir. Backend Node.js ve Express ile, frontend ise React ile geliştirilmiştir.

## İçindekiler

- [Özellikler](#özellikler)
- [Kurulum](#kurulum)
- [Kullanım](#kullanım)
- [Proje Yapısı](#proje-yapısı)
- [Lisans](#lisans)
- [İletişim](#iletişim)

## Özellikler

- Afazi hakkında ayrıntılı bilgi
- Kullanıcı dostu arayüz
- Responsive tasarım
- Node.js ve Express ile güçlü backend
- React ile dinamik frontend

## Kurulum

### Gereksinimler

- Node.js (v14 veya üzeri)
- npm veya yarn paket yöneticisi

### Adımlar

1. Bu repository'yi klonlayın:

    ```bash
    git clone https://github.com/ahmetenescay/afaziweb.git
    cd afaziweb
    ```

2. Gerekli bağımlılıkları yükleyin:

    ```bash
    # Backend için
    cd backend
    npm install
    
    # Frontend için
    cd ../frontend
    npm install
    ```

3. Backend'i başlatın:

    ```bash
    cd backend
    node server
    ```

4. Frontend'i başlatın:

    ```bash
    cd ../frontend
    npm start
    ```

## Kullanım

- Tarayıcınızda `http://localhost:3000` adresine gidin.

## Proje Yapısı

```plaintext
afaziweb/
├── backend/
│   ├── node_modules/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   └── app.js
│   ├── server.js
│   ├── package.json
│   └── ...
├── frontend/
│   ├── node_modules/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── ...
├── README.md
└── LICENSE
```
## Lisans

Bu proje MIT Lisansı ile lisanslanmıştır. Lisans, projeyi kullanan kişilere belirli haklar ve sorumluluklar verir. Örneğin:

- **İzin Verilenler:** Projeyi kopyalama, değiştirme, dağıtma, birleştirme, yayınlama, alt lisanslama ve/veya satma.
- **Koşullar:** Yukarıdaki telif hakkı bildirimi ve bu izin bildirimi, projeyle birlikte verilmelidir.
- **Sorumluluk Reddi:** Yazılım "olduğu gibi" sağlanır, herhangi bir garanti olmadan.

Daha fazla bilgi için `LICENSE` dosyasına bakabilirsiniz.

## İletişim

- Proje yöneticileri: 
[Ahmet Enes Çay](ahmetenescay@gmail.com)
[Atamer Çakkalkurt](atamercakkalkurt@gmail.com)

- GitHub: 
[Ahmet Enes Çay](https://github.com/ahmetenescay)
[Atamer Çakkalkurt](https://github.com/AtamerCakkalkurt)


