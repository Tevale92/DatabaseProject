function addStop() {
    const stopsB = document.getElementById('stopsBox');
    const newStop = document.createElement('input');
    newStop.type = 'text';
    newStop.name = 'stop';
    newStop.placeholder = 'Enter a stop';
    stopsB.appendChild(newStop);
    stopsB.appendChild(document.createElement('br'));
}

function removeStop() {
    const stopsB = document.getElementById('stopsBox');
    const inputs = stopsB.getElementsByTagName('input');
    if (inputs.length > 0) {
        stopsB.removeChild(inputs[inputs.length - 1].nextSibling); 
        stopsB.removeChild(inputs[inputs.length - 1]); 
    }
}

function addItem() {
    const itemsB = document.getElementById('itemsBox');
    const newItem = document.createElement('input');
    newItem.type = 'text';
    newItem.name = 'item';
    newItem.placeholder = 'Enter an item';
    itemsB.appendChild(newItem);
    itemsB.appendChild(document.createElement('br'));
}

function removeItem() {
    const itemsB = document.getElementById('itemsBox');
    const inputs = itemsB.getElementsByTagName('input');
    if (inputs.length > 0) {
        itemsB.removeChild(inputs[inputs.length - 1].nextSibling);
        itemsB.removeChild(inputs[inputs.length - 1]);
    }
}

function handleSubmit(event) {
    event.preventDefault();
    const stops = [];
    const items = [];

    document.querySelectorAll('#stopsBox input').forEach(input => {
        stops.push(input.value);
    });

    document.querySelectorAll('#itemsBox input').forEach(input => {
        items.push(input.value);
    });

    const selectedChecklist = document.getElementById('checklistS').value;
    const tripData = { stops, items, selectedChecklist };
    localStorage.setItem('tripData', JSON.stringify(tripData));
    window.location.href = 'mydashboard.html';
}

document.addEventListener('DOMContentLoaded', () => {
    const hikingItems = JSON.parse(localStorage.getItem('hikingItems'));
    if (hikingItems) {
        const itemsB = document.getElementById('itemsBox');
        hikingItems.forEach(item => {
            const newItem = document.createElement('input');
            newItem.type = 'text';
            newItem.name = 'item';
            newItem.value = item;
            itemsB.appendChild(newItem);
            itemsB.appendChild(document.createElement('br'));
        });
        localStorage.removeItem('hikingItems');
    }
});