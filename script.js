// Global App State
let currentScreen = 'screen-splash';
let bgmAudio = document.getElementById('bgm-audio');
let isBgmPlaying = false;

// Quiz State (Embedded directly to avoid CORS file:// issues)
let quizDataModules = [
  {
    "topik": "TP 3.1 - Potensi Ancaman & Serangan Jaringan",
    "soal": [
      {
        "nomor": 1,
        "pertanyaan": "Serangan yang dilakukan dengan membanjiri lalu lintas server menggunakan ribuan permintaan palsu secara bersamaan hingga server mengalami overload disebut...",
        "pilihan": { "A": "Phishing", "B": "SQL Injection", "C": "DDoS (Distributed Denial of Service)", "D": "Defacement" },
        "jawaban_benar": "C"
      },
      {
        "nomor": 2,
        "pertanyaan": "Tindakan menyadap lalu lintas paket data yang melintas di dalam jaringan komputer untuk mencuri informasi sensitif seperti username dan password disebut...",
        "pilihan": { "A": "Packet Sniffing", "B": "Ransomware", "C": "Brute Force", "D": "Social Engineering" },
        "jawaban_benar": "A"
      },
      {
        "nomor": 3,
        "pertanyaan": "Jenis malware yang mengenkripsi data pada komputer korban dan meminta tebusan agar data dapat dikembalikan disebut...",
        "pilihan": { "A": "Adware", "B": "Spyware", "C": "Ransomware", "D": "Trojan Horse" },
        "jawaban_benar": "C"
      },
      {
        "nomor": 4,
        "pertanyaan": "Metode serangan di mana penyerang menyamar sebagai entitas yang sah untuk mengelabui pengguna agar memberikan data kredensial disebut...",
        "pilihan": { "A": "Spoofing", "B": "IP Sec", "C": "Hardening", "D": "Hashing" },
        "jawaban_benar": "A"
      },
      {
        "nomor": 5,
        "pertanyaan": "Manipulasi psikologis terhadap manusia untuk mendapatkan akses ilegal atau informasi rahasia dinamakan...",
        "pilihan": { "A": "Buffer Overflow", "B": "Social Engineering", "C": "Man-in-the-Middle", "D": "Zero-Day Exploit" },
        "jawaban_benar": "B"
      },
      {
        "nomor": 6,
        "pertanyaan": "Celah keamanan perangkat lunak yang baru ditemukan dan belum diketahui oleh pengembang atau belum ada tambalannya (patch) disebut...",
        "pilihan": { "A": "Backdoor", "B": "Zero-Day Vulnerability", "C": "Malware", "D": "Firewall Bypass" },
        "jawaban_benar": "B"
      },
      {
        "nomor": 7,
        "pertanyaan": "Serangan yang menyisipkan perintah berbahaya ke dalam masukan basis data aplikasi web disebut...",
        "pilihan": { "A": "SQL Injection", "B": "Cross-Site Scripting", "C": "SYN Flood", "D": "MAC Flooding" },
        "jawaban_benar": "A"
      },
      {
        "nomor": 8,
        "pertanyaan": "Tindakan mengubah tampilan halaman utama sebuah website secara ilegal oleh pihak tidak berwenang disebut...",
        "pilihan": { "A": "Phishing", "B": "Defacement", "C": "Spamming", "D": "Sniffing" },
        "jawaban_benar": "B"
      },
      {
        "nomor": 9,
        "pertanyaan": "Program tersembunyi yang menyusup ke dalam sistem dengan menyamar sebagai program yang berguna tetapi merusak sistem saat dijalankan adalah...",
        "pilihan": { "A": "Worm", "B": "Trojan Horse", "C": "Virus", "D": "Adware" },
        "jawaban_benar": "B"
      },
      {
        "nomor": 10,
        "pertanyaan": "Metode coba-coba kombinasi kata sandi secara otomatis menggunakan skrip atau program komputer berkecepatan tinggi disebut...",
        "pilihan": { "A": "Brute Force Attack", "B": "Phishing Attack", "C": "DDOS Attack", "D": "Session Hijacking" },
        "jawaban_benar": "A"
      }
    ]
  },
  {
    "topik": "TP 3.2 - Sistem Keamanan Jaringan",
    "soal": [
      {
        "nomor": 1,
        "pertanyaan": "Sistem atau perangkat keamanan jaringan yang bertugas menyaring lalu lintas data masuk dan keluar berdasarkan aturan tertentu adalah...",
        "pilihan": { "A": "Switch Manageable", "B": "Firewall", "C": "Repeater", "D": "Access Point" },
        "jawaban_benar": "B"
      },
      {
        "nomor": 2,
        "pertanyaan": "Konsep pertahanan keamanan berlapis yang menggabungkan berbagai mekanisme proteksi di berbagai lapisan sistem disebut...",
        "pilihan": { "A": "Single Point of Failure", "B": "Defense in Depth", "C": "Flat Network Architecture", "D": "Open System Interconnection" },
        "jawaban_benar": "B"
      },
      {
        "nomor": 3,
        "pertanyaan": "Protokol yang digunakan untuk mengamankan komunikasi data di internet menggunakan enkripsi berbasis SSL/TLS pada layer aplikasi web adalah...",
        "pilihan": { "A": "HTTP", "B": "FTP", "C": "HTTPS", "D": "Telnet" },
        "jawaban_benar": "C"
      },
      {
        "nomor": 4,
        "pertanyaan": "Virtual Private Network (VPN) berfungsi untuk...",
        "pilihan": { "A": "Mempercepat koneksi internet publik", "B": "Membuat terowongan komunikasi yang aman dan terenkripsi di atas jaringan publik", "C": "Menggantikan peran fungsi router utama", "D": "Memblokir seluruh alamat MAC address klien" },
        "jawaban_benar": "B"
      },
      {
        "nomor": 5,
        "pertanyaan": "Perangkat keamanan jaringan yang mampu menganalisis muatan payload paket data secara mendalam untuk mendeteksi ancaman spesifik adalah...",
        "pilihan": { "A": "Packet Filter Firewall", "B": "Next-Generation Firewall (NGFW)", "C": "Hub 24 Port", "D": "Unmanaged Switch" },
        "jawaban_benar": "B"
      },
      {
        "nomor": 6,
        "pertanyaan": "Kebijakan keamanan dasar yang menerapkan prinsip akses minimum di mana pengguna hanya diberikan hak akses sekecil mungkin yang diperlukan disebut...",
        "pilihan": { "A": "Principle of Least Privilege", "B": "Maximum Security Policy", "C": "Open Access Policy", "D": "Full Trust Model" },
        "jawaban_benar": "A"
      },
      {
        "nomor": 7,
        "pertanyaan": "Fungsi utama dari sistem deteksi intrusi dalam arsitektur pengamanan jaringan adalah...",
        "pilihan": { "A": "Menambah kecepatan transfer data", "B": "Mendeteksi aktivitas mencurigakan atau pelanggaran kebijakan keamanan", "C": "Mengonversi IP Public menjadi IP Private", "D": "Menyimpan file cadangan secara otomatis" },
        "jawaban_benar": "B"
      },
      {
        "nomor": 8,
        "pertanyaan": "Teknologi NAT (Network Address Translation) pada perimeter jaringan utamanya berguna untuk...",
        "pilihan": { "A": "Menyembunyikan alamat IP lokal di belakang satu IP publik", "B": "Mempercantik tampilan antarmuka web", "C": "Mengganti fungsi kabel UTP", "D": "Meningkatkan resolusi pengiriman paket" },
        "jawaban_benar": "A"
      },
      {
        "nomor": 9,
        "pertanyaan": "Keuntungan utama menggunakan arsitektur jaringan tersegmentasi (pembagian VLAN) adalah...",
        "pilihan": { "A": "Mencegah penyebaran ancaman atau malware secara luas ke seluruh segmen jaringan", "B": "Membuat biaya perangkat menjadi lebih mahal", "C": "Menghilangkan kebutuhan akan kabel jaringan", "D": "Mempercepat kinerja harddisk server" },
        "jawaban_benar": "A"
      },
      {
        "nomor": 10,
        "pertanyaan": "Protokol manajemen jaringan yang menyediakan fitur enkripsi untuk mencegah kebocoran data saat melakukan konfigurasi jarak jauh adalah...",
        "pilihan": { "A": "Telnet", "B": "HTTP", "C": "SSH (Secure Shell)", "D": "SNMP v1" },
        "jawaban_benar": "C"
      }
    ]
  },
  {
    "topik": "TP 3.3 - Penguatan Host (Host Hardening)",
    "soal": [
      {
        "nomor": 1,
        "pertanyaan": "Langkah penguatan keamanan pada sistem operasi host dan server dengan menutup celah, menghapus layanan tak terpakai, dan memperbarui sistem disebut...",
        "pilihan": { "A": "Host Hardening", "B": "Network Bridging", "C": "IP Subnetting", "D": "Bandwidth Limiting" },
        "jawaban_benar": "A"
      },
      {
        "nomor": 2,
        "pertanyaan": "Konfigurasi pada file sshd_config Linux yang tepat untuk melarang akun root masuk secara langsung via SSH adalah...",
        "pilihan": { "A": "PermitRootLogin no", "B": "RootAccess disable", "C": "AllowRootLogin false", "D": "SuperUser off" },
        "jawaban_benar": "A"
      },
      {
        "nomor": 3,
        "pertanyaan": "Tujuan utama menonaktifkan layanan atau port jaringan yang tidak terpakai pada sebuah server adalah...",
        "pilihan": { "A": "Mengurangi luas permukaan serangan (attack surface)", "B": "Menambah kapasitas RAM fisik", "C": "Mempercepat proses booting komputer", "D": "Mengurangi suhu temperatur ruangan server" },
        "jawaban_benar": "A"
      },
      {
        "nomor": 4,
        "pertanyaan": "Perintah dasar pada sistem operasi Linux Ubuntu/Debian untuk memperbarui daftar paket dan sistem secara berkala adalah...",
        "pilihan": { "A": "apt update && apt upgrade", "B": "netsh firewall reset", "C": "shutdown -r now", "D": "systemctl restart network" },
        "jawaban_benar": "A"
      },
      {
        "nomor": 5,
        "pertanyaan": "Pengaturan hak akses file dengan perintah chmod 600 pada sebuah file rahasia di Linux berarti...",
        "pilihan": { "A": "File dapat dibaca, ditulis, dan dieksekusi oleh siapa saja", "B": "File hanya dapat dibaca dan ditulis oleh pemiliknya saja, pengguna lain tidak punya akses", "C": "File terkunci total dan tidak bisa dihapus", "D": "File bersifat publik read-only" },
        "jawaban_benar": "B"
      },
      {
        "nomor": 6,
        "pertanyaan": "Tool bawaan berbasis CLI pada sistem operasi Linux modern untuk mengatur aturan firewall tingkat host adalah...",
        "pilihan": { "A": "UFW (Uncomplicated Firewall)", "B": "Winbox", "C": "PuTTY Config", "D": "Task Manager" },
        "jawaban_benar": "A"
      },
      {
        "nomor": 7,
        "pertanyaan": "Mengapa penting untuk menerapkan kebijakan kata sandi yang kuat (strong password policy) pada akun pengguna server?",
        "pilihan": { "A": "Agar mudah diingat oleh administrator", "B": "Untuk mencegah serangan tebakan kata sandi atau brute force", "C": "Agar memori server tidak cepat penuh", "D": "Mempercepat proses enkripsi file database" },
        "jawaban_benar": "B"
      },
      {
        "nomor": 8,
        "pertanyaan": "Layanan pencatatan aktivitas sistem (logging) di Linux yang merekam kejadian keamanan penting disimpan secara default di dalam direktori...",
        "pilihan": { "A": "/var/log/", "B": "/home/user/", "C": "/etc/network/", "D": "/bin/sh/" },
        "jawaban_benar": "A"
      },
      {
        "nomor": 9,
        "pertanyaan": "Praktik pengamanan host dengan memastikan bahwa seluruh patch keamanan terbaru dari vendor sistem operasi telah terpasang disebut...",
        "pilihan": { "A": "Patch Management", "B": "Port Forwarding", "C": "Packet Inspection", "D": "Load Balancing" },
        "jawaban_benar": "A"
      },
      {
        "nomor": 10,
        "pertanyaan": "Mengapa penggunaan protokol lawas seperti Telnet dan FTP sangat dihindari dalam praktik hardening server modern?",
        "pilihan": { "A": "Karena mengirimkan data dan password dalam bentuk teks biasa (plaintext)", "B": "Karena ukurannya terlalu besar untuk memori server", "C": "Karena hanya mendukung sistem operasi Windows 95", "D": "Karena membutuhkan kecepatan internet minimal 1 Gbps" },
        "jawaban_benar": "A"
      }
    ]
  },
  {
    "topik": "TP 3.4 - Membangun Server DMZ",
    "soal": [
      {
        "nomor": 1,
        "pertanyaan": "Kepanjangan dari DMZ dalam arsitektur jaringan komputer adalah...",
        "pilihan": { "A": "Data Management Zone", "B": "Demilitarized Zone", "C": "Digital Main Zone", "D": "Domain Multiple Zone" },
        "jawaban_benar": "B"
      },
      {
        "nomor": 2,
        "pertanyaan": "Tujuan utama penerapan zona Demilitarized Zone (DMZ) pada topologi jaringan perusahaan adalah...",
        "pilihan": { "A": "Menempatkan server publik agar dapat diakses dari internet tanpa mengekspos jaringan lokal internal", "B": "Mempercepat koneksi internet client di dalam ruangan", "C": "Menghilangkan fungsi router pembatas subnet", "D": "Menyatukan seluruh komputer client dan server dalam satu segmen tanpa proteksi" },
        "jawaban_benar": "A"
      },
      {
        "nomor": 3,
        "pertanyaan": "Layanan manakah yang paling tepat ditempatkan di dalam area zona DMZ?",
        "pilihan": { "A": "Web Server Publik dan Mail Server", "B": "Server Database Keuangan Perusahaan", "C": "Komputer Administrator Utama", "D": "Server Backup Arsip HRD" },
        "jawaban_benar": "A"
      },
      {
        "nomor": 4,
        "pertanyaan": "Dalam skenario standar 3-interface firewall, zona jaringan dibagi menjadi...",
        "pilihan": { "A": "Internal LAN, DMZ, dan External (Internet)", "B": "Wi-Fi, LAN Utama, dan Bluetooth", "C": "Server, Printer, dan Client", "D": "Public, Private, dan Hidden" },
        "jawaban_benar": "A"
      },
      {
        "nomor": 5,
        "pertanyaan": "Bagaimana aturan akses umumnya diberlakukan dari zona Internet menuju zona DMZ?",
        "pilihan": { "A": "Diizinkan secara terbatas hanya pada port layanan publik tertentu (misal port 80/443)", "B": "Dilarang total tanpa terkecuali", "C": "Diizinkan penuh tanpa batasan aturan port", "D": "Dialihkan otomatis ke jaringan lokal internal" },
        "jawaban_benar": "A"
      },
      {
        "nomor": 6,
        "pertanyaan": "Bagaimana aturan akses yang umumnya diterapkan dari zona DMZ menuju zona LAN Internal?",
        "pilihan": { "A": "Dibatasi secara ketat atau diblokir untuk mencegah penyerang menguasai LAN jika server DMZ bobol", "B": "Diizinkan secara bebas agar sinkronisasi data cepat", "C": "Menggunakan hak akses penuh Administrator", "D": "Tidak memerlukan aturan firewall sama sekali" },
        "jawaban_benar": "A"
      },
      {
        "nomor": 7,
        "pertanyaan": "Apabila sebuah perusahaan ingin menyediakan layanan website bagi publik luar sekaligus mengamankan database internal, pendekatan arsitektur terbaik adalah...",
        "pilihan": { "A": "Membuat zona DMZ untuk web server dan menempatkan database di LAN internal di belakang firewall kedua", "B": "Menyatukan web server dan database di satu komputer client", "C": "Menghubungkan langsung database ke internet publik", "D": "Mematikan fitur keamanan firewall agar mudah diakses" },
        "jawaban_benar": "A"
      },
      {
        "nomor": 8,
        "pertanyaan": "Perangkat jaringan utama yang biasanya bertindak sebagai pengatur lalu lintas antar-zona (LAN, DMZ, WAN) adalah...",
        "pilihan": { "A": "Firewall / Router berlapis", "B": "Hub non-manageable", "C": "Kabel UTP Straight", "D": "LAN Card biasa" },
        "jawaban_benar": "A"
      },
      {
        "nomor": 9,
        "pertanyaan": "Salah satu risiko jika web server publik tidak ditempatkan di zona DMZ melainkan langsung di jaringan lokal internal adalah...",
        "pilihan": { "A": "Jika web server berhasil diretas, penyerang dapat langsung mengakses seluruh komputer di jaringan internal", "B": "Koneksi internet menjadi lebih lambat", "C": "Alamat IP publik berubah setiap hari", "D": "Sistem operasi komputer client otomatis terhapus" },
        "jawaban_benar": "A"
      },
      {
        "nomor": 10,
        "pertanyaan": "Istilah lain yang sering digunakan untuk menyebut area zona DMZ dalam struktur pengamanan perimeter adalah...",
        "pilihan": { "A": "Screened Subnet", "B": "Private Cloud", "C": "Local Loopback", "D": "Secure Core" },
        "jawaban_benar": "A"
      }
    ]
  },
  {
    "topik": "TP 3.5 - Pengujian Keamanan Jaringan & Server",
    "soal": [
      {
        "nomor": 1,
        "pertanyaan": "Proses evaluasi keamanan sistem komputer atau jaringan dengan cara mensimulasikan serangan secara sah disebut...",
        "pilihan": { "A": "Penetration Testing (Pentest)", "B": "Network Formatting", "C": "IP Subnetting", "D": "Data Compression" },
        "jawaban_benar": "A"
      },
      {
        "nomor": 2,
        "pertanyaan": "Tool open-source yang sangat populer digunakan oleh administrator untuk memindai port (port scanning) dan mendeteksi layanan aktif pada server target adalah...",
        "pilihan": { "A": "Nmap", "B": "Microsoft Word", "C": "Winbox", "D": "Notepad++" },
        "jawaban_benar": "A"
      },
      {
        "nomor": 3,
        "pertanyaan": "Dalam tahapan Penetration Testing, fase pertama yang dilakukan tester untuk mengumpulkan informasi awal tentang target disebut...",
        "pilihan": { "A": "Reconnaissance / Information Gathering", "B": "Exploitation", "C": "Reporting", "D": "Covering Tracks" },
        "jawaban_benar": "A"
      },
      {
        "nomor": 4,
        "pertanyaan": "Tool analisis protokol jaringan interaktif yang dapat menangkap dan memeriksa paket data secara real-time (packet sniffer) adalah...",
        "pilihan": { "A": "Wireshark", "B": "Adobe Photoshop", "C": "VirtualBox", "D": "XAMPP Control Panel" },
        "jawaban_benar": "A"
      },
      {
        "nomor": 5,
        "pertanyaan": "Apa tujuan utama dari melakukan audit kerentanan (vulnerability assessment) secara berkala pada infrastruktur jaringan?",
        "pilihan": { "A": "Menemukan celah keamanan sebelum dieksploitasi oleh pihak malang", "B": "Menghabiskan anggaran operasional perusahaan", "C": "Memperlambat kinerja server secara sengaja", "D": "Menghapus seluruh data pengguna secara permanen" },
        "jawaban_benar": "A"
      },
      {
        "nomor": 6,
        "pertanyaan": "Dokumen resmi yang berisi hasil temuan celah keamanan, tingkat risiko, serta rekomendasi perbaikan bagi pengelola sistem disebut...",
        "pilihan": { "A": "Pentest Report", "B": "Invoice Pembelian", "C": "Surat Jalan Barang", "D": "Log Aktivitas Harian" },
        "jawaban_benar": "A"
      },
      {
        "nomor": 7,
        "pertanyaan": "Metode pengujian keamanan di mana penguji (tester) tidak diberikan informasi awal sama sekali mengenai arsitektur sistem target disebut...",
        "pilihan": { "A": "Black-Box Testing", "B": "White-Box Testing", "C": "Grey-Box Testing", "D": "Clear-Box Testing" },
        "jawaban_benar": "A"
      },
      {
        "nomor": 8,
        "pertanyaan": "Metode pengujian di mana penguji memiliki akses penuh terhadap informasi arsitektur, kode sumber, dan dokumentasi jaringan target disebut...",
        "pilihan": { "A": "White-Box Testing", "B": "Black-Box Testing", "C": "Blind Testing", "D": "External Testing" },
        "jawaban_benar": "A"
      },
      {
        "nomor": 9,
        "pertanyaan": "Kerangka kerja standar internasional untuk pengujian keamanan aplikasi web yang sangat terkenal adalah...",
        "pilihan": { "A": "OWASP (Open Worldwide Application Security Project)", "B": "IEEE 802.11", "C": "ISO 9001", "D": "Cisco CCNA" },
        "jawaban_benar": "A"
      },
      {
        "nomor": 10,
        "pertanyaan": "Mengapa pengujian penetrasi harus selalu dilakukan berdasarkan surat izin resmi (Rules of Engagement) dari pemilik sistem?",
        "pilihan": { "A": "Untuk menghindari pelanggaran hukum dan tindakan peretasan ilegal (cybercrime)", "B": "Agar hasil tes menjadi rahasia pribadi tester", "C": "Agar perangkat komputer tidak mengalami rusak fisik", "D": "Supaya proses scanning berjalan lebih lambat" },
        "jawaban_benar": "A"
      }
    ]
  },
  {
    "topik": "TP 3.6 - Fungsi & Cara Kerja Server Autentikasi",
    "soal": [
      {
        "nomor": 1,
        "pertanyaan": "Kerangka kerja konseptual keamanan jaringan untuk mengontrol akses pengguna yang terdiri dari Authentication, Authorization, dan Accounting disingkat menjadi...",
        "pilihan": { "A": "AAA Framework", "B": "ABC Protocol", "C": "TCP/IP Suite", "D": "OSI Model" },
        "jawaban_benar": "A"
      },
      {
        "nomor": 2,
        "pertanyaan": "Proses verifikasi identitas pengguna (seperti pencocokan username dan password) dalam kerangka kerja AAA disebut...",
        "pilihan": { "A": "Authentication", "B": "Authorization", "C": "Accounting", "D": "Auditing" },
        "jawaban_benar": "A"
      },
      {
        "nomor": 3,
        "pertanyaan": "Proses menentukan hak akses serta layanan apa saja yang boleh atau tidak boleh digunakan oleh pengguna yang telah terautentikasi disebut...",
        "pilihan": { "A": "Authorization", "B": "Authentication", "C": "Accounting", "D": "Encryption" },
        "jawaban_benar": "A"
      },
      {
        "nomor": 4,
        "pertanyaan": "Proses mencatat penggunaan sumber daya jaringan oleh pengguna (seperti lama waktu online, jumlah data yang diunduh) disebut...",
        "pilihan": { "A": "Accounting", "B": "Autentikasi", "C": "Autorisasi", "D": "Hashing" },
        "jawaban_benar": "A"
      },
      {
        "nomor": 5,
        "pertanyaan": "Protokol standar industri yang umum digunakan untuk menyediakan layanan AAA terpusat pada jaringan adalah...",
        "pilihan": { "A": "RADIUS (Remote Authentication Dial-In User Service)", "B": "DHCP Protocol", "C": "ARP Protocol", "D": "ICMP Protocol" },
        "jawaban_benar": "A"
      },
      {
        "nomor": 6,
        "pertanyaan": "Protokol alternatif buatan Cisco Systems untuk autentikasi jarak jauh yang memisahkan fungsi autentikasi dan autorisasi secara ketat adalah...",
        "pilihan": { "A": "TACACS+ (Terminal Access Controller Access-Control System Plus)", "B": "NetBIOS", "C": "SNMP", "D": "FTP" },
        "jawaban_benar": "A"
      },
      {
        "nomor": 7,
        "pertanyaan": "Layanan direktori berbasis standar X.500 yang sering diintegrasikan dengan server autentikasi untuk manajemen pengguna terpusat adalah...",
        "pilihan": { "A": "LDAP (Lightweight Directory Access Protocol)", "B": "HTTP Server", "C": "SMTP Server", "D": "DNS Server" },
        "jawaban_benar": "A"
      },
      {
        "nomor": 8,
        "pertanyaan": "Apa keuntungan utama menggunakan server autentikasi terpusat dibandingkan autentikasi lokal di setiap perangkat?",
        "pilihan": { "A": "Administrator dapat mengelola akun pengguna dan hak akses dari satu tempat dengan mudah", "B": "Membuat kapasitas harddisk server menjadi tidak terbatas", "C": "Menghilangkan kebutuhan akan penggunaan password", "D": "Mempercepat koneksi Wi-Fi secara instan" },
        "jawaban_benar": "A"
      },
      {
        "nomor": 9,
        "pertanyaan": "Sistem autentikasi tambahan yang meminta dua atau lebih bukti verifikasi identitas (misal password ditambah kode OTP via SMS/App) disebut...",
        "pilihan": { "A": "Two-Factor Authentication (2FA) / Multi-Factor Authentication (MFA)", "B": "Single-Factor Login", "C": "Open Plaintext Authentication", "D": "Guest Account Access" },
        "jawaban_benar": "A"
      },
      {
        "nomor": 10,
        "pertanyaan": "Perangkat jaringan yang bertindak sebagai perantara (NAS - Network Access Server) saat pengguna mencoba terhubung ke jaringan melalui server RADIUS berfungsi untuk...",
        "pilihan": { "A": "Meneruskan permintaan kredensial dari pengguna ke server RADIUS untuk diverifikasi", "B": "Menyimpan seluruh database password pengguna", "C": "Menggantikan peran kabel jaringan utama", "D": "Membuat alamat IP publik otomatis" },
        "jawaban_benar": "A"
      }
    ]
  },
  {
    "topik": "TP 3.7 - Sistem Pendeteksi & Penahan Serangan (Snort)",
    "soal": [
      {
        "nomor": 1,
        "pertanyaan": "Snort adalah perangkat lunak sumber terbuka (open-source) yang berfungsi sebagai...",
        "pilihan": { "A": "NIDS / NIPS (Network Intrusion Detection / Prevention System)", "B": "Web Browser", "C": "Database Management System", "D": "Operating System Server" },
        "jawaban_benar": "A"
      },
      {
        "nomor": 2,
        "pertanyaan": "Apa perbedaan utama antara mode IDS (Intrusion Detection System) dan IPS (Intrusion Prevention System) pada Snort?",
        "pilihan": { "A": "IDS hanya mendeteksi dan memberi peringatan (log), sedangkan IPS dapat mendeteksi sekaligus memblokir serangan secara aktif", "B": "IDS jauh lebih berbahaya daripada IPS", "C": "IPS tidak memerlukan aturan konfigurasi", "D": "IDS khusus untuk jaringan nirkabel saja" },
        "jawaban_benar": "A"
      },
      {
        "nomor": 3,
        "pertanyaan": "Perhatikan potongan rule Snort berikut: alert tcp any any -> 192.168.1.10 80 (msg:\"Akses HTTP\"; sid:10001;) Kata kunci alert pada awal baris rule tersebut berfungsi untuk...",
        "pilihan": { "A": "Menghasilkan peringatan saat paket yang cocok terdeteksi", "B": "Menghapus paket data dari jaringan", "C": "Mengubah alamat IP tujuan", "D": "Menonaktifkan layanan web" },
        "jawaban_benar": "A"
      },
      {
        "nomor": 4,
        "pertanyaan": "Dalam struktur rule Snort di atas, angka 80 menunjukkan...",
        "pilihan": { "A": "Port Tujuan (Destination Port)", "B": "Nomor Identitas Rule (SID)", "C": "Ukuran Maksimal Paket", "D": "Jumlah Batas Percobaan Login" },
        "jawaban_benar": "A"
      },
      {
        "nomor": 5,
        "pertanyaan": "Kepanjangan dari parameter sid di dalam aturan (rule) konfigurasi Snort adalah...",
        "pilihan": { "A": "Snort Identifier / Signature ID", "B": "System Internal Domain", "C": "Secure Internet Data", "D": "Server Interface Device" },
        "jawaban_benar": "A"
      },
      {
        "nomor": 6,
        "pertanyaan": "Tindakan apa yang dilakukan oleh opsi rule Snort jika menggunakan aksi drop dalam mode IPS?",
        "pilihan": { "A": "Menolak dan membuang paket data yang mencurigakan secara langsung", "B": "Mengizinkan paket lewat dan mencatatnya di log", "C": "Mengirimkan email otomatis ke admin", "D": "Meminta konfirmasi ulang kepada pengguna" },
        "jawaban_benar": "A"
      },
      {
        "nomor": 7,
        "pertanyaan": "Komponen Snort yang bertugas membaca paket data yang lewat pada interface jaringan dan mencocokkannya dengan aturan yang dibuat adalah...",
        "pilihan": { "A": "Detection Engine", "B": "Database Storage", "C": "Web GUI Client", "D": "Hardware Switch" },
        "jawaban_benar": "A"
      },
      {
        "nomor": 8,
        "pertanyaan": "Mengapa analisis basis tanda tangan (signature-based detection) sangat penting dalam pengoperasian Snort?",
        "pilihan": { "A": "Untuk mengenali pola serangan yang sudah diketahui karakteristiknya secara akurat berdasarkan database rule", "B": "Untuk mempercepat proses booting sistem operasi Linux", "C": "Untuk menggantikan fungsi kabel UTP", "D": "Untuk mengompres ukuran file log" },
        "jawaban_benar": "A"
      },
      {
        "nomor": 9,
        "pertanyaan": "File utama tempat administrator menyunting atau menambahkan aturan (rule) deteksi kustom pada Snort biasanya berekstensi...",
        "pilihan": { "A": ".rules", "B": ".exe", "C": ".png", "D": ".mp3" },
        "jawaban_benar": "A"
      },
      {
        "nomor": 10,
        "pertanyaan": "Apa yang dimaksud dengan kondisi False Positive pada sistem pendeteksi intrusi seperti Snort?",
        "pilihan": { "A": "Sistem mendeteksi aktivitas normal/sah sebagai sebuah serangan berbahaya", "B": "Sistem gagal mendeteksi serangan nyata", "C": "Sistem mengalami kerusakan hardware total", "D": "Koneksi internet terputus otomatis" },
        "jawaban_benar": "A"
      }
    ]
  },
  {
    "topik": "TP 3.8 - Pengamanan Komunikasi Data (Kriptografi)",
    "soal": [
      {
        "nomor": 1,
        "pertanyaan": "Ilmu dan teknik yang mempelajari cara mengamankan data dengan mengubahnya menjadi bentuk yang tidak dapat dibaca kecuali oleh pihak yang berwenang disebut...",
        "pilihan": { "A": "Kriptografi", "B": "Topologi Jaringan", "C": "Subnetting", "D": "Routing Statis" },
        "jawaban_benar": "A"
      },
      {
        "nomor": 2,
        "pertanyaan": "Proses mengubah teks asli (plaintext) menjadi teks tersandi yang tidak terbaca (ciphertext) disebut...",
        "pilihan": { "A": "Enkripsi", "B": "Dekripsi", "C": "Hashing", "D": "Compression" },
        "jawaban_benar": "A"
      },
      {
        "nomor": 3,
        "pertanyaan": "Proses mengembalikan teks tersandi (ciphertext) kembali menjadi teks asli (plaintext) agar dapat dibaca disebut...",
        "pilihan": { "A": "Dekripsi", "B": "Enkripsi", "C": "Steganografi", "D": "Spamming" },
        "jawaban_benar": "A"
      },
      {
        "nomor": 4,
        "pertanyaan": "Jenis kriptografi yang menggunakan satu kunci yang sama untuk proses enkripsi maupun dekripsi data disebut...",
        "pilihan": { "A": "Kriptografi Simetris (Symmetric Cryptography)", "B": "Kriptografi Asimetris (Asymmetric Cryptography)", "C": "Fungsi Hash Satu Arah", "D": "Digital Signature" },
        "jawaban_benar": "A"
      },
      {
        "nomor": 5,
        "pertanyaan": "Jenis kriptografi yang menggunakan sepasang kunci berbeda—yaitu Public Key untuk enkripsi dan Private Key untuk dekripsi—disebut...",
        "pilihan": { "A": "Kriptografi Asimetris (Public-Key Cryptography)", "B": "Kriptografi Simetris", "C": "Caesar Cipher", "D": "ROT13 Cipher" },
        "jawaban_benar": "A"
      },
      {
        "nomor": 6,
        "pertanyaan": "Algoritma fungsi hash satu arah yang menghasilkan nilai sidik jari digital (checksum) tetap untuk menguji integritas data adalah...",
        "pilihan": { "A": "SHA-256 / MD5", "B": "AES-256", "C": "RSA-2048", "D": "Diffie-Hellman" },
        "jawaban_benar": "A"
      },
      {
        "nomor": 7,
        "pertanyaan": "Contoh algoritma enkripsi simetris modern yang saat ini menjadi standar industri global untuk pengamanan data adalah...",
        "pilihan": { "A": "AES (Advanced Encryption Standard)", "B": "Morse Code", "C": "HTML Protocol", "D": "IPv4 Header" },
        "jawaban_benar": "A"
      },
      {
        "nomor": 8,
        "pertanyaan": "Protokol keamanan komunikasi web yang menggabungkan enkripsi kriptografi untuk mengamankan pertukaran data antara browser dan server adalah...",
        "pilihan": { "A": "SSL / TLS (Secure Sockets Layer / Transport Layer Security)", "B": "DHCP Server", "C": "FTP Client", "D": "ARP Table" },
        "jawaban_benar": "A"
      },
      {
        "nomor": 9,
        "pertanyaan": "Apa fungsi utama dari Tanda Tangan Digital (Digital Signature) dalam pengiriman dokumen elektronik?",
        "pilihan": { "A": "Memastikan keaslian identitas pengirim dan menjamin keutuhan dokumen dari manipulasi di tengah jalan", "B": "Mempercepat ukuran file dokumen menjadi lebih ringan", "C": "Mengubah warna latar belakang dokumen teks", "D": "Menghapus riwayat pengiriman pesan" },
        "jawaban_benar": "A"
      },
      {
        "nomor": 10,
        "pertanyaan": "Metode klasik kriptografi substitusi sederhana yang menggeser abjad sejauh beberapa karakter tertentu disebut...",
        "pilihan": { "A": "Caesar Cipher", "B": "RSA Algorithm", "C": "AES Block Cipher", "D": "SHA Hashing" },
        "jawaban_benar": "A"
      }
    ]
  }
];

