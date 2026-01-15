const projecten = [
    {
        id: "jigsaw-puzzel",
        naam: "jigsaw puzzel",
        beschrijving: "in dit project heb ik een jigsaw puzzel gemaakt met javasript. je moet een nummer kiezen dat al door mij gekozen is. als je het verkeerde nummer ingeeft chrashed de browser door een infinite loop.",
        afbeelding: "./css/assets/carousel/Jigsaw/jigsaw.png",
        afbeelding2: "./css/assets/carousel/Jigsaw/3.png",
        afbeelding3: "./css/assets/carousel/Jigsaw/2.png",
        date: "5 Januari 2026",
        style: "buiten-school",
    },
    {
        id: "boutersem",
        naam: "boutersem",
        beschrijving: "hier had ik een design gemaakt voor een website voor de gemeente boutersem. ik heb dit gedaan in opdracht van via tienen. een SCHOOL project dus voor de richting Crossmedia. ik heb samengewerkt met 2 andere studenten om dit project te voltooien. ook heb ik gewerkt met de 'heemkundige kring' van Boutersem. Ik was verantwoordelijk voor het design en de Front-end van de website. ",
        afbeelding: "./css/assets/carousel/boutersem/home-velpeleven-short.png",
        afbeelding2: "./css/assets/carousel/boutersem/velpeleven2.png",
        afbeelding3: "./css/assets/carousel/boutersem/velpeleven3.png",
        date: "12 october 2024",
        style: "web",
    },
    {
        id: "game-website",
        naam: "game website",
        beschrijving: "hier had ik een website gemaakt voor het laatste nieuws te kunnen bekijken voor bepaalde games. je kon de games zelf kiezen. Ook kan je je statistieken bekijken van je favoriete games. dit zou je dan doen via het verbinden met je accounts (Playstation, Steam etc.). ik heb dit gedaan voor UI design",
        afbeelding: "./css/assets/carousel/UI_Game/homepagina-echty-short.png",
        afbeelding2: "./css/assets/carousel/UI_Game/homepagina-echty2.png",
        afbeelding3: "./css/assets/carousel/UI_Game/homepagina-echty.png",
        date: "september 2025",
        style: "web",
    },
    {
        id: "affiche-jongeman",
        naam: "affiche Jongeman",
        beschrijving: "dit is een affiche dat ik gemaakt had voor de richting Grafische Technieken in Via Tienen. dit is al 3 jaar oud.",
        afbeelding: "./css/assets/carousel/Jonge/affiche-jongeman2.png",
        afbeelding2: "./css/assets/carousel/Jonge/affiche-jongeman.png",
        afbeelding3: "./css/assets/carousel/Jonge/affiche-jongeman3.png",
        date: "23 November 2023",
        style: "grafisch",
    },
    {
        id: "opendeurdag-tienen",
        naam: "opendeurdag Tienen",
        beschrijving: "dit is een opendeurdag affiche dat ik gemaakt had voor de richting Grafische Technieken in Via Tienen. dit is al 3 jaar oud. ik heb de gezichten bedekt van de mensen op de affiche omwille van privacy redenen. maar de persoon die dit niet heeft vind het oke.",
        afbeelding: "./css/assets/carousel/opendeur/opendeurdag.jpg",
        afbeelding2: "./css/assets/carousel/opendeur/opendeurdag3.jpg",
        afbeelding3: "./css/assets/carousel/opendeur/opendeurdag2.jpg",
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
        date: "9 februari 2023",
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

// id uit URL halen
const params = new URLSearchParams(window.location.search);
const projectId = params.get("id");
console.log(projectId);

// juiste project zoeken
const project = projecten.find(p => p.naam === projectId);
console.log(project);

document.getElementById("title").textContent = project.naam;
document.getElementById("date").textContent = project.date;
document.getElementById("description").textContent = project.beschrijving;

document.getElementById("img1").src = project.afbeelding;
document.getElementById("img2").src = project.afbeelding2;
document.getElementById("img3").src = project.afbeelding3;