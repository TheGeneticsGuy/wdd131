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
        duration: '6',
        cost: 159,
        photoURL: 'images/ny-excursion1.webp'
    },
    {
        id: 'ny',
        location: 'New York, New York',
        title: 'Central Park & The Met',
        description: 'Travel outside of Manhattan\'s business districts on this relaxed and interesting tour that highlights two well-known New York destinations.<br><br>Your tour starts with a narrated scenic drive to the Upper West Side, viewing many homes of celebrities as well as the Lincoln Center. A brief stop is made at the Dakota building, famous for being the place where John Lennon lived and died. From here, it\'s a short walk through \'Strawberry Fields\' the area of Central Park devoted to him. This historic park is over 150 years old, covers an area of 843 acres and plays host to 25 million visitors each year, along with having the distinction of having over 200 movies filmed there.<br><br>Re-joining your coach, you will continue on to famous 5th Avenue and the Metropolitan Museum of Art, one of the world\'s largest and most prestigious museums in the world, Founded in 1870, the Museum is one of the most visited museums in the world, featuring over two million works of art. The institution\'s permanent collection spans a wealth of history that includes everything from a transported Egyptian Temple to a large collection of 19th and 20th century European paintings. Here, you will have approximately 2.5 hours to explore the museum at your leisure. Your tour guide will inform you of any special, temporary exhibits, provide you with a map to help you navigate your way around and ensure you make the best use of your time. For those who would like a bite to eat or some refreshment, the Museum houses several cafés for your convenience.<br><br>Following your visit at the Met, you will travel further along 5th Avenue before transferring back to the pier where your tour concludes.',
        duration: '4.5',
        cost: 129,
        photoURL: 'images/ny-excursion1.webp'
    },
    {
        id: 'bos',
        location: 'Boston, Massachusetts',
        title: 'Freedom Trail Walk',
        description: 'Walk the historical Freedom Trail, pausing at many of the most pivotal sites in the American Revolution, while the guide elaborates on their significance in the founding of America. Highlights include the Massachusetts State House, Park Street Church and the Granary Burying Ground, the final resting place of John Hancock, Samuel Adams and Paul Revere. You will see the site of America\’s First Public School and the Old Corner Book Store where authors including Emerson and Longfellow often gathered. Near the circle of stones in front of the Old State House, you will hear the story of the Boston Massacre, the first bloodshed of the Revolution. You will then continue to the North End, Boston\’s oldest residential neighborhood and on to the home of Paul Revere. You will also view the exterior of the Old North Church, where Revere ordered two lanterns hung in the steeple to signal that the British were approaching by sea.',
        duration: '3.5',
        cost: 189,
        photoURL: 'images/bos-excursion1.webp'
    },
    {
        id: 'bos',
        location: 'Boston, Massachusetts',
        title: 'Lexington & Concord',
        description: 'Enjoy a picturesque drive into the outskirts of Boston and explore the historic battlefields of Lexington and Concord, two former farming communities that played pivotal roles in the earliest days of the American Revolution. At Lexington Green, you will see where the opening shots of the war were fired, killing several militiamen. The grassy site is now a public park and National Historic Landmark. You will also learn about the fighting that took place in nearby Concord, in particular at the Old North Bridge that spans the Concord River. It was there in 1775 that “the shot heard around the world” was fired, a skirmish that Ralph Waldo Emerson immortalized in a poem. You may see his home and those of other writers such as Nathaniel Hawthorne and Louisa May Alcott while in Concord. Upon reaching Cambridge, you can explore the hallowed halls of Harvard University on your own.',
        duration: '4',
        cost: 95,
        photoURL: 'images/bos-excursion2.webp'
    },
    {
        id: 'port',
        location: 'Portland, Maine',
        title: 'Lighthouses Of Maine',
        description: 'The spectacular rocky coastline nearby Portland, Maine is studded with lighthouses dating back over 200 years. On this tour you\’ll see three prominent lighthouses and visit the Museum of Portland Head Light. Drive through historic Portland passing by the Eastern Promenade offering a panoramic view of Casco Bay, the Portland Observatory, the new arts district, as well as the thriving business districts.<br><br>Visit Bug Light, a steel structure lined with brick, that was first lit in 1875 to aid navigation for this busy port. Enjoy the Liberty Ship Memorial dedicated to the 266 ships built on the site during WWII. These vessels were the workhorses of the WWII fleet, carrying cargoes of grain, mail, ore, ammo, trucks and troops. Then it\’s a short jaunt to the Spring Point Ledge Lighthouse. Many vessels ran aground on this dangerous ledge before requests from several steamship companies convinced the government to build a lighthouse.<br><br>Travel along Cape Elizabeth\’s rocky coast to Fort Williams, now home of Maine\’s oldest lighthouse. First illuminated on January 10, 1791, Portland Head Light has since stood at the gateway to the harbor for mariners traveling the perilous coast.Here you\’ll have ample time to explore the grounds and visit the museum located in the former lighthouse keeper\’s quarters.It chronicles the history of the lighthouse and Fort Williams with exhibits displaying original artifacts and documents, navigational aids, lenses, video displays, models and photography.',
        duration: '3.5',
        cost: 119,
        photoURL: 'images/port-excursion1.webp'
    },
    {
        id: 'port',
        location: 'Portland, Maine',
        title: 'Portland Panoramic',
        description: 'Settle in for a spectacularly scenic drive around Portland and take in the historical landmarks that define the city. While driving between the Eastern Promenade that fronts Casco Bay and the elevated park along the Western Promenade, you will see a collection of outstanding 19th-century architecture that includes Victoria Mansion. This National Historic Landmark exemplifies the Italian villa style that was fashionable at the time. In the New Arts District, you will pass highlights such as the Portland Museum of Art, the State Theatre and the home where poet Henry Wadsworth Longfellow grew up. Now home to the Maine Historical Society, it is the first house museum in Maine. On the other side of the Fore River, you will find Bug Light Lighthouse, a 19th-century cast-iron lighthouse that was modeled after a monument that stands near the Acropolis in Athens. Only 26 feet high, it became known as The Bug because of its small size.',
        duration: '1.75',
        cost: 99,
        photoURL: 'images/port-excursion2.webp'
    },
    {
        id: 'syd',
        location: 'Sydney, Cape Breton Island, Nova Scotia',
        title: 'Scenic Cabot Trail',
        description: 'Experience the Cabot Trail as you drive along a small portion of the Atlantic shore from the port of Sydney to Ingonish. You\'ll view some of the most dramatic and pristine scenery in North America including spruce covered mountains, tranquil rivers and ocean beaches.<br><br>This tour reveals vistas that inspired Alexander Graham Bell to observe, \"I have traveled around the globe. I have seen the Canadian and American Rockies, the Andes and the Alps and the highlands of Scotland, but for simple beauty, Cape Breton outrivals them all.\" Picture stops along the way will help you remember some of the most dramatic and unspoiled scenery you experienced while on Cape Breton Island. Enjoy a buffet style lunch along the Cabot Trail before returning to your ship.',
        duration: '7',
        cost: 179,
        photoURL: 'images/syd-excursion1.webp'
    },
    {
        id: 'syd',
        location: 'Sydney, Cape Breton Island, Nova Scotia',
        title: 'Heart of the Island',
        description: 'Enjoy a picturesque drive into the outskirts of Boston and explore the historic battlefields of Lexington and Concord, two former farming communities that played pivotal roles in the earliest days of the American Revolution. At Lexington Green, you will see where the opening shots of the war were fired, killing several militiamen. The grassy site is now a public park and National Historic Landmark. You will also learn about the fighting that took place in nearby Concord, in particular at the Old North Bridge that spans the Concord River. It was there in 1775 that “the shot heard around the world” was fired, a skirmish that Ralph Waldo Emerson immortalized in a poem. You may see his home and those of other writers such as Nathaniel Hawthorne and Louisa May Alcott while in Concord. Upon reaching Cambridge, you can explore the hallowed halls of Harvard University on your own.',
        duration: '3.5',
        cost: 99,
        photoURL: 'images/syd-excursion2.webp'
    },
    {
        id: 'char',
        location: 'Charlottetown, Prince Edward Island',
        title: 'The Island\'s Finest: Anne, Lobster & Scenic Drive',
        description: 'Experience the very best of the island on this delightful tour! Learn about the famous fictional character Anne of Green Gables, see the sandy beach and red cliffs at Prince Edward Island National Park and enjoy a delicious traditional lobster lunch. En route, soak up the Island\’s spectacular scenery and learn about island life from your local guide. You\’ll drive through Charlottetown, Canada\’s birthplace, before traveling into the countryside.<br><br>View rolling farmlands, stunning seascapes, tiny villages, bustling harbors and enjoy a stop at a working fishing harbor. Visit Green Gables, the homestead that is featured prominently in Lucy Maud Montgomery\’s book, Anne of Green Gables. Explore the rooms in the house or take a stroll down lover\’s lane. Take in the stunning scenery at the beaches of Prince Edward Island National Park, gazing across the white sandy shore and sapphire blue water to the red sandstone cliffs.<br><br>Enjoy a delicious lobster lunch at the Prince Edward Island Preserve Company, an island landmark. This 1913 butter factory is now a shop showcasing island products, including preserves. Take your time to browse the shop and take in the beautiful gardens before returning to Charlottetown.',
        duration: '4',
        cost: 179,
        photoURL: 'images/char-excursion1.webp'
    },
    {
        id: 'char',
        location: 'Charlottetown, Prince Edward Island',
        title: 'Charlottetown Churches Walking Tour',
        description: 'Meander through Charlottetown at a leisurely pace, admiring four of its most glorious churches, ranging from the oldest to one said to be haunted by phantom bell ringers. After walking from the pier, you will soon arrive in the heart of Charlottetown, home to some of Canada\’s most beautiful and historical churches. Your first destination will be Trinity United Church, which opened in 1864, shortly after the convention that led to the country\’s confederation. The town\’s oldest church in continuous use, Trinity can accommodate 1,000 worshippers and is known for its magnificent stained-glass windows however we\’ll only be able to admire it from the outside due to damage caused by Hurricane Fiona in late 2022. Next, you will visit St. Dunstan\’s Basilica, a stone French Gothic-style church that was rebuilt in 1913 following a devastating fire. It\’s the fourth church built on this site, all of which were destroyed by fire. Now designated a National Historic Site of Canada, the elaborate church is one of the town\’s most visible landmarks, particularly its soaring spires. Then, you will drop by St. James Presbyterian Church. Unlike the stone churches in town, it was features a wooden ceiling and interior columns. Phantom bell ringers supposedly haunt the church, a story that it has been commemorated on stamps. Before returning to the pier, you will also see St. Peter\’s Anglican Cathedral, which was constructed in 1869. Designed by one of Prince Edward Island\’s leading architects at the time, the church is inspiring, as is the attached All Souls Chapel, a National Historic Site.',
        duration: '3.5',
        cost: 75,
        photoURL: 'images/char-excursion2.webp'
    },
    {
        id: 'sag',
        location: 'Saguenay (La Baie), Québec',
        title: 'Hiking Saguenay National Park',
        description: 'Experience the very best of the island on this delightful tour! Learn about the famous fictional character Anne of Green Gables, see the sandy beach and red cliffs at Prince Edward Island National Park and enjoy a delicious traditional lobster lunch. En route, soak up the Island\’s spectacular scenery and learn about island life from your local guide. You\’ll drive through Charlottetown, Canada\’s birthplace, before traveling into the countryside.<br><br>View rolling farmlands, stunning seascapes, tiny villages, bustling harbors and enjoy a stop at a working fishing harbor. Visit Green Gables, the homestead that is featured prominently in Lucy Maud Montgomery\’s book, Anne of Green Gables. Explore the rooms in the house or take a stroll down lover\’s lane. Take in the stunning scenery at the beaches of Prince Edward Island National Park, gazing across the white sandy shore and sapphire blue water to the red sandstone cliffs.<br><br>Enjoy a delicious lobster lunch at the Prince Edward Island Preserve Company, an island landmark. This 1913 butter factory is now a shop showcasing island products, including preserves. Take your time to browse the shop and take in the beautiful gardens before returning to Charlottetown.',
        duration: '4',
        cost: 109,
        photoURL: 'images/sag-excursion1.webp'
    },
    {
        id: 'sag',
        location: 'Saguenay (La Baie), Québec',
        title: 'Best of Saguenay',
        description: 'Enjoy the best of what the Saguenay region has to offer. Your tour begins with a scenic drive through La Baie, where you’ll discover the importance of the Saguenay Fjord – deeply chiseled in the Laurentian Mountains. The Fjord Museum will explain the creation of the fjord and the mysteries it conceals. You’ll pass the Ha! Ha! Pyramid, a monument to the great flood of 1996 that devastated the region and proved to be one of Canada’s greatest natural disasters. Discover the historic old paper mill, a National Historic Site in Canada, once owned by the Compagnie de Pulpe de Chicoutimi. Renovated in 2002, La Pulperie de Chicoutimi offers exhibitions on local history and culture. Your final stop will be to Le Chevrier du Nord, a small family run goat farm that produces goat mohair wool.',
        duration: '3.5',
        cost: 139,
        photoURL: 'images/sag-excursion2.webp'
    },
    {
        id: 'queb',
        location: 'Québec City, Canada',
        title: 'Grand Exploration Of Quebec',
        description: 'On this tour you\'ll experience the best of both the city of Quebec and the surrounding countryside. Perched high above the St. Lawrence River, your tour will include a stop at Dufferin Terrace and Chateau Frontenac, where you\'ll have an opportunity to independently visit the surroundings of the Chateau Frontenac and take in the spectacular view of the St. Lawrence River, Ile d\’Orleans and the Laurentian Mountains from Dufferin Terrace. Passing through the St. Louis Gate, you will explore the National Battlefields Park, site of the historic battle where the French surrendered to the British in 1759. A photo stop will be made at Cap Diamant before continuing to the heart of the lower town and the beautifully restored market square, Place Royale.<br><br>Within minutes of the Old Walled City of Quebec are the beautiful pastoral landscapes of the Island of Orleans and Montmorency Falls. Cascading down a 272-foot cliff, Montmorency Falls is one-and-a-half times as high as Niagara Falls. Take a step back in time as you cross the bridge to the Ile d\'Orleans, where you will enjoy a scenic drive passing the tip of the Island and the lovely 19th-century resort homes of Quebec\'s rich merchant class with spectacular views of the skyline of Quebec. Located along the infamous Beaupre Coast, your journey takes you along the Chemin de Roy (King\'s Road) to the world-renowned shrine of St. Anne de Beaupre. With over one-and-a-half million visitors and pilgrims making their way to the shrine each year, St. Anne has become one of the most important Catholic sites in North America. You\'ll enjoy lunch at a beautiful setting in the countryside of Quebec.',
        duration: '7.5',
        cost: 179,
        photoURL: 'images/queb-excursion1.webp'
    },
    {
        id: 'queb',
        location: 'Québec City, Canada',
        title: 'Countryside of Quebec',
        description: 'Experience the splendor of French Canada\'s countryside as you drive into the foothills of the Laurentian Mountains to the renowned Lake Beauport area. Surrounded by emerald forests, a photo stop will be made to view the beauty of the lake and mountain scenery. Continuing toward the Beaupre Coast a stop will be made at the magnificent Montmorency Falls. Cascading down a 272-foot (83 meter) cliff, Montmorency is one-and-a-half times as high as Niagara Falls. Take a step back in time as you cross the bridge to the Ile d\'Orleans where you\'ll enjoy a scenic drive through the picturesque villages of traditional rural Quebec. Passing the tip of the island, see the lovely 19th-century resort homes of Quebec\'s rich merchant class with spectacular views of the skyline of the city. The Quebec area is well-known for its production of maple syrup therefore, during the tour you\'ll have the opportunity to visit an authentic sugar shack, learn about the production of the maple products and sample the sweet maple taffy.',
        duration: '4',
        cost: 109,
        photoURL: 'images/queb-excursion2.webp'
    }
]

