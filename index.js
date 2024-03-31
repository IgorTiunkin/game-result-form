let fieldCounter = 1;

function addField() {
    fieldCounter++;
    const formFields = document.getElementById('formFields');

    const newField = document.createElement('div');
    newField.className = 'form-group';
    newField.innerHTML = `
                <label for="QuestionNumber${fieldCounter}">Question Number:</label>
                <input type="number" name="questionNumber${fieldCounter}" id="QuestionNumber${fieldCounter}">
                <label for="AnswerNumber${fieldCounter}">Your Answer:</label>
                <input type="text" name="answerNumber${fieldCounter}" id="AnswerNumber${fieldCounter}">
            `;

    formFields.appendChild(newField);
}