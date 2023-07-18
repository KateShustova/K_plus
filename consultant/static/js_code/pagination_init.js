function pagination_init(cnt, qc) {
    // Выполняется на самой первой странице
    var count = cnt; //всего записей
    var cnt = qc; //сколько отображаем
    sessionStorage.setItem('now', 1); // инициализируем текущую позицию экрана
    var div_num = document.querySelectorAll(".num"); // выбираем все лейблы с вопросами
    var set = new Set(JSON.parse(sessionStorage.getItem("risks")));
    var element;

    for (var i = 1; i <= div_num.length; i++) {
        // все вопросы кроме первого скрываем
        if (i > cnt) {
            div_num[i - 1].style.display = "none";
        }

        // раскраска номеров вопросов
        element = document.getElementById("numbers_" + i);
        if (!sessionStorage.getItem(i)) {
            if (set.has(i)) {
                element.style = "border-radius: 40px; height:50px; width:50px; color:#800000;margin-right: 25px;border: 2.5px solid #01010A;font-size: 25px;";
            } else {
                element.style = "border-radius: 40px; height:50px; width:50px; color:#800000;margin-right: 25px;border: 2.5px solid #E86B52;font-size: 25px;";
            }
        } else {
            element.style = "border-radius: 40px; height:50px; width:50px; color:#800000;margin-right: 25px;border: 2.5px solid #1515EA;font-size: 25px;";
        }
    }
    element_first = document.getElementById("numbers_1");
    element_first.style.backgroundColor = "#808083";
}