const display = document.querySelector("#display-data");
const input = document.querySelector("#input");

let APIKey = "sk-SVAZ658cd7515e87f3600";
var requestOptions = {
  method: "GET",
  redirect: "follow",
};

const getData = async () => {
  const res = await fetch(
    `https://perenual.com/api/species/details/[ID]?key=${APIKey}`,
    requestOptions
  );
  const data = await res.json();
  return data;
};

const displayPlants = async () => {
  let query = input.value;
  console.log("Query::", query);

  const callData = await getData();

  let displayData = Object.values(callData).filter((eventData) => {
      if (query === "") {
        return eventData;
      } else if (
        eventData.common_name.toLowerCase().includes(query.toLowerCase())
      ) {
        return eventData;
      }
    })
    .map((object) => {
      const { common_name, watering } = object;

      return `
    <div class="continer">
        <p>Name: ${common_name}</p> 
        <p>Watering: ${watering}</p>
    </div>
    `;
    })
    .join("");

  display.innerHTML = displayData;
};

displayPlants();

input.addEventListener("input", () => {
  displayPlants();
});
