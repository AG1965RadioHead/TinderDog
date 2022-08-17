import Dog from './Dog.js'
import dogs from './data.js'
let currentDogIndex = 0
let currentDog = new Dog(dogs[currentDogIndex])
document.getElementById("accept-button").addEventListener('click', yes)
document.getElementById("reject-button").addEventListener('click', no)

render()

function render() {
    document.getElementById('card').innerHTML = currentDog.getDogHtml()
}

function getNewDog() {
    currentDogIndex+=1
    if (currentDogIndex < dogs.length) {
        currentDog = new Dog(dogs[currentDogIndex])
        render()
    } else {
        document.body.innerHTML = `<h1>There are no more dogs in your area...</h1>`
    }

}

function yes() {
    currentDog.setMatchStatus(true)
    setTimeout(getLikeBadgeHtml, 200)
    setTimeout(getNewDog, 2000)
}

function no() {
    currentDog.setMatchStatus(false)
    setTimeout(getNopeBadgeHtml, 200)
    setTimeout(getNewDog, 2000)
}

function getLikeBadgeHtml() {
    document.getElementById("badge").innerHTML = `<img class="badge" src="images/badge-like.png">`
    }

function getNopeBadgeHtml() {
    document.getElementById("badge").innerHTML = `<img class="badge" src="images/badge-nope.png">`
}

