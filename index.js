import {dogs} from "./data.js"


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

function createInstanceOfDog() {
    let currentDog = new Dog (dogs[0]);
    return currentDog;
    }

function renderCurrentDogHtmlToDOM() {
    document.getElementById("current-profile-container").innerHTML = createInstanceOfDog().getCurrentDogHtml();
    dogs.shift();
}

renderCurrentDogHtmlToDOM();

const likeBadge =  document.getElementById("like-badge");
let nopeBadge =  document.getElementById("nope-badge")


document.addEventListener("click", function(currentDog){
    if (currentDog.target.dataset.heart) {
        currentDog.hasBeenLiked = true;
        currentDog.hasBeenSwiped = true;
        likeBadge.removeAttribute("class")
        document.getElementById("x-container").disabled = true;
        setTimeout(renderCurrentDogHtmlToDOM, 2000);
    } 
    if (currentDog.target.dataset.nope) {
        document.getElementById("nope-badge").removeAttribute("class")
        currentDog.hasBeenSwiped = true;
    }

})

function clickLikeButton() {
    
}
//hasBeenSwiped: false,
//hasBeenLiked: false

// const heartContainer = document.getElementById("heart-container");
// heartContainer.addEventListener("click", function(){
//     console.log("heart");
// })


// name: "Bella",
// avatar: "images/dog-bella.jpg",
// age: 43,
// bio: "Yup, that's my owner. U can meet him if you want",
// hasBeenSwiped: false,
// hasBeenLiked: false
// },