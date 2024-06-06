document.addEventListener('DOMContentLoaded', () => {
    const createButton = document.getElementById('create');
    if (createButton) {
        createButton.addEventListener('click', (event) => {
            const hikingItems = [
                'Touring Gear',
                'Food and non perishable Snacks',
                '2L Water',
                'Snow Pants',
				'Winter Jacket',
				'Goggles',
				'Beacon',
				'First Aid Kit',
				'Map of Area'
            ];
            localStorage.setItem('hikingItems', JSON.stringify(hikingItems));
            window.location.href = 'createlist.html';
        });
    }
});
