// the function creates a project form when executed
const addTask = document.querySelector('#addTask');
const addProject = document.querySelector('#addProject');

export default function todoProjectFormCreator () {
    const taskForm = document.querySelector('#taskForm');
    addTask.style.display = 'inline-block';
    addProject.style.display = 'none';

    //empties the emmbedded form and adds new elements 
    taskForm.innerHTML = '';

    const projectNameLabel = document.createElement('label');
    projectNameLabel.setAttribute('for','projectName');
    projectNameLabel.textContent = 'Create A Project';
    const projectName = document.createElement('input');
    projectName.setAttribute('id','projectName');
    projectName.setAttribute('name','projectName');
    projectName.setAttribute('required','true');
    taskForm.appendChild(projectNameLabel);
    taskForm.appendChild(projectName);

    const projectDescriptionLabel = document.createElement('label');
    projectDescriptionLabel.setAttribute('for','projectDescription');
    projectDescriptionLabel.textContent = 'Describe Your Project';
    const projectDescription = document.createElement('textarea');
    projectDescription.setAttribute('id','projectDescription');
    projectDescription.setAttribute('rows','10');
    projectDescription.setAttribute('cols','30');
    projectDescription.setAttribute('name','projectDescription');
    projectDescription.setAttribute('required','true');
    taskForm.appendChild(projectDescriptionLabel);
    taskForm.appendChild(projectDescription);

    const projectSubmitButton = document.createElement('button');
    projectSubmitButton.textContent = 'Submit';
    projectSubmitButton.setAttribute('id', 'projectSubmitButton');
    projectSubmitButton.setAttribute('type', 'submit');
    taskForm.appendChild(projectSubmitButton);

}