import showTasks from "./showTasks";

export default function deleteATask() {
    function setUpDeleteListeners() {
        const arr = showTasks();

        arr.forEach((button, index) => {

            button.removeEventListener('click', handleDelete);

            button.addEventListener('click', handleDelete.bind(null,index));

            /*
            button.addEventListener('click', (e) => {

                console.log("The Task Has Been Deleted");

                let allFormData = JSON.parse(localStorage.getItem('allFormData'));
                //console.log(allFormData);


                //console.log(allFormData,"its form data");
                //   console.log(arr.indexOf(button));

                allFormData.splice(index, 1);
                //localStorage.removeItem('allFormData');

                //console.log(allFormData,"its form data");

                localStorage.setItem('allFormData', JSON.stringify(allFormData));

                refreshTasks();
                showTasks();
                //  location.reload();
            })
                */
        })
    }

    function handleDelete(index){
        let allFormData = JSON.parse(localStorage.getItem('allFormData'));
        allFormData.splice(index, 1);
        localStorage.setItem('allFormData', JSON.stringify(allFormData));
        refreshTasks();
    }

    function refreshTasks() {
        showTasks();
        setUpDeleteListeners();
    }
    setUpDeleteListeners();
}