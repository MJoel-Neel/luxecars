function connect(){
    const connexion = document.getElementById('connexion') ;
    const main = document.getElementsByTagName('main')[0];
    const header = document.getElementsByTagName('header')[0];
    const h3 = document.getElementById('section-title');
    const section = document.getElementsByTagName('section')[0];

    header.style.backgroundColor="transparent";
    main.style.display="none";
    h3.style.display="none";
    section.style.display="none";
    connexion.style.display="block";

}

function inscription(){
    const inscription = document.getElementById('inscription');
    const main = document.getElementsByTagName('main')[0];
    const header = document.getElementsByTagName('header')[0];
    const h3 = document.getElementById('section-title');
    const section = document.getElementsByTagName('section')[0];

    header.style.backgroundColor="transparent";
    main.style.display="none";
    h3.style.display="none";
    section.style.display="none";
    connexion.style.display="none";
    inscription.style.display="block";
}

function merci(){
    alert("Bon retour Mr/Mme Merci d'être revenue sur notre Site Internet")
}

function bienvenue(){
    alert("Bienvenue Parmi nous")
}