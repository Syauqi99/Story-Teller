var selector = document.getElementsByClassName("image-sel");
var selPar = document.getElementById("exp-box");
var selBar = document.getElementById("par");

for (let index = 0; index < selector.length; index++) {
    selector[index].firstElementChild.addEventListener('click', ChangeImage);
};

var lstSrc = [0, 0, 0];

for (let index = 0; index < selector.length; index++) {
    lstSrc[index] = selector[index].firstElementChild.src;
}


selPar.addEventListener('click', genText);
function genText(){
    let sel = document.getElementById("Image-Highlight");
    if (sel.firstElementChild.src == lstSrc[2]) {
            selBar.innerHTML = "<p> Matahari atau Surya adalah bintang di pusat Tata Surya. Bentuknya nyaris bulat dan terdiri dari plasma panas bercampur medan magnet. Diameternya sekitar 1.392.684 km, kira-kira 109 kali diameter Bumi, dan massanya (sekitar 2×1030 kilogram, 330.000 kali massa Bumi) mewakili kurang lebih 99,86 % massa total Tata Surya. Secara kimiawi, sekitar tiga perempat massa Matahari terdiri dari hidrogen, sedangkan sisanya didominasi helium. Sisa massa tersebut (1,69%, setara dengan 5.629 kali massa Bumi) terdiri dari elemen-elemen berat seperti oksigen, karbon, neon, besi, dan lain-lain. .</p>";
    }
    else if(sel.firstElementChild.src == lstSrc[1]){
            selBar.innerHTML = "<p>Bintang merupakan benda langit yang memancarkan cahaya. Terdapat bintang semu dan bintang nyata. Bintang semu adalah bintang yang tidak menghasilkan cahaya sendiri, tetapi memantulkan cahaya yang diterima dari bintang lain. Bintang nyata adalah bintang yang menghasilkan cahaya sendiri. Secara umum sebutan bintang adalah objek luar angkasa yang menghasilkan cahaya sendiri (bintang nyata). </p>";
    }
        else if(sel.firstElementChild.src == lstSrc[0]){
            selBar.innerHTML = "<p>Bulan adalah satelit alami Bumi satu-satunya dan merupakan satelit terbesar kelima dalam Tata Surya. Bulan juga merupakan satelit alami terbesar di Tata Surya menurut ukuran planet yang diorbitnya, dengan diameter 27%, kepadatan 60%, dan massa ​1⁄81 (1.23%) dari Bumi. Di antara satelit alami lainnya, Bulan adalah satelit terpadat kedua setelah Io, satelit Yupiter</p>";
    }
}

function ChangeImage(e){
    let sel = document.getElementById("Image-Highlight");
    sel.firstElementChild.src = e.target.src;
    selBar.innerHTML = "<p></p>"
}



