const validUserName = "sara";
const validPassWord = "qwe123";

const enterUserName = document.getElementById("userName");
const enterPassWord = document.getElementById("passWord");

const elementBtnLogin = document.getElementById("login");
const elementBtnLogout = document.getElementById("logout");

const elementRegler = document.getElementById("regler");
const elementContainer = document.getElementById("container");

function loggaIn() {
  if (
    validUserName == enterUserName.value.toLowerCase() &&
    validPassWord == enterPassWord.value
  ) {
    localStorage.setItem("userName", validUserName);
    localStorage.setItem("passWord", validPassWord);
  } else {
    alert("Fel användarnamn eller lösenord, försök igen!!");
  }
  render();
}

function loggaUt() {
  localStorage.removeItem("userName");
  localStorage.removeItem("passWord");

  render();
}

function render() {
  let getUserName = localStorage.getItem("userName");

  if (getUserName == null) {
    rubrik.innerHTML = "Jotunheim Simsällskap";

    elementBtnLogin.style.display = ""; // Vissa Knapp
    elementBtnLogout.style.display = "none";
    elementContainer.style.display = "";
    elementRegler.style.display = "";
  } else {
    rubrik.innerHTML = "Välkommen till Jotunheims Simsällskap!";

    elementBtnLogout.style.display = "";
    elementContainer.style.display = "none";
    elementRegler.style.display = "none";
  }
}

render();
