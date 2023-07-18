function btn_click_mark(element, id, value) {
    element.onclick = function(event) {
        document.getElementById('d-q-ans-container_' + id).setAttribute('data-last-value', element.value);
        update_data_in_localstorage(id, value);
        pagination_button(event, id);
        check();
        if (document.getElementById('d-q-ans-container_' + id).getAttribute("sub_id") != 0) {
            let idd = document.getElementById('d-q-ans-container_' + id).getAttribute("sub_id");
            if (document.getElementById('d-q-ans-container_' + idd) != null) {
                document.getElementById('d-q-ans-container_' + idd).removeAttribute("style");
            }
        }
    };
};

function btn_click(element, id) {
    element.onclick = function(event) {
        document.getElementById('d-q-ans-container_' + id).setAttribute('data-last-value', element.value);
        save_data_to_localstorage(id);
        pagination_button(event, id);
        check();
        if (document.getElementById('d-q-ans-container_' + id).getAttribute("sub_id") != 0) {
            let idd = document.getElementById('d-q-ans-container_' + id).getAttribute("sub_id");
            if (document.getElementById('d-q-ans-container_' + idd) != null) {
                document.getElementById('d-q-ans-container_' + idd).removeAttribute("style");
            }
        }
    };
};