const cities = [
    {
        id: 'nyc-option',
        name: "New York, New York",
    },
    {
        id: 'bos-option',
        name: "Boston, Massachusetts",
    },
    {
        id: 'port-option',
        name: "Portland, Maine",
    },
    {
        id: 'syd-option',
        name: "Sydney, Nova Scotia",
    },
    {
        id: 'char-option',
        name: 'Charlottetown, Prince Edward Island',
    },
    {
        id: 'sag-option',
        name: 'Saguenay (La Baie), Québec',
    },
    {
        id: 'queb-option',
        name: 'Québec City, Canada',
    }
];

// Reviews Count
let count = parseInt(localStorage.getItem("numSuggestions")) || 0;   // Default is zero
const inputForm = document.querySelector('#coreForm');
const suggestions = document.querySelector('.suggestions');
const numSuggestedSubs = document.querySelector('.numSuggestionSubs');

inputForm.addEventListener('submit', function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Add the count to local storage
    count++;
    localStorage.setItem("numSuggestions", count);

    // Hide the form
    inputForm.style.display = 'none';

    // Show the result
    numSuggestedSubs.style.display = "block";
    suggestions.innerHTML = `Number of Excursions Suggested: ${count}`;

});

// Options Dropdown on form
function buildOptions() {

    const selectElement = document.querySelector("#citySelection");

    cities.forEach(item => {
        const choice = document.createElement('option');
        choice.value = item.id;
        choice.textContent = item.name;
        selectElement.appendChild(choice);
    });
}


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

    // Add the excursion count to end of the text in the span
    excursionCount.textContent = filteredExcursions.length;
}


