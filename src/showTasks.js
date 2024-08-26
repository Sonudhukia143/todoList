/*this function shows the newly added tasks */
const addedTasks = document.querySelector('#addedTasks');

function createdeleteButton () {
    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('id','deleteTaskButton');
    deleteButton.textContent = 'Completed ✔';
    return deleteButton;
}



export default function showTasks () {

    let arrOfButtons = [];
    addedTasks.innerHTML = '';

    const allFormData = JSON.parse(localStorage.getItem('allFormData'));
   // console.log(allFormData);

    allFormData.forEach((e) => {
        const userTask = document.createElement('span');
        userTask.setAttribute('id','userTask');

        const h3 = document.createElement('h3');
        const h31 = document.createElement('h3');
        const h32 = document.createElement('h3');
        const h33 = document.createElement('h3');

        h3.textContent = `Task: ${e.taskTitle}`;
        h31.textContent = `Details: ${e.taskDetails}`;
        h32.textContent = `Deadline: ${e.taskDeadLine}`;
        h33.textContent = `Priority: ${e.imp}`;
        userTask.appendChild(h3);
        userTask.appendChild(h31);
        userTask.appendChild(h32);
        userTask.appendChild(h33);
        addedTasks.appendChild(userTask);

        const deleteButton1 = createdeleteButton();

        userTask.appendChild(deleteButton1);

        arrOfButtons.push(deleteButton1);
    });

    return arrOfButtons;

}


