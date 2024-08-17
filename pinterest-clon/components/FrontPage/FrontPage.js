import "./FrontPage.css"

//Creamos una función template donde pintaremos toda la front page
const template = () => {
  return `
  <h2>Explore without boundries</h2>
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

<section id="buttomGrid">
  <h3>Find interests</h3>
  <ul>
    <li id="interest1">Animals</li>
    <li id="interest2">Art</li>
    <li id="interest3">Beaty</li>
    <li id="interest4">Design</li>
    <li id="interest5">DIY</li>
    <li id="interest6">Food</li>
    <li id="interest7">Home Deco</li>
    <li id="interest8">Fashion</li>
    <li id="interest9">Quotes</li>
    <li id="interest10">Tattoo</li>
  </ul>
</section>
  `;
};

//Pintamos el template en el main
const FrontPage = () => {
  const frontPage = document.querySelector("main");
  frontPage.innerHTML = template();
  console.log('Se carga completamente FrontPage');
};

//Exportamos la función Header
export default FrontPage;