let currentQuizIndex = 0;
let currentQuestionIndex = 0;
let currentScore = 0;
let currentQuestionsList = [];
let answeredCurrent = false;

// Materi Reader State
let currentMateriFolder = '';
let currentMateriPrefix = '';
let currentMateriCount = 0;
let currentMateriPageIndex = 1;

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  // Splash timer (3 seconds)
  setTimeout(() => {
    navigateTo('main');
    startBgm();
  }, 3000);
});

// Orientation switcher
function setOrientation(mode) {
  const wrapper = document.getElementById('device-wrapper');
  const btnLandscape = document.getElementById('btn-landscape');
  const btnPortrait = document.getElementById('btn-portrait');

  if (mode === 'landscape') {
    wrapper.className = 'landscape';
    btnLandscape.classList.add('active');
    btnPortrait.classList.remove('active');
  } else {
    wrapper.className = 'portrait';
    btnPortrait.classList.add('active');
    btnLandscape.classList.remove('active');
  }
}

// Navigation
function navigateTo(screenName) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));

  let targetId = 'screen-' + screenName;
  if (screenName === 'sekolah') targetId = 'screen-sekolah';
  if (screenName === 'main') targetId = 'screen-main';

  const target = document.getElementById(targetId);
  if (target) {
    target.classList.add('active');
    currentScreen = targetId;

    if (screenName === 'materi') renderMateriGrid();
    if (screenName === 'cp') renderCpList();
    if (screenName === 'tp') renderTpList();
    if (screenName === 'video') renderVideoList();
    if (screenName === 'evaluasi') renderEvaluasiGrid();
  }
}

