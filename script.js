const display = document.querySelector("#display-data");

let APIKey = "sk-SVAZ658cd7515e87f3600";
var requestOptions = {
  method: "GET",
  redirect: "follow",
};

const getData = async () => {
  const res = await fetch(
    `https://perenual.com/api/species-list?key=${APIKey}`,
    requestOptions
  );
  const data = await res.json();
  return data;
};

const displayPlants = async () => {
  const callData = await getData();

  let displayData = callData.data.map((object) => {
    const { common_name, watering } = object;

    return `
    <div class="continer">
        <p>Name: ${common_name}</p> 
        <p>Watering: ${watering}</p>
    </div>
    `;
  });

  display.innerHTML = displayData;
};

displayPlants();

