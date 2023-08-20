document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById("search-button");
    const searchResults = document.getElementById("search-results");
    const searchData = [
        {
            text:"Retikulum endoplasma adalah organel yang dapat ditemukan pada semua sel eukariotik. Retikulum endoplasma merupakan bagian dari sistem endomembran. RE merupakan labirin membran yang demikian banyak sehingga RE ini meliputi separuh lebih dari total membran dalam sel-sel eukariotik.<br>RE terdiri dari jaringan tubula dan gelembung membran yang disebut sisterne. Membran RE memisahkan ruangan internal, yaitu ruang sisternal dan sitosol. Membran ini berhubungan langsung dengan selubung nukleus atau nuclear envelope, sehingga ruang di antara kedua membran selubung itu bersambung dengan ruang sisternal RE ini.<br>Terapat dua daerah RE yang struktur dan fungsinya berbeda jelas, walaupun keduanya tersambung, yaitu RE halus dan RE kasar. <br> Pada bagian-bagian RE kasar, terdapat ribuan ribosom. Ribosom merupakan tempat proses pembentukan protein terjadi di dalam sel. Ribosom juga diletakkan pada sisi sitoplasmik membran luar selubung nukleus, yang bertemu dengan RE kasar. Di permukaan RE kasar, terdapat bintik-bintik yang merupakan ribosom. Ribosom ini berperan dalam sintesis protein. Maka, fungsi utama RE kasar adalah sebagai tempat sintesis protein. <br> Sedangkan bagian-bagian retikulum endoplasma yang tidak diselimuti oleh ribosom disebut retikulum endoplasma halus atau smooth endoplasmic reticulum. Fungsinya adalah untuk membentuk lemak dan steroid. Sel-sel yang sebagian besar terdiri dari retikulum endoplasma halus terdapat di beberapa organ seperti hati.",
            image:"re.jpg"
        },
        {
            text: "Sel adalah unit terkecil yang menyusun tubuh makhluk hidup dan merupakan tempat terselenggaranya fungsi kehidupan.",
            image: "pengertian-sel.jpg"
        },
        {
            text: "Sel ditemukan pertama kali pada 1665 oleh seorang ilmuwan Inggris bernama Robert Hooke. Saat mengamati sayatan gabus dari batang tumbuhan yang sudah mati dengan mikroskop sederhana, Hooke menemukan ruang-ruang kosong yang dibatasi oleh dinding tebal. Ruang-ruang tersebut akhirnya disebut cellulae atau disingkat menjadi cell.",
            image: "roberthookie.jpg"
        },
        {
            text: "Membran sel atau membran plasma adalah sebuah struktur selaput tipis yang memisahkan isi sitoplasma dan nukleoplasma dari lingkungan luar serta berperan sebagai pelindung sel. Secara sederhana, membran sel merupakan permukaan luar setiap sel yang dibatasi oleh selaput halus dan elastis. Membran plasma bersifat semipermeabel. Artinya, membran ini dapat menyeleksi molekul-molekul apa saja yang boleh masuk ke dalam sel.",
            image: "membran_plasma.jpg"
        },
        {
            text: "Sitoplasma adalah bagian sel yang terbungkus membran plasma. Sitoplasma terdiri dari air, protein, karbohidrat, lemak, mineral, dan vitamin. Sitoplasma berfungsi sebagai tempat penyimpanan bahan kimia sel yang penting bagi metabolisme sel, seperti enzim-enzim, ion-ion, gula, lemak dan protein. Pada sel eukariota, sitoplasma adalah bagian non-nukleus dari protoplasma. Pada sitoplasma terdapat sitoskeleton, berbagai organel dan vesikuli, serta sitosol yang berupa cairan tempat organel melayang-layang di dalamnya. Sitosol mengisi ruang sel yang tidak ditempati organel dan vesikula dan menjadi tempat banyak reaksi biokimiawi serta perantara transfer bahan dari luar sel ke organel atau inti sel. Sitoplasma bersifat koloid. Ukuran partikel yang terlarut adalah 0,001-0,1 mikron dan bersifat transparan. Sitoplasma terdapat di dalam sel tapi berada di luar nukleus dan organel-organel sel.",
            image: "sitoplasma.jpg"
        },
        {
            text: "Prokariotik: <br> - Sel prokariotik merupakan bentuk sel paling sederhana dan ditemukan pada organisme bersel tunggal seperti bakteri dan archaea. <br> - Mereka tidak memiliki inti sel yang terpisah oleh membran. Materi genetik mereka berbentuk sirkuler dan terletak di nukleoid. <br> - Sel prokariotik biasanya tidak memiliki organel sel yang kompleks seperti sel eukariotik. <br> - Meskipun sederhana, sel prokariotik memiliki peran vital dalam proses biokimia di alam dan dapat bertahan dalam berbagai kondisi lingkungan.",
            image: "prokariotik.png"
        },
        {
            text: "Eukariotik: <br> - Sel eukariotik lebih kompleks dan ditemukan pada tumbuhan, hewan, jamur, dan protista. <br> - Mereka memiliki inti sel yang jelas, di mana materi genetik terkandung dalam nukleus yang dikelilingi oleh membran. <br> - Sel eukariotik memiliki beragam organel sel yang mengatur berbagai fungsi seluler, termasuk mitokondria (tempat produksi energi), ribosom (tempat sintesis protein), dan retikulum endoplasma (tempat transportasi intraseluler).",
            image: "eukariotik.jpg"
        },
        {
            text: "Dinding sel adalah matriks ekstraseluler yang menyelubungi tiap sel sebagai pelindung dan pembentuk sel. Bagian dinding sel tersusun dari selulosa di saat sel berusia muda dan mengalami penumpukan lignin saat sel mulai menua. Dinding sel hanya ditemukan pada tumbuhan. Di antara dinding sel terdapat noktah dan plasmodesmata yang berfungsi sebagai penghantar rangsang antar sel tumbuhan. Dinding sel juga berfungsi sebagai pencegah pengisapan air secara berlebihan oleh tumbuhan.",
            image: "dindingsel.png"
        },
        {
            text: "Sentrosom merupakan organel sel yang hanya ada pada sel hewan. Secara umum, fungsi sentrosom pada sel hewan adalah membantu pembelahan sel. Jika dibelah, sentrosom awalnya berasal dari sepasang sentriol.",
            image: "Sentrosom.png"
        },
        {
            text: "Kloroplas (bahasa Inggris: chloroplast) adalah bagian dari plastid yang mengandung klorofil. Di dalam kloroplas, berlangsung fase terang dan fase gelap dari fotosintesis tumbuhan. Kloroplas terdapat pada hampir seluruh tumbuhan, tetapi tidak umum dalam semua sel. Bila terdapat kloroplas, tiap sel dapat memiliki satu sampai banyak plastid. Umumnya, pada tumbuhan tingkat tinggi, kloroplas berbentuk cakram (kira-kira 2 × 5 mm, kadang-kadang lebih besar), tersusun dalam lapisan tunggal dalam sitoplasma. Namun, bentuk dan posisinya berubah-ubah sesuai dengan intensitas cahaya. Pada ganggang, bentuknya dapat seperti mangkuk, spiral, bahkan bintang yang menyerupai jaring dan sering kali disertai pirenoid.",
            image: "kloroplas.png"
        },
        {
            text: "Kromoplas adalah plastida yang mensintetis dan menyimpan pigmen selain klorofil. Contoh pigmen yang terkandung dalam kromoplas adalah karoten yang berwarna merah kekuningan dan xantofil yang berwarna coklat.",
            image: "kromoplas.jpg"
        },
        {
            text: "Badan Golgi (disebut juga aparatus Golgi, kompleks Golgi atau diktiosom) adalah organel yang dikaitkan dengan fungsi ekskresi sel, dan struktur ini dapat dilihat dengan menggunakan mikroskop cahaya biasa. Organel ini terdapat hampir di semua sel eukariotik dan banyak dijumpai pada organ tubuh yang melaksanakan fungsi ekskresi, misalnya ginjal. Setiap sel hewan memiliki 10 hingga 20 badan Golgi, sedangkan sel tumbuhan memiliki hingga ratusan badan Golgi. Badan Golgi pada tumbuhan biasanya disebut diktiosom. <br> Badan Golgi ditemukan oleh seorang ahli histologi dan patologi berkebangsaan Italia yang bernama Camillo Golgi. <br>S truktur badan Golgi berupa berkas kantung berbentuk cakram yang bercabang menjadi serangkaian pembuluh yang sangat kecil di ujungnya. Karena hubungannya dengan fungsi pengeluaran sel amat erat, pembuluh mengumpulkan dan membungkus karbohidrat serta zat-zat lain untuk diangkut ke permukaan sel. Pembuluh itu juga menyumbang bahan bagi pembentukan dinding sel. <br> Badan golgi dibangun oleh membran yang berbentuk tubulus dan juga vesikula. Dari tubulus dilepaskan kantung-kantung kecil yang berisi bahan-bahan yang diperlukan seperti enzim–enzim pembentuk dinding sel. Fungsi badan golgi:<br> -Membentuk kantung (vesikula) untuk sekresi. Terjadi terutama pada sel-sel kelenjar kantung kecil tersebut, berisi enzim dan bahan-bahan lain.<br>-Membentuk membran plasma. Kantung atau membran golgi sama seperti membran plasma. Kantung yang dilepaskan dapat menjadi bagian dari membran plasma.<br>-Membentuk dinding sel tumbuhan<br>-Tempat untuk memodifikasi protein<br>-Untuk menyortir dan memaket molekul<br>-molekul untuk sekresi sel<br>-Transpor lipid<br>-Untuk membentuk lisosom<br>-Membentuk akrosom pada spermatozoa yang berisi enzim untuk memecah dinding sel telur",
            image: "badan-golgi.jpg"
        },
        {
            text:"Leukoplas adalah jenis plastida yang tidak mengandung pigmen apa pun, sehingga tidak berwarna dan tidak menarik bagi hewan. Leukoplas berada pada jaringan tumbuhan non fotosintetik seperti akar.",
            image:"leukoplas.jpg"
        },
        {
            text: "Lisosom adalah organel bermembran yang ditemukan pada banyak sel hewan. Bentuknya berupa vesikel bulat yang mengandung enzim hidrolitik yang mampu memecah berbagai jenis biomolekul. Lisosom memiliki komposisi yang sesifik, baik pada protein membran maupun pada protein lumennya. Lumen lisosom memiliki pH (~4.5–5.0) yang optimal bagi enzim yang terlibat dalam hidrolisis, analog dengan aktivitas di lambung. Di samping degradasi polimer, lisosom juga terlibat dalam beragam proses sel, termasuk sekresi, perbaikan membran plasma, apoptosis, persinyalan sel, dan metabolisme energi.<br>Lisosom bertindak sebagai sistem pembuangan sampah sel dengan mencerna material bekas pakai di sitoplasma, baik dari dalam maupun dari luar sel. Material dari luar sel diambil melalui endositosis, sedangkan material dari dalam sel dicerna melalui autofagi. Ukuran organel ini sangat bervariasi—yang besar dapat berukuran hingga lebih dari 10 kali lipat dibandingkan yang kecil. Lisosom ditemukan dan diberi nama oleh ahli biologi Belgia Christian de Duve, yang akhirnya menerima Penghargaan Nobel Fisiologi atau Kedokteran pada 1974.<br> Fungsi Lisosom :<br> Endositosis <br> Endositosis ialah pemasukan makromolekul dari luar sel ke dalam sel melalui mekanisme endositosis, yang kemudian materi-materi ini akan dibawa ke vesikel kecil dan tidak beraturan, yang disebut endosom awal. Beberapa materi tersebut dipilah dan ada yang digunakan kembali (dibuang ke sitoplasma), yang tidak dibawa ke endosom lanjut. Di endosom lanjut, materi tersebut bertemu pertama kali dengan enzim hidrolitik. Di dalam endosom awal, pH sekitar 6. Terjadi penurunan pH (5) pada endosom lanjut sehingga terjadi pematangan dan membentuk lisosom. <br> Autofagi <br> Proses autofagi digunakan untuk pembuangan dan degradasi bagian sel sendiri, seperti organel yang tidak berfungsi lagi. Mula-mula, bagian dari retikulum endoplasma kasar menyelubungi organel dan membentuk autofagosom. Setelah itu, autofagosom berfusi dengan enzim hidrolitik dari trans Golgi dan berkembang menjadi lisosom (atau endosom lanjut). Proses ini berguna pada sel hati, transformasi berudu menjadi katak, dan embrio manusia.<br> Fagositosis <br> Fagositosis merupakan proses pemasukan partikel berukuran besar dan mikroorganisme seperti bakteri dan virus ke dalam sel. Pertama, membran akan membungkus partikel atau mikroorganisme dan membentuk fagosom. Kemudian, fagosom akan berfusi dengan enzim hidrolitik dari trans Golgi dan berkembang menjadi lisosom (endosom lanjut).",
            image:"lisosom.jpg"
        },
        {
            text:"Mitokondria adalah organel dengan membran ganda yang ditemukan pada sebagian besar organisme eukariotik. Mitokondria menghasilkan sebagian besar suplai adenosina trifosfat (ATP) pada sel, yang digunakan sebagai sumber energi kimia. Oleh karena itu, mitokondria disebut sebagai pembangkit tenaga pada sel. <br> Fungsi Mitokondria<br>Mitokondria adalah organel sel yang tersebar dalam sitosol organisme eukariot yang berfungsi sebagai penghasil energi. <>Berikut adalah fungsinya.<br>-Mengatur energi kimia yang dikeluarkan dari oksidasi bahan makanan yang terdapat di bagian membran dalam.<br>-Sebagai tempat berlangsungnya metabolisme oksidatif.<br>-Sebagai proses untuk menghasilkan energi dengan memecah molekul kompleks menjadi molekul yang lebih sederhana.<br>-Berfungsi sebagai tempat berlangsungnya perubahan energi potensial dalam bentuk makanan menjadi ATP (Adenosin Tripospat).",
            image:"Mitokondria.png"
        },
        {
            text:"Membran inti terdiri atas dua lapis yang berfungsi sebagai pembungkus sekaligus sebagai pelindung nukleus. Pada organisme eukariotik, kecuali sel darah merah mamalia dewasa dan sel floem, nukleus terlindung oleh membran inti. Membran luarnya mempunyai hubungan langsung dengan retikulum endoplasma.  Membran inti memiliki pori-pori yang memungkinkan terjadinya pertukaran zat antara membran inti dengan sitoplasma. Bagian sel ini memiliki fungsi sebagai pelindung serta pemisah dari organel lainnya.",
            image:"membraninti.jpg",
        },
        {
            text:"Nukleolus adalah komponen yang terdapat di dalam nukleus atau inti sel. Nukleus menyimpan sebagian besar DNA sel yang bertanggung jawab untuk membawa informasi genetik, sedangkan nukleolus bertanggung jawab untuk pengumpulan dan transkripsi RNA.",
            image:"Nukleous.jpg"
        },
        {
            text:"Nukleoplasma adalah cairan kental di dalam inti sel atau nukleus yang mengandung banyak protein dan zal lainnya, seperti mineral, DNA, dan RNA. Selain berfungsi sebagai tempat untuk mengolah berbagai enzim, bagian yang disebut dengan karioplasma ini juga berperan dalam membantu menjaga bentuk dan struktur inti sel.",
            image:"nukleoplasma.jpg"
        },
        {
            text:"Inti sel atau nukleus adalah organel yang ditemukan pada sel eukariotik. Diameter nukleus rata-rata hanya 5 mikrometer. Beberapa jenis sel tidak memiliki nukleus, sedangkan sebagian sel lainnya hanya memiliki satu atau beberapa nukleus. Nukleus memiliki selubung dari lapisan lipoprotein yang berguna untuk memisahkan isi nukleus dari sitoplasma. Organel ini mengandung sebagian besar materi genetik sel dengan bentuk molekul DNA linier panjang yang membentuk kromosom bersama dengan beragam jenis protein. Gen di dalam kromosom-kromosom inilah yang membentuk genom inti sel.<br>Fungsi utama nukleus adalah untuk menjaga integritas gen-gen tersebut dan mengontrol aktivitas sel dengan mengelola ekspresi gen. Selain itu, nukleus juga berfungsi untuk mengorganisasikan gen saat terjadi pembelahan sel, memproduksi mRNA untuk mengkodekan protein, sebagai tempat sintesis ribosom, tempat terjadinya replikasi dan transkripsi dari DNA, serta mengatur kapan dan di mana ekspresi gen harus dimulai, dijalankan, dan diakhiri.",
            image:"nukleus.jpg"
        },
        {
            text:"Ribosom adalah organel ukuran kecil dan padat yang terdapat dalam sel dan berperan sebagai tempat sintesis protein. Ribosom terdapat dalam sitoplasma dan melekat pada membran RE ketika berlangsungnya proses sintesis protein. Jika proses sintesis protein tidak berlangsung ribosom akan berbentuk sub unit kecil dan sub unit besar. <br> Ribosom juga merupakan komponen sel yang membuat protein dari semua asam amino. Ribosom memiliki diameter sekitar 20 nm dan terdiri atas 65% RNA ribosom dan 35% protein ribosom. Sel dengan laju sintesis protein yang tinggi memiliki banyak sekali ribosom, contohnya sel hati manusia yang memiliki beberapa juta ribosom. Ribosom sendiri tersusun atas berbagai jenis protein dan sejumlah molekul RNA.<br> Ribosom berfungsi membuat protein dan melakukan sintesis protein dalam sel. Proses produksi sel perlu diproduksi agar proses biologis dapat terjadi dengan cepat. Protein tersebut akan berguna untuk memelihara jaringan dalam tubuh, mempercepat reaksi kimia, menjaga daya tahan tubuh, dan membentuk struktur tubuh.",
            image:"ribosom.jpg"
        },
        {
            text:"Vakuola adalah organel yang dibungkus oleh tonoplas . Apabila diamati menggunakan mikroskop cahaya, vakuola memiliki bentuk seperti ruang kosong dan tembus pandang. Vakuola berasal dari bahasa Latin 'vacuolum' yang artinya 'kosong' karena pada kenyataannya organel ini sama sekali tidak memiliki struktur internal. Pada umumnya, vakuola bentuknya lebih besar daripada vesikel, dan kadang kala terbentuk dari berbagai gabungan vesikel yang banyak yang diambil dari retikulum endoplasma dan aparatus golgi. Oleh karena hubungan tersebut, vakuola merupakan salah satu bagian terpadu yang sangat penting dalam sistem endomembran.<br> Vakuola pada hewan berfungsi sebagai tempat menyimpan zat makanan seperti amilum dan gula sedangkan pada tumbuhan Sebagai tempat menyimpan cadangan ion anorganik dan makanan, seperti protein, kalium, klorida, dan gula.<br>Vakoula juga berfungsi sebagai tempat untuk menimbun sisa-sisa metabolisme, seperti getah yang terdapat pada batang tanaman karet.Vakuola berguna untuk mendekatkan sitoplasma ke dinding sel, hingga proses masuk dan keluarya suatu zat dapat berjalan secara cepat dan lancer.Vakuola akan membuat sel muda dan menjadi lebih kuat.",
            image:"vakuola.jpg"
        }
    ];
    searchButton.addEventListener("click", function () {
        const searchTerm = document.getElementById("search-bar").value;
        let resultsHTML = "";
        let outputDisplayed = false; // Initialize the outputDisplayed variable

        // Loop through the search data and check for matches
        for (const result of searchData) {
            if (result.text.toLowerCase().includes(searchTerm.toLowerCase())) {
                resultsHTML += `
                    <div class="search-result">
                        <p>${result.text}</p>
                        <img src="${result.image}" alt="Gambar Sel">
                    </div>
                `;
                outputDisplayed = true; // Set outputDisplayed to true if a match is found
            }
        }

        const noResultsMessage = "<p class='no-results-message'>Pencarian tidak ditemukan.</p>";
        searchResults.innerHTML = outputDisplayed ? resultsHTML : noResultsMessage;

        // Mengatur warna teks
        const resultTextElements = document.querySelectorAll(".search-result p");
        resultTextElements.forEach(textElement => {
            textElement.style.color = "black";
        });
    
        // Mengatur ukuran gambar
        const resultImages = document.querySelectorAll(".search-result img");
        resultImages.forEach(image => {
            image.style.maxWidth = "45%";
            image.style.height = "auto";
        });
    });
});