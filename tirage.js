const team = [
    ["babydeti1.png", "Projet 1","Explication 1", "Team 1", "Loïc", "Catherine", "Fabrice", "Jean-Claude"],
    ["ballon.png", "Projet 2","Explication 2", "Team 2", "Marc", "Denis", "Caroline", "Christiane"],
    ["didiernoel.png", "Projet 3","Explication 3", "Team 3", "Sylvie", "Rachel"],
    ["lama.png", "Projet 4","Explication 4", "Team 4", "Hugo", "Solange", "Alexandre"],
    ["orties1.png", "Projet 5","Explication 5", "Team 5", "Megan", "Rick"],
    ["WuShangSplash.png", "Projet 6","Explication 6", "Team 6", "Jules", "Rahim", "Nicolas"]
];

$(()=>{

    console.log("Connexion tirage.js v1 ---- OK");

    $("#lancer").click(()=>{
        $(".name_projet").css("color","red");
        $(".explain").css("color","red");
        $(".name_group").css("color","red");
        $(".list_group").css("color","red");

        let test = setInterval(() => {
            blendTeam(false);
            $("button").prop("disabled", true);
        }, 100);

        setTimeout(() =>{
            clearInterval(test);
            blendTeam(true);
            $(".name_projet").css("color","#1e4f74");
            $(".explain").css("color","#1e4f74");
            $(".name_group").css("color","#1e4f74");
            $(".list_group").css("color","#1e4f74");
            $("button").prop("disabled", false);
        },5000);

    });
});


function randIn(min, max){
    return Math.floor(Math.random()*(max - min + 1) + min);
}

function blendTeam(order){
    var verif = [];
    var rd;
    var cpt = 0;

    for(let i = 0; i < $(".carte").length; i++){
        console.log(verif);

        if(order){
            do {
                rd = randIn(0, team.length - 1);
            } while (verif.includes(rd));
        

        console.log("rd choisi : "+rd);
        

        verif.push(rd);
        }
        else{
            rd = randIn(0, team.length - 1);
        }

        $("img").eq(i).attr("src","img/"+team[rd][0]);
        $(".name_projet").eq(i).text(team[rd][1]);
        $(".explain").eq(i).text(team[rd][2]);
        $(".name_group").eq(i).text(team[rd][3]);

        for(let j = 4; j < team[rd].length; j++){
            if(j==4) $(".list_group").eq(i).text(team[rd][j]+"👑");
            else $(".list_group").eq(i).append(" "+team[rd][j]);
        }
        console.log("______________");
        
        console.log(cpt++);
    }
}

