function recharge() {
    const vehicleNumber = document.getElementById('vehicleNumber').value;
    if (vehicleNumber) {
        alert(`Recharging FASTag for vehicle number: ${vehicleNumber}`);
        // Add your recharge logic here
    } else {
        alert('Please enter a vehicle or chassis number.');
    }
}

function addMoney() {
    alert('Adding money to wallet');
    // Add your add money logic here
}

// Example event listeners for other buttons or interactions
document.querySelectorAll('.service').forEach(service => {
    service.addEventListener('click', () => {
        alert(`Clicked on ${service.querySelector('.para').innerText}`);
        // Add your service handling logic here
    });
});

document.querySelectorAll('.discover-item').forEach(discoverItem => {
    discoverItem.addEventListener('click', () => {
        alert(`Clicked on ${discoverItem.querySelector('p').innerText}`);
        // Add your discover item handling logic here
    });
});

document.querySelectorAll('.other-item').forEach(otherItem => {
    otherItem.addEventListener('click', () => {
        alert(`Clicked on ${otherItem.querySelector('p').innerText}`);
        // Add your other item handling logic here
    });
});

document.querySelectorAll('.premium-plan').forEach(premiumPlan => {
    premiumPlan.addEventListener('click', () => {
        alert(`Clicked on ${premiumPlan.querySelector('p').innerText}`);
        // Add your premium plan handling logic here
    });
});

document.querySelectorAll('.recharge-item').forEach(rechargeItem => {
    rechargeItem.addEventListener('click', () => {
        alert(`Clicked on ${rechargeItem.querySelector('p').innerText}`);
        // Add your recharge item handling logic here
    });
});
