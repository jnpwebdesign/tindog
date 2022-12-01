import {dogs} from "./data.js"

const likeBadge =  document.getElementById("like-badge");
const nopeBadge =  document.getElementById("nope-badge");
const likeBtn = document.getElementById("like-btn");
const nopeBtn = document.getElementById("nope-btn");

class Dog {
    constructor(data){
        Object.assign(this, data);
    }

    getCurrentDogHtml() {
        const { name, avatar, age, bio, hasBeenSwiped, hasBeenLiked } = this;
        return `
            <img src="${avatar}" class="current-profile-image" alt="current profile image"> 
            <div class="current-image-text">
                <h1>${name},<span> ${age}</span></h1>
                <h2>${bio}</h2>
            </div>
        `    
    }    
}

renderCurrentDogHtmlToDOM();

function createInstanceOfDog() {
    let currentDog = new Dog (dogs[0]);
    return currentDog;
}

function renderCurrentDogHtmlToDOM() {
    document.getElementById("current-profile-container").innerHTML = createInstanceOfDog().getCurrentDogHtml();
    dogs.shift();
    if (nopeBadge.classList.contains("hidden") === false) {
        nopeBadge.classList.add("hidden");
        likeBtn.disabled = false;
    } else {
        likeBadge.classList.add("hidden");
        nopeBtn.disabled = false;

    }
}

document.addEventListener("click", function(currentDog){
    if (currentDog.target.dataset.heart) {
        clickLikeButton(currentDog);
    } else if (currentDog.target.dataset.nope) {
        clickNopeButton(currentDog);
    }

})

function clickLikeButton(currentDog) {
    currentDog.hasBeenLiked = true;
    currentDog.hasBeenSwiped = true;
    likeBadge.removeAttribute("class")
    nopeBtn.disabled = true;
    setTimeout(renderCurrentDogHtmlToDOM, 2000);
}

function clickNopeButton(currentDog) {
    nopeBadge.removeAttribute("class");
    currentDog.hasBeenSwiped = true;
    likeBtn.disabled = true;
    setTimeout(renderCurrentDogHtmlToDOM, 2000);
}

