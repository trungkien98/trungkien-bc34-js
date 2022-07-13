var format = new Intl.NumberFormat("vn-VN");
//bai1
document.getElementById("btnCountSalary").onclick = function () {
  var daySalary = 100000;
  var day = document.getElementById("days").value;
  var salary = "";
  salary = daySalary * day;
  document.getElementById("showSalary").innerHTML =
    "<p> Lương của bạn là:" + format.format(salary) + " vnđ</p>";
  document.getElementById("showSalary").className =
    " mt-2 text-center bg-warning";
};

//bai tap thao luan
document.getElementById("btnCountCharity").onclick = function () {
  var nameMovies = document.getElementById("nameMovies").value;
  var adultCost = document.getElementById("adultCost").value * 1;
  var kidCost = document.getElementById("kidCost").value * 1;
  var adultNumber = document.getElementById("adultNumber").value * 1;
  var kidNumber = document.getElementById("kidNumber").value * 1;
  var percent = document.getElementById("percent").value * 1;

  var totalCost = "";
  totalCost = adultCost * adultNumber + kidCost * kidNumber;
  var charity = "";
  charity = (totalCost * percent) / 100;
  var totalNumber = adultNumber + kidNumber;
  var profit = totalCost - charity;
  var showMoney = "";

  showMoney += "<p>Ten phim la:" + nameMovies + "</p>";
  showMoney += "<p>So ve da ban la:" + format.format(totalNumber) + "</p>";
  showMoney +=
    "<p>Tong so tien thu duoc la:" + format.format(totalCost) + "vnd</p>";
  showMoney +=
    "<p>Tong so tien tu thien la:" + format.format(charity) + "vnd</p>";
  showMoney += "<p>Loi nhuan la:" + format.format(profit) + "vnd</p>";
  document.getElementById("showMoney").innerHTML = showMoney;
  document.getElementById("showMoney").className =
    "text-center bg-success rounded ";
};

//bai5
document.getElementById("btnTotal").onclick = function () {
  var number = document.getElementById("num").value;

  var numTens = Math.floor(Math.floor(parseInt(number) % 100) / 10);
  var numUnit = Math.floor(Math.floor(parseInt(number) % 100) % 10);
  var totalNumber = "";
  totalNum = numTens + numUnit;
  document.getElementById("totalNum").innerHTML =
    "<p> Tổng 3 ký số là: " + totalNum + "</P>";
  document.getElementById("totalNum").className =
    " mt-3 text-white bg-danger text-center ";
};

//bai4
document.getElementById("btnCount").onclick = function () {
  var horizontal = document.getElementById("horizontal").value;
  var height = document.getElementById("height").value;
  var area = "";
  area = horizontal * height;
  var perimeter = "";
  perimeter = (parseInt(horizontal) + parseInt(height)) * 2;
  var showStatic = "";
  showStatic += "<p>Diện tích hình chữ nhật là: " + area + "</p>";
  showStatic += "<p>Chu vi hình chữ nhật là: " + perimeter + "</p>";
  document.getElementById("showStatic").innerHTML = showStatic;
};

//bai3
document.getElementById("btnChangeMoney").onclick = function () {
  var dolar = document.getElementById("changeMoney").value;
  var vnd = 23500;
  var moneyChanged = dolar * vnd;
  var show = "";
  show +=
    "<p> Số tiền bạn nhận được là: " + format.format(moneyChanged) + "vnd</p>";
  document.getElementById("showCurrency").innerHTML = show;
};
//bai2
document.getElementById("btnAvarageNumber").onclick = function () {
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  var num3 = document.getElementById("num3").value;
  var num4 = document.getElementById("num4").value;
  var num5 = document.getElementById("num5").value;
  var numAvarage = "";
  numAvarage =
    (parseInt(num1) +
      parseInt(num2) +
      parseInt(num3) +
      parseInt(num4) +
      parseInt(num5)) /
    5;
  var showAverage = "";
  showAverage += "<p>Trung bình của năm số là: " + numAvarage + "</p>";
  document.getElementById("showAverage").innerHTML = showAverage;
};
