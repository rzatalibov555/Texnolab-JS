/* script.js */
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const items = document.querySelectorAll('.item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');

            items.forEach(item => {
                if (filter === 'all') {
                    item.style.display = 'block';
                } else {
                    if (item.classList.contains(filter)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                }
            });
        });
    });
});
