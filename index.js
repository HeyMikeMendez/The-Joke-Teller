const jokeBtn = document.getElementById('get-joke')
const jokeText = document.getElementById('joke-text')
const jokeTextTwo = document.getElementById('joke-text-two')

jokeBtn.addEventListener('click', function() {
    fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,racist,sexist,explicit")
    .then(res => res.json())
    .then(data => {
        console.log(data)

        // if (data.type === "single") {
        //     jokeText.textContent = `${data.joke}`
        //     jokeTextTwo.textContent = ''
        // } else if (data.type === "twopart") {
        //     jokeText.textContent = `${data.setup}`
        //     jokeTextTwo.textContent = `${data.delivery}`
        // }

        let joke = ''

        if (data.joke === undefined) {
            joke = `
                <p>${data.setup}</p> 
                <p>${data.delivery}</p>`
        } else {
            joke = `<p>${data.joke}</p>`
        }

        jokeText.innerHTML = joke

        
    })
})
