let purchaseBtnIds = ["btn0", "btn1", "btn2", "btn3", "btn4", "btn5", "btn6", "btn7", "btn8", "btn9"]; 

for (var i = 0; i < purchaseBtnIds.length; i++) {
    let btns = document.getElementById(purchaseBtnIds[i]);

    btns.onclick = function() {
        if (btns.style.background === "rgb(72, 248, 95)") {
            btns.style.background = "#F0F0F0";
        } else {
            btns.style.background = "rgb(72, 248, 95)";
        }
    };
}