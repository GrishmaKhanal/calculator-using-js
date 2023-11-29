let string = "", displayString = "";
let buttons = document.querySelectorAll("button");
Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.innerText == "=") {
            string = eval(string);
            document.querySelector("#screen2").value = string;
        }
        else if(e.target.innerText == "AC")
        {
            string = "";
            displayString = "";
            document.querySelector("#screen1").value = string;
            document.querySelector("#screen2").value = "0";
        }
        else if(e.target.innerText == "<")
        {
            string = string.slice(0, -1);
            displayString = displayString.slice(0, -1);
            document.querySelector("#screen1").value = displayString;
        }
        else 
        {
            if(e.target.innerText == '×'){string = string + '*';}
            else if(e.target.innerText == '÷'){string = string + '/';}
            else if(e.target.innerText == 'mod'){string = string + '%';}
            else if(e.target.innerText == '%'){
                string = string + '/100*';
                displayString = displayString + '×';
            }
            else {string = string + e.target.innerText;}

            displayString += e.target.innerText;
            document.querySelector("#screen1").value = displayString;
        }
    });
});