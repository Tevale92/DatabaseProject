document.addEventListener('DOMContentLoaded', () => {
    const createButton = document.getElementById('create');
    if (createButton) {
        createButton.addEventListener('click', (event) => {
            const hikingItems = [
                'Fishing Rod',
                'Reel',
                'Fishing Line',
                'Hooks',
				'Bait or Lures',
				'Tackle Box',
				'Fishing Net'
            ];
            localStorage.setItem('hikingItems', JSON.stringify(hikingItems));
            window.location.href = 'createlist.html';
        });
    }
});
