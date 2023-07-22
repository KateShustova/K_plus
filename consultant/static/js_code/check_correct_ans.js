function check_correct_answer(){
    if(document.getElementById("d-q-ans-container_0") === null){
        for (var [key, value] of Object.entries(sessionStorage)) {
            if (!isNaN(parseInt(key))){
                var element = document.getElementById("numbers_" + key);
                if (sessionStorage.getItem("user_type") === "legal") {
                        console.log("legal");
                        console.log(key);
                        console.log(value);
                        // Если ответ верный закрасить кружок зеленым
                        if (sessionStorage.getItem("legal")[parseInt(key)-1] == value) {
                            element.style = "border-radius: 40px; height:50px; width:50px; color:#01010a;margin-right: 25px;border: 2.5px solid #209404;font-size: 25px;";
                        // Если ответ неверный закрасить кружок красным
                        } else {
                            element.style = "border-radius: 40px; height:50px; width:50px; color:#01010a;margin-right: 25px;border: 2.5px solid #e86b52;font-size: 25px;";
                            save_data_to_localstorage(parseInt(key));
                        }
                }
                if (sessionStorage.getItem("user_type") === "phys") {
                        // Если ответ верный закрасить кружок зеленым
                        if (sessionStorage.getItem("phys")[parseInt(key)-1] == value) {
                            element.style = "border-radius: 40px; height:50px; width:50px; color:#01010a;margin-right: 25px;border: 2.5px solid #209404;font-size: 25px;";
                        // Если ответ неверный закрасить кружок красным
                        } else {
                            element.style = "border-radius: 40px; height:50px; width:50px; color:#01010a;margin-right: 25px;border: 2.5px solid #e86b52;font-size: 25px;";
                            save_data_to_localstorage(parseInt(key));
                        }
                }
            }
        }
    }
}