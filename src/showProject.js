/* this function shows projects and ammends delete button to 
it which can be used to delete the completed tasks */

const addedForms = document.querySelector('#addedForms');

function createButton () {
    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('id','deleteProjectButton');
    deleteButton.textContent = 'Completed ✔';
    return deleteButton;
}

export default function showProjects () {

    let arrOfButtons = [];
    addedForms.innerHTML = '';

    const allProjectData = JSON.parse(localStorage.getItem('allProjectData'));
    //console.log(allProjectData);

    allProjectData.forEach((e) => {
        const userProject = document.createElement('span');
        userProject.setAttribute('id','userProject');

        const h3 = document.createElement('h3');
        const h31 = document.createElement('h3');

        h3.textContent = `Project: ${e.projectName}`;
        h31.textContent = `Details: ${e.projectDescription}`;
        userProject.appendChild(h3);
        userProject.appendChild(h31);
        addedForms.appendChild(userProject);

        const deleteButton1 = createButton();

        userProject.appendChild(deleteButton1);

        arrOfButtons.push(deleteButton1);
    });

    return arrOfButtons;

}

