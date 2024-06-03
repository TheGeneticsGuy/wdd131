document.querySelector("#currentyear").innerHTML = new Date().getFullYear();

// NAVIATION CAROUSEL

const carousel = document.querySelector('.carousel-inner');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const carouselItems = Array.from(document.querySelectorAll('.carousel-item'));
let currentIndex = 0;
let isDragging = false;

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


const destinations = [
    {
        city: 'New York, New York',
        description: "Everyone loves New York and there are a million reasons why. Here are but a few: the Statue of Liberty, the Empire State Building, Grand Central Station, the Ellis Island National Monument, the Brooklyn Bridge, the Metropolitan Museum of Art, the Guggenheim Museum, Times Square, Broadway, Greenwich Village, 5th Avenue and Central Park.",
        avgTemp: [61, 75],
        avgPrec: 4,
        dayOfTrip: 1

    },
    {
        city: 'Boston, Massachusetts',
        description: "Welcome to an American city where history truly does come to life. Be sure to visit Bunker Hill Monument, Paul Revere's House, the Old North Church, Quincy Market and the mansions of Beacon Hill. Then wander Boston Common, the oldest public park in the U.S.",
        avgTemp: [57, 72],
        avgPrec: 3.4,
        dayOfTrip: 2
    },
    {
        city: 'Portland, Maine',
        description: "Portland offers all the amenities of a big city: art districts, a vibrant waterfront, museums, parks and diverse shopping opportunities. But within minutes, you can be enjoying the view from an historic lighthouse or tasting a juicy, local lobster.",
        avgTemp: [50, 69],
        avgPrec: 3.7,
        dayOfTrip: 3
    },
    {
        city: 'Sydney, Cape Breton Island, Nova Scotia',
        description: "The coal industry brought immigration from many parts of the world, giving Sydney a multicultural mix of over 50 ethnic backgrounds and a global flavor to its history. Located on Cape Breton Island, Sydney is also an ideal jumping-off point for scenic adventures.",
        avgTemp: [47, 65],
        avgPrec: 4.1,
        dayOfTrip: 5
    },
    {
        city: 'Charlottetown, Prince Edward Island',
        description: "Opulent clapboard villas lead the way towards Charlottetown's beautiful Victoria Park. Color is everywhere - from the Victorian architecture to the red sandstone cliffs. Sample homemade island jams, visit the Anne of Green Gables homestead and stroll the boardwalk.",
        avgTemp: [49, 64],
        avgPrec: 3.7,
        dayOfTrip: 6
    },
    {
        city: 'Saguenay (La Baie), Québec',
        description: "The city of Saguenay, formed in 2002, is comprised of three boroughs: La Baie, Chicoutimi and Jonquiere. Chicoutimi and Jonquiere are situated on the shores of the Saguenay river and La Baie is found on the whimsically named, the Baie des Ha Ha! This French-speaking region is north of Québec City and is considered a small oasis in the midst of the nearly uninhabited Canadian wilderness.",
        avgTemp: [41, 61],
        avgPrec: 4.0,
        dayOfTrip: 8
    },
    {
        city: 'Québec City, Canada',
        description: "Québec City lies on the Saint Lawrence River and is divided by steep bluffs into Upper Town – which includes the old quarter – and Lower Town. Perched atop Cap-Diamant, the old quarter is the only walled city in North America and is a UNESCO World Heritage Site.",
        avgTemp: [46, 63],
        avgPrec: 4.9,
        dayOfTrip: 9
    }
]