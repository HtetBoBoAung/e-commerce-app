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
          console.log(response.data);
     } catch (err) {
          console.error(err);
     }
}

const username = "mor_2314";
const password = "83r5^_";
postLogIn(username, password);

//
const submitBtn = document.getElementById("submitBtn");
const userEmail = document.getElementById("email");
const userPassword = document.getElementById("password");

const arrays = [];
console.log(arrays);


function displayfunction() {
     let userInput = userEmail.value;
     let user_Password = userPassword.value;
     console.log(user_Password);
     arrays.push(userInput,user_Password);
     localStorage.setItem("arrays", arrays);
     const getLocalStorage = localStorage.getItem("arrays");
     console.log(getLocalStorage);
}

submitBtn.addEventListener("click", displayfunction);