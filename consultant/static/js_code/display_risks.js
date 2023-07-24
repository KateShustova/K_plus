function display_risk_message(question_id){
    console.log("show risk for: "+ question_id)
    document.getElementById('risk_message_'+question_id).style.display = 'block';
}

function hide_risk_message(question_id){
    console.log("hide that shit! No risk for: "+ question_id)
    document.getElementById('risk_message_'+question_id).style.display = 'none';
}