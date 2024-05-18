// footer
document.getElementById("currentyear").innerHTML = new Date().getFullYear();
document.getElementById("lastmodified").innerHTML = document.lastModified;

const hamburgerButton = document.querySelector("#menu");
const nav = document.querySelector(".navigation");

hamburgerButton.addEventListener("click", () => {
    nav.classList.toggle("open");
    hamburgerButton.classList.toggle("open");
});

// Temple Objects
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Tucson AZ",
        location: "Tucson, AZ, United States",
        dedicated: "2017, August, 13",
        area: 38216,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tucson-arizona/400x250/tucson-arizona-temple-exterior-1929407-wallpaper.jpg"
    },
    {
        templeName: "Mesa AZ",
        location: "Mesa, AZ, United States",
        dedicated: "1927, April, 23",
        area: 75000,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mesa-arizona/400x250/mesa_arizona_temple_main.jpeg"
    },
    {
        templeName: "Gila Valley",
        location: "Gila Valley, AZ, United States",
        dedicated: "2010, May, 23",
        area: 18561,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/the-gila-valley-arizona/400x250/gila-valley-temple-759378-wallpaper.jpg"
    }
];

// Store the grid
const templeGrid = document.querySelector(".temple-grid");

// Reset the grid
function resetTempleGrid() { templeGrid.innerHTML = "" };

// Builds the temple Cards
function renderTempleCard(filteredTemples) {
    resetTempleGrid();
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">LOCATION:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">DEDICATED:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">SIZE:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        templeGrid.appendChild(card);
    });
}

// nav.addEventListener("click", (menuOption) => {
//     console.log(menuOption.target.id);
//     resetTempleGrid();  // Reset it and reload.
//     switch (menuOption.target.id) {
//         case "home":
//             renderTempleCard();
//             break;
//         case "old":


//         case "new":

//         case "large":

//         case "small":

//     }
// });

const allTemples = document.querySelector("#home");
const oldTemples = document.querySelector("#old");
const newTemples = document.querySelector("#new");
const largeTemples = document.querySelector("#large");
const smallTemples = document.querySelector("#small");

allTemples.addEventListener("click", () => {
    renderTempleCard(temples);
});

oldTemples.addEventListener("click", () => {
    let old = temples.filter(temple => parseInt(temple.dedicated.split(',')[0]) < 1900);
    renderTempleCard(old);
});

newTemples.addEventListener("click", () => {
    let newT = temples.filter(temple => parseInt(temple.dedicated.split(',')[0]) > 2000);
    renderTempleCard(newT);
});

largeTemples.addEventListener("click", () => {
    let large = temples.filter(temple => temple.area > 90000);
    renderTempleCard(large);
});

smallTemples.addEventListener("click", () => {
    let small = temples.filter(temple => temple.area < 10000);
    renderTempleCard(small);
});


// Default Load
renderTempleCard(temples);
