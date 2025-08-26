
// Heart increment script
const cardHearts = document.getElementsByClassName('card-heart');
let count = 0;

for (let heart of cardHearts) {
    heart.addEventListener('click', function () {
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
}

function callHistory(c) {
    if (coinCount < 20) {

        return;
    }
    const callHistoryContainer = document.querySelector('.call-history');
    const div = document.createElement('div');
    div.className = 'bg-[#fafafa] py-3 flex justify-between items-center rounded-lg my-3';
    div.innerHTML = `
        <div class="flex justify-between px-2 items-center w-full">
            <div class="w-[65%]" >
                <h1 class="font-semibold">${c.service}</h1>
                <h1 class="text-[#5c5c5c] text-sm">${c.number}</h1>
            </div>
            <div class="w-[35%] flex justify-end ">
                <p class="text-[#5c5c5c]">${new Date().toLocaleTimeString()}</p>
            </div>
        </div>
    `;

    callHistoryContainer.appendChild(div);

}

// national-call-id
document.getElementById('national-call-id').addEventListener('click', function () {
    const serviceName = document.querySelector('.national-service-name').innerText;
    const serviceCall = document.querySelector('.national-service-call').innerText;

    const newCall = { service: serviceName, number: serviceCall };
    callHistory(newCall);
    makeCall(serviceName, serviceCall);


});
document.getElementById('police-call-id').addEventListener('click', function () {
    const serviceName = document.querySelector('.police-service-name').innerText;
    const serviceCall = document.querySelector('.police-service-call').innerText;

    const newCall = { service: serviceName, number: serviceCall };
    callHistory(newCall);
    makeCall(serviceName, serviceCall);
});
document.getElementById('fire-service-call-id').addEventListener('click', function () {
    const serviceName = document.querySelector('.fire-service-name').innerText;
    const serviceCall = document.querySelector('.fire-service-call').innerText;

    const newCall = { service: serviceName, number: serviceCall };
    callHistory(newCall);
    makeCall(serviceName, serviceCall);
});
document.getElementById('ambulance-service-call-id').addEventListener('click', function () {
    const serviceName = document.querySelector('.ambulance-service-name').innerText;
    const serviceCall = document.querySelector('.ambulance-service-call').innerText;

    const newCall = { service: serviceName, number: serviceCall };
    callHistory(newCall);
    makeCall(serviceName, serviceCall);
});
document.getElementById('women-service-call-id').addEventListener('click', function () {
    const serviceName = document.querySelector('.women-service-name').innerText;
    const serviceCall = document.querySelector('.women-service-call').innerText;

    const newCall = { service: serviceName, number: serviceCall };
    callHistory(newCall);
    makeCall(serviceName, serviceCall);
});
document.getElementById('dudok-service-call-id').addEventListener('click', function () {
    const serviceName = document.querySelector('.dudok-service-name').innerText;
    const serviceCall = document.querySelector('.dudok-service-call').innerText;

    const newCall = { service: serviceName, number: serviceCall };
    callHistory(newCall);
    makeCall(serviceName, serviceCall);
});

// clear button functionality

document.getElementById('clear-btn').addEventListener('click', function () {
    callList.length = 0;
    const callHistoryContainer = document.querySelector('.call-history');
    callHistoryContainer.innerHTML = '';
});


// Select all copy buttons
const copyButtons = document.querySelectorAll('.copy-btn');
let copiedCount = 0;
const primaryCopyButton = document.getElementById('copy-button-primary');

copyButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Find the closest parent card
        const card = button.closest('.w-full');

        // Find the phone number inside this card
        const phoneNumber = card.querySelector('h1[class$="-call"]').innerText;
        copiedCount++;
        primaryCopyButton.innerHTML = `${copiedCount}`;
        // Copy to clipboard
        navigator.clipboard.writeText(phoneNumber)
            .then(() => {
                alert(`Copied: ${phoneNumber}`);
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    });
});

