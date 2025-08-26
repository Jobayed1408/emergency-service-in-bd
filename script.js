
const cardHearts = document.getElementsByClassName('card-heart');
let count = 0;

for (let heart of cardHearts) {
    heart.addEventListener('click', function() {
        console.log('clicked');
        count++;
        document.getElementById('nav-heart').innerText = count;
    });
}

