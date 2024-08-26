/* addition of any new element to form can be done here */
export default function toDoFormCreator () {

    const taskForm = document.querySelector('#taskForm');
    taskForm.innerHTML = '';

    const taskTitleLabel = document.createElement('label');
    taskTitleLabel.setAttribute('for','taskTitle');
    taskTitleLabel.textContent = 'Enter Your Task';
    const taskTitle = document.createElement('input');
    taskTitle.setAttribute('type','text');
    taskTitle.setAttribute('id','taskTitle');
    taskTitle.setAttribute('name','taskTitle');
    taskTitle.setAttribute('required',true);

    taskForm.appendChild(taskTitleLabel);
    taskForm.appendChild(taskTitle);

    const taskDeadLineLabel = document.createElement('label');
    taskDeadLineLabel.setAttribute('for','taskDeadLine');
    taskDeadLineLabel.textContent = 'Enter the deadline for the task'
    const taskDeadLine = document.createElement('input');
    taskDeadLine.setAttribute('id','taskDeadLine');
    taskDeadLine.setAttribute('type','date');
    taskDeadLine.setAttribute('name','taskDeadLine');
    taskDeadLine.setAttribute('required',true);

    taskForm.appendChild(taskDeadLineLabel);
    taskForm.appendChild(taskDeadLine);

    const taskDetailsLabel = document.createElement('label');
    taskDetailsLabel.setAttribute('for','taskDetails');
    taskDetailsLabel.textContent = 'ENTER DETAILS :'
    const taskDetails = document.createElement('textarea');
    taskDetails.setAttribute('id','taskDetails');
    taskDetails.setAttribute('name','taskDetails');
    taskDetails.setAttribute('rows','10');
    taskDetails.setAttribute('cols','30');
    taskDetails.setAttribute('required',true);

    taskForm.appendChild(taskDetailsLabel);
    taskForm.appendChild(taskDetails);

    const impLabel = document.createElement('label');
    impLabel.setAttribute('for','imp');
    impLabel.textContent = 'SELECT THE PRIORITY';
    const imp = document.createElement('select');
    const option1 = document.createElement('option');
    const option2 = document.createElement('option');
    const option3 = document.createElement('option');
    option1.textContent = option1.value = 'HIGH';
    option2.textContent = option2.value = 'LOW';
    option3.textContent = option3.value = 'AVERAGE';
    imp.setAttribute('id','imp');
    imp.setAttribute('name','imp');
    imp.setAttribute('type','dropdown'); 

    imp.appendChild(option1);
    imp.appendChild(option2);
    imp.appendChild(option3);
    taskForm.appendChild(imp);

}