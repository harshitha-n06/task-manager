const BASE_URL = "https://task-manager-backend-m1is.onrender.com/api/auth";
/* REGISTER */

const registerForm = document.getElementById("registerForm");

if(registerForm){

    registerForm.addEventListener("submit", async (e) => {

        e.preventDefault();

        const name = document.getElementById("name").value;

        const email = document.getElementById("email").value;

        const password = document.getElementById("password").value;

        try{

            const response = await fetch(`${BASE_URL}/register`, {

                method:"POST",

                headers:{
                    "Content-Type":"application/json"
                },

                body:JSON.stringify({
                    name,
                    email,
                    password
                })

            });

            const data = await response.json();

            alert(data.message);

            if(response.ok){

                window.location.href = "login.html";
            }

        }
        catch(err){

            console.log(err);

            alert("Something went wrong");
        }

    });

}



/* LOGIN */

const loginForm = document.getElementById("loginForm");

if(loginForm){

    loginForm.addEventListener("submit", async (e) => {

        e.preventDefault();

        const email = document.getElementById("email").value;

        const password = document.getElementById("password").value;

        try{

            const response = await fetch(`${BASE_URL}/login`, {

                method:"POST",

                headers:{
                    "Content-Type":"application/json"
                },

                body:JSON.stringify({
                    email,
                    password
                })

            });

            const data = await response.json();

            if(response.ok){

                localStorage.setItem("token", data.token);

                localStorage.setItem("user", JSON.stringify(data.user));

                window.location.href = "dashboard.html";
            }
            else{

                alert(data.message);
            }

        }
        catch(err){

            console.log(err);

            alert("Something went wrong");
        }

    });

}