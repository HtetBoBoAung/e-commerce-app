// navbar
//login page
//login api function 
//local storage save 

async function postLogIn(name, password) {
     try {
          const postOption = {
               username: name,
               password: password,
          };
          

          const response = await axios.post("https://fakestoreapi.com/auth/login", postOption);
          console.log(response);
     } catch (err) {
          console.error(err);
     }
}
postLogIn(email, password);

const signupBtn = document.getElementById("signup");
const loginBtn = document.getElementById("login");


const submitBtn = document.getElementById("submitBtn");
const userEmail = document.getElementById("email");
const userPassword = document.getElementById("password");
const form = document.querySelector(".form");
const arrays = [];


form.addEventListener("submit" , (e) => {
     let email = userEmail.value;
     let password = userPassword.value;
     console.log(email);
     console.log(password);
});
