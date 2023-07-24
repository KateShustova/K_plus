function check_correct_answer(){
    if(document.getElementById("d-q-ans-container_0") === null){

        // вынес из цикла
        var array_values = JSON.parse("[" + sessionStorage.getItem("legal") + "]");
        //var current_question_id = sessionStorage.getItem("now") - 1

        for (var [key, value] of Object.entries(sessionStorage)) {
            if (!isNaN(parseInt(key))){
                var element = document.getElementById("numbers_" + key);
                if (sessionStorage.getItem("user_type") === "legal") {
                        //console.log("legal");
                        //console.log(key);
                        //console.log(value);
                        // Если ответ верный закрасить кружок зеленым и спрятать риск 
                        if (array_values[parseInt(key)-1] == value) {

                            hide_risk_message(parseInt(key));

                            update_data_in_localstorage(parseInt(key), value, true);
                            element.style = "border-radius: 40px; height:50px; width:50px; color:#01010a;margin-right: 25px;border: 2.5px solid #209404;font-size: 25px;";

                        // Если ответ неверный закрасить кружок красным и показать риск
                        } else {
                            element.style = "border-radius: 40px; height:50px; width:50px; color:#01010a;margin-right: 25px;border: 2.5px solid #e86b52;font-size: 25px;";
                            save_data_to_localstorage(parseInt(key));
                            
                            display_risk_message(parseInt(key));
                        }
                }
                if (sessionStorage.getItem("user_type") === "phys") {
                        var array_values = JSON.parse("[" + sessionStorage.getItem("phys") + "]");
                        // Если ответ верный закрасить кружок зеленым и спрятать риск 
                        if (array_values[parseInt(key)-1] == value) {
                            update_data_in_localstorage(parseInt(key), value, true);
                            element.style = "border-radius: 40px; height:50px; width:50px; color:#01010a;margin-right: 25px;border: 2.5px solid #209404;font-size: 25px;";

                            hide_risk_message(parseInt(key));
                        
                        // Если ответ неверный закрасить кружок красным и показать риск
                        } else {
                            element.style = "border-radius: 40px; height:50px; width:50px; color:#01010a;margin-right: 25px;border: 2.5px solid #e86b52;font-size: 25px;";
                            save_data_to_localstorage(parseInt(key));

                            display_risk_message(parseInt(key));
                        }
                }
            }
        }
    }
}