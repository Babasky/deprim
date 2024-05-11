const signup = document.querySelector(".signup-account")
const login = document.querySelector(".signin-account")
const addClass = document.querySelector(".site")

signup.addEventListener("click", ()=>{
    addClass.className = "site signup-show";
})

login.addEventListener("click", ()=>{
    addClass.className = "site login-show";
})