function save_data_to_localstorage(number) {
    var current = sessionStorage.getItem('risks');
    if (!current) { // check if an item is already registered
        current = []; // if not, we initiate an empty array
    } else {
        current = JSON.parse(current); // else parse whatever is in
    }
    const index = current.indexOf(number);
    if (index == -1) {
        current.push(number);
    }
    current.sort((a, b) => String(a).localeCompare(String(b), undefined, { numeric: true }));
    sessionStorage.setItem('risks', JSON.stringify(current));
    sessionStorage.removeItem(number);
    console.log(sessionStorage);
}

function update_data_in_localstorage(id, value, flg) {
    sessionStorage.setItem(id, value);
    var current = sessionStorage.getItem('risks');
    if (!current) {
        current = [];
    } else {
        current = JSON.parse(current);
        const index = current.indexOf(id);
        if (flg && index > -1) {
            current.splice(index, 1);
        }
    }
    current.sort((a, b) => String(a).localeCompare(String(b), undefined, { numeric: true }));
    sessionStorage.setItem('risks', JSON.stringify(current));
    console.log(sessionStorage);
}