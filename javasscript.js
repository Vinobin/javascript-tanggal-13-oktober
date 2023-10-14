// function coba() {
//     alert('Javascript');
// }

// const tes = () => {
//     alert('Belajar Javascript');
// }

// function luasLingkaran(r) {
//     luasLing = 3.14 * r;
//     // alert(luas);
//     return luasLing;
// }

// const luas = (r) => {
//     l = 3.14 * r;
//     // alert(l);
//     return l;
// }

// function tampil() {
//     console.log(luasLingkaran(5));
// }

// btn.onclick = function() {
//     alert('Javascript');
// }

// btn.onclick = () => {
//     alert('Javascript');
// }

btn.onclick = () => {
    const bln = document.querySelector('#bln').value;
    const tgl = document.querySelector('#tgl').value;
    const zodiak = document.querySelector('h1');

    if (bln == '' && tgl == '') {
        alert('Tanggal atau Bulan Belum Diisi');
    }else {
        if (bln == 1) {
            if (tgl > 0 && tgl < 20) {
                zodiak.innerHTML = 'Aquarius';
            }
            if (tgl > 19 && tgl < 32) {
                zodiak.innerHTML = 'Pisces';
            }
        }
    }
}

btnHtml.onclick = () => {
    const div = document.querySelector('div');
    const h = document.createElement('h1');

    h.textContent = 'Belajar Javascript';
    div.appendChild(h);
}

btnCss.onclick = () => {
    document.querySelector('div').style.backgroundColor = 'red';
}

btnLingkaran.onclick = () => {
    const r = document.querySelector('#jari').value;
    const hasil = document.querySelector('h1');

    l = 3.14 * r * r;
    hasil.innerHTML = l;
}

btnNilai.onclick = () => {
    const nilai = document.querySelector('#nilai').value;
    const hasil = document.querySelector('h1');
    const KKM = 80;

    if (nilai < KKM) {
        hasil.innerHTML = 'Tidak Lulus';
    }else {
        hasil.innerHTML = 'Lulus';
    }
}

btnSuhu.onclick = () => {
    const suhu = document.querySelector('#suhu').value;
    const hasil = document.querySelector('h2');

    celcius = 4/5 * suhu;
    hasil.innerHTML = celcius;
}