import showProjects from "./showProject";

export default function deleteAProject() {
    function setUpDeleteListeners() {
        const arr = showProjects();

        arr.forEach((button, index) => {

            button.removeEventListener('click', handleDelete);

            button.addEventListener('click', handleDelete.bind(null,index));
        })
    }

    function handleDelete(index){
        let allProjectData = JSON.parse(localStorage.getItem('allProjectData'));
        allProjectData.splice(index, 1);
        localStorage.setItem('allProjectData', JSON.stringify(allProjectData));
        refreshTasks();
    }

    function refreshTasks() {
        showProjects();
        setUpDeleteListeners();
    }
    setUpDeleteListeners();
}