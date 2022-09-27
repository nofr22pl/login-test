localStorage.setItem("userName", "Sara"); // Skapar användarnamn i localstorage
localStorage.setItem("passWord", "qwe123"); // Skapar lösenord i localstorage

let userName = localStorage.getItem("userName"); // Deklarera en varibel
let passWord = localStorage.getItem("passWord"); // Deklarera en varibel
console.log(userName);

function checkData() {
  // Hämta data från localstorage

  let enterUserName = document.getElementById("userName").value;
  let enterPassWord = document.getElementById("passWord").value;

  let getUserName = localStorage.getItem("userName");
  let getPassWord = localStorage.getItem("passWord");

  if (enterUserName == getUserName && enterPassWord == getPassWord) {
    // Svarar på Lyckad/Misslyckad inloggning.

    {
      alert("Välkommen till sidan!");
    }
  } else {
    alert("Användarnamnet eller lösenordet är felaktigt.");
  }
}
