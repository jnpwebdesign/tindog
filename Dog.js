import {dogs} from "./data"

export class Dog {
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
