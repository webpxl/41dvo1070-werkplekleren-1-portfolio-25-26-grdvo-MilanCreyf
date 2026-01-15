const webButton = document.getElementById("web");
const grafischButton = document.getElementById("grafisch");
const buitenSchoolButton = document.getElementById("buiten-school");
const allButton = document.getElementById("all");
console.log(document.querySelector(".project-grid"));
const projecten = [
    {
        id: "jigsaw-puzzel",
        naam: "jigsaw puzzel",
        beschrijving: "in dit project heb ik een jigsaw puzzel gemaakt met javasript. je moet een nummer kiezen dat al door mij gekozen is. als je het verkeerde nummer ingeeft chrashed de browser door een infinite loop.",
        afbeelding: "./css/assets/carousel/Jigsaw/jigsaw.png",
        afbeelding2: "./css/assets/carousel/Jigsaw/2.png",
        afbeelding3: "./css/assets/carousel/Jigsaw/3.png",
        date: "14 maart 2023",
        style: "buiten-school",
    },
    {
        id: "boutersem",
        naam: "boutersem",
        beschrijving: "hier had ik een design gemaakt voor een website voor de gemeente boutersem. ik heb dit gedaan in opdracht van via tienen. een SCHOOL project dus voor de richting Crossmedia.",
        afbeelding: "./css/assets/carousel/boutersem/home-velpeleven-short.png",
        afbeelding2: "./css/assets/carousel/boutersem/velpeleven2.png",
        afbeelding3: "./css/assets/carousel/boutersem/velpeleven3.png",
        date: "14 maart 2023",
        style: "web",
    },
    {
        id: "game-website",
        naam: "game website",
        beschrijving: "hier had ik een website gemaakt voor het laatste nieuws te kunnen bekijken voor bepaalde games. je kon de games zelf kiezen. ik heb dit gedaan voor UI design",
        afbeelding: "./css/assets/carousel/UI_Game/homepagina-echty-short.png",
        afbeelding2: "./css/assets/carousel/UI_Game/homepagina-echty.png",
        afbeelding3: "./css/assets/carousel/UI_Game/homepagina-echty3.png",
        date: "14 maart 2023",
        style: "web",
    },
    {
        id: "affiche-jongeman",
        naam: "affiche Jongeman",
        beschrijving: "dit is een affiche dat ik gemaakt had voor de richting Grafische Technieken in Via Tienen. dit is al 4 jaar oud.",
        afbeelding: "./css/assets/carousel/Jonge/affiche-jongeman.png",
        afbeelding2: "./css/assets/carousel/Jonge/affiche-jongeman3.png",
        afbeelding3: "./css/assets/carousel/Jonge/affiche-jongeman2.png",
        date: "14 maart 2023",
        style: "grafisch",
    },
    {
        id: "opendeurdag-tienen",
        naam: "opendeurdag Tienen",
        beschrijving: "dit is een opendeurdag affiche dat ik gemaakt had voor de richting Grafische Technieken in Via Tienen. dit is al 4 jaar oud.",
        afbeelding: "./css/assets/carousel/opendeur/opendeurdag.jpg",
        afbeelding2: "./css/assets/carousel/opendeur/opendeurdag2.jpg",
        afbeelding3: "./css/assets/carousel/opendeur/opendeurdag3.jpg",
        date: "14 maart 2023",
        style: "grafisch",
    },
    {
        id: "jazz-band",
        naam: "Jazz Band",
        beschrijving: "dit is een interactieve pdf dat ik gemaakt had voor de Jazz band Force For 4. dit had ik ook gemaakt in opdracht van Via Tienen voor de richting Grafische Technieken.",
        afbeelding: "./css/assets/carousel/Jazz/Jazz.png",
        afbeelding2: "./css/assets/carousel/Jazz/Jazz2.png",
        afbeelding3: "./css/assets/carousel/Jazz/Jazz3.png",
        date: "14 maart 2023",
        style: "grafisch",
    },
    {
        id: "art-museum",
        naam: "art museum",
        beschrijving: "dit was een opdracht dat ik gemaakt had via het volgen van een cursus in InDesign. ik moest een poster maken voor een art museum.",
        afbeelding: "./css/assets/carousel/musea/museum.png",
        afbeelding2: "./css/assets/carousel/musea/museum2.png",
        afbeelding3: "./css/assets/carousel/musea/museum3.png",
        date: "14 maart 2023",
        style: "grafisch",
    }

]

const sorterWeb = () => {
    const grid = document.querySelector(".project-grid");
    grid.innerHTML = "";

    for (let i = 0; i < projecten.length; i++) {
        if (projecten[i].style === "web") {
            grid.innerHTML += `
                <article class="project-card">
                    <h2>${projecten[i].naam}</h2>
                    <img src="${projecten[i].afbeelding}" alt="${projecten[i].naam}">
                    <p>${projecten[i].beschrijving}</p>
                    <span class="date">${projecten[i].date}</span>
                    <a href="project.html?id=${projecten[i].id}" class="btn-small">Lees meer</a>
                </article>
            `;
        }
    }
};



const sorterGrafisch = () => {
    const grid = document.querySelector(".project-grid");
    grid.innerHTML = "";

    for (let i = 0; i < projecten.length; i++) {
        if (projecten[i].style === "grafisch") {
            grid.innerHTML += `
                <article class="project-card">
                    <h2>${projecten[i].naam}</h2>
                    <img src="${projecten[i].afbeelding}" alt="${projecten[i].naam}">
                    <p>${projecten[i].beschrijving}</p>
                    <span class="date">${projecten[i].date}</span>
                    <a href="project.html?id=${projecten[i].naam}" class="btn-small">Lees meer</a>
                </article>
            `;
        }
    }
}

const sorterBuitenSchool = () => {
    const grid = document.querySelector(".project-grid");
    grid.innerHTML = "";

    for (let i = 0; i < projecten.length; i++) {
        if (projecten[i].style === "buiten-school") {
            grid.innerHTML += `
                <article class="project-card">
                    <h2>${projecten[i].naam}</h2>
                    <img src="${projecten[i].afbeelding}" alt="${projecten[i].naam}">
                    <p>${projecten[i].beschrijving}</p>
                    <span class="date">${projecten[i].date}</span>
                    <a href="project.html?id=${projecten[i].naam}" class="btn-small">Lees meer</a>
                </article>
            `;
        }
    }
}

const sortAll = () => {
    const grid = document.querySelector(".project-grid");
    grid.innerHTML = "";
    for (let i = 0; i < projecten.length; i++) {
        grid.innerHTML += `
                <article class="project-card">
                    <h2>${projecten[i].naam}</h2>
                    <img src="${projecten[i].afbeelding}" alt="${projecten[i].naam}">
                    <p>${projecten[i].beschrijving}</p>
                    <span class="date">${projecten[i].date}</span>
                    <a href="project.html?id=${projecten[i].naam}" class="btn-small">Lees meer</a>
                </article>
            `;

    }
}

webButton.addEventListener("click", sorterWeb);
grafischButton.addEventListener("click", sorterGrafisch);
buitenSchoolButton.addEventListener("click", sorterBuitenSchool);
allButton.addEventListener("click", sortAll);
document.addEventListener("DOMContentLoaded", sortAll);

