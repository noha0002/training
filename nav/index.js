const list = document.querySelector("ul");

const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

const krummer = document.querySelector("#kategori");
const btn = document.querySelector("#btn");

let showing = ""; // holder styr på, om brødkrummen vises

function toggleBreadcrumb() {
  if (!showing) { //ikke showing, thats why "!" er med. false-true-false. show-hide-show
    let aSTR = "";
    bc.forEach((kat) => {
      aSTR += `<a href="${kat.link}">${kat.name}</a>`;
    });
    krummer.innerHTML = aSTR;
    showing = true;
  } // else { hvis du gerne vil have tilbage knap!!!
  //     // skjul brødkrummen (gå back)
  //     krummer.innerHTML = ""; // ved at tilføje den, it disappears
  //     showing = false; // nu er den skjult
  //   }
}

btn.addEventListener("click", toggleBreadcrumb);






 
