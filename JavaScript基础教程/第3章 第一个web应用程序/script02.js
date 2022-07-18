window.onload = initAll;

function initAll() {
  if (document.getElementById) {
    for (var i = 0; i < 24; i++) {
      setSquare(i);
    }
  } else {
    alert("抱歉，您的浏览器不支持此脚本!");
  }
}

function setSquare(thisSquare) {
  var currSquare = "square" + i;
  var newNum = Math.floor(Math.random() * 75) + 1;

  document.getElementById(currSquare).innerHTML = newNum;

}

