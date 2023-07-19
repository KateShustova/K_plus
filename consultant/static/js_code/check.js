function check() {
    let span = document.getElementById("risks");
    if (sessionStorage.getItem("risks") === null || JSON.parse(sessionStorage.getItem("risks")).length == 0 || document.getElementById("d-q-ans-container_0") !== null) {
        document.getElementById("risk-count").style.display = "none";
    } else {
        document.getElementById("risk-count").style.display = "block";
        var str = "";
        var t = JSON.parse(sessionStorage.getItem("risks"));
        for (let i = 0; i < t.length; i++) {
            str += t[i] + ", ";
        }
        var ln = JSON.parse(sessionStorage.getItem("risks")).length;
        if(ln >= 2 && ln <= 4){
            var txt = "У вас " + ln + " риска \n Перейдите на вопросы " + str.substring(0, str.length - 2);
        }
        else if (ln === 1){
            var txt = "У вас " + ln + " риск \n Перейдите на вопрос " + str.substring(0, str.length - 2);
        }
        else{
            var txt = "У вас " + ln + " рисков \n Перейдите на вопросы " + str.substring(0, str.length - 2);
        }
        span.innerText = txt;
    }
    console.log(sessionStorage);
}