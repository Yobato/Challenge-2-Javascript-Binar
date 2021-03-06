// Nama     : Satriyo Bagus Pinandhito
// Tanggal  : 10 Maret 2022


// SOAL 1

function changeWord(selectedText, changedText, text) {
    if (text.includes(selectedText)) {
        let hasil = text.replace(selectedText, changedText);
        return hasil;
    }
    return (`Kata ${selectedText} tidak ditemukan`)
}

let kalimat1 = 'Andini sangat mencintai kamu selamanya'
// console.log(changeWord('kamu', 'Aku', kalimat1));

// SOAL 2

let checkTypeNumber = (givenNumber) => {
    if (givenNumber == null) {
        return "Error: Bro where is the parameter?";
    }
    if (typeof (givenNumber) !== "number") {
        return "Error: Invalid data type";
    }

    return givenNumber % 2 === 0 ? "GENAP" : "GANJIL";
}

// console.log(checkTypeNumber(10));
// console.log(checkTypeNumber("3"));
// console.log(checkTypeNumber());

// SOAL 3

let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function checkEmail(email) {
    if (email == null) {
        return "Error: Bro where is the parameter?";
    }
    if (typeof (email) !== "string") {
        return "Error: Invalid data type";
    }

    return email.match(emailFormat) ? "VALID" : "INVALID";
}

// console.log(checkEmail('apranata@binar.co.id'));
// console.log(checkEmail('apranata@binar.com'));
// console.log(checkEmail('apranata@binar'));
// console.log(checkEmail(1232134));

// SOAL 4

let passwordFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,20}$/;

function isValidPassword(givenPassword) {

    if (givenPassword == null) {
        return "Error: Bro where is the parameter?";
    }

    if (typeof (givenPassword) !== "string") {
        return "Error: Invalid data type";
    }

    return givenPassword.match(passwordFormat) ? true : false;
}

// console.log(isValidPassword('Meong2021'));
// console.log(isValidPassword('meong2021'));
// console.log(isValidPassword('@eong'));
// console.log(isValidPassword('Meong2'));
// console.log(isValidPassword());

// SOAL 5

const getSplitName = (givenName = "") => {
    let namaSplit = givenName.split(" ");

    if (typeof (givenName) !== "string") {
        return "Error: Invalid data type";
    }

    if (givenName.length > 0) {
        switch (namaSplit.length) {
            case 1:
                return {
                    firstName: namaSplit[0],
                        midName: null,
                        lastName: null
                }
                case 2:
                    return {
                        firstName: namaSplit[0],
                            midName: null,
                            lastName: namaSplit[1]
                    }

                    case 3:
                        return {
                            firstName: namaSplit[0],
                                midName: namaSplit[1],
                                lastName: namaSplit[2]
                        }

                        default:
                            return "Jumlah kata berlebihan"
        }
    } else {
        return "Nama tidak valid"
    }
}

// console.log(getSplitName("Satriyo Bagus Pinandhito"));
// console.log(getSplitName("Satriyo Bagus"));
// console.log(getSplitName());

// SOAL 6

function getAngkaTerbesarKedua(dataNumbers) {

    if (dataNumbers == null) {
        return "Error: Bro where is the parameter?";
    }

    if (typeof (dataNumbers) !== "object") {
        return "Error: Invalid data type";
    }

    let max = dataNumbers.sort(function (a, b) {
        return b - a
    })

    let uniqueMax = [...new Set(max)];
    return uniqueMax[1];
}

const dataAngka = [9, 4, 8, 7, 4, 3, 2, 2]
const dataAngka1 = [10, 8, 1, 5, 7, 2, 2, 9, 9]

// console.log(getAngkaTerbesarKedua(dataAngka1));

// SOAL 7

const dataPenjualanPakAldi = [{
        namaProduct: 'Sepatu Nike',
        hargaSatuan: 760000,
        kategori: 'Sepatu Sport',
        totalTerjual: 90,
    },
    {
        namaProduct: 'Sepatu Adidas',
        hargaSatuan: 600000,
        kategori: 'Sepatu Sport',
        totalTerjual: 37,
    },
    {
        namaProduct: 'Sepatu Puma',
        hargaSatuan: 1000000,
        kategori: 'Sepatu Sport',
        totalTerjual: 90,
    },
    {
        namaProduct: 'Sepatu Legas',
        hargaSatuan: 450000,
        kategori: 'Sepatu Sport',
        totalTerjual: 90,
    },
]

