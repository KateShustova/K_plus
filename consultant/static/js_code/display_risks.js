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