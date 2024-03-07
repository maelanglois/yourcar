function includeHTML() {
  var z, i, elmnt, file, xhttp;
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  }
}

const car = [
  { name: 'Subaru',price: 9000, color: "blue" }, 
  { name: 'Gtrr',price: 9000, color: "white" },
  { name: 'Dirt Car',price: 9000, color: "blue" },
  { name: 'Mitsubishi',price: 9000, color: "grey" }
]
function card(nb) {
  let html = ``;
  for (let index = 0; index < nb; index++) {
      html += `
      <div class="car-card">
          <img src="assets/voiture${index+1}.jpg" class="car-img">
          <div class="car-title">${car[index].name}</div>
          <div class="car-location">Orléans</div>
          <div class="car-price">9.000$</div>
          <form><button type='submit' class="offer-submit"><a href="priceoffer.html">Consulter l'offre</a></button></form>
      </div>`;
  }
  document.getElementById('cars').innerHTML = html;
}