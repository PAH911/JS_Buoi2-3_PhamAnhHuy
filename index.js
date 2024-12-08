// Add event chuyển tab giữa các bài
function changeContent(bai) {
  const content1 = document.getElementById("content_1");
  const content2 = document.getElementById("content_2");
  const content3 = document.getElementById("content_3");
  const content4 = document.getElementById("content_4");
  const content5 = document.getElementById("content_5");

  if (bai === "Bai1") {
    content1.style.display = "block";
    content2.style.display = "none";
    content3.style.display = "none";
    content4.style.display = "none";
    content5.style.display = "none";
  } else if (bai === "Bai2") {
    content2.style.display = "block";
    content1.style.display = "none";
    content3.style.display = "none";
    content4.style.display = "none";
    content5.style.display = "none";
  } else if (bai === "Bai3") {
    content3.style.display = "block";
    content1.style.display = "none";
    content2.style.display = "none";
    content4.style.display = "none";
    content5.style.display = "none";
  } else if (bai === "Bai4") {
    content4.style.display = "block";
    content1.style.display = "none";
    content2.style.display = "none";
    content3.style.display = "none";
    content5.style.display = "none";
  } else if (bai === "Bai5") {
    content5.style.display = "block";
    content1.style.display = "none";
    content2.style.display = "none";
    content3.style.display = "none";
    content4.style.display = "none";
  }
}

// Bài 1: Tính tiền lương nhân viên theo số ngày làm việc và lương 1 ngày
function tinhTongLuong() {
  // input
  var songay = document.getElementById("songay").value;
  var luong1ngay = document.getElementById("luong1ngay").value;

  // progress
  tongLuong = songay * luong1ngay;
  document.getElementById("tongLuong").innerHTML = tongLuong.toLocaleString();

  // output
  var tongLuong = 0;
}

// Bài 2: Tính giá trị trung bình của 5 số
function tinhTrungBinh() {
  // Input
  var soThu1 = document.getElementById("soThu1").value;
  var soThu2 = document.getElementById("soThu2").value;
  var soThu3 = document.getElementById("soThu3").value;
  var soThu4 = document.getElementById("soThu4").value;
  var soThu5 = document.getElementById("soThu5").value;

  // progress
  var sum =
    parseInt(soThu1) +
    parseInt(soThu2) +
    parseInt(soThu3) +
    parseInt(soThu4) +
    parseInt(soThu5);
  var trungBinh = sum / 5;
  document.getElementById("trungBinh").innerHTML = trungBinh;

  // output
  var trungBinh = 0;
}

// Bài 3: Quy đổi tiền từ USD sang VND
function doiTien() {
  // input
  var usd = document.getElementById("usd").value;

  // progress
  tongTien = 23500 * usd;
  document.getElementById("tongTien").innerHTML = tongTien.toLocaleString();

  // Output
  var tongTien = 0;
}

// Bài 4: Tính diện tích, chu vi hình chữ nhật
function tinh() {
  // input
  var chieuDai = document.getElementById("chieuDai").value;
  var chieuRong = document.getElementById("chieuRong").value;
  // console.log(chieuDai, chieuRong); -> check

  // progress
  dienTich = chieuDai * chieuRong;
  chuVi = (parseInt(chieuDai) + parseInt(chieuRong)) * 2;
  document.getElementById("dienTich").innerHTML = dienTich;
  document.getElementById("chuVi").innerHTML = chuVi;

  // output
  var dienTich = 0;
  var chuVi = 0;
}

// Bài 5: Tính tổng 2 ký số
function tinhKySo() {
  // input
  var num = document.getElementById("num").value;
  var hangChuc = 0;
  var hangDonVi = 0;

  // progress
  hangChuc = num / 10;
  hangDonVi = num % 10;
  KySo = parseInt(hangChuc) + parseInt(hangDonVi);
  document.getElementById("KySo").innerHTML = KySo;

  // output
  var KySo = 0;
}
