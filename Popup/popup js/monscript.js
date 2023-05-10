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
    // Supprime le mot de passe à l'index spécifié de la liste
    chrome.storage.local.get('passwords', function (data) {
        var passwords = data.passwords || [];

        if (index >= 0 && index < passwords.length) {
            passwords.splice(index, 1); // Supprime l'élément à l'index spécifié
            chrome.storage.local.set({ 'passwords': passwords }, function () {
                console.log('Mot de passe supprimé');
                loadPasswords(); // Recharge la liste des mots de passe après la suppression
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

