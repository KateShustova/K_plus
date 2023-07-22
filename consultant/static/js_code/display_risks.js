function display_risks(){   
    // Retrieve the risk list from local storage
    var questions_with_risk = sessionStorage.getItem("risks");

    // Get the div element where we will display the questions
    var risk_list_div = document.getElementById('risk-list');
    
    if (sessionStorage.getItem("risks") === null || JSON.parse(sessionStorage.getItem("risks")).length == 0) {
        document.getElementById("risk-count").style.display = "none";
    } 
    else{
        // Loop through each question in the risk list
        for (var i = 0; i < questions_with_risk.length; i++) {

            var question_id = questions_with_risk[i];

            if (question_id === '[' || question_id === ']' || question_id === ',' || question_id === ' ') {
                continue;
            }

            var element = document.getElementById("risk_message_" + question_id);

            if (element) {
                // Element with ID "myElement" exists
                continue;
            }

            var questionElement = document.createElement('p');
            questionElement.id = "risk_message_" + question_id

            questionElement.innerHTML = question_id +':it works';
                
            // Add classes to the div element
            questionElement.classList.add('cont-ref', 'd-flex', 'justify-content-center');
            questionElement.setAttribute('width', '100%');

            // Add styles to the div element
            questionElement.style.paddingTop = '20px';
            questionElement.style.borderRadius = '30px';
            questionElement.style.padding = '10px';
            questionElement.style.width = '90%';
            questionElement.style.backgroundColor = '#8AB11BA3';
            questionElement.style.fontSize = '12px';
            questionElement.style.textAlign = 'center';
         
            risk_list_div.appendChild(questionElement);
        }
    }
}

       /*
                // Create a new span element
                var newSpan = document.createElement('span');
                newSpan.style.fontSize = '160%';
                newSpan.style.paddingLeft = '10px';
                newSpan.style.paddingRight = '10px';
                newSpan.textContent = 'text';

                // Append the span element to the div element
                //questionElement.appendChild(newSpan);
                */

            // Add the new element to the page