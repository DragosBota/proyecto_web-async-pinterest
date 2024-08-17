//API ACCESS KEY:  c2kQZ1OJSty4kFxg7FyGJE8O_MMCrvdQ1c_utvEIuTE

import './style.css';
// Importa Componentes
import Header from "./components/Header/Header";
import FrontPage from './components/FrontPage/FrontPage';
import Main from './components/Main/Main';
import EmptyInput from './components/EmptyInput/EmptyInput';
import LogIn from './components/LogIn/LogIn';

const create = () => {
  Header();
  FrontPage();
  addEventListeners_Search(); 
  addEventListeners_Logo();
  addEventListener_input();
  listenersTopGrid();
  listenersButtomGrid();
  listenersLogIn();
};

const addEventListeners_Logo = () => {
  document.querySelector("#logo")?.addEventListener("click", () => {
    FrontPage();
      addEventListeners_Search();
      listenersTopGrid();
      listenersButtomGrid();
  });
};

const addEventListeners_Search = () => {
  document.querySelector("#searchBtn")?.addEventListener("click", () => {
    const value = document.querySelector("#searchBar")?.value;
    if (value) {
      Main()
      document.querySelector("#searchBar").value = "";
    } else {
        EmptyInput()
        listenersTopGrid();
    }
  });
};

const addEventListener_input = () => {
  document.querySelector("#searchBar")?.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
      const value = document.querySelector("#searchBar")?.value;
    if (value) {
      Main()
      document.querySelector("#searchBar").value = "";
    } else {
      document.querySelector("main").innerHTML=`Please introduce a word to search`;
    }
    }
  });
};

const listenersTopGrid = () => {
  document.querySelector(".nailsBtn").addEventListener("click", () => {
    console.log('6');
    document.querySelector("#searchBar").value = "nails";
    Main();
  });

  document.querySelector(".plantsBtn").addEventListener("click", () => {
    console.log('7');
    document.querySelector("#searchBar").value = "plants";
    Main();
  });

  document.querySelector(".houseBtn").addEventListener("click", () => {
    console.log('8');
    document.querySelector("#searchBar").value = "wooden house";
    Main();
  });
};

const listenersButtomGrid = () => {
  document.querySelector("#interest1").addEventListener("click", () => {
    document.querySelector("#searchBar").value = "animals";
    Main();
  });

  document.querySelector("#interest2").addEventListener("click", () => {
    document.querySelector("#searchBar").value = "art";
    Main();
  });

  document.querySelector("#interest3").addEventListener("click", () => {
    document.querySelector("#searchBar").value = "beaty";
    Main();
  });

  document.querySelector("#interest4").addEventListener("click", () => {
    document.querySelector("#searchBar").value = "house design";
    Main();
  });

  document.querySelector("#interest5").addEventListener("click", () => {
    document.querySelector("#searchBar").value = "diy";
    Main();
  });

  document.querySelector("#interest6").addEventListener("click", () => {
    document.querySelector("#searchBar").value = "food";
    Main();
  });

  document.querySelector("#interest7").addEventListener("click", () => {
    document.querySelector("#searchBar").value = "home decor";
    Main();
  });

  document.querySelector("#interest8").addEventListener("click", () => {
    document.querySelector("#searchBar").value = "fashion clothes";
    Main();
  });

  document.querySelector("#interest9").addEventListener("click", () => {
    document.querySelector("#searchBar").value = "quotes";
    Main();
  });

  document.querySelector("#interest10").addEventListener("click", () => {
    document.querySelector("#searchBar").value = "tattoos";
    Main();
  });
};

const listenersLogIn = () => {
  document.querySelector("#LogInBtn").addEventListener("click", () => {
    document.querySelector("main").innerHTML = "";
    LogIn();
  });

  document.querySelector("#SignInBtn").addEventListener("click", () => {
    document.querySelector("main").innerHTML = "";
    LogIn();
  });
};

// Inicializa la aplicación
create();