// Audio BGM
function startBgm() {
  bgmAudio.volume = 0.5;
  bgmAudio.play().then(() => {
    isBgmPlaying = true;
    updateAudioIcon();
  }).catch(() => {
    console.log("Autoplay blocked, user interaction required");
  });
}

function toggleBgm() {
  if (isBgmPlaying) {
    bgmAudio.pause();
    isBgmPlaying = false;
  } else {
    bgmAudio.play();
    isBgmPlaying = true;
  }
  updateAudioIcon();
}

function updateAudioIcon() {
  const icon = document.getElementById('audio-icon');
  if (isBgmPlaying) {
    icon.className = 'fa-solid fa-volume-high';
  } else {
    icon.className = 'fa-solid fa-volume-off';
  }
}

// Exit Modal
function showExitModal() {
  document.getElementById('exit-modal').classList.add('active');
}
function closeExitModal() {
  document.getElementById('exit-modal').classList.remove('active');
}

// CP & TP Data
const cpItems = [
  'Menganalisis sistem keamanan jaringan yang diperlukan sesuai kebutuhan organisasi.',
  'Mengidentifikasi potensi ancaman dan serangan terhadap keamanan jaringan.',
  'Menerapkan langkah-langkah penguatan host (host hardening).',
  'Menerapkan konsep server Demilitarized Zone (DMZ).',
  'Melakukan pengujian keamanan jaringan menggunakan metode dan tools yang sesuai.',
  'Mengelola host dan server untuk mendukung keamanan jaringan.',
  'Menjelaskan fungsi keamanan jaringan dalam melindungi data dan infrastruktur TI.'
];

