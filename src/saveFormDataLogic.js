/* this function saves works with the data provided by the form */

class userDataTodo {
    constructor(taskTitle,taskDeadLine,taskDetails,imp) {
        this.taskTitle = taskTitle;
        this.taskDeadLine = taskDeadLine;
        this.taskDetails = taskDetails;
        this.imp = imp;
    }
}

class userDataProject{
    constructor(projectDescription,projectName){
        this.projectName = projectName;
        this.projectDescription = projectDescription;
    }
}

export default function saveFormDataFunc() {
    addTask.style.display = 'inline-block';
    addProject.style.display = 'inline-block'

    const formData = new FormData(taskForm);

    const taskDeadLine = formData.get('taskDeadLine');
    const taskDetails = formData.get('taskDetails');
    const taskTitle = formData.get('taskTitle');
    const imp = formData.get('imp');

    const projectDescription = formData.get('projectDescription');
    const projectName = formData.get('projectName');

    if(taskDeadLine != null && taskTitle != null && imp != null && taskDetails != null){
        const userData = new userDataTodo(taskTitle,taskDeadLine,taskDetails,imp);

        //retreives the data array and then parses it to push new data in this same array which
        //is further pushed into data
        let allFormData = JSON.parse(localStorage.getItem('allFormData')) || [];
    
        allFormData.push(userData);
            
        try{
            localStorage.setItem('allFormData',JSON.stringify(allFormData));
            alert("Data Saved Succesfully");
        }catch{e => {
            console.log("unable to save data",e);   
        }}
    }else if(projectDescription != null && projectName != null){

        const userData = new userDataProject(projectDescription,projectName);

        let allProjectData = JSON.parse(localStorage.getItem('allProjectData')) || [];

        allProjectData.push(userData);

        try{
            localStorage.setItem('allProjectData',JSON.stringify(allProjectData));
            alert("Data Saved Succesfully");
        }catch{e => {
            console.log("unable to save data",e);   
        }}
    }else{
        console.log("no data found");
    }

    taskForm.innerHTML = '';
}