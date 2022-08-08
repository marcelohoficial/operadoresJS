const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document.getElementById("change-cat");
const catImg = document.getElementById("cat");

const getCats = async () => {
    const data = await fetch(BASE_URL)
    .then(res=> res.json())
    .catch(e=> console.log(e));

    return data.webpurl;
};

const getCat = async () => {
  try {
    const data = await fetch(BASE_URL);
    const json = await data.json();

    return json.webpurl;
  } catch (error) {
    console.log(error.message);
  }
};

const loading = async () => {
  catImg.src = await getCats();
}

catBtn.addEventListener('click', loading());

loading();