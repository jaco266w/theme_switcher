"use strict";

const themeSelector = document.querySelector("#theme_selector");
const body = document.body;

themeSelector.addEventListener("change", function(){
    body.dataset.theme = this.value;
})