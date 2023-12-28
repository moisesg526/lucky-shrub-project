let APIKey = "sk-SVAZ658cd7515e87f3600";
var requestOptions = {
  method: "GET",
  redirect: "follow",
};

fetch(
  "https://perenual.com/api/species-list?key=sk-SVAZ658cd7515e87f3600",
  requestOptions
)
  .then((response) => response.json())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));
