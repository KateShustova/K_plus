function update(num_, div_num, value) {
    //console.log("sessionStorage");
    if (sessionStorage.getItem("user_type") == "phys"){
        if (sessionStorage.getItem("now") == "21"){
            document.getElementById("d-q-ans-container-last").style.display = "block";
            if (value === 0){
                document.getElementById("check_risk").click();
            }
        }
        else{
            document.getElementById("d-q-ans-container-last").style.display = "none";
        }
    }
    else{
        if (sessionStorage.getItem("now") == "18"){
            document.getElementById("d-q-ans-container-last").style.display = "block";
            if (value === 0){
                document.getElementById("check_risk").click();
            }
        }
        else{
            document.getElementById("d-q-ans-container-last").style.display = "none";
        }
    }

    var element;
    var set = new Set(JSON.parse(sessionStorage.getItem("risks")));
    for (var i = 1; i <= div_num.length; i++) {
        element = document.getElementById("numbers_" + i);
        if (!sessionStorage.getItem(i)) {
            if (set.has(i)) {
                element.disabled = false;
                element.style = "border-radius: 60%; height:2.7vw; width:6%; color:#01010a;margin-right: 25px;border: 2.5px solid #892222;font-size: 1.25vw;text-align: center;";
            } else {
                element.style = "border-radius: 60%; height:2.7vw; width:6%; color:#01010a;margin-right: 25px;border: 2.5px solid #413E3E;font-size: 1.25vw;text-align: center;";
            }
        } else {
            element.disabled = false;
            element.style = "border-radius: 60%; height:2.7vw; width:6%; color:#01010a;margin-right: 25px;border: 2.5px solid #413E3E;font-size: 1.25vw;text-align: center;";
        }

        if (i != num_ + 1) {
            div_num[i - 1].style.display = "none";
        } else {
            sessionStorage.setItem('now', i);
            var element = document.getElementById("numbers_" + i);
            element.style.backgroundColor = "#808083";
            div_num[i - 1].style.display = "block";
            document.getElementById("d-q-ans-container-last").style.display = "none";
        }
    }
//    check_correct_answer();
}

/* 
Color palette
-------------------
Серый - 413E3E
Зеленый - 378922
Красный - 892222
Желтый - C88F22
-------------------
*/


function pagination_button(event, index) {
    var num_ = index;
    var div_num = document.querySelectorAll(".num");

    var current = sessionStorage.getItem(index);
    if (!current) {
        save_data_to_localstorage(index);
    }

    update(num_, div_num, 0);
    check_correct_answer();
    update_risk_header();

    var t = num_ + 1;
    try{
        var element = document.getElementById("numbers_" + t);
        element.style.backgroundColor = "#808083";
    }
    catch (e){
    }
}



function pagination(event) {

    var current = sessionStorage.getItem("now")
    var user_type = sessionStorage.getItem("user_type")
    var div_num = document.querySelectorAll(".num");
    var e = event || window.event;
    var target = e.target;
    var id = target.id;

    var num_ = parseInt(id.substr(8)) - 1;

    if (!current) {
        sessionStorage.setItem('now', 1);
        var current = parseInt(current);
    } else {
        var current = parseInt(current);
    }

    if (!sessionStorage.getItem(current)) {
        save_data_to_localstorage(current);
    }

    update(num_, div_num, 1);
    check_correct_answer();
    var t = num_ + 1;
    var element = document.getElementById("numbers_" + t);
    element.style.backgroundColor = "#808083";

    display_risk_message(parseInt(current),user_type)
};

