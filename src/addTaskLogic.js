import toDoFormCreator from './todoListForm';
import formSubmitButton from './todoListFormSubmit';


const addTask = document.querySelector('#addTask');
const addProject = document.querySelector('#addProject');

/*this function executes the form logic to create form and submit form together */

export default function addTaskFunc () {

    addTask.style.display = 'none';
    addProject.style.display = 'inline-block';

       toDoFormCreator();
        formSubmitButton();


}