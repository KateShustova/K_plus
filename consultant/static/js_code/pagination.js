function update(num_, div_num, value) {
    console.log("sessionStorage");
    console.log(sessionStorage);
    if (sessionStorage.getItem("user_type") == "phys"){
        if (sessionStorage.getItem("now") == "21"){
            document.getElementById("d-q-ans-container-last").style.display = "block";
        }
        else{
            document.getElementById("d-q-ans-container-last").style.display = "none";
        }
    }
    else{
        if (sessionStorage.getItem("now") == "18"){
            document.getElementById("d-q-ans-container-last").style.display = "block";
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
                element.style = "border-radius: 40px; height:50px; width:50px; color:#01010a;margin-right: 25px;border: 2.5px solid #e86b52;font-size: 25px;";
            } else {
                element.style = "border-radius: 40px; height:50px; width:50px; color:#01010a;margin-right: 25px;border: 2.5px solid #1515ea;font-size: 25px;";
            }
        } else {
            element.disabled = false;
            element.style = "border-radius: 40px; height:50px; width:50px; color:#01010a;margin-right: 25px;border: 2.5px solid #1515EA;font-size: 25px;";
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
//#1515ea - blue
//#01010a - black
//#800000 - dark red
//#e86b52 - bright red
//#808083 - gray

function pagination_button(event, index) {
    var num_ = index;
    var div_num = document.querySelectorAll(".num");

    var current = sessionStorage.getItem(index);
    if (!current) {
        save_data_to_localstorage(index);
    }
    update(num_, div_num);
    check_correct_answer();
    var t = num_ + 1;
    var element = document.getElementById("numbers_" + t);
    element.style.backgroundColor = "#808083";
}



function pagination(event) {
    var div_num = document.querySelectorAll(".num");
    var e = event || window.event;
    var target = e.target;
    var id = target.id;

    var num_ = parseInt(id.substr(8)) - 1;

    if (!sessionStorage.getItem("now")) {
        sessionStorage.setItem('now', 1);
        var current = parseInt(sessionStorage.getItem("now"));
    } else {
        var current = parseInt(sessionStorage.getItem("now"));
    }

    if (!sessionStorage.getItem(current)) {
        save_data_to_localstorage(current);
    }

    update(num_, div_num);
    check_correct_answer();
    var t = num_ + 1;
    var element = document.getElementById("numbers_" + t);
    element.style.backgroundColor = "#808083";
};

