export let renderFoodList = (foodArr) => {
    let contentHTML="";
    foodArr.forEach((food) => {
        let {ma,ten,gia,khuyenMai,hinhAnh,moTa,loai,tinhTrang} = food ;
        let trString = `<tr>
                            <td>${ma}</td>
                            <td>${ten}</td>
                            <td>${loai}</td>
                            <td>${gia}</td>
                            <td>${khuyenMai}</td>
                            <td>0</td>
                            <td>${tinhTrang}</td>
                            <td><button onclick=deleteFood(${ma}) class="btn btn-danger">Xoá</button></td>
                            <td><button onclick=editFood(${ma}) class="btn btn-primary">Sửa</button></td>
                        </tr>`
        contentHTML += trString ;    
    });

    document.getElementById("tbodyFood").innerHTML = contentHTML ;
};

const monChay = "loai1";
const monMan = "loai2";
const chay = true ;
const man = false;
const conMon =  true ;
const tinhTrangCon = "1";
const tinhTrangHet = "0";
export let showDataForm = (food) => {
    console.log(food)

    
    let {ma,
        ten,
        loai,
        gia,
        khuyenMai,
        tinhTrang,
        hinhAnh,
        moTa,}=food;
    document.getElementById("foodID").value= ma;
    document.getElementById("tenMon").value= ten;
    document.getElementById("loai").value= loai == loai == chay ? monChay : monMan;
    document.getElementById("giaMon").value= gia;
    document.getElementById("khuyenMai").value= khuyenMai;
    document.getElementById("tinhTrang").value= tinhTrang == conMon ? tinhTrangCon : tinhTrangHet;
    document.getElementById("hinhMon").value= hinhMon;
    document.getElementById("moTa").value= moTa;

}