document.getElementById("currentyear").innerHTML = new Date().getFullYear();
document.getElementById("lastmodified").innerHTML = document.lastModified;

const products = [
    {
        id: 'fc-1888',
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: 'fc-2050',
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: 'fs-1987',
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: 'ac-2000',
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: 'jj-1969',
        name: "warp equalizer",
        averagerating: 5.0
    }
];

function buildOptions() {

    const selectElement = document.querySelector("#item");

    products.forEach(item => {
        const choice = document.createElement('option');
        choice.value = item.id;
        choice.textContent = item.name;
        selectElement.appendChild(choice);
    });
}

// Reviews Count
const totalReviews = document.querySelector(".numVisits");
let count = parseInt(localStorage.getItem("numReviews")) || 0;   // Default is zero

/* Button action when opening the new page */
document.addEventListener("DOMContentLoaded", function () {
    const pathname = window.location.pathname;

    if (pathname.includes("form.html")) {
        buildOptions();

    } else if (pathname.includes("review.html")) {
        count++;
        totalReviews.textContent = count;
        localStorage.setItem("numReviews", count);

    }

});