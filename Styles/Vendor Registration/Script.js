// Custom Header Script
window.onload = function () {
    document.querySelectorAll('[name]').forEach(el => {
        let nameAttr = el.getAttribute('name');
        if (nameAttr.endsWith('value')) { // Replace 'value' with the actual ending
            el.style.fontSize = "16px";
            el.style.color = "#333"; // Darker text
            el.style.border = "1px solid #ddd"; // Light border
            el.style.borderRadius = "4px"; // Rounded corners
            el.style.padding = "8px 12px"; // Comfortable padding
		    el.style.paddingRight = "4px"; // Comfortable padding	
		    el.style.paddingleft = "50px"; // Comfortable padding	
			el.style.height = "30px";
			el.style.width = "100vh";
        }
    });
};




document.addEventListener("DOMContentLoaded", function () {
    // Check if the sticky header already exists
    let stickyHeader = document.getElementById('custom-sticky-header');

    if (!stickyHeader) {
        // Create the sticky header container
        stickyHeader = document.createElement('div');
        stickyHeader.id = 'custom-sticky-header';
        document.body.prepend(stickyHeader);
    }

    // Select elements to move
    let headerCard = document.querySelector('[name^="CustomHeader"]');
    let tabBoxTabs = document.querySelector('.tab-box-tabs');

    // Move elements inside the sticky header in order
    if (headerCard) {
        stickyHeader.appendChild(headerCard);
    }
    if (tabBoxTabs) {
        stickyHeader.appendChild(tabBoxTabs);
    }
});