const tpItems = [
  'Memahami konsep dasar ancaman dan serangan pada keamanan jaringan komputer.',
  'Menganalisis sistem dan perangkat keamanan jaringan yang efektif.',
  'Melakukan penguatan sistem (host hardening) pada sistem operasi server maupun client.',
  'Merancang dan mengonfigurasi arsitektur jaringan Demilitarized Zone (DMZ).',
  'Menggunakan tools pengujian keamanan untuk audit kerentanan sistem.',
  'Mengimplementasikan server autentikasi untuk kontrol akses jaringan.',
  'Mengonfigurasi sistem pendeteksi ancaman menggunakan Snort IDS/IPS.',
  'Menerapkan teknik kriptografi untuk pengamanan komunikasi data.'
];

function renderCpList() {
  const list = document.getElementById('cp-list');
  list.innerHTML = cpItems.map(item => `<li>${item}</li>`).join('');
}

function renderTpList() {
  const list = document.getElementById('tp-list');
  list.innerHTML = tpItems.map(item => `<li>${item}</li>`).join('');
}

// Materi Grid & Reader
const materiDataList = [
  { title: '3.1 Ancaman Jaringan', folder: 'materi1', prefix: 'Modul 1 - Ancaman dan Serangan Keamanan Jaringan_page-', count: 13, icon: 'assets/images/1.png', label: 'assets/images/31.png' },
  { title: '3.2 Sistem Keamanan', folder: 'materi2', prefix: 'Modul 2 - Sistem Keamanan Jaringan_page-', count: 13, icon: 'assets/images/2.png', label: 'assets/images/32.png' },
  { title: '3.3 Host Hardening', folder: 'materi3', prefix: 'Modul 3 - Host Hardening_page-', count: 12, icon: 'assets/images/3.png', label: 'assets/images/33.png' },
  { title: '3.4 Server DMZ', folder: 'materi4', prefix: 'Modul 4 - Membangun Server DMZ_page-', count: 12, icon: 'assets/images/4.png', label: 'assets/images/34.png' },
  { title: '3.5 Uji Keamanan', folder: 'materi5', prefix: 'Modul 5 - Pengujian Keamanan Jaringan, Host, dan Server_page-', count: 12, icon: 'assets/images/5.png', label: 'assets/images/35.png' },
  { title: '3.6 Server Autentikasi', folder: 'materi6', prefix: 'Modul 6 - Server Autentikasi_page-', count: 12, icon: 'assets/images/6.png', label: 'assets/images/36.png' },
  { title: '3.7 Snort IDS/IPS', folder: 'materi7', prefix: 'Modul 7 - Sistem Pendeteksi dan Penahan Ancaman Snort_page-', count: 12, icon: 'assets/images/7.png', label: 'assets/images/37.png' },
  { title: '3.8 Kriptografi', folder: 'materi8', prefix: 'Modul 8 - Pengamanan Komunikasi Data Kriptografi_page-', count: 12, icon: 'assets/images/8.png', label: 'assets/images/38.png' },
];

