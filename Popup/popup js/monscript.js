// Fonction qui est appelée lorsque la page est chargée
window.onload = function () {
  // Récupère les boutons de commutation
  var fonctionnalite1 = document.getElementById("fonctionnalite1");
  var fonctionnalite2 = document.getElementById("fonctionnalite2");
  var fonctionnalite3 = document.getElementById("fonctionnalite3");

  // Restaure les états des boutons à partir du stockage local
  chrome.storage.local.get(
    ["fonctionnalite1", "fonctionnalite2", "fonctionnalite3"],
    function (result) {
      fonctionnalite1.checked = result.fonctionnalite1;
      fonctionnalite2.checked = result.fonctionnalite2;
      fonctionnalite3.checked = result.fonctionnalite3;
    }
  );

  // Enregistre les états des boutons dans le stockage local lorsqu'ils sont modifiés
  fonctionnalite1.addEventListener("click", function () {
    chrome.storage.local.set({ fonctionnalite1: fonctionnalite1.checked });
  });
  fonctionnalite2.addEventListener("click", function () {
    chrome.storage.local.set({ fonctionnalite2: fonctionnalite2.checked });
  });
  fonctionnalite3.addEventListener("click", function () {
    chrome.storage.local.set({ fonctionnalite3: fonctionnalite3.checked });
  });
};

function generatePassword(length) {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
  let password = "";
  for (let i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return password;
}

document.getElementById("mdp").innerHTML = generatePassword(15);

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

console.log(generatePassword(15));
