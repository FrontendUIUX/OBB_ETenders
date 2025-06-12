document.addEventListener("DOMContentLoaded", function () {
    const urlPath = window.location.pathname;

    if (urlPath !== "/Public/Public/Form.aspx") {
        // Ensure jQuery is available
        if (typeof jQuery === "undefined") {
            console.error("jQuery is required for this script.");
            return;
        }
        
        // Function to create menu items
        function createMenuItems(menuItems) {
            menuItems.forEach(item => {
                const link = $('<a>').attr('href', item.url).addClass('nav-link');

                // Determine Active State
                if (window.location.href.includes(item.url)) {
                    link.addClass('active');
                }

                // Append Icon and Text
                const iconElement = $('<img>').attr('src', `https://nshq-k2dev-wfe.supply.nama.om/Style/logos/${item.icon}`).addClass('sidebar-icon');
                link.append(iconElement).append($('<span>').text(item.text));
                sidebar.append(link);
            });
        }

        // Create Sidebar Container
        const sidebar = $('<aside class="sidebar"></aside>');

        // Add Logo Section
        const logoContainer = $('<div class="navbarBrand"></div>');
        const logoLink = $('<a>', { target: '_blank' });
        const logoImage = $('<img>', {
            src: 'https://frontenduiux.github.io/OBB_ETenders/Images/OBBLogo.png',
            alt: 'Oman Broad Band',
        });
        // Append the logo image to the link, then append to the logo container and sidebar
        logoLink.append(logoImage);
        logoContainer.append(logoLink);
        sidebar.append(logoContainer);

        // Sidebar Menu Sections
        sidebar.append(`<div class="sidebar-section">Menu</div>`);

        // Define English and Arabic menu items
        const englishMenuItems = [
            { text: "Dashboard", url: "#", icon: "Dashboard-active.svg" },
            { text: "Submitted Tenders", url: "#", icon: "Document.svg" },
        ];


        // Select menu items based on language
        const menuItems = englishMenuItems;

        // Create menu items
        createMenuItems(menuItems);

        // Append Sidebar to the Body
        $('body').append(sidebar);
    }
});
