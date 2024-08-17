import "./EmptyInput.css"

//Creamos una función template donde pintaremos toda la front page
const template = () => {
  return `
  <h2>Please, enter some input or choose an option...</h2>

  <section id="topGrid">
    <article id="post1">
      <p>Nails</p>
      <button id="topGridBtn" class="nailsBtn">See more</button>
    </article>

    <article id="post2">
      <p>Plants</p>
      <button id="topGridBtn" class="plantsBtn">See more</button>
    </article>

    <article id="post3">
      <p>Wooden Houses</p>
      <button id="topGridBtn" class="houseBtn">See more</button>
  </article>
</section>
  `;
};

//Pintamos el template en el main
const EmptyInput = () => {
  document.querySelector("main").innerHTML = template();
  console.log('Se carga completamente EmptyInput');
};

//Exportamos la función Header
export default EmptyInput;

