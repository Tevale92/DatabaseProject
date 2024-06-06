document.addEventListener('DOMContentLoaded', () => {
    const createButton = document.getElementById('create');
    if (createButton) {
        createButton.addEventListener('click', (event) => {
            const hikingItems = [
                'Hiking Boots',
                '2L Water',
                'Food and non perishable Snacks',
                'Walking Stick'
            ];
            localStorage.setItem('hikingItems', JSON.stringify(hikingItems));
            window.location.href = 'createlist.html';
        });
    }
});
