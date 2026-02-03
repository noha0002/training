const list = document.querySelector("ul");

// const li = document.createElement("li");
// li.style.setProperty("--height","30");
// list.appendChild(li);

// const li1 = document.createElement("li");
// li1.style.setProperty("--height", "40");
// list.appendChild(li1);

// const li2 = document.createElement("li");
// li2.style.setProperty("--height", "50");
// list.appendChild(li2);

const columnArray = [];


setInterval(generateColumns, 1000); //1000 sekunder

function generateColumns() {
  const randomNum = Math.floor(Math.random() * 100) + 1; // random, gir random højder 
  columnArray.push(randomNum);

  const li = document.createElement("li");
  li.style.setProperty("--height",randomNum);
  list.appendChild(li); // the child has appered 


  if (columnArray.length > 20) {
    columnArray.shift();
    list.removeChild(list.firstElementChild); // we need to remove the child again hvis vi når længden 20. 
  }
  console.log(columnArray);

}
