// Anime data (Title + Image + Video Link)

const animeData = [

    { title: "Attack on Titan(season-1)", img: "https://i.ibb.co/Md8W9fb/attack-on-titan-oad-episode-3-1280x720.jpg", video: "https://t.me/hikimaru_the_owner/9" },

    { title: "Attack on Titan (season-2)", img: "https://i.ibb.co/Md8W9fb/attack-on-titan-oad-episode-3-1280x720.jpg", video: "https://t.me/hikimaru_the_owner/36" },

    { title: "Attack on Titan (season-3)", img: "https://i.ibb.co/Md8W9fb/attack-on-titan-oad-episode-3-1280x720.jpg", video: "https://t.me/hikimaru_the_owner/49" },
  

    { title: "Attack on Titan (season-4)", img: "https://i.ibb.co/Md8W9fb/attack-on-titan-oad-episode-3-1280x720.jpg", video: "https://t.me/hikimaru_the_owner/71" },
    { title: "Baki Hanma(season-1)", img: "https://i.ibb.co/P7Y8Z4j/Screenshot-20250222-205538.jpg", video: "https://t.me/hikimarui_the_owner/3" },
  

    { title: "Baki Hanma(season -2)", img: "https://i.ibb.co/P7Y8Z4j/Screenshot-20250222-205538.jpg", video: "https://t.me/hikimarui_the_owner/3" },
  

    { title: "Dr. Stone(season-1)", img: "https://i.ibb.co/gbw62LcH/MV5-BYz-Zk-Yj-M1-MWMt-NTY3-Mi00-MTMz-LTlh-Nm-Qt-N2-Ex-Zj-Fk-Yzdj-Zm-Fj-Xk-Ey-Xk-Fqc-Gc-V1-FMjpg-UX10.jpg", video: "https://t.me/hikimaruii/4" },
    
    { title: "Dr.Stone(season-2)", img: "https://i.ibb.co/gbw62LcH/MV5-BYz-Zk-Yj-M1-MWMt-NTY3-Mi00-MTMz-LTlh-Nm-Qt-N2-Ex-Zj-Fk-Yzdj-Zm-Fj-Xk-Ey-Xk-Fqc-Gc-V1-FMjpg-UX10.jpg", video: "https://t.me/hikimaruii/67" },
];

// Function to show anime list

function loadAnime() {

    let animeList = document.getElementById("animeList");

    animeList.innerHTML = ""; // Clear existing items

    animeData.forEach(anime => {

        let div = document.createElement("div");

        div.className = "anime";

        div.innerHTML = `

            <img src="${anime.img}" alt="${anime.title}">

            <h3>${anime.title}</h3>

        `;

        div.onclick = () => watchAnime(anime.video);

        animeList.appendChild(div);

    });

}

// Function to filter anime based on search

function filterAnime() {

    let search = document.getElementById("search").value.toLowerCase();

    let filteredAnime = animeData.filter(anime => anime.title.toLowerCase().includes(search));

    

    let animeList = document.getElementById("animeList");

    animeList.innerHTML = ""; // Clear list

    filteredAnime.forEach(anime => {

        let div = document.createElement("div");

        div.className = "anime";

        div.innerHTML = `

            <img src="${anime.img}" alt="${anime.title}">

            <h3>${anime.title}</h3>

        `;

        div.onclick = () => watchAnime(anime.video);

        animeList.appendChild(div);

    });

}

// Function to watch anime (opens in Telegram and redirects back)

function watchAnime(videoUrl) {

    window.open(videoUrl, "_blank"); // Open in new tab

    // Redirect back after 60 seconds

    setTimeout(() => {

        window.location.href = "https://codepen.io/Himash-the-solid/pen/mydEdoV"; // Replace with your site

    }, 60000);

}

// Load anime list when page starts

loadAnime();
