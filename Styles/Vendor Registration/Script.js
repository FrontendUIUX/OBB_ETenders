
document.addEventListener("DOMContentLoaded", function () {
    // Step 1: Create sticky header container if it doesn't exist
    let stickyHeader = document.getElementById('custom-sticky-header');
    if (!stickyHeader) {
        stickyHeader = document.createElement('div');
        stickyHeader.id = 'custom-sticky-header';
        stickyHeader.style.position = "sticky";
        stickyHeader.style.top = "0";
        stickyHeader.style.zIndex = "9999";
        stickyHeader.style.backgroundColor = "#fff";
        document.body.prepend(stickyHeader);
    }

    // Step 2: Delay to ensure target elements are rendered
    setTimeout(() => {
        // Find the CustomHeader element using a more reliable approach
        const headerCard = Array.from(document.querySelectorAll('[name]'))
            .find(el => {
                const name = el.getAttribute('name') || '';
                return name.trim().includes('CustomHeader');
            });

        const tabBoxTabs = document.querySelector('.tab-box-tabs');

        if (headerCard) {
            stickyHeader.appendChild(headerCard);
        } else {
            console.warn("CustomHeader not found. Check attribute spacing or rendering delay.");
        }

        if (tabBoxTabs) {
            stickyHeader.appendChild(tabBoxTabs);
        }
    }, 500); // Adjust timing if needed
});

