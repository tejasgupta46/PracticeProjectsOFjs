const userinp = document.querySelector('#match-input');
const suggestion = document.querySelector(".suggestion");

const url = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const arr = [];

async function getdata() {
    const response = await fetch(url);
    const data = await response.json();

    arr.push(...data);
}

getdata();


function findmatches(wordmatch, cities) {

    const regex = new RegExp(wordmatch, 'gi');

    return cities.filter((place) => {
        return place.city.match(regex) || place.state.match(regex);
    });

}


function displaymatches() {

    // First remove previous suggestions
    suggestion.innerHTML = "";

    // If input is empty, don't show anything
    if (this.value.trim() === "") {
        return;
    }

    const matches = findmatches(this.value, arr);

    // Show only 5 suggestions
    matches.slice(0, 10).forEach((place) => {

        const x = document.createElement('li');

        x.innerText = `City = ${place.city}, State = ${place.state}`;

        x.classList.add('box');

        suggestion.append(x);
    });
}


userinp.addEventListener('input', displaymatches);