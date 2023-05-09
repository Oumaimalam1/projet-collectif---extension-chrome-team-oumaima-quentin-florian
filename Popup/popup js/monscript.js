function generatePassword(length) {
    const charset =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let password = "";
    for (let i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return password;
}

// document.getElementById("mdp").innerHTML = generatePassword(15);

// Récupère le bouton de génération de mot de passe et le champ de saisie de la longueur du mot de passe
var genererButton = document.querySelector(".button");
var tailleInput = document.querySelector("#taille");

// Ajoute un gestionnaire d'événement de clic au bouton de génération de mot de passe
genererButton.addEventListener("click", function () {
    // Récupère la longueur du mot de passe entrée par l'utilisateur
    var length = parseInt(tailleInput.value);

    // Génère un mot de passe aléatoire
    var password = generatePassword(length);

    // Affiche le mot de passe généré dans la page
    var mdpElement = document.querySelector("#mdp");
    mdpElement.textContent = password;
});