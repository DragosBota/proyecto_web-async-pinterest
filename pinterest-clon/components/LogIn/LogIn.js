import "./LogIn.css"

//Definir una función que crea el template
console.log('0');
const template = () => {
  return `
  <p>Funciona</p>
  `;
};

console.log('1');
//La función que implementa el header
const LogIn = () => {
  console.log('2');
document.querySelector("main").innerHTML = template();
  console.log("Se carga completamente LogIn");
};

export default LogIn;