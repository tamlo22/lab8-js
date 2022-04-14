function matHang(id, hinh, ten, gia, loai) {
    this.hinh = hinh;
    this.ten = ten;
    this.gia = gia;
    this.id = id;
    this.loai = loai;
    this.soLuong = 1;
    this.TongGia = this.gia * this.soLuong;
}

var id = 0;

var TongTien = 0;

var arrMatHang = new Array();



function hello(a) {

}
function themMatHang(hinh, ten, gia, loai) {
    var bo = true;
    var s = ten; // Ten 

    // Kiểm tra đã có mặt hàng trong giỏ hay chưa
    for (var i = 0; i < arrMatHang.length; i++) {
        if (loai == arrMatHang[i].loai) bo = false;
    }

    if (bo == true) {
        arrMatHang.push(new matHang(id, hinh, s, gia, loai));
        id++;

    } else alert('Đã có mặt hàng này trong giỏ hàng');
    document.getElementById('gioMuaHang').innerHTML = '';
    document.getElementById('tongTien').innerHTML = '';

    for (var i = 0; i < arrMatHang.length; i++) {
        document.getElementById('gioMuaHang').innerHTML += '<table><tr><td><img src="' + arrMatHang[i].hinh +
            '" width="70px" height="90px"></td><td>' + arrMatHang[i].ten + '</td><td><span class="red"><b>' +
            arrMatHang[i].TongGia + '.000₫</b></span></td><td><div class="soLuong"><div class="nutThem"></div><div class="HienSo">'
            + arrMatHang[i].soLuong + '</div><div class="Tang" onclick="soLuongTang(\'' + arrMatHang[i].loai
            + '\')">+</div><div class="Giam" onclick="soLuongGiam(\'' + arrMatHang[i].loai
            + '\')">-</div></div></td><td><input type="button" value="Xóa khỏi giỏ hàng" class="Xoa" onclick="Xoa(\''
            + arrMatHang[i].ten + '\')"></td></tr></table>';

    }

    // Xuất tổng tiền 
    for (var i = 0; i < arrMatHang.length; i++) {
        TongTien += Number(arrMatHang[i].TongGia);
    }
    document.getElementById('tongTien').innerHTML = "Tổng tiền : " + parseInt(TongTien) + ".000₫";
    TongTien = 0;


}

// Tăng 1 mặt hàng trong giỏ hàng
function soLuongTang(loai) {
    for (var i = 0; i < arrMatHang.length; i++) {
        if (loai == arrMatHang[i].loai) {
            if (arrMatHang[i].soLuong < 99) {
                arrMatHang[i].soLuong++;
                arrMatHang[i].TongGia = parseInt(arrMatHang[i].gia) * arrMatHang[i].soLuong;
                console.log(arrMatHang[i].soLuong);
            }
        }
    }

    document.getElementById('gioMuaHang').innerHTML = '';
    document.getElementById('tongTien').innerHTML = 'Tổng tiền : 0.0';
    for (var i = 0; i < arrMatHang.length; i++) {
        document.getElementById('gioMuaHang').innerHTML += '<table><tr><td><img src="' + arrMatHang[i].hinh
            + '" width="70px" height="90px"></td><td>' + arrMatHang[i].ten + '</td><td><span class="red"><b>'
            + arrMatHang[i].TongGia + '.000₫</b></span></td><td><div class="soLuong"><div class="nutThem"> </div><div class="HienSo">'
            + arrMatHang[i].soLuong + '</div><div class="Tang" onclick="soLuongTang(\'' + arrMatHang[i].loai + '\')">+</div><div class="Giam" onclick="soLuongGiam(\''
            + arrMatHang[i].loai + '\')">-</div></div></td><td><input type="button" value="Xóa khỏi giỏ hàng" class="Xoa" onclick="Xoa(\''
            + arrMatHang[i].ten + '\')"></td></tr></table>';

    }
    for (var i = 0; i < arrMatHang.length; i++) {
        TongTien += Number(arrMatHang[i].TongGia);

    }
    document.getElementById('tongTien').innerHTML = "Tổng tiền : " + parseInt(TongTien) + ".000₫";

    TongTien = 0;
}


// Giảm 1 mặt hàng
function soLuongGiam(loai) {
    for (var i = 0; i < arrMatHang.length; i++) {
        if (loai == arrMatHang[i].loai) {
            if (arrMatHang[i].soLuong > 1) {
                arrMatHang[i].soLuong--;
                arrMatHang[i].TongGia = parseInt(arrMatHang[i].gia) * arrMatHang[i].soLuong;
                console.log(arrMatHang[i].soLuong);
            }
        }
    }
    document.getElementById('gioMuaHang').innerHTML = '';
    document.getElementById('tongTien').innerHTML = 'Tổng tiền : 0₫';
    for (var i = 0; i < arrMatHang.length; i++) {
        document.getElementById('gioMuaHang').innerHTML += '<table><tr><td><img src="' + arrMatHang[i].hinh + '" width="70px" height="90px"></td><td>'
            + arrMatHang[i].ten + '</td><td><span class="red"><b>' + arrMatHang[i].TongGia + '.000₫</b></span></td><td><div class="soLuong"><div class="nutThem"><img src="img/NutThemPNG.png" alt="" width="50px" height=""></div><div class="HienSo">'
            + arrMatHang[i].soLuong + '</div><div class="Tang" onclick="soLuongTang(\'' + arrMatHang[i].loai + '\')">+</div><div class="Giam" onclick="soLuongGiam(\''
            + arrMatHang[i].loai + '\')">-</div></div></td><td><input type="button" value="Xóa khỏi giỏ hàng" class="Xoa" onclick="Xoa(\''
            + arrMatHang[i].ten + '\')"></td></tr></table>';

    }
    for (var i = 0; i < arrMatHang.length; i++) {
        TongTien += Number(arrMatHang[i].TongGia);

    }
    document.getElementById('tongTien').innerHTML = "Tổng tiền : " + parseInt(TongTien) + ".000₫";

    TongTien = 0;
}



// Xóa 1 mặt hàng 
function Xoa(tenId) {

    for (var i = 0; i < arrMatHang.length; i++) {
        if (tenId == arrMatHang[i].ten) {
            arrMatHang.splice(i, 1);
            console.log(arrMatHang[i].id);

        }

    }
    document.getElementById('gioMuaHang').innerHTML = '';
    document.getElementById('tongTien').innerHTML = 'Tổng tiền : 0₫';
    for (var i = 0; i < arrMatHang.length; i++) {
        document.getElementById('gioMuaHang').innerHTML += '<table><tr><td><img src="' + arrMatHang[i].hinh
            + '" width="70px" height="90px"></td><td>' + arrMatHang[i].ten + '</td><td><span class="red"><b>'
            + arrMatHang[i].TongGia + '.000₫</b></span></td><td><div class="soLuong"><div class="nutThem"></div><div class="HienSo">'
            + arrMatHang[i].soLuong + '</div><div class="Tang" onclick="soLuongTang(\''
            + arrMatHang[i].loai + '\')">+</div><div class="Giam" onclick="soLuongGiam(\'' + arrMatHang[i].loai
            + '\')">-</div></div></td><td><input type="button" value="Xóa khỏi giỏ hàng" class="Xoa" onclick="Xoa(\''
            + arrMatHang[i].ten + '\')"></td></tr></table>';

    }

    for (var i = 0; i < arrMatHang.length; i++) {
        TongTien += Number(arrMatHang[i].TongGia);

    }
    document.getElementById('tongTien').innerHTML = "Tổng tiền : " + parseInt(TongTien) + ".000₫";
    TongTien = 0;
}

