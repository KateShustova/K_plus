function btn_click_mark(element, id, value) {
    element.onclick = function(event) {
        document.getElementById('d-q-ans-container_' + id).setAttribute('data-last-value', element.value);
        update_data_in_localstorage(id, value, false);
        pagination_button(event, id, value);
        check();
    };
};

function btn_click(element, id) {
    element.onclick = function(event) {
        document.getElementById('d-q-ans-container_' + id).setAttribute('data-last-value', element.value);
        // выводим риск
        display_risk_message(id);

        save_data_to_localstorage(id);
        pagination_button(event, id);
        check();
    };
};