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

    // Показать нужный заголовок 
    // Если рисков нет
    if (sessionStorage.getItem("risks") === null 
        || JSON.parse(sessionStorage.getItem("risks")).length == 0 
        || document.getElementById("d-q-ans-container_0") !== null){
        
        // Если вопросы закончились
        if (sessionStorage.getItem("user_type") == "phys"){
            if (sessionStorage.getItem("now") == "21"){
                console.log("show no_risk_test_finished_message_header")
                document.getElementById('no_risk_test_finished_message_header').style.display = 'block';
                return null;
            }
        }
        else{
            if (sessionStorage.getItem("now") == "18"){
                console.log("show no_risk_test_finished_message_header")
                document.getElementById('no_risk_test_finished_message_header').style.display = 'block';
                return null;
            }
        }
        console.log("show no_risk_but_questions_left_message_header")
        document.getElementById('no_risk_but_questions_left_message_header').style.display = 'block';
    }
    else{
        console.log("show high_risk_message_header")
        document.getElementById('high_risk_message_header').style.display = 'block';
    }
}