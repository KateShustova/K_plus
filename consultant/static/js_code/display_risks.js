function display_risk_message(question_id,user_type){
    if (user_type === "phys") {
        console.log("show risk for phys question number: "+ question_id)
        document.getElementById('risk_message_phys_'+question_id).style.display = 'block';
    }
    else{
        console.log("show risk for legal question number: "+ question_id)
        document.getElementById('risk_message_legal_'+question_id).style.display = 'block';
    }
}

function hide_risk_message(question_id,user_type){
    if (user_type === "phys") {
        console.log("hide risk for phys question number: "+ question_id)
        document.getElementById('risk_message_phys_'+question_id).style.display = 'none';
    }
    else{
         console.log("hide risk for legal question number: "+ question_id)
         document.getElementById('risk_message_legal_'+question_id).style.display = 'none';
    }
}

function update_risk_header(){

    // Спрятать все заголовки

    var header_id_list = [  "high_risk_message_header",
                    "low_risk_message_header",
                    "no_risk_but_questions_left_message_header",
                    "no_risk_test_finished_message_header"];

    for (var i = 0; i < header_id_list.length; i++) {
        document.getElementById(header_id_list[i]).style.display = 'none';
    }

    var user_type = sessionStorage.getItem("user_type")
    var risk_list = JSON.parse(sessionStorage.getItem("risks"));
    var risk_level_phys_list = JSON.parse("[" + sessionStorage.getItem("risk_level_phys") + "]");
    var risk_level_legal_list = JSON.parse("[" + sessionStorage.getItem("risk_level_legal") + "]");
    // Показать нужный заголовок 

    // если массив с рисками создан
    if (sessionStorage.getItem("risks")){
        // Если рисков нет
        if(risk_list.length == 0 )
        {
            // Если физик
            if (sessionStorage.getItem("user_type") == "phys"){
                // Если вопросы закончились
                if (sessionStorage.getItem("now") == "21"){
                    console.log("show no_risk_test_finished_message_header")
                    document.getElementById('no_risk_test_finished_message_header').style.display = 'block';
                    return null;
                }
            }
            // Если юрик
            else{
                // Если вопросы закончились
                if (sessionStorage.getItem("now") == "18"){
                    console.log("show no_risk_test_finished_message_header")
                    document.getElementById('no_risk_test_finished_message_header').style.display = 'block';
                    return null;
                }
            }

            console.log("show no_risk_but_questions_left_message_header")
            document.getElementById('no_risk_but_questions_left_message_header').style.display = 'block';
        }
        // Если риски есть
        else{
            if(user_type == "phys"){
                for(var i = 0; i<risk_list.length; i++){
                    if(risk_level_phys_list[risk_list[i]-1]===1){
                        console.log("show high_risk_message_header")
                        document.getElementById('high_risk_message_header').style.display = 'block';
                        return null;
                    }
                }
                console.log("show low_risk_message_header")
                document.getElementById('low_risk_message_header').style.display = 'block';
                return null;
            }
            else{
                if(user_type == "legal"){
                    for(var i = 0; i<risk_list.length; i++){
                        if(risk_level_legal_list[risk_list[i]-1]===1){
                            console.log("show high_risk_message_header")
                            document.getElementById('high_risk_message_header').style.display = 'block';
                            return null;
                        }
                    }
                    console.log("show low_risk_message_header")
                    document.getElementById('low_risk_message_header').style.display = 'block';
                    return null;
                }   
            }
        }
    }
    else{
        console.log("show no_risk_but_questions_left_message_header")
        document.getElementById('no_risk_but_questions_left_message_header').style.display = 'block';
    }
    
    
}