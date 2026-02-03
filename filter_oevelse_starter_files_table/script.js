const vehicles = [
  {
    type: "Bus",
    fuel: "Diesel",
    passengers: 45,
    stops: ["Nørrebrogade", "Elmegade"],
  },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  {
    type: "Cykel",
    fuel: "Rugbrød",
    passengers: 0,
    ownedBy: "Jonas",
    isElectric: true,
  },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  {
    type: "Cykel",
    fuel: "Rugbrød",
    passengers: 2,
    ownedBy: "Vingegård",
    isTandem: true,
  },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];
const tbodyPointer = document.querySelector("tbody");
showTheseVehicles(vehicles);

function showTheseVehicles(arr) {
  tbodyPointer.innerHTML = ""; //ved at skrive dette her, sletter vi det gamle indhold i tabellen, hver gang vi kalder funktionen. ellers vil den bare blive ved med at tilføje nye rækker, hvergang jeg trykker på et filter
  arr.forEach((each) => {
    tbodyPointer.innerHTML += `<tr>
  <td>${each.type}</td>
  <td>${each.fuel}</td>
  <td>${each.passengers}</td> 
  <td>${each.stops}</td>
  <td>${each.ownedBy}</td>
  <td>${each.isElectric}</td>
  <td>${each.isTandem}</td>
</tr>`;
    let owner;
    if (each.ownedBy === undefined) {
      owner = "Jonas";
    } else {
      owner = each.ownedBy;
    }

    let passengers;
    if (each.passengers === undefined) {
      passengers = 1;
    } else {
      passengers = ++each.passengers;
    }

    console.log(owner, passengers);
  });

  function fueltype(each) {
    return each.fuel === "Rugbrød"; //|| each.fuel === "Benzin";
  }

  function Passengers(each) {
    return each.passengers > 2;
  }

  function JonasOwned(each) {
    return each.ownedBy === "Jonas";
  }
  function RugbrødPassengers(each) {
    return each.fuel === "Rugbrød" && each.passengers > 1;
  }

  const result = vehicles.filter(fueltype);
  console.log(result);

  const result2 = vehicles.filter(Passengers);
  console.log(result2);

  const result3 = vehicles.filter(JonasOwned);
  console.log(result3);

  const result4 = vehicles.filter(RugbrødPassengers);
  console.log(result4);

  document.querySelectorAll("#categories button").forEach((button) => {
    button.addEventListener("click", showFiltered);
  });

  function showFiltered() {
    const category = this.id;
    console.log(category);
    if (category === "ALL") {
      showTheseVehicles(vehicles);
    } else if (category === "Fuel") {
      
      showTheseVehicles(result);
    } else if (category === "Passengers") {
      
      showTheseVehicles(result2);
    } else if (category === "Owned") {
      
      showTheseVehicles(result3);
    }
  
  }
}
