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
  { name: 'Gtrr',price: 18000, color: "white" },
  { name: 'Dirt Car',price: 2500, color: "blue" },
  { name: 'Mitsubishi',price: 22000, color: "grey" }
]
function addCar() {
  const carName = document.getElementById('carName').value;
  const carPrice = document.getElementById('carPrice').value;
  const carColor = document.getElementById('carColor').value;
  
  let cars = JSON.parse(localStorage.getItem('cars'));

  const newCar = {
    name: carName,
    price: carPrice,
    color: carColor
  };
  cars.push(newCar);

  localStorage.setItem('cars', JSON.stringify(cars));

  alert('Car added successfully!');
}
function card(nb, color, marque) {
  let html = ``;
  for (let index = 0; index < nb; index++) {
    if (car[index].color == color || color == false) {
      if (car[index].name == marque || marque == false) {
          html += `
          <div class="car-card">
              <img src="assets/voiture${index+1}.jpg" class="car-img">
              <div class="car-title">${car[index].name}</div>
              <div class="car-location">Orléans</div>
              <div class="car-price">${car[index].price}$</div>
              <form><button type='submit' class="offer-submit"><a href="priceoffer.html">Consulter l'offre</a></button></form>
          </div>`;
      }
    }
  }
  document.getElementById('cars').innerHTML = html;
}