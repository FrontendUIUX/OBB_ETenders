document.addEventListener("DOMContentLoaded", function () {
    const urlPath = window.location.pathname;

    if (urlPath !== "/Public/Public/Form.aspx") {
        // Ensure jQuery is available
        if (typeof jQuery === "undefined") {
            console.error("jQuery is required for this script.");
            return;
        }

        // Determine if the current language is Arabic
        const isArabic = window.location.href.includes("PublicAR");

        // Function to create menu items
        function createMenuItems(menuItems) {
            menuItems.forEach(item => {
                const link = $('<a>').attr('href', item.url).addClass('sidebar-link');

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
        const sidebar = $('<div id="sidebar" class="sidebar"></div>');

        // Add Logo Section
        const logoContainer = $('<div class="sidebar-logo-container"></div>');
        const logoLink = $('<a>', { target: '_blank' });
        const logoImage = $('<img>', {
            src: 'https://nshq-k2dev-wfe.supply.nama.om/Style/logo Nama supply .png',
            alt: 'Company Logo',
            class: 'sidebar-logo'
        });

        // Determine the base URL and path
        const baseUrl = 'https://nshq-k2dev-wfe.supply.nama.om/';
        const path = 'Runtime/Form/LCTS.EservicesHub.Form/';

        // Set the appropriate language segment
        const languageSegment = isArabic ? 'PublicAR' : 'Public';

        // Set the href attribute dynamically
        const href = `${baseUrl}${languageSegment}/${path}`;
        logoLink.attr('href', href);

        // Append the logo image to the link, then append to the logo container and sidebar
        logoLink.append(logoImage);
        logoContainer.append(logoLink);
        sidebar.append(logoContainer);

        // Sidebar Menu Sections
        sidebar.append(`<div class="sidebar-section">${isArabic ? "القائمة" : "MENU"}</div>`);

        // Define English and Arabic menu items
        const englishMenuItems = [
            { text: "Dashboard", url: "https://nshq-k2dev-wfe.supply.nama.om/Public/Runtime/Form/LCTS.EservicesHub.Form/", icon: "Dashboard-active.svg" },
            { text: "Submitted Requests", url: "https://nshq-k2dev-wfe.supply.nama.om/Public/Runtime/Form/External.SubmittedRequests.Form/", icon: "Document.svg" },
            { text: "Pending Tasks", url: "https://nshq-k2dev-wfe.supply.nama.om/Public/Runtime/Form/External.PendingTasks.Form/", icon: "pending.svg" },
            { text: "My Accounts", url: "https://nshq-k2dev-wfe.supply.nama.om/Public/Runtime/Form/External.UserAccounts.Form/", icon: "account 1.svg" }
        ];

        const arabicMenuItems = [
            { text: "لوحة القيادة", url: "https://nshq-k2dev-wfe.supply.nama.om/PublicAR/Runtime/Form/LCTS.EservicesHub.Form/", icon: "Dashboard-active.svg" },
            { text: "الطلبات المقدمة", url: "https://nshq-k2dev-wfe.supply.nama.om/PublicAR/Runtime/Form/External.SubmittedRequests.Form/", icon: "Document.svg" },
            { text: "المهام المعلقة", url: "https://nshq-k2dev-wfe.supply.nama.om/PublicAR/Runtime/Form/External.PendingTasks.Form/", icon: "pending.svg" },
            { text: "حساباتي", url: "https://nshq-k2dev-wfe.supply.nama.om/PublicAR/Runtime/Form/External.UserAccounts.Form/", icon: "account 1.svg" }
        ];

        // Select menu items based on language
        const menuItems = isArabic ? arabicMenuItems : englishMenuItems;

        // Create menu items
        createMenuItems(menuItems);

        // Others Section
        sidebar.append(`<div class="sidebar-section">${isArabic ? "أخرى" : "OTHERS"}</div>`);
        const helpLink = $('<a href="#" class="sidebar-link"></a>');
        const helpIcon = $('<img src="https://nshq-k2dev-wfe.supply.nama.om/Style/logos/help.svg" class="sidebar-icon" alt="Help">');
        helpLink.append(helpIcon).append($('<span>').text(isArabic ? "مساعدة" : "Help"));
        sidebar.append(helpLink);

        // Profile Card
        const profileCard = $(`
            <div class="sidebar-profile-card">
                <div class="profile-title"><b>${isArabic ? "الملف الشخصي للشركات / الحكومة" : "Corporate / Government"}</b></div>
                <div class="profile-desc">
                    ${isArabic ? "يُستخدم الملف الشخصي لإدارة حسابات الشركات أو الحكومة." : "A profile is used to manage corporate or government accounts."}
                </div>
                <a href="https://nshq-k2dev-wfe.supply.nama.om/Public/Runtime/Form/HomePage.Form/?"
                   target="_blank" class="create-profile-btn">
                    ${isArabic ? "إنشاء ملف شخصي" : "Create Profile"}
                    <img src="https://nshq-k2dev-wfe.supply.nama.om/Style/logos/arrow.png" alt="arrow" class="btn-arrow">
                </a>
            </div>
        `);
        sidebar.append(profileCard);

        // Append Sidebar to the Body
        $('body').append(sidebar);
    }
});
