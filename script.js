
let validUserName = "Sara";
let validPassWord = "qwe123";


// ----------------------------LOGGA IN------------------------------//


function loggaIn() {
    let enterUserName = document.getElementById("userName").value;
    let enterPassWord = document.getElementById("passWord").value;
  if (enterUserName == validUserName && enterPassWord == validPassWord) {

      localStorage.setItem("userName", "Sara"); // Skapar användarnamn i localstorage
      localStorage.setItem("passWord", "qwe123"); // Skapar lösenord i localstorage
      
    }else {
        console.log("Errror");
    }
    checkLocalStorage();
}
function loggaUt() {
    let removeUserName = localStorage.removeItem("userName");
    let removePassWord = localStorage.removeItem("passWord");
    checkLocalStorage();
  }
function checkLocalStorage() {
  let getUserName = localStorage.getItem("userName");
  
  let getPassWord = localStorage.getItem("passWord");
  if (getUserName == null) {
    
    var elementBtnLogout = document.getElementById("logout");
    elementBtnLogout.style.display = "none";
    var elementBtnLogin = document.getElementById("login");
    elementBtnLogin.style.display = "";

    var elementContainer = document.getElementById("container");
    elementContainer.style.display = "";
  } else {
    
    var elementBtnLogout = document.getElementById("logout");
    elementBtnLogout.style.display = "";
    var elementBtnLogin = document.getElementById("login");
    elementBtnLogin.style.display = "none";

    var elementContainer = document.getElementById("container");
    elementContainer.style.display = "none";
  }
}

//------------------------LOGGA UT---------------------------//


