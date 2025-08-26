
// Heart increment script
const cardHearts = document.getElementsByClassName('card-heart');
let count = 0;

for (let heart of cardHearts) {
    heart.addEventListener('click', function() {
        console.log('clicked');
        count++;
        document.getElementById('nav-heart').innerText = count;
    });
}

// alert part
const callList = [];
let coinCount = 100;

function makeCall(service, number) {
    if (coinCount < 20) {
        alert('Not enough coins to make a call. Please recharge your coins.');
        return;
    }
    coinCount -= 20;
    
    const call = {
        service: service,
        number: number,

    };
    callList.push(call);
    document.getElementById('coin-counter').innerText = coinCount;
    alert(`Calling ${service} at ${number} ...`);
    console.log(callList);
}

// national-call-id
document.getElementById('national-call-id').addEventListener('click', function() {
    const serviceName = document.querySelector('.national-service-name').innerText;
    const serviceCall = document.querySelector('.national-service-call').innerText;
    makeCall(serviceName, serviceCall);
});
document.getElementById('police-call-id').addEventListener('click', function() {
    const serviceName = document.querySelector('.police-service-name').innerText;
    const serviceCall = document.querySelector('.police-service-call').innerText;
    makeCall(serviceName, serviceCall);
});
document.getElementById('fire-service-call-id').addEventListener('click', function() {
    const serviceName = document.querySelector('.fire-service-name').innerText;
    const serviceCall = document.querySelector('.fire-service-call').innerText;
    makeCall(serviceName, serviceCall);
});
document.getElementById('ambulance-service-call-id').addEventListener('click', function() {
    const serviceName = document.querySelector('.ambulance-service-name').innerText;
    const serviceCall = document.querySelector('.ambulance-service-call').innerText;
    makeCall(serviceName, serviceCall);
});
document.getElementById('women-service-call-id').addEventListener('click', function() {
    const serviceName = document.querySelector('.women-service-name').innerText;
    const serviceCall = document.querySelector('.women-service-call').innerText;
    makeCall(serviceName, serviceCall);
});
document.getElementById('dudok-service-call-id').addEventListener('click', function() {
    const serviceName = document.querySelector('.dudok-service-name').innerText;
    const serviceCall = document.querySelector('.dudok-service-call').innerText;
    makeCall(serviceName, serviceCall);
});

// coin count part



// coin-counter
