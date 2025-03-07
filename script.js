

//Making the navbar stay when the page is being scrolled
const primaryHeader = document.querySelector('.primary-header');
const scrollWatcher = document.createElement('div');

scrollWatcher.setAttribute('data-scroll-watcher', '');
primaryHeader.before(scrollWatcher);

const navObserver = new IntersectionObserver((entries) => {
    console.log(entries)
    primaryHeader.classList.toggle('sticking', !entries[0].isIntersecting);
});
{ rootMargin: "200px 0px 0px 0px";
};

navObserver.observe(scrollWatcher);



//Hämta JSON FIL
const cvContainer = document.querySelector("#cvContainer");

async function getCVData () {
let cvArray = [];
try {

    let cvData = await fetch("experience.json");
    cvArray = await cvData.json();
    console.log(cvArray);

 // Skapa rubrik och container för "Work"
 const workHeader = document.createElement("h2");
 workHeader.textContent = "Arbetslivserfarenhet";
 cvContainer.appendChild(workHeader);

 const workContainer = document.createElement("div");
 workContainer.className = "work-container";
 cvContainer.appendChild(workContainer);

 // Lägg alla "work"-objekt under rubriken
 cvArray
     .filter(item => item.type === "work")
     .forEach(item => {
         const itemContainer = createCVItem(item);
         workContainer.appendChild(itemContainer);
     });

 // Skapa rubrik och container för "Education"
 const educationHeader = document.createElement("h2");
 educationHeader.textContent = "Utbildning";
 cvContainer.appendChild(educationHeader);

 const educationContainer = document.createElement("div");
 educationContainer.className = "education-container";
 cvContainer.appendChild(educationContainer);

 // Lägg alla "education"-objekt under rubriken
 cvArray
     .filter(item => item.type === "education")
     .forEach(item => {
         const itemContainer = createCVItem(item);
         educationContainer.appendChild(itemContainer);
     });

} catch (error) {
 console.log("Ett fel uppstod:", error);
}
}

// Funktion för att skapa ett CV-item (titel, tidsperiod och beskrivning)
function createCVItem(item) {
const itemContainer = document.createElement("div");
itemContainer.className = "cv-item";

const titleElement = document.createElement("h3");
titleElement.textContent = item.title;
itemContainer.appendChild(titleElement);

const durationElement = document.createElement("p");
durationElement.textContent = `Tid: ${item.duration}`;
itemContainer.appendChild(durationElement);

const descriptionElement = document.createElement("p");
descriptionElement.textContent = item.description;
itemContainer.appendChild(descriptionElement);

return itemContainer;
}

getCVData();