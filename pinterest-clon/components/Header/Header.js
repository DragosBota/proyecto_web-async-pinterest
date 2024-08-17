//Importar los estilos de Header
import "./Header.css";

//Definir una función que crea el template
const template = () => {
  return `
  <img src="./Pinterest-Logo.wine.png" alt="pinterest logo" id="logo">
  <div id="inputContainer">
    <input type="text" id="searchBar" placeholder="Search..."/>
    <button id="searchBtn">Search</button>
  </div>
  <nav>
    <ul>
      <li id="LogInBtn">Log In</li>
      <li id="SignInBtn">Sign In</li>
    </ul>
  </nav>
  `;
};


//La función que implementa el header
const Header = () => {
  //Recupero la etiqueta header del html
  const header = document.querySelector("header");
  //Le inyecto el string del template al header
  header.innerHTML = template();
  console.log("Se carga completamente Header");
};

export default Header;