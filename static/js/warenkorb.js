let bestellButtons = document.getElementsByClassName("warenkorb-bestellen");

for (let i = 0; i < bestellButtons.length; i++) {
    bestellButtons[i].addEventListener("click", function () {
        let artikelID = this.dataset.artikel;
        let action = this.dataset.action;
        updateKundenBestellung(artikelID, action);
    });
}

function updateKundenBestellung(artikelID, action) {
    let url = "/artikel_backend/";
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": csrftoken,
        },
        body: JSON.stringify({
            artikelID: artikelID,
            action: action
        })
    }).then(() => location.reload());
}

// === KASSE ===
let formular = document.getElementById("formular");
let gesamtpreisElement = document.getElementById("gesamtpreis");
let gesamtpreis = gesamtpreisElement ? gesamtpreisElement.value : 0;

if (formular) {
    formular.addEventListener("submit", function (e) {
        e.preventDefault();
        document.getElementById("formular-button").classList.add("d-none");
        document.getElementById("bezahlen-info").classList.remove("d-none");
    });

    document.getElementById("bezahlen-button").addEventListener("click", function (e) {
        submitFormular();
    });

    function submitFormular() {
        let benutzerDaten = {
            name: formular.inputName.value,
            email: formular.inputEmail.value,
            gesamtpreis: gesamtpreis,
        };
        let lieferadresse = {
            adresse: formular.inputAdresse.value,
            plz: formular.inputPlz.value,
            stadt: formular.inputStadt.value,
            land: formular.inputLand.value,
        };

        console.log(benutzerDaten, lieferadresse);

        fetch("/bestellen/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": csrftoken,
            },
            body: JSON.stringify({
                benutzerDaten: benutzerDaten,
                lieferadresse: lieferadresse
            })
        }).then(() => window.location.href = "/");
    }
}
