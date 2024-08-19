document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const items = document.querySelectorAll('.item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');

            items.forEach(item => {
                if (filter === 'all') {
                    item.classList.remove('hidden');
                } else {
                    if (item.classList.contains(filter)) {
                        item.classList.remove('hidden');
                    } else {
                        item.classList.add('hidden');
                    }
                }
            });
        });
    });
});
