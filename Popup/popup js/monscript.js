document
    .getElementById("fonctionnalite1")
    .addEventListener("click", function (e) {
        var checkbox = e.target;
        if (checkbox.checked) {
            document.getElementById("modalGen").style.display = "block";
        } else {
            document.getElementById("modalGen").style.display = "none";
        }
    });
document
    .getElementById("modal-gen-close")
    .addEventListener("click", function (e) {
        document.getElementById("modalGen").style.display = "none";
        document.getElementById("fonctionnalite1").checked = false;
    });

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

function savePassword(password) {
    // Récupère les mots de passe déjà générés
    chrome.storage.local.get('passwords', function (data) {
        var passwords = data.passwords || [];

        // Ajoute le nouveau mot de passe à la liste
        passwords.push(password);

        // Stocke les mots de passe mis à jour dans le local storage
        chrome.storage.local.set({ 'passwords': passwords }, function () {
            console.log('Mot de passe enregistré :', password);
        });
    });
}

function loadPasswords() {
    // Récupère les mots de passe déjà générés
    chrome.storage.local.get('passwords', function (data) {
        var passwords = data.passwords || [];

        // Affiche les mots de passe dans la page
        var passwordList = document.getElementById('passwordList');
        passwordList.innerHTML = '';

        passwords.forEach(function (password, index) {
            var listItem = document.createElement('li');
            listItem.textContent = password;

            var deleteButton = document.createElement('button');
            deleteButton.textContent = 'Supprimer';
            deleteButton.addEventListener('click', function () {
                deletePassword(index);
            });

            listItem.appendChild(deleteButton);
            passwordList.appendChild(listItem);
        });
    });
}

function deletePassword(index) {
    // Récupère les mots de passe déjà générés
    chrome.storage.local.get('passwords', function (data) {
        var passwords = data.passwords || [];

        if (index >= 0 && index < passwords.length) {
            // Supprime le mot de passe de la liste
            passwords.splice(index, 1);

            // Stocke les mots de passe mis à jour dans le local storage
            chrome.storage.local.set({ 'passwords': passwords }, function () {
                console.log('Mot de passe supprimé');
                loadPasswords();
            });
        }
    });
}



document.addEventListener('DOMContentLoaded', function () {
    var genererButton = document.querySelector(".button");
    var tailleInput = document.querySelector("#taille");

    genererButton.addEventListener("click", function () {
        var length = parseInt(tailleInput.value);
        var password = generatePassword(length);
        var mdpElement = document.querySelector("#mdp");
        mdpElement.textContent = password;

        savePassword(password);
        loadPasswords(); // Recharge la liste des mots de passe après en avoir ajouté un nouveau
    });

    loadPasswords();
});