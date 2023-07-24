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
        element.disabled = true;
        if (!sessionStorage.getItem(i)) {
            if (set.has(i)) {
                element.style = "border-radius: 40px; height:50px; width:50px; color:#01010a;margin-right: 25px;border: 2.5px solid #892222;font-size: 25px;";
            } else {
                element.style = "border-radius: 40px; height:50px; width:50px; color:#01010a;margin-right: 25px;border: 2.5px solid #413E3E;font-size: 25px;";
            }
        } else {
            element.style = "border-radius: 40px; height:50px; width:50px; color:#01010a;margin-right: 25px;border: 2.5px solid #209404;font-size: 25px;";
        }
    }
    element_first = document.getElementById("numbers_1");
    element_first.style.backgroundColor = "#808083";
}