const getTotalPenjualan = (dataPenjualan) => {
    let sum = 0;

    if (dataPenjualan == null) {
        return "Error: Bro where is the parameter?";
    }

    if (typeof (dataPenjualan) !== "object") {
        return "Error: Invalid data type";
    }

    for (let i = 0; i < dataPenjualan.length; i++) {
        sum += dataPenjualan[i].totalTerjual;
    }
    return sum;
}

// console.log(getTotalPenjualan(dataPenjualanPakAldi));
// console.log(getTotalPenjualan(dataPenjualanPakAldi));

// SOAL 8

const dataPenjualanNovel = [{
        idProduct: 'BOOK002421',
        namaProduk: 'Pulang - Pergi',
        penulis: 'Tere Liye',
        hargaBeli: 60000,
        hargaJual: 86000,
        totalTerjual: 150,
        sisaStok: 17,
    },
    {
        idProduct: 'BOOK002941',
        namaProduk: 'Laskar Pelangi',
        penulis: 'Andrea Hirata',
        hargaBeli: 55000,
        hargaJual: 68000,
        totalTerjual: 20,
        sisaStok: 56,
    },
    {
        idProduct: 'BOOK002351',
        namaProduk: 'Selamat Tinggal',
        penulis: 'Tere Liye',
        hargaBeli: 75000,
        hargaJual: 103000,
        totalTerjual: 171,
        sisaStok: 20,
    },
    {
        idProduct: 'BOOK002981',
        namaProduk: 'Garis Waktu',
        penulis: 'Fiersa Besari',
        hargaBeli: 67000,
        hargaJual: 99000,
        totalTerjual: 213,
        sisaStok: 5,
    },
];

// console.log(dataPenulis(dataPenjualanNovel));

const getInfoPenjualan = (dataPenjualan) => {

    const TotalKeuntungan = (dataPenjualan) => {
        return dataPenjualan.reduce((prev, curr) => ((curr.hargaJual - curr.hargaBeli) * curr.totalTerjual) + prev, 0)
    }

    const TotalModal = (dataPenjualan) => {
        return dataPenjualan.reduce((prev, curr) => ((curr.hargaBeli) * (curr.totalTerjual + curr.sisaStok)) + prev, 0)
    }

    const BukuTerlaris = (dataPenjualan) => {
        const dataBukuTerlaris = dataPenjualan.sort((a, b) => a.totalTerjual - b.totalTerjual);
        const BukuTerlaris = dataBukuTerlaris[dataBukuTerlaris.length - 1].namaProduk;
        return BukuTerlaris;
    }

    const PenulisTerlaris = (dataPenjualan) => {
        const newDataJual = dataPenjualan.reduce((prev, curr) => {
            const index = prev.findIndex(search => search.penulis === curr.penulis)

            if (index !== -1) {
                const data = [...prev]
                data[index].totalTerjual += curr.totalTerjual
                return [...data]
            }

            return [...prev, curr]

        }, []);

        const exPenulisTerlaris = newDataJual.sort((a, b) => a.totalTerjual - b.totalTerjual);
        const PenulisTerlaris = exPenulisTerlaris[exPenulisTerlaris.length - 1].penulis;
        return PenulisTerlaris;
    }

    const PersentaseKeuntungan = (dataPenjualan) => {
        let untung = TotalKeuntungan(dataPenjualan);
        let modal = TotalModal(dataPenjualan);
        return untung / modal * 100;
    }
    // console.log(PersentaseKeuntungan(dataPenjualanNovel));

    // Formatter untuk mencetak dengan format mata uang rupiah
    const formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
    });

    const laba = formatter.format(TotalKeuntungan(dataPenjualan));
    const modal = formatter.format(TotalModal(dataPenjualan));

    return {
        totalKeuntungan: `${laba} `,
        totalModal: `${modal}`,
        persentaseKeuntungan: `${Math.round(PersentaseKeuntungan(dataPenjualan))}%`,
        produkBukuTerlaris: `BUKU TERLARIS BERDASARKAN DATA DIATAS ${BukuTerlaris(dataPenjualan)} `,
        penulisTerlaris: `PENULIS TERLARIS BERDASARKAN DATA DIATAS ${PenulisTerlaris(dataPenjualan)}`,
    }

}

// console.log(getInfoPenjualan(dataPenjualanNovel));