document.querySelector("#currentyear").innerHTML = new Date().getFullYear();

// NAVIATION IMAGE SLIDER //
const carousel = document.querySelector('.carousel-inner');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const carouselItems = Array.from(document.querySelectorAll('.carousel-item'));
let currentIndex = 0;

function setTransform(offset) {
    carousel.style.transform = `translateX(${offset}px)`;
}

function showNextItem() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    const offset = -currentIndex * (carouselItems[0].offsetWidth + 10); // Adjust the offset based on the image width and gap
    setTransform(offset);
}

function showPrevItem() {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    const offset = -currentIndex * (carouselItems[0].offsetWidth + 10); // Adjust the offset based on the image width and gap
    setTransform(offset);
}

nextButton.addEventListener('click', showNextItem);
prevButton.addEventListener('click', showPrevItem);

// COUNTDOWN LOGIC
const countdownText = document.querySelector('#countdown');
const targetDate = new Date("September 17, 2024 10:00:00 EST");

// Update the countdown every second
const countdown = setInterval(function () {

    if (countdownText) {
        // Get the current date and time
        const now = new Date().getTime();

        // Calculate the time remaining
        const timeRemaining = targetDate - now;

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // Display the countdown
        countdownText.textContent = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;

        if (days < 7 && days > -1) {
            countdownText.classList.add("countdownColor2");
        } else {
            countdownText.classList.remove("countdownColor2");
        }

        // If the countdown is finished, clear the interval
        if (timeRemaining < 0) {
            clearInterval(countdown);
            countdownText.textContent = "Enjoy Your Sailing!";
            countdownText.classList.add("explode");
            countdownText.classList.add("countdownColor1");
        }
    }

}, 1000);

// Home Page Map
function loadMap() {
    if (document.querySelector('#mapButton')) {
        const mapButton = document.querySelector('#mapButton');
        const mapImage = document.querySelector('#mapImage');

        mapButton.addEventListener('click', function () {
            if (mapImage.style.display === 'none') {
                mapImage.style.display = 'block';
                mapButton.textContent = 'Close Map';
                mapImage.scrollIntoView({ behavior: 'smooth', block: 'end' });  // Scrolls to bottom of img
            } else {
                mapImage.style.display = 'none';
                mapButton.textContent = 'View Map';
            }
        });
    }
}


// OBJECTS
const destinations = [
    {
        id: `ny`,
        city: 'New York, New York',
        description: "Everyone loves New York and there are a million reasons why. Here are but a few: the Statue of Liberty, the Empire State Building, Grand Central Station, the Ellis Island National Monument, the Brooklyn Bridge, the Metropolitan Museum of Art, the Guggenheim Museum, Times Square, Broadway, Greenwich Village, 5th Avenue and Central Park.",
        avgTemp: [61, 75],
        avgPrec: 4.0,
        dayOfTrip: 1,
        image1: 'images/ny-med.webp',
        image2: 'images/ny-small.webp',
        weatherLink: 'https://www.accuweather.com/en/us/new-york/10021/september-weather/349727'
    },
    {
        id: `bos`,
        city: 'Boston, Massachusetts',
        description: "Welcome to an American city where history truly does come to life. Be sure to visit Bunker Hill Monument, Paul Revere's House, the Old North Church, Quincy Market and the mansions of Beacon Hill. Then wander Boston Common, the oldest public park in the U.S.",
        avgTemp: [57, 72],
        avgPrec: 3.4,
        dayOfTrip: 2,
        image1: 'images/boston-med.webp',
        image2: 'images/boston-small.webp',
        weatherLink: 'https://www.accuweather.com/en/us/boston/02108/september-weather/348735?year=2024'
    },
    {
        id: `port`,
        city: 'Portland, Maine',
        description: "Portland offers all the amenities of a big city: art districts, a vibrant waterfront, museums, parks and diverse shopping opportunities. But within minutes, you can be enjoying the view from an historic lighthouse or tasting a juicy, local lobster.",
        avgTemp: [50, 69],
        avgPrec: 3.7,
        dayOfTrip: 3,
        image1: 'images/portland-med.webp',
        image2: 'images/portland-small.webp',
        weatherLink: 'https://www.accuweather.com/en/us/portland/04101/september-weather/329157?year=2024'
    },
    {
        id: `syd`,
        city: 'Sydney, Cape Breton Island, Nova Scotia',
        description: "The coal industry brought immigration from many parts of the world, giving Sydney a multicultural mix of over 50 ethnic backgrounds and a global flavor to its history. Located on Cape Breton Island, Sydney is also an ideal jumping-off point for scenic adventures.",
        avgTemp: [47, 65],
        avgPrec: 4.1,
        dayOfTrip: 5,
        image1: 'images/sydney-med.webp',
        image2: 'images/sydney-small.webp',
        weatherLink: 'https://www.accuweather.com/en/ca/sydney/b1p/september-weather/54678?year=2024'
    },
    {
        id: `char`,
        city: 'Charlottetown, Prince Edward Island',
        description: "Opulent clapboard villas lead the way towards Charlottetown's beautiful Victoria Park. Color is everywhere - from the Victorian architecture to the red sandstone cliffs. Sample homemade island jams, visit the Anne of Green Gables homestead and stroll the boardwalk.",
        avgTemp: [49, 64],
        avgPrec: 3.7,
        dayOfTrip: 6,
        image1: 'images/charlottetown-med.webp',
        image2: 'images/charlottetown-small.webp',
        weatherLink: 'https://www.accuweather.com/en/ca/charlottetown/c1e/september-weather/1327?year=2024'
    },
    {
        id: `sag`,
        city: 'Saguenay (La Baie), Québec',
        description: "The city of Saguenay, formed in 2002, is comprised of three boroughs: La Baie, Chicoutimi and Jonquiere. Chicoutimi and Jonquiere are situated on the shores of the Saguenay river and La Baie is found on the whimsically named, the Baie des Ha Ha! This French-speaking region is north of Québec City and is considered a small oasis in the midst of the nearly uninhabited Canadian wilderness.",
        avgTemp: [41, 61],
        avgPrec: 4.0,
        dayOfTrip: 8,
        image1: 'images/saguenay-med.webp',
        image2: 'images/saguenay-small.webp',
        weatherLink: 'https://www.accuweather.com/en/ca/saguenay/g7h/september-weather/50013?year=2024'
    },
    {
        id: `queb`,
        city: 'Québec City, Canada',
        description: "Québec City lies on the Saint Lawrence River and is divided by steep bluffs into Upper Town – which includes the old quarter – and Lower Town. Perched atop Cap-Diamant, the old quarter is the only walled city in North America and is a UNESCO World Heritage Site.",
        avgTemp: [46, 63],
        avgPrec: 4.9,
        dayOfTrip: 9,
        image1: 'images/quebeccity-med.webp',
        image2: 'images/quebeccity-small.webp',
        weatherLink: 'https://www.accuweather.com/en/ca/quebec/g1r/september-weather/1-50011_1_al?year=2024'
    }
]

