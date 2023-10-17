import { layThongTinTuForm } from "./controller-v1.js";

let themMon = () => {
    let data = layThongTinTuForm();
    // destructuring
    let {ma,ten,loai,gia,khuyenMai,tinhTrang,hinhAnh,moTa} = data ;
    // show data len layout
    document.getElementById("spMa").innerText = ma ;
    document.getElementById('spTenMon').innerText = ten;
    document.getElementById('spLoaiMon').innerText = loai;
    document.getElementById('spGia').innerText = gia;
    document.getElementById('spKM').innerText = khuyenMai + "%";
    document.getElementById('spTT').innerText = tinhTrang == "0" ? "Hết" : "Còn";
    document.getElementById('pMoTa').innerText = moTa;
    document.getElementById('imgMonAn').src = hinhAnh;
    document.getElementById('spGiaKM').innerText = data.tinhGKM();
};
window.themMon = themMon ;
