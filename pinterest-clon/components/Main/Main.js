import "./Main.css";

const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;

const template = () => {
  return `
  <h2 id="message"></h2>
  <ul id="results"></ul>
`;
};

const getPhotos = async (keyword) => {
  try {
    const data = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${keyword}&per_page=30&client_id=${CLIENT_ID}`
    );
    const results = await data.json();
    const photos = results.results;
    printPhotos(photos);
  } catch (error) {
    console.error("Error al obtener fotos:", error);
  }
};

const printPhotos = (photos) => {
  const container = document.querySelector("#results");
  const message = document.querySelector("#message");

  container.innerHTML = "";
  message.textContent = `Se han encontrado ${photos.length} fotos:`;
  for (const photo of photos) {
    const li = document.createElement("li");
    li.innerHTML = `
      <img src="${photo.urls.regular}" alt="${photo.alt_description}"/>
      `;
    container.appendChild(li);
  }
};

const Main = () => {
  document.querySelector("main").innerHTML = template();
  const value = document.querySelector("#searchBar")?.value;
    if (value) {
      getPhotos(value);
      document.querySelector("#searchBar").value = "";
    } else {
      console.warn("El campo de búsqueda está vacío.");
    }
    console.log("Se carga completamente Main");
};

export default Main;