const excursionList = [
    {
        id: 'ny',
        location: 'New York, New York',
        title: 'Statue Of Liberty & Ellis Island',
        description: 'The Statue of Liberty is one of the world\'s most renowned images and one of America\'s most beloved landmarks. This delightful tour allows you to stand at the base of \'Lady Liberty\' and learn all about the history of this iconic Statue. Your tour also includes a visit to the Ellis Island Museum where you will surely catch the spirit of the important role this island played in American history.<br><br>Boarding your coach at the pier, it\'s a brief transfer to Battery Park, which lies at the Southern tip of Manhattan. Here, you will board the ferry and take in the sites of New York Harbor, including beautiful views of the city, Brooklyn and its famous Bridge, Staten Island, New Jersey and the Manhattan skyline in the distance. Your first stop will be Liberty Island for a walk around the base of the magnificent Statue of Liberty (the tour does not include an interior visit of the Statue). Your tour guide will provide detailed information about \'Lady Liberty\', its completion in 1886 and its unique history. Stand in awe as you look up and see what so many saw as their first sight of a new life in America. During your visit, you will be allowed a brief amount of free time to visit the gift shop and enjoy some of the exterior exhibits.',
        type: 'tour',
        duration: '6',
        cost: 159,
        photoURL: 'images/ny-excursion1.webp'
    },
    {
        id: 'ny',
        location: 'New York, New York',
        title: 'Statue Of Liberty & Ellis Island',
        description: 'The Statue of Liberty is one of the world\'s most renowned images and one of America\'s most beloved landmarks. This delightful tour allows you to stand at the base of \'Lady Liberty\' and learn all about the history of this iconic Statue. Your tour also includes a visit to the Ellis Island Museum where you will surely catch the spirit of the important role this island played in American history.<br><br>Boarding your coach at the pier, it\'s a brief transfer to Battery Park, which lies at the Southern tip of Manhattan. Here, you will board the ferry and take in the sites of New York Harbor, including beautiful views of the city, Brooklyn and its famous Bridge, Staten Island, New Jersey and the Manhattan skyline in the distance. Your first stop will be Liberty Island for a walk around the base of the magnificent Statue of Liberty (the tour does not include an interior visit of the Statue). Your tour guide will provide detailed information about \'Lady Liberty\', its completion in 1886 and its unique history. Stand in awe as you look up and see what so many saw as their first sight of a new life in America. During your visit, you will be allowed a brief amount of free time to visit the gift shop and enjoy some of the exterior exhibits.',
        type: 'tour',
        duration: '6',
        cost: 159,
        photoURL: 'images/ny-excursion1.webp'

    }
]

