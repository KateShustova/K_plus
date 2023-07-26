function check_correct_answer(){
    if(document.getElementById("d-q-ans-container_0") === null){

        // вынес из цикла
        var array_values_legal = JSON.parse("[" + sessionStorage.getItem("legal") + "]");
        var array_values_phys = JSON.parse("[" + sessionStorage.getItem("phys") + "]");
        //var current_question_id = sessionStorage.getItem("now") - 1

        for (var [key, value] of Object.entries(sessionStorage)) {
            if (!isNaN(parseInt(key))){
                var element = document.getElementById("numbers_" + key);
                if (sessionStorage.getItem("user_type") === "legal") {
                        // Если ответ верный закрасить кружок зеленым и спрятать риск 
                        if (array_values_legal[parseInt(key)-1] == value) {

                            hide_risk_message(parseInt(key),"legal");

                            update_data_in_localstorage(parseInt(key), value, true);
                            element.style = "border-radius: 60%; height:2.7vw; width:6%; color:#01010a;margin-right: 25px;border: 2.5px solid #209404;font-size: 1.25vw;text-align: center;";

                        // Если ответ неверный закрасить кружок красным и показать риск
                        } else {
                            element.style = "border-radius: 60%; height:2.7vw; width:6%; color:#01010a;margin-right: 25px;border: 2.5px solid #892222;font-size: 1.25vw;text-align: center;";
                            save_data_to_localstorage(parseInt(key));
                            
                            display_risk_message(parseInt(key),"legal");
                        }
                }
                if (sessionStorage.getItem("user_type") === "phys") {
                        // Если ответ верный закрасить кружок зеленым и спрятать риск
                        if (array_values_phys[parseInt(key)-1] == value) {
                            update_data_in_localstorage(parseInt(key), value, true);
                            element.style = "border-radius: 60%; height:2.7vw; width:6%; color:#01010a;margin-right: 25px;border: 2.5px solid #209404;font-size: 1.25vw;text-align: center;";

                            hide_risk_message(parseInt(key),"phys");
                        
                        // Если ответ неверный закрасить кружок красным и показать риск
                        } else {
                            element.style = "border-radius: 60%; height:2.7vw; width:6%; color:#01010a;margin-right: 25px;border: 2.5px solid #892222;font-size: 1.25vw;text-align: center;";
                            save_data_to_localstorage(parseInt(key));

                            display_risk_message(parseInt(key),"phys");
                        }
                }
            }
        }
    }
}