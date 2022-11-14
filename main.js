const legends = [
    {
        name : "Fahmida Yeasmin",
        position : "Prime Minister & programmer",
        img : "https://rameem2003.github.io/oursite/img/gallery/fahmida.jpg",
        facbook : "https://www.facebook.com/fahmida.yeasmin.378",
        github : "https://github.com/Fahmida12345",
    },

    {
        name : "M H Rameem",
        position : "Member & Programmer",
        img : "https://rameem2003.github.io/oursite/img/gallery/MAHMOOD%20HASSAN%20RAMEEM%201.jpg",
        facbook : "https://www.facebook.com/mahmood.rameem/",
        github : "https://github.com/rameem2003",
    },

    {
        name : "Abdul Baten",
        position : "Member & Treasurer of ROL",
        img : "https://rameem2003.github.io/oursite/img/gallery/baten.jpg",
        facbook : "https://www.facebook.com/AbdulBaten9472",
        github : "",
    },

    {
        name : "Jahedul Islam Rasel",
        position : "Member & Co-ordinator",
        img : "https://rameem2003.github.io/oursite/img/gallery/jahid_rasel.jpg",
        facbook : "https://www.facebook.com/jahedulislam.hridoy.564",
        github : "https://github.com/Hridoy221",
    },

    {
        name : "Pabel Pathan",
        position : "Member & Planner of ROL",
        img : "https://rameem2003.github.io/oursite/img/gallery/pathan.jpg",
        facbook : "https://www.facebook.com/mdpabelpathanrIPa",
        github : "https://github.com/pabelpathan",
    },

    {
        name : "Mahabul Alam",
        position : "Member",
        img : "https://rameem2003.github.io/oursite/img/gallery/mahabul_alam.jpg",
        facbook : "https://www.facebook.com/md.mahabulalom.5458",
        github : "https://github.com/MDMahabulAlam",
    },

    {
        name : "Maysha Siddiqi",
        position : "Member",
        img : "https://rameem2003.github.io/oursite/img/gallery/maysha.jpg",
        facbook : "https://www.facebook.com/maysa.siddiq",
        github : "",
    },

    {
        name : "Reetu Rahman",
        position : "Member",
        img : "https://rameem2003.github.io/oursite/img/gallery/ritu_rahman.jpg",
        facbook : "https://www.facebook.com/profile.php?id=100040018942337",
        github : "",
    }
]

const members_card = document.getElementById("members_card");

const loadAllMembers = () => {
    legends.map(legend => {
        const legend_card = document.createElement("div");
        legend_card.classList.add("members");

        legend_card.innerHTML = `
            <div class="img">
                <img src="${legend.img}" alt="">
            </div>

            <div class="name">
                <h3>${legend.name}</h3>
            </div>

            <div class="post">
                <h4>${legend.position}</h4>
            </div>

            <div class="link">
                <a href="${legend.facbook}" target="_blank"><i class="fa-brands fa-facebook"></i> Facebook</a>
                <a href="${legend.github}" target="_blank"><i class="fa-brands fa-github"></i>Github</a>
            </div>
        
        `;


        members_card.appendChild(legend_card)
    })
}


loadAllMembers();