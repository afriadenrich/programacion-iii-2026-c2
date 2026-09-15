// Al final de la URL
// EL comienzo se indica con un ?
// Y luego es CLAVE = VALOR & CLAVE = VALOR & CLAVE = VALOR etc.

// youtube/watch?video=123&minuto=8&segundo=33&lista=prog3&t=1501s
const API_KEY = "LdZOmMRAmLPaKZytloawSpntr998fw93FHg6B3xx";

// arranque
const queryParams = {
  video: "123",
  minuto: 8,
  segundo: 33,
  lista: "prog3",
  t: "1501s",
};

const img = document.querySelector("img");
const input = document.querySelector("input");

input.oninput = () => {
  traerNasa();
};

traerNasa = async () => {
  const res = await fetch(
    "https://api.nasa.gov/planetary/apod?api_key=LdZOmMRAmLPaKZytloawSpntr998fw93FHg6B3xx&date=" +
      input.value,
  );
  img.src = "./loading.gif";
  // "https://api.nasa.gov/planetary/apod
  // ?
  // api_key = LdZOmMRAmLPaKZytloawSpntr998fw93FHg6B3xx
  // &
  // date = 2026-09-10
  // ",

  const body = await res.json();

  console.log(body);
  img.src = body.url;
};
traerNasa();