// Builds the Excursion "cards"
function renderExcursionCards(filteredExcursions) {
    resetExcursionGrid();
    let count = 1;

    filteredExcursions.forEach(exc => {
        let card = document.createElement("section");
        let title = document.createElement("h3");
        let img = document.createElement("img");

        // Now create a div within the section -- The details will be appended to this block;
        let detailsBlock = document.createElement('div');
        let location = document.createElement("p");
        let duration = document.createElement("p");
        let cost = document.createElement("p");

        let description = document.createElement('p');


        title.textContent = exc.title;
        img.setAttribute("src", exc.photoURL);
        img.setAttribute("alt", `Excursion${count}`);
        img.setAttribute("loading", "lazy");
        description.innerHTML = exc.description;
        description.classList.add('excDescription');
        location.innerHTML = `${exc.location}`;
        duration.innerHTML = `${exc.duration} hours`;
        duration.classList.add('durationText');
        cost.innerHTML = `$${exc.cost.toFixed(2)}`;

        detailsBlock.appendChild(location);
        detailsBlock.appendChild(duration);
        detailsBlock.appendChild(cost);

        card.appendChild(title);
        card.appendChild(img);
        card.appendChild(detailsBlock);
        card.appendChild(description);

        excursionGrid.appendChild(card);
        count++;
    });
}


// CITY HEADERS
const cityHeader = document.querySelector(".cityHeader");
const cityN = document.querySelector("#cityN");
const cityDescription = document.querySelector('#cityDescription');
const weatherN = document.querySelector('#weatherLink');
const temp1 = document.querySelector('#temp1');
const temp2 = document.querySelector('#temp2');
const precip = document.querySelector('#precip');

function createCityProfile(cityID) {
    // Create a new picture element
    const city = destinations.find(dest => dest.id === cityID);

    const picture = document.createElement('picture');

    // Create the source elements for the source set
    const sources = [
        { srcSet: `${city.image2} 441w`, media: '(max-width: 441px)' },
        { srcSet: `${city.image1} 881w` }
    ];

    // Create source elements and append them to the picture element
    sources.forEach(source => {
        const sourceElement = document.createElement('source');
        sourceElement.srcset = source.srcSet;
        if (source.media) {
            sourceElement.media = source.media;
        }
        picture.appendChild(sourceElement);
    });

    // Create the img element with lazy loading
    const img = document.createElement('img');
    img.src = city.image1; // Placeholder image
    img.dataset.src = city.image2; // The actual image to load
    img.loading = 'lazy'; // Enable lazy loading
    img.alt = city.city;

    // Append the img element to the picture element
    picture.appendChild(img);

    // Append the picture element to the desired location in the DOM
    cityHeader.appendChild(picture);

    // BELOW THE IMAGE
    cityN.innerHTML = city.city;
    cityDescription.textContent = city.description;
    weatherN.setAttribute('href', city.weatherLink);
    temp1.textContent = city.avgTemp[0];
    temp2.textContent = city.avgTemp[1];
    precip.textContent = city.avgPrec.toFixed(1);
}

// Store the grid
const excursionPage = document.querySelector(".excursion-page");
const excursionGrid = document.querySelector('.excursion-grid');
const cityElements = document.querySelector(".excursions");
const headerHomeButton = document.querySelector("#home");
const nyNav = document.querySelector('#ny');
const bosNav = document.querySelector('#bos');

// Reset HTML renders for filtering purposes
function resetExcursionGrid() { excursionGrid.innerHTML = "" };
function resetCityHeader() { cityHeader.innerHTML = "" };

// Show the elements on home page, hide the others
function showHome() {
    const homePage = document.querySelector(".homeDetails");
    if (homePage.style.display === 'none') {
        homePage.style.display = 'block';
        cityElements.style.display = "none";
        resetExcursionGrid();
        excursionPage.style.display = 'none';
    }
}

// Hide home page exclusive elements
function hideHome() {
    const homePage = document.querySelector(".homeDetails");

    if (homePage.style.display === 'block') {
        homePage.style.display = 'none';
    }
}


// Show the city elements
function showCityElements() {
    cityElements.style.display = "block";
}

// Hide home page elements, show city elements, and show the excursions grid
function loadCityDetails() {
    const excursions = cityElements;

    if (excursions.style.display === 'none') {
        hideHome();
        showCityElements();
    }
}

function showexcursionPageElements() {
    excursionPage.style.display = "grid";
}

// View All Excursions button
function loadExcursionsButton() {
    if (document.querySelector('#excursionsHomeButton')) {
        const excButton = document.querySelector('#excursionsHomeButton');

        excButton.addEventListener('click', function () {
            hideHome();
            cityElements.style.display = "none";
            showexcursionPageElements();
        });
    }
}

function GetExcursionsByID(id) {
    return excursionList.filter(excursion => excursion.id === id);
}

// NAV EVENT LISTENERS
headerHomeButton.addEventListener('click', showHome);

function configureNav() {
    const navID = ["#ny", '#bos', '#port', '#syd', '#char', '#sag', '#queb'];

    navID.forEach(cityID => {
        document.querySelector(cityID).addEventListener('click', (menu) => {
            const id = menu.target.closest('a').id
            loadCityDetails();
            resetCityHeader();
            createCityProfile(id);
            showexcursionPageElements();
            renderExcursionCards(GetExcursionsByID(id));
        });
    });
}

// BUTTON ITINERARY MAP OPEN/CLOSE LOGIC
// LOGIC FOR ALL DOM CONTENT LOAD
document.addEventListener('DOMContentLoaded', function () {
    loadMap();
    configureNav();
    loadExcursionsButton();
});