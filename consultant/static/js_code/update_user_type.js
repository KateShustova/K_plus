function update_user_type(type) {
    if (!sessionStorage.getItem("user_type")) {
        sessionStorage.setItem("user_type", type);
    } else {
        if (sessionStorage.getItem("user_type") != type) {
            sessionStorage.clear();
            sessionStorage.setItem("user_type", type);
        }
    }
}