// CITY HEADERS
const cityHeader = document.querySelector(".cityHeader");
const cityN = document.querySelector("#cityN");
const cityDescription = document.querySelector('#cityDescription');
const weatherN = document.querySelector('#weatherLink');
const temp1 = document.querySelector('#temp1');
const temp2 = document.querySelector('#temp2');
const precip = document.querySelector('#precip');
const excursionCount = document.querySelector('.excursionCount');

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
const formPage = document.querySelector('.formPage');
const homePage = document.querySelector(".homeDetails");

// Reset HTML renders for filtering purposes
function resetExcursionGrid() { excursionGrid.innerHTML = "" };
function resetCityHeader() { cityHeader.innerHTML = "" };

// Show the elements on home page, hide the others
function showHome() {

    if (homePage.style.display === 'none') {
        homePage.style.display = 'block';
        cityElements.style.display = "none";
        resetExcursionGrid();
        excursionPage.style.display = 'none';
        formPage.style.display = 'none';
    }
}

// Hide home page exclusive elements
function hideHome() {
    if (homePage.style.display === 'block') {
        homePage.style.display = 'none';
    }
    if (formPage.style.display === 'block') {
        formPage.style.display = 'none';
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

// Sow the excursion details
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

        renderExcursionCards(excursionList);
    }
}

// Suggestion Button
function loadSuggestionButton() {
    if (document.querySelector('#suggestionButton')) {
        const suggestButton = document.querySelector('#suggestionButton');

        suggestButton.addEventListener('click', function () {
            resetExcursionGrid();
            excursionPage.style.display = 'none';
            cityElements.style.display = "none";
            formPage.style.display = 'block';
            inputForm.style.display = 'block';
            suggestions.innerHTML = "";
        });
    }
}

// Filter the excursion list by city, by city id
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
    loadSuggestionButton();
    buildOptions();
});