const taskForm = document.querySelector('#taskForm');

/*this function creates a submit button and appends it to the form*/
export default function formSubmitButton() {

    const submitButton = document.createElement('button');
    submitButton.setAttribute('id', 'submitButton');
    submitButton.setAttribute('type', 'submit');
    submitButton.innerText = 'Submit';
    taskForm.appendChild(submitButton);

}