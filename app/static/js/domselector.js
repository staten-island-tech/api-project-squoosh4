export const DOMSelector = {

 buttons: {

        creatureButton: document.querySelector("#creatures-button"),
        monsterButton: document.querySelector("#monsters-button"),
        materialButton: document.querySelector("#materials-button"),
        equipmentButton: document.querySelector("#equipment-button"),
        treasureButton: document.querySelector("#treasure-button"),
        testButton: document.querySelector("#test-button")
    },
    body: document.body,
    cardHolder: document.querySelector(".card-holder"),
    closeWindowButton: document.querySelector("#close-window"),
    compendiumCard: Array.from(document.querySelectorAll(".compendium-card")),
    detailedViewViewspace: document.querySelector("detailed-view-viewspace"),

}; 