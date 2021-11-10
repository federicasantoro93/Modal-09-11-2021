function sendCredentials(username) {
    // console.log(h1.textContent.length);       17
    const str = h1.textContent;                //Buongiorno [NOME]
    const nameTC = str.slice(11, 17);         //[NOME]
    //console.log(str.slice(11, 17));          // [NOME]
    //console.log(nameTC.length);               6
    //console.log(nameTC);                      //[NOME]
    //console.log(h1.textContent.slice(11, 17));  //[NOME]
    h1.textContent.replace('nameTC','username');

    //HO CREATO UN MOSTRO... NON FUNZIONANTE
    
    
    //userPage.firstElementChild.textContent = `Buongiorno ${username}`;
    // console.log(h1.textContent); Buongiorno [NOME]
    

    //userPage.firstElementChild.textContent.replace('[NOME]', 'username');
    // console.log(userPage.firstElementChild.textContent);
    // userPage.firstElementChild.textContent.replace("NOME", username);
  }
  
  function saveCredentials(user, pass) {
    window.localStorage.setItem("username", user);
    window.localStorage.setItem("password", pass);
  }
  
  function loadCredentials(key) {
    return window.localStorage.getItem(key);
  }
  
  const userPage = document.querySelector(".userPage");
  const modalEl = document.querySelector(".modal");
  const userInputEl = document.querySelector("#user");
  const passInputEl = document.querySelector("#pass");
  const btnSendEl = document.querySelector("#btnSend");
  const h1 = document.querySelector("#goodmorning");

  const user = {
    username: "",
    password: "",
  };
  

  // LOCAL STORAGE ----->
  sendCredentials(loadCredentials("username"));
  
  btnSendEl.addEventListener("click", (evt) => {
    user.username = userInputEl.value;
    user.password = passInputEl.value;
  
    saveCredentials(user.username, user.password);
  
    const userStorage = window.localStorage.getItem("username");
  
    sendCredentials(userStorage);
  });

  