function renderMateriGrid() {
  const body = document.querySelector('#screen-materi .content-body');
  body.innerHTML = materiDataList.map(m => `
    <div class="materi-card" onclick="openMateri('${m.folder}', '${m.prefix}', ${m.count}, '${m.title}')">
      <img src="${m.icon}" alt="Icon">
      <img src="${m.label}" class="materi-label-img" alt="Label">
    </div>
  `).join('');
}

function openMateri(folder, prefix, count, title) {
  currentMateriFolder = folder;
  currentMateriPrefix = prefix;
  currentMateriCount = count;
  currentMateriPageIndex = 1;
  document.getElementById('materi-detail-title').innerText = title;
  navigateTo('materi-detail');
  renderMateriPage();
}

function renderMateriPage() {
  const viewer = document.getElementById('materi-page-viewer');
  const pageStr = String(currentMateriPageIndex).padStart(4, '0');
  const imgPath = `assets/images/${currentMateriFolder}/${currentMateriPrefix}${pageStr}.jpg`;
  viewer.innerHTML = `<img src="${imgPath}" alt="Page ${currentMateriPageIndex}" onerror="this.src='assets/images/splash.jpg'">`;
}

function prevPage() {
  if (currentMateriPageIndex > 1) {
    currentMateriPageIndex--;
    renderMateriPage();
  }
}

