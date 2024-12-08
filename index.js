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

// Bài 1: Nhập vào số tiền lương(1h) và số giờ làm. In ra tổng lương bằng số giờ nhân tiền lương
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
