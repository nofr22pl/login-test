
// Förvald Användarnamn/Lösenord som ska matcha vid inlogg 
let validUserName = "Sara";    
let validPassWord = "qwe123";  

// ----------------------------LOGGA IN------------------------------//


function loggaIn() { 
    let enterUserName = document.getElementById("userName").value;  
    let enterPassWord = document.getElementById("passWord").value;  
    
  if (enterUserName == validUserName && enterPassWord == validPassWord) { // Lyckad inloggning vid rätt inmatning

      localStorage.setItem("userName", "Sara");  // Skapar användarnamn vid inlogg
      localStorage.setItem("passWord", "qwe123"); // Skapar lösenord vid inlogg
      
      rubrik.innerHTML = 'Välkommen till Jotunheims Simhall'; // Byter Rubirk vid inlogg
      
    }else {
        alert("Fel användarnamn eller lösenord, försök igen!!") // Visa felmeddelande vid fel inmatning.
    }
    checkLocalStorage(); // Kolla om användare är Inloggad/Utloggad
}

// ----------------------------LOGGA UT------------------------------//


function loggaUt() { 
    let removeUserName = localStorage.removeItem("userName"); // Plockar bort Användarnamn vid utlogg
    let removePassWord = localStorage.removeItem("passWord"); // Plockar bort Lösenord vid utlogg
    
    checkLocalStorage(); // Kolla om användare är Inloggad/Utloggad
  }




function checkLocalStorage() { // Hämtar data För att kunna se om användaren är Inloggad/Utloggad
  let getUserName = localStorage.getItem("userName");
  let getPassWord = localStorage.getItem("passWord");

  if (getUserName == null) { // Värdet null representerar den avsiktliga frånvaron av något objektvärde
    rubrik.innerHTML = 'Jotunheim Simhall';
    let elementBtnLogout = document.getElementById("logout");
    elementBtnLogout.style.display = "none"; // Gömma knapp
    let elementBtnLogin = document.getElementById("login");
    elementBtnLogin.style.display = ""; // Vissa Knapp

    let elementContainer = document.getElementById("container");
    elementContainer.style.display = ""; // Visa hela container

    let elementRegler = document.getElementById("regler");
    elementRegler.style.display = ""; // Visa REGLER: Texten

  } else {
    
    let elementBtnLogout = document.getElementById("logout");
    elementBtnLogout.style.display = ""; // Visa Knapp
    let elementBtnLogin = document.getElementById("login");
    elementBtnLogin.style.display = "none"; // Gömma Knapp

    let elementContainer = document.getElementById("container");
    elementContainer.style.display = "none"; // Göm hela containern

    let elementRegler = document.getElementById("regler");
    elementRegler.style.display = "none"; // Göm REGLER: Texten
  }
}


// "style" för att komma åt CSS genomn JavaScript//
// display = "none" för att dölja , display = "" för att visa 