function nextPage() {
  if (currentMateriPageIndex < currentMateriCount) {
    currentMateriPageIndex++;
    renderMateriPage();
  }
}

// Video List & Player
const videoList = [
  { title: 'Modul 1 - Ancaman dan Serangan Keamanan Jaringan', id: 'e96OlxPYUP4', duration: '10:15' },
  { title: 'Modul 2 - Sistem Keamanan Jaringan', id: '3rMfpStmO_Q', duration: '12:30' },
  { title: 'Modul 3 - Host Hardening', id: 'mFQx6nCxRMI', duration: '14:45' },
  { title: 'Modul 4 - Membangun Server DMZ', id: 'pgi9eWmburE', duration: '11:20' },
  { title: 'Modul 5 - Pengujian Keamanan Jaringan, Host, dan Server', id: 'DHeGo1Z3KbE', duration: '15:10' },
  { title: 'Modul 6 - Server Autentikasi', id: 'WXFx92HBXKs', duration: '13:00' },
  { title: 'Modul 7 - Sistem Pendeteksi dan Penahan Ancaman Snort', id: '1ic05nBYTx8', duration: '16:05' },
  { title: 'Modul 8 - Pengamanan Komunikasi Data Kriptografi', id: 'h5rpN0zFRLE', duration: '14:50' },
];

