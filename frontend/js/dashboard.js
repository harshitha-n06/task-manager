const BASE_URL = "http://localhost:8000/api/tasks";

const taskForm = document.getElementById("taskForm");

const taskGrid = document.getElementById("taskGrid");

const searchInput = document.getElementById("searchInput");

const token = localStorage.getItem("token");

/* REDIRECT IF NOT LOGGED IN */

if(!token){

    window.location.href = "login.html";
}



/* FETCH TASKS */

async function fetchTasks(){

    try{

        const response = await fetch(BASE_URL, {

            headers:{
                Authorization:token
            }

        });

        const tasks = await response.json();

        displayTasks(tasks);

    }
    catch(err){

        console.log(err);
    }

}



/* DISPLAY TASKS */

function displayTasks(tasks){

    taskGrid.innerHTML = "";

    if(tasks.length === 0){

        taskGrid.innerHTML = `
            <h3>No Tasks Found</h3>
        `;

        return;
    }

    tasks.forEach((task)=>{

        const taskCard = document.createElement("div");

        taskCard.classList.add("task-card");

        taskCard.innerHTML = `

            <h3>${task.title}</h3>

            <p>${task.description}</p>

            <span class="status ${task.completed ? "completed" : "pending"}">

                ${task.completed ? "Completed" : "Pending"}

            </span>

            <div class="task-buttons">

                <button onclick="toggleTask('${task._id}')">

                    ${task.completed ? "Undo" : "Complete"}

                </button>

                <button onclick="deleteTask('${task._id}')">

                    Delete

                </button>

            </div>

        `;

        taskGrid.appendChild(taskCard);

    });

}



/* ADD TASK */

taskForm.addEventListener("submit", async (e)=>{

    e.preventDefault();

    const title = document.getElementById("title").value;

    const description = document.getElementById("description").value;

    try{

        await fetch(BASE_URL, {

            method:"POST",

            headers:{
                "Content-Type":"application/json",
                Authorization:token
            },

            body:JSON.stringify({
                title,
                description
            })

        });

        taskForm.reset();

        fetchTasks();

    }
    catch(err){

        console.log(err);
    }

});



/* DELETE TASK */

async function deleteTask(id){

    try{

        await fetch(`${BASE_URL}/${id}`, {

            method:"DELETE",

            headers:{
                Authorization:token
            }

        });

        fetchTasks();

    }
    catch(err){

        console.log(err);
    }

}



/* TOGGLE TASK */

async function toggleTask(id){

    try{

        await fetch(`${BASE_URL}/${id}`, {

            method:"PUT",

            headers:{
                Authorization:token
            }

        });

        fetchTasks();

    }
    catch(err){

        console.log(err);
    }

}



/* SEARCH TASKS */

searchInput.addEventListener("input", async ()=>{

    try{

        const response = await fetch(BASE_URL, {

            headers:{
                Authorization:token
            }

        });

        const tasks = await response.json();

        const value = searchInput.value.toLowerCase();

        const filtered = tasks.filter(task =>

            task.title.toLowerCase().includes(value)

        );

        displayTasks(filtered);

    }
    catch(err){

        console.log(err);
    }

});



/* LOGOUT */

const logoutBtn = document.querySelector(".logout-btn");

logoutBtn.addEventListener("click", ()=>{

    localStorage.removeItem("token");

    localStorage.removeItem("user");

    window.location.href = "login.html";

});



/* INITIAL LOAD */

fetchTasks();