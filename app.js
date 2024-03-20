// header
var logo = document.getElementById("logo");
var buyBtn = document.getElementById("buy-btn");
var footLogo = document.getElementById("footer-logo");

function startAnimate(id) {
  if (id === "logo") {
    logo.setAttribute(
      "class",
      "animate__animated animate__bounceIn animate__fast animate__infinite infinite"
    );
  } else if (id === "buyBtn") {
    buyBtn.setAttribute(
      "class",
      "animate__animated animate__rotateInUpLeft animate_faster"
    );
  } else if (id === "footer-logo") {
    footLogo.setAttribute(
      "class",
      "animate__animated animate__bounceIn animate__fast animate__infinite infinite"
    );
  }
}

function stopAnimate(id) {
  if (id === "logo") {
    logo.removeAttribute("class");
  } else if (id === "buyBtn") {
    buyBtn.removeAttribute("class");
  } else if (id === "footer-logo") {
    footLogo.removeAttribute("class");
  }
}

logo.addEventListener("mouseover", startAnimate.bind(null, "logo"));
buyBtn.addEventListener("mouseover", startAnimate.bind(null, "buyBtn"));
footLogo.addEventListener("mouseover", startAnimate.bind(null, "footer-logo"));
logo.addEventListener("mouseout", stopAnimate.bind(null, "logo"));
buyBtn.addEventListener("mouseout", stopAnimate.bind(null, "buyBtn"));
footLogo.addEventListener("mouseout", stopAnimate.bind(null, "footer-logo"));

// bg
var btnBox = document.getElementById("btn-box");
var shopBox = document.getElementById("shop-box");

btnBox.onmouseover = function () {
  shopBox.className = "shop-box-style";
};

btnBox.onmouseout = function () {
  shopBox.className = "shop-box";
};

// cards-body
var btnBox1 = document.getElementById("btn-box1");
var btnBox2 = document.getElementById("btn-box2");
var btnBox1p = btnBox1.getElementsByTagName("p");
var btnBox2p = btnBox2.getElementsByTagName("p");

function addBlue(id) {
  if (id === "btnBox1") {
    btnBox1.style.backgroundColor = "blue";
    btnBox1p[0].style.color = "white";
  } else if (id === "btnBox2") {
    btnBox2.style.backgroundColor = "blue";
    btnBox2p[0].style.color = "white";
  }
}

function removeBlue(id) {
  if (id === "btnBox1") {
    btnBox1.style.backgroundColor = "white";
    btnBox1p[0].style.color = "black";
  } else if (id === "btnBox2") {
    btnBox2.style.backgroundColor = "white";
    btnBox2p[0].style.color = "black";
  }
}

btnBox1.addEventListener("mouseover", function () {
  addBlue("btnBox1");
});

btnBox2.addEventListener("mouseover", function () {
  addBlue("btnBox2");
});

btnBox1.addEventListener("mouseout", function () {
  removeBlue("btnBox1");
});

btnBox2.addEventListener("mouseout", function () {
  removeBlue("btnBox2");
});

var cards = document.getElementById("cards-body").getElementsByTagName("img");

function box(id) {
  if (id === "card1") {
    cards[0].style.boxShadow = "rgb(36 93 232) 0px 0px 20px 12px";
    cards[0].style.borderRadius = "30px";
  } else if (id === "card2") {
    cards[1].style.boxShadow = "rgb(36 93 232) 0px 0px 20px 12px";
    cards[1].style.borderRadius = "30px";
  }
}

function boxRemove(id) {
  if (id === "card1") {
    cards[0].style.boxShadow = "";
  } else if (id === "card2") {
    cards[1].style.boxShadow = "";
  }
}

cards[0].addEventListener("mouseover", function () {
  box("card1");
});

cards[1].addEventListener("mouseover", function () {
  box("card2");
});

cards[0].addEventListener("mouseout", function () {
  boxRemove("card1");
});

cards[1].addEventListener("mouseout", function () {
  boxRemove("card2");
});

// footer-cards
var imgs = document.getElementById("footer-cards").getElementsByTagName("img");
var icons = document.getElementById("footer-cards").getElementsByTagName("i");

function imgAnimate(no) {
  imgs[no].style.transform = "scale(1.2) rotate(9deg)";
  imgs[no].style.opacity = "0.5";
  imgs[no].style.transition = "transform 0.4s ease-in-out";
}

function imgEndAnimate(no) {
  imgs[no].style.transform = "scale(1) rotate(0deg)";
  imgs[no].style.opacity = "1";
  imgs[no].style.transition = "transform 0.4s ease-out-in";
}

for (var i = 0; i < imgs.length; i++) {
  (function (index) {
    imgs[index].addEventListener("mouseover", function () {
      imgAnimate(index);
    });
    imgs[index].addEventListener("mouseout", function () {
      imgEndAnimate(index);
    });
  })(i);
}

for (var j = 0; j < icons.length; j++) {
  (function (index) {
    icons[index].addEventListener("mouseover", function () {
      imgAnimate(index);
    });
    icons[index].addEventListener("mouseout", function () {
      imgEndAnimate(index);
    });
  })(j);
}