function renderVideoList() {
  const area = document.getElementById('video-content-area');
  document.getElementById('video-header-title').innerText = 'VIDEO PEMBELAJARAN';
  area.innerHTML = videoList.map(v => `
    <div class="video-item" onclick="playVideo('${v.id}', '${v.title}')">
      <img src="https://img.youtube.com/vi/${v.id}/hqdefault.jpg" class="video-thumb" alt="Thumb">
      <div class="video-info">
        <h4>${v.title}</h4>
        <span><i class="fa-solid fa-clock"></i> ${v.duration}</span>
      </div>
      <div class="play-circle"><i class="fa-solid fa-play"></i></div>
    </div>
  `).join('');
}

function playVideo(id, title) {
  document.getElementById('video-header-title').innerText = 'PUTAR VIDEO';
  const area = document.getElementById('video-content-area');
  area.innerHTML = `
    <div style="display: flex; flex-direction: column; height: 100%; gap: 15px;">
      <button class="action-btn secondary" onclick="renderVideoList()"><i class="fa-solid fa-arrow-left"></i> Kembali ke Daftar</button>
      <h3 style="color: #FFF; font-size: 18px;">${title}</h3>
      <div style="flex: 1; background: #000; border-radius: 12px; overflow: hidden;">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/${id}?autoplay=1" title="${title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  `;
}

// Evaluasi & Quiz
const quizColors = ['#4FC3F7', '#81C784', '#FFB74D', '#E57373', '#BA68C8', '#4DD0E1', '#F06292', '#AED581'];
const quizIcons = ['fa-triangle-exclamation', 'fa-shield-halved', 'fa-server', 'fa-network-wired', 'fa-bug', 'fa-user-shield', 'fa-satellite-dish', 'fa-lock'];

