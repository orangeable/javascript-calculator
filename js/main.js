// local variables:
var output   = document.getElementsByClassName("output")[0];
var equation = "";
var number   = "";


// button click:
var buttons = document.getElementsByClassName("btn");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        var id = this.getAttribute("data-id");
        var type = this.getAttribute("data-type");

        switch (type) {
            case "clear":
                number = "";
                equation = "";
                output.innerHTML = 0;
                break;

            case "operator":
                equation += id;
                output.innerHTML = number + " " + id;
                number = "";
                break;

            case "symbol":
                number += id;
                equation += id;
                output.innerHTML = number;
                break;

            case "equal":
                number = eval(equation);
                output.innerHTML = number;
                number = "";
                equation = "";
                break;

            default:
                number += id;
                equation += id;
                output.innerHTML = number;
                break;
        }
    }, false);
}


// keyword enter:
document.addEventListener("keyup", function(event) {
    if (event.keyCode != 13) {
        for (var i = 0; i < buttons.length; i++) {
            var id = buttons[i].getAttribute("data-id");

            if (id == event.key) {
                buttons[i].click();
            }
        }
    }
    else {
        document.getElementById("equal").click();
    }
}, false);
