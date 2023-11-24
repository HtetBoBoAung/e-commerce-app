//LoginForm
const signupLink = document.getElementById("signup");
const loginLink = document.getElementById("login");
const submitBtn = document.getElementById("submitBtn");
const userEmail = document.getElementById("email");
const userPassword = document.getElementById("password");
const form = document.querySelector(".form");

async function postLogIn(email, password) {
     try {
         const postOption = {
             username: email,
             password: password,
         };
 
         const response = await axios.post("https://fakestoreapi.com/auth/login", postOption);
         console.log(response);
     } catch (err) {
         console.error(err);
     }
 }
 
form.addEventListener("submit", async (e) => {
     e.preventDefault();
     let email = userEmail.value;
     let password = userPassword.value;
     console.log(email);
     console.log(password);
 
     
     await postLogIn(email, password);
 });


//SignUpForm
const firstName = document.querySelector(".firstname");
const lastName = document.querySelector(".lastname");
const signUpEmail = document.querySelector(".signupEmail");
const signUpPassword = document.querySelector(".signupPassword");
const signUpBtn = document.getElementById("signup-btn");
const formSignUp = document.getElementById("signup-form");

async function postsignUp(email, name, password) {
     try {
          const postSignUp = {
               username: name,
               password: password,
               email: email
          };
          

          const result = await axios.post("https://fakestoreapi.com/users", postSignUp);
          console.log(result);
          localStorage.setItem('user', JSON.stringify(result));
          const getLocalStorage = localStorage.getItem('user');
          console.log(getLocalStorage);
     } catch (err) {
          console.error(err);
     }
}

formSignUp.addEventListener("submit", async (e) => {
     e.preventDefault();
     let FirstName = firstName.value;
     let LastName = lastName.value;
     let User_Name = FirstName + LastName;
     let Email = signUpEmail.value;
     let userPassword = signUpPassword.value;
     console.log(User_Name, Email, userPassword);
 
     await postsignUp(Email, User_Name, userPassword);
 });