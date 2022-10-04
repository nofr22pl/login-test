checkLocalStorage(); 



 
const validUserName = "Sara";    
const validPassWord = "qwe123";  




function loggaIn() { 
    let enterUserName = document.getElementById("userName").value;   
    let enterPassWord = document.getElementById("passWord").value;   
    
  if (enterUserName == validUserName && enterPassWord == validPassWord) { 

      localStorage.setItem("userName", "Sara");  
      localStorage.setItem("passWord", "qwe123"); 

    }else {
        
        alert("Fel användarnamn eller lösenord, försök igen!!") 
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
    
    rubrik.innerHTML = 'Jotunheim Simsällskap'; 
    
    let elementBtnLogin = document.getElementById("login"); 
    elementBtnLogin.style.display = ""; // Vissa Knapp
    let elementBtnLogout = document.getElementById("logout"); 
    elementBtnLogout.style.display = "none";

    let elementContainer = document.getElementById("container");  
    elementContainer.style.display = ""; 

    let elementRegler = document.getElementById("regler");  
    elementRegler.style.display = "";

  } else {

    rubrik.innerHTML = 'Välkommen till Jotunheims Simsällskap!';
    let elementBtnLogout = document.getElementById("logout"); 
    elementBtnLogout.style.display = ""; 
    

    let elementContainer = document.getElementById("container");  
    elementContainer.style.display = "none"; 

    let elementRegler = document.getElementById("regler");  
    elementRegler.style.display = "none"; 
  }
}




