import '../src/styles.css';
import addTaskFunc from './addTaskLogic';
import additionalElements from './formAdditionalElements';
import saveFormDataFunc from './saveFormDataLogic';
import showTasks from './showTasks';
import deleteATask from './deleteTaskLogic';
import todoProjectFormCreator from './addProjectLogic';
import showProjects from './showProject';
import deleteAProject from './deleteProjectLogic';

const addTask = document.querySelector("#addTask");
const taskForm = document.querySelector('#taskForm');
const addProject = document.querySelector('#addProject');

taskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    saveFormDataFunc();
    showTasks();
    showProjects();

    /* incase the button to delete tasks activate after a refresh
    entire page reload helps in refreshing page and immediately making the buttons work */
   // location.reload();

   deleteATask();
   deleteAProject();

});

addTask.addEventListener('click' , (e) => {

    e.preventDefault();
    addTaskFunc();
    deleteATask();
    deleteAProject();
});

document.addEventListener('DOMContentLoaded' , () => {
    
    additionalElements();
    showTasks();
    showProjects();
    deleteATask();
    deleteAProject();
    
});

addProject.addEventListener('click',() => {
    todoProjectFormCreator();
});