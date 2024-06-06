document.addEventListener('DOMContentLoaded', () => {
    const tripData = JSON.parse(localStorage.getItem('tripData'));
    if (tripData) {
        const checklistId = tripData.selectedChecklist;
        const stopsList = document.getElementById(`checklist${checklistId}S`);
        const itemsList = document.getElementById(`checklist${checklistId}I`);

        stopsList.innerHTML = '<h3>Stops</h3>';
        itemsList.innerHTML = '<h3>Items</h3>';

        tripData.stops.forEach(stop => {
            const stopElement = document.createElement('li');
            stopElement.textContent = stop;
            stopsList.appendChild(stopElement);
        });

        tripData.items.forEach(item => {
            const itemElement = document.createElement('li');
            itemElement.textContent = item;
            itemsList.appendChild(itemElement);
        });

        localStorage.removeItem('tripData');
    }
});
