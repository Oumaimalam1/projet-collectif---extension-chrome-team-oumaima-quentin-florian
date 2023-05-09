function generatePassword(length) {
    const charset =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let password = "";
    for (let i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return password;
}

// Récupère le bouton de génération de mot de passe et le champ de saisie de la longueur du mot de passe

var genererButton = document.querySelector(".button");
var tailleInput = document.querySelector("#taille");

// Ajoute un gestionnaire d'événement de clic au bouton de génération de mot de passe
genererButton.addEventListener("click", function () {
    // Récupère la longueur du mot de passe entrée par l'utilisateur
    var length = parseInt(tailleInput.value);

    // Génère un mot de passe aléatoire
    var password = generatePassword(length);

    chrome.storage.session.set({ Mdp: password }).then(() => {
        console.log("Value is set to " + password);
    });

    chrome.storage.session.get(["Mdp"]).then((password) => {
        console.log("Value currently is " + password.key);
    });

    // Affiche le mot de passe généré dans la page
    var mdpElement = document.querySelector("#mdp");
    mdpElement.textContent = password;
});

// Stocke le mot de passe généré dans le stockage de session
chrome.storage.session.set({ Mdp: password }).then(() => {
    console.log("Value is set to " + password);
});

// Récupère le mot de passe stocké à partir du stockage de session
chrome.storage.session.get(["Mdp"]).then((result) => {
    console.log("Value currently is " + result.Mdp);
});


