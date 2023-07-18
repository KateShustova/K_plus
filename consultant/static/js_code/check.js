function check() {
    let span = document.getElementById("risks");
    if (sessionStorage.getItem("risks") === null || JSON.parse(sessionStorage.getItem("risks")).length == 0) {
        document.getElementById("risk-count").style.display = "none";
    } else {
        document.getElementById("risk-count").style.display = "block";
        var str = "";
        var t = JSON.parse(sessionStorage.getItem("risks"));
        for (let i = 0; i < t.length; i++) {
            str += t[i] + ", ";
        }
        span.innerText = "У вас " + JSON.parse(sessionStorage.getItem("risks")).length + " рисков \n Перейдите на вопросы " + str.substring(0, str.length - 2);
    }
    console.log(sessionStorage);
}