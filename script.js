checkLocalStorage(); // Anropar funtionen så man förbli inloggad tills man trycker "logga ut"



// Förvald Användarnamn/Lösenord som ska matcha vid inlogg 
const validUserName = "Sara";    
const validPassWord = "qwe123";  

// ----------------------------LOGGA IN------------------------------//


function loggaIn() { 
    let enterUserName = document.getElementById("userName").value;   // Hämta id från username input
    let enterPassWord = document.getElementById("passWord").value;   // Hämta id från password input
    
  if (enterUserName == validUserName && enterPassWord == validPassWord) { // Lyckad inloggning vid rätt inmatning

      localStorage.setItem("userName", "Sara");  // Skapar användarnamn vid inlogg
      localStorage.setItem("passWord", "qwe123"); // Skapar lösenord vid inlogg

    }else {
        
        alert("Fel användarnamn eller lösenord, försök igen!!") // Visa felmeddelande vid fel inmatning.
    }
    checkLocalStorage(); // Anropar functionen
}

// ----------------------------LOGGA UT------------------------------//


function loggaUt() { 
    let removeUserName = localStorage.removeItem("userName"); // Plockar bort Användarnamn vid utlogg
    let removePassWord = localStorage.removeItem("passWord"); // Plockar bort Lösenord vid utlogg
    
    checkLocalStorage(); // Anropar functionen
  }



  
function checkLocalStorage() { // Hämtar data För att kunna se om användaren är Inloggad/Utloggad
  let getUserName = localStorage.getItem("userName");
  let getPassWord = localStorage.getItem("passWord");

  if (getUserName == null) { // Värdet null representerar den avsiktliga frånvaron av något objektvärde
    
    rubrik.innerHTML = 'Jotunheim Simsällskap'; // Behåll rubriken
    
    let elementBtnLogin = document.getElementById("login");  // Hämta id från logga in button
    elementBtnLogin.style.display = ""; // Vissa Knapp
    let elementBtnLogout = document.getElementById("logout"); // Hämta id från logga ut button
    elementBtnLogout.style.display = "none";

    let elementContainer = document.getElementById("container");  // Hämta id från container
    elementContainer.style.display = ""; // Visa hela container

    let elementRegler = document.getElementById("regler");  // Hämta id från regler text
    elementRegler.style.display = ""; // Visa REGLER: Texten

  } else {

    rubrik.innerHTML = 'Välkommen till Jotunheims Simsällskap!';
    let elementBtnLogout = document.getElementById("logout"); // Hämta id från logga ut button
    elementBtnLogout.style.display = ""; // Visa Knapp
    

    let elementContainer = document.getElementById("container");  // Hämta id från containern 
    elementContainer.style.display = "none"; // Göm hela containern

    let elementRegler = document.getElementById("regler");  // Hämta id från regler text
    elementRegler.style.display = "none"; // Göm REGLER: Texten
  }
}


// "style" för att komma åt CSS genomn JavaScript//
// display = "none" för att dölja , display = "" för att visa 
// "checkLocalStorage()" anropar functionen | function checkLocalStorage() |

