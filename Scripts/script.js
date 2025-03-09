

//Making the navbar stay when the page is being scrolled
// Copied from Github
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



//Get JSON File
const cvContainer = document.querySelector("#cvContainer");

async function getCVData () {
let cvArray = [];
try {

    let cvData = await fetch("experience.json");
    cvArray = await cvData.json();
    console.log(cvArray);

 // Find the containers for "Work" and "Education"
const workContainer = document.querySelector(".work-container");
const educationContainer = document.querySelector(".education-container");


 // Add all "work" objects under "Arbetslivserfarenhet" header
 cvArray
     .filter(item => item.type === "work")
     .forEach(item => {
         const itemContainer = createCVItem(item);
         workContainer.appendChild(itemContainer);
     });


 // Add all "education" obejcts under "Utbildning" header
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

// Function to create CV item (title, duration and description)
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