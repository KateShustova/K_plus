function pagination_switch(cnt) {
    var pag = document.querySelectorAll(".button-button");
    for (var i = 0; i < cnt; i++) {
        pag[i].onclick = function(e) {
            pagination(e); // переход на новую страницу
            check(); // обновление шапки рисков
        };
    }
}