function renderEvaluasiGrid() {
  const grid = document.querySelector('#screen-evaluasi .content-body');
  grid.className = 'content-body grid-eval';

  if (quizDataModules.length === 0) {
    grid.innerHTML = '<div style="color:white; text-align:center; grid-column:span 4;">Memuat Bank Soal...</div>';
    return;
  }

  const history = JSON.parse(localStorage.getItem('quiz_history') || '[]');

  grid.innerHTML = quizDataModules.map((m, i) => {
    const color = quizColors[i % quizColors.length];
    const icon = quizIcons[i % quizIcons.length];
    const bestRecords = history.filter(h => h.quizIndex === i);
    const best = bestRecords.length > 0 ? Math.max(...bestRecords.map(h => h.score)) : null;

    return `
      <div class="eval-card" onclick="startQuiz(${i})" style="--card-color: ${color};">
        <div class="eval-icon"><i class="fa-solid ${icon}"></i></div>
        <h4>Kuis ${i + 1}</h4>
        <p>${m.topik}</p>
        ${best !== null ? `<span class="best-badge">Best: ${best}</span>` : ''}
      </div>
    `;
  }).join('');
}

function startQuiz(index) {
  currentQuizIndex = index;
  currentQuestionIndex = 0;
  currentScore = 0;
  currentQuestionsList = quizDataModules[index].soal;
  answeredCurrent = false;

  navigateTo('quiz');
  renderQuestion();
}

function renderQuestion() {
  const q = currentQuestionsList[currentQuestionIndex];
  document.getElementById('quiz-progress-title').innerText = `Kuis ${currentQuizIndex + 1} — Soal ${currentQuestionIndex + 1}/${currentQuestionsList.length}`;
  document.getElementById('progress-fill').style.width = `${((currentQuestionIndex + 1) / currentQuestionsList.length) * 100}%`;
  document.getElementById('quiz-live-score').innerText = `Skor: ${currentScore}`;
  document.getElementById('question-text').innerText = q.pertanyaan;

  ['A', 'B', 'C', 'D'].forEach(key => {
    const btn = document.getElementById('opt-' + key);
    btn.innerText = `${key}. ${q.pilihan[key]}`;
    btn.className = 'option-btn';
    btn.disabled = false;
  });
  answeredCurrent = false;
}

function answerQuiz(selectedKey) {
  if (answeredCurrent) return;
  answeredCurrent = true;

  const q = currentQuestionsList[currentQuestionIndex];
  const correctKey = q.jawaban_benar;

  ['A', 'B', 'C', 'D'].forEach(key => {
    const btn = document.getElementById('opt-' + key);
    btn.disabled = true;
    if (key === correctKey) {
      btn.classList.add('correct');
    } else if (key === selectedKey) {
      btn.classList.add('wrong');
    }
  });

  if (selectedKey === correctKey) {
    currentScore += 10;
  }

  setTimeout(() => {
    if (currentQuestionIndex < currentQuestionsList.length - 1) {
      currentQuestionIndex++;
      renderQuestion();
    } else {
      saveQuizRecord();
      showResultScreen();
    }
  }, 1200);
}

function saveQuizRecord() {
  const history = JSON.parse(localStorage.getItem('quiz_history') || '[]');
  const now = new Date();
  history.push({
    quizIndex: currentQuizIndex,
    score: currentScore,
    totalQuestions: currentQuestionsList.length,
    date: `${String(now.getDate()).padStart(2,'0')}/${String(now.getMonth()+1).padStart(2,'0')}/${now.getFullYear()}`,
    time: `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`
  });
  localStorage.setItem('quiz_history', JSON.stringify(history));
}

function showResultScreen() {
  navigateTo('result');
  const isPassed = currentScore >= 70;
  const topik = quizDataModules[currentQuizIndex].topik;

  document.getElementById('result-icon').className = isPassed ? 'fa-solid fa-trophy' : 'fa-solid fa-rotate-right';
  document.getElementById('result-icon').style.color = isPassed ? '#FFD700' : '#FFB74D';
  document.getElementById('result-title').innerText = isPassed ? 'SELAMAT!' : 'COBA LAGI!';
  document.getElementById('result-subtitle').innerText = `Kuis ${currentQuizIndex + 1}: ${topik}`;
  document.getElementById('result-score').innerText = `${currentScore} / ${currentQuestionsList.length * 10}`;
}

function restartQuiz() {
  startQuiz(currentQuizIndex);
}

let confirmCallback = null;

function showConfirmModal(title, message, callback) {
  document.getElementById('confirm-title').innerText = title;
  document.getElementById('confirm-message').innerText = message;
  confirmCallback = callback;
  document.getElementById('confirm-modal').classList.add('active');
}

function resolveConfirm(result) {
  document.getElementById('confirm-modal').classList.remove('active');
  if (confirmCallback) {
    confirmCallback(result);
    confirmCallback = null;
  }
}

function confirmQuitQuiz() {
  showConfirmModal('Keluar Kuis', 'Progress kuis tidak akan disimpan. Keluar?', (confirmed) => {
    if (confirmed) {
      navigateTo('evaluasi');
    }
  });
}

// History Modal
function openHistoryModal() {
  const history = JSON.parse(localStorage.getItem('quiz_history') || '[]').reverse();
  const container = document.getElementById('history-list-container');

  if (history.length === 0) {
    container.innerHTML = '<p style="text-align:center; color: rgba(255,255,255,0.4); padding: 20px;">Belum ada riwayat evaluasi</p>';
  } else {
    container.innerHTML = history.map(h => {
      const topik = quizDataModules[h.quizIndex] ? quizDataModules[h.quizIndex].topik : `Topik ${h.quizIndex + 1}`;
      return `
        <div class="history-item">
          <div>
            <strong style="color: #FFF; font-size: 15px;">Kuis ${h.quizIndex + 1}: ${topik}</strong>
            <div style="font-size: 12px; color: rgba(255,255,255,0.5); margin-top: 4px;">${h.date} • ${h.time}</div>
          </div>
          <span style="background: ${h.score >= 70 ? 'rgba(76,175,80,0.2)' : 'rgba(255,152,0,0.2)'}; color: ${h.score >= 70 ? '#81C784' : '#FFB74D'}; padding: 4px 12px; border-radius: 8px; font-weight: 700;">${h.score}</span>
        </div>
      `;
    }).join('');
  }

  document.getElementById('history-modal').classList.add('active');
}

function closeHistoryModal() {
  document.getElementById('history-modal').classList.remove('active');
}

function clearHistory() {
  showConfirmModal('Hapus Riwayat', 'Hapus semua riwayat evaluasi?', (confirmed) => {
    if (confirmed) {
      localStorage.removeItem('quiz_history');
      openHistoryModal();
      renderEvaluasiGrid();
    }
  });
}
