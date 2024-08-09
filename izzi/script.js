import data from "./data.json" with { type: "json" }
console.log(data);

async function getInfo() {
    let container = document.querySelector(".container");
    let services = data.data.services;

    for (let i = 0; i < services.length; i++) {
        let newService = document.createElement("div");
        newService.classList.add("card");
        let image = document.createElement("div");
        image.classList.add("image");
        image.style.backgroundImage = `url("${services[i].cover_img.publicUrl}")`;
        image.innerHTML = `
          <div class="about">
            <div class="job">${services[i].title_en}</div>
            <div class="salary">Starts from 15$/h</div>
          </div>  
        `;
        newService.appendChild(image);

        let subServices = services[i].subServices;
        let newSubService = document.createElement("div");
        newSubService.classList.add("details");
        for (let j = 0; j < subServices.length; j++) {
            let newP = document.createElement("p");
            newP.innerHTML = `${subServices[j].title_en}`;
            newSubService.appendChild(newP);
        }
        newService.appendChild(newSubService);
        container.appendChild(newService);
    }

    if (window.innerWidth <= 450) {
        let cards = document.querySelectorAll(".card");

        cards.forEach(function(card) {
            card.addEventListener("click", function() {
                let details = card.querySelector(".details");
                let display = getComputedStyle(details).height !== "0px";

                if (display) {
                    details.style.height = "0px";
                } else {
                    details.style.height = "100px";
                }
            });
        });
    }
}

document.addEventListener("DOMContentLoaded", function() {
    getInfo();
});