const searchBtnEvent = document.getElementById("searchDic");
searchBtnEvent.addEventListener("click", searchDic);

document
  .getElementById("fonctionnalite3")
  .addEventListener("click", function (e) {
    var checkbox = e.target;
    if (checkbox.checked) {
      document.getElementById("modalDic").style.display = "block";
    } else {
      document.getElementById("modalDic").style.display = "none";
    }
  });

document
  .getElementById("modal-dic-close")
  .addEventListener("click", function (e) {
    document.getElementById("modalDic").style.display = "none";
    document.getElementById("fonctionnalite3").checked = false;
  });

function searchDic() {
  let word = document.getElementById("text").value;
  let resulat = document.getElementById("resultat");

  if (word.length != 0) {
    let url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + word;

    fetch(url).then((response) =>
      response.json().then((data) => {
        try {
          for (let words of data) {
            let definition = words.meanings[0].definitions[0].definition;

            resulat.innerHTML =
              "<p class='res'><span>definition</span><br>" +
              definition +
              "</p>";
          }
        } catch (err) {
          resulat.innerHTML = "<p class='res'>Aucune Définition Trouvée !</p>";
        }
      })
    );
  } else {
    resulat.innerHTML = "<p class='res'>Veulliez remplir le champ !</p>";
  }
}
