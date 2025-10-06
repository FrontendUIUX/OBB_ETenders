document.addEventListener("DOMContentLoaded", function () {
    const urlPath = window.location.pathname;

    if (urlPath !== "/Public/Public/Form.aspx") {
        // Ensure jQuery is available
        if (typeof jQuery === "undefined") {
            console.error("jQuery is required for this script.");
            return;
        }

        // Function to create menu items
        // function createMenuItems(menuItems) {
        //     menuItems.forEach(item => {
        //         const link = $('<a>').attr('href', item.url).addClass('nav-link');

        //         // Determine Active State
        //         if (window.location.href.includes(item.url)) {
        //             link.addClass('active');
        //         }

        //         // Append Icon and Text
        //         const iconElement = $('<img>').attr('src', `${item.icon}`).addClass('icon');
        //         link.append(iconElement).append($('<span class="nav-link-text">').text(item.text));
        //         sidebar.append(link);
        //     });
        // }

        // Create Sidebar Container
        // const sidebar = $('<aside class="sidebar"></aside>');

        // // Add Logo Section
        // const logoContainer = $('<div class="navbarBrand"></div>');
        // const logoLink = $('<a>', { target: '_blank' });
        // const logoImage = $('<img>', {
        //     src: 'https://frontenduiux.github.io/OBB_ETenders/Images/OBBLogo.png',
        //     alt: 'Oman Broad Band',
        // });
        // // Append the logo image to the link, then append to the logo container and sidebar
        // logoLink.append(logoImage);
        // logoContainer.append(logoLink);
        // sidebar.append(logoContainer);

        // // Sidebar Menu Sections
        // sidebar.append(`<div class="topic">Menu</div>`);

        // // Define English and Arabic menu items
        // const englishMenuItems = [
        //     { text: "Dashboard", url: "#", icon: "https://frontenduiux.github.io/OBB_ETenders/Images/menu.png" },
        //     { text: "Submitted Tenders", url: "#", icon: "https://frontenduiux.github.io/OBB_ETenders/Images/submitted%20tasks.png" },
        // ];


        // // Select menu items based on language
        // const menuItems = englishMenuItems;

        // // Create menu items
        // createMenuItems(menuItems);

        // Append Sidebar to the Body
        $('body').addClass("sidebarAvailable").append(sidebar);
    }
});
// $(window).on("load", function () {
//     if ($(".tab-box-tabs").length) {
//         $('body').addClass('topbarExists');
//     }
// });




document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.querySelector(".sidebar");

    // Only add button for screens < 992px
    if (window.innerWidth < 992 && sidebar) {
        console.log("mobile view");
        const toggleButton = document.createElement('button');
        toggleButton.id = 'toggleSidebarBtn';
        toggleButton.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M13.4697 5.46967C13.7626 5.17678 14.2374 5.17678 14.5303 5.46967L20.5303 11.4697C20.8232 11.7626 20.8232 12.2374 20.5303 12.5303L14.5303 18.5303C14.2374 18.8232 13.7626 18.8232 13.4697 18.5303C13.1768 18.2374 13.1768 17.7626 13.4697 17.4697L18.1893 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H18.1893L13.4697 6.53033C13.1768 6.23744 13.1768 5.76256 13.4697 5.46967Z"
          fill="#ffffff"></path>
      </svg>
    `;

        // Optional styling
        toggleButton.style.border = "none";
        toggleButton.style.padding = "8px";
        toggleButton.style.margin = "10px";
        toggleButton.style.cursor = "pointer";
        toggleButton.style.zIndex = "1000";

        document.body.appendChild(toggleButton); // or document.body.insertBefore(toggleButton, sidebar);

        toggleButton.addEventListener('click', () => {
            sidebar.classList.toggle('visible');
            document.body.classList.toggle('collapseSidebar');
        });
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const urlPath = window.location.pathname;
    const fullUrl = window.location.href.toLowerCase();

    // Adjust form layout on specific page
    if (urlPath === '/Public/Runtime/Form.aspx') {
        const form = document.querySelector('.theme-entry .runtime-form');
        if (form) {
            form.style.width = '100%';
            form.style.marginLeft = '0';
        }
    }

    // Exit early on specific runtime page
    if (urlPath === "/Runtime/Runtime/Form.aspx") return;

    // Ensure jQuery is loaded
    if (typeof jQuery === "undefined") {
        console.error("jQuery is required for this script.");
        return;
    }

    const isArabic = fullUrl.includes("publicar");

    // Sidebar container
    const sidebar = $('<div id="sidebar" class="sidebar"></div>');

    // Logo section (empty href and src as placeholders)
    const logoContainer = $('<div class="navbarBrand"><a target="_blank"><img src="https://frontenduiux.github.io/OBB_Services/Images/OBBLogo.png" alt="Oman Broad Band"></a></div>');
    const logoLink = $('<a href="#"></a>');
    logoContainer.append(logoLink);
    sidebar.append(logoContainer);

    // Sidebar title
    sidebar.append(`<div class="sidebar-section topic">${isArabic ? "القائمة" : "MENU"}</div>`);

    var fqn = null;
    // Menu items

    let menuItems;
    const currentUrl = window.location.href;

    $(document).ready(function () {
        setTimeout(function () {
            try {
                fqn = SourceCode.Forms.Settings.User.FQN;
                console.log("Logged-in User FQN:" + fqn);
                menuBar();

            } catch (e) {
                console.error("Error retrieving FQN:", e);
            }
        }, 1000);
    });




    function menuBar() {


        if (currentUrl.includes("Dashboard.VendorManagementTeamDashboard.Form/") ||currentUrl.includes("Vendor.WelcomeLetterList.Form") || currentUrl.includes("Vendor.VendorList.Form/") ) {
            menuItems = [
                { text: "Home", url: "/Runtime/Runtime/Form/Dashboard.VendorManagementTeamDashboard.Form/" },
                //{ text: "Vendor List", url: "/Runtime/Runtime/Form/Vendor.VendorList.Form/" },
                { text: "Vendor List/Welcome Letters", url: "/Runtime/Runtime/Form/Vendor.WelcomeLetterList.Form/" },
            ];
        } 
        else if (currentUrl.includes("Dashboard.ProcurementTeamDashboard.LandingPage/") || currentUrl.includes("Tensders.Awarding.Form")|| currentUrl.includes("VendorBiddingReadOnly.Form") || currentUrl.includes("Vendor.ClarificationsResponseForm") || currentUrl.includes("Dashboard.ProcurementTeamDashboard.ListAllTenders/") || currentUrl.includes("Dashboard.ProcurementTeamDashboard.Form/") || currentUrl.includes("Dashboard.ProcurementTeamDashboard.ListAllTenders/") || currentUrl.includes("Tender__RFQCreation.Form/") || currentUrl.includes("Tender__RFQCreationApproval.Form/")) {
            menuItems = [
                { text: "Home", url: "/Runtime/Runtime/Form/Dashboard.ProcurementTeamDashboard.LandingPage/" },
                //{ text: "Clarification Review Page", url: "/Runtime/Runtime/Form/Dashboard.ProcurementTeamDashboard.Form/" },
                { text: "Tenders/RFQs Page", url: "/Runtime/Runtime/Form/Dashboard.ProcurementTeamDashboard.ListAllTenders/" },
                { text: "Pre-Clarifications", url: "/Runtime/Runtime/Form/Vendor.ClarificationsResponseForm/" },
                { text: "Bids and Post-Clarifications", url: "/Runtime/Runtime/Form/VendorBiddingReadOnly.Form/" },
                { text: "RFQ/Tender Openning and Awarding", url: "/Runtime/Runtime/Form/Tensders.Awarding.Form/" },
                { text: "Worklist", url: "#" }
            ];
        }
        else if (currentUrl.includes("Vendor.ExternalDashboard/")  ||currentUrl.includes("VendorBidding.Form") || currentUrl.includes("Vendor.PostSubmissionClarificationsForm") ||currentUrl.includes("Vendor.ClarificationsForm/") || currentUrl.includes("ExternalHub.Form/") || currentUrl.includes("VendorRegistration.Form/") || currentUrl.includes("VendorRegistrationApproval.Form/")) {
            menuItems = [
                { text: "Home", url: "/Runtime/Runtime/Form/Vendor.ExternalDashboard/" },
                { text: "Vendor Pre-Clarifications", url: "/Runtime/Runtime/Form/Vendor.ClarificationsForm/" },
                { text: "Vendor Post-Clarifications", url: "/Runtime/Runtime/Form/Vendor.PostSubmissionClarificationsForm/" },
                { text: "Bidding", url: "/Runtime/Runtime/Form/VendorBidding.Form/" },
                
                { text: "Worklist", url: "/Runtime/Runtime/Form/ExternalHub.Form/" }
                
            ];
        }
        else if(currentUrl.includes("InternalHub.Form/") || currentUrl.includes("SubmittedTenders.Form/")){
            menuItems = [
                { text: "Home", url: "/Runtime/Runtime/Form/InternalHub.Form/" },
                { text: "Submitted Tenders", url: "/Runtime/Runtime/Form/SubmittedTenders.Form/" },
            ];
        }
        else {
            menuItems = [
            ];
        }
        // Build menu
        if (menuItems) {
            menuItems.forEach(item => {
                const hasChildren = Array.isArray(item.children) && item.children.length > 0;

                const parentLink = $('<a>')
                    .attr('href', hasChildren ? 'javascript:void(0)' : item.url)
                    .addClass('sidebar-link nav-link')
                    .toggleClass('has-children', hasChildren)
                    .append($('<span>').text(item.text));

                const itemContainer = $('<div class="sidebar-item"></div>').append(parentLink);

                if (hasChildren) {
                    const submenu = $('<div class="sidebar-submenu" style="display:none;"></div>');

                    item.children.forEach(sub => {
                        const subLink = $('<a>')
                            .attr('href', sub.url)
                            .addClass('sidebar-link sub-link')
                            .append($('<span>').text(sub.text));

                        submenu.append(subLink);
                    });

                    itemContainer.append(submenu);

                    parentLink.on('click', function () {
                        submenu.slideToggle(200);
                        $(".sidebar-link").removeClass("expanded");
                        $(this).toggleClass('expanded');
                    });
                }

                sidebar.append(itemContainer);
            });
        }

        // Add sidebar to body
        $('body').append(sidebar);
        $('body').addClass('sidebarVisible');
        $(window).on("load", function () {
            if ($(".tab-box-tabs").length) {
                $('body').addClass('topbarExists');
            }

        })
    };
    
});



//
const targets = document.querySelectorAll('.grid-body-content table.grid-content-table tbody');
if (targets.length > 0) {
    targets.forEach((target) => {
        const observer = new MutationObserver(function () {
            applyGrayscaleFix();
            applyGrayscaleFix2();
            applyGrayscaleFix3();
            applyGrayscaleFix4();
        });

        observer.observe(target, { childList: true, subtree: true });
    });
}
function applyGrayscaleFix() {
    $('.grid-body-content table.grid-content-table tbody tr').each(function (index) {
        const $row = $(this);



        if (index === 0) {
            const lastTd = $row.find('td').last();
            const lastIcon = lastTd.find('i[id^="ID1_"]');
            if (lastIcon.length === 0) return; // Skip processing if not matching
        }



        const tds = $row.find('td');
        const fileTypeTd = tds.eq(2);
        const dataOptions = fileTypeTd.attr('data-options');
        if (!dataOptions) return;

        try {
            const parsed = JSON.parse(dataOptions);
            const fileType = (parsed.value || "").toLowerCase();

            if (fileType === 'email') {
                const img = $row.find('i[id^="ID1_"] > img');
                img.attr('style', 'filter: grayscale(1) !important; width: 20px; height: 20px; cursor: pointer;');
            }
        } catch (e) {
            console.warn("Invalid JSON in data-options:", dataOptions);
        }
    });
}
function applyGrayscaleFix2() {
    $('.grid-body-content table.grid-content-table tbody tr').each(function (index) {
        const $row = $(this);



        if (index === 0) {
            const lastTd = $row.find('td').last();
            const lastIcon = lastTd.find('i[id^="ActionID2_"]');
            if (lastIcon.length === 0) return; // Skip processing if not matching
        }



        const tds = $row.find('td');
        const fileTypeTd = tds.eq(2);
        const dataOptions = fileTypeTd.attr('data-options');
        if (!dataOptions) return;

        try {
            const parsed = JSON.parse(dataOptions);
            const fileType = (parsed.value || "").toLowerCase();

            if (fileType === 'pmo') {
                const img = $row.find('i[id^="ActionID2_"] > img');
                img.attr('style', 'filter: grayscale(1) !important; width: 20px; height: 20px; cursor: pointer;');
            }
        } catch (e) {
            console.warn("Invalid JSON in data-options:", dataOptions);
        }
    });
}
function applyGrayscaleFix3() {
    $('.grid-body-content table.grid-content-table tbody tr').each(function (index) {
        const $row = $(this);




        if (index === 0) {
            const lastTd = $row.find('td').last();
            const lastIcon = lastTd.find('i[id^="IDAction_"]');
            if (lastIcon.length === 0) return; // Skip processing if not matching
        }


        const tds = $row.find('td');
        const fileTypeTd = tds.eq(2);
        const dataOptions = fileTypeTd.attr('data-options');
        if (!dataOptions) return;

        try {
            const parsed = JSON.parse(dataOptions);
            const fileType = (parsed.value || "").toLowerCase();

            if (fileType === 'pmo') {
                const img = $row.find('i[id^="IDAction_"] > img');
                img.attr('style', 'filter: grayscale(1) !important; width: 20px; height: 20px; cursor: pointer;');
            }
        } catch (e) {
            console.warn("Invalid JSON in data-options:", dataOptions);
        }
    });
}
function applyGrayscaleFix4() {
    $('.grid-body-content table.grid-content-table tbody tr').each(function (index) {
        const $row = $(this);




        if (index === 0) {
            const lastTd = $row.find('td').last();
            const lastIcon = lastTd.find('i[id^="ActionID6_"]');
            if (lastIcon.length === 0) return; // Skip processing if not matching
        }


        const tds = $row.find('td');
        const fileTypeTd = tds.eq(2);
        const dataOptions = fileTypeTd.attr('data-options');
        if (!dataOptions) return;

        try {
            const parsed = JSON.parse(dataOptions);
            const fileType = (parsed.value || "").toLowerCase();

            if (fileType === '325') {

                const img = $row.find('i[id^="ActionID6_"] > img');
                img.attr('style', 'filter: grayscale(1) !important; width: 20px; height: 20px; cursor: pointer;');
            }
        } catch (e) {
            console.warn("Invalid JSON in data-options:", dataOptions);
        }
    });
}
// POC 
document.addEventListener('DOMContentLoaded', function () {
    // Loop through all td elements with data-options attribute
    document.querySelectorAll('td[data-options]').forEach(function (td) {
        let dataOptions = td.getAttribute('data-options');

        try {
            let options = JSON.parse(dataOptions);
            let value = options.value;

            if (value === "Rejected" || value === "Approved") {
                // Get the <tr> (row) this <td> belongs to
                let row = td.parentElement;

                // Find sibling <td> that has <i> with GetAction1 in onclick
                let targetTd = Array.from(row.children).find(cell => {
                    let iTag = cell.querySelector('i[onclick*="GetAction1"]');
                    return iTag !== null;
                });

                if (targetTd) {
                    let iTag = targetTd.querySelector('i[onclick*="GetAction1"]');
                    if (iTag) {
                        iTag.classList.add('notClickable');
                    }
                }
            }
        } catch (err) {
            console.warn("Could not parse data-options:", dataOptions);
        }
    });
});
$(document).ready(function () {
    let fqn = null; // declare properly

    // Try to get user FQN
    setTimeout(function () {
        try {
            fqn = SourceCode.Forms.Settings.User.FQN || null;
            console.log("Logged-in User FQN:", fqn);
            //menuBar();
        } catch (e) {
            console.error("Error retrieving FQN:", e);
        }
    }, 1000);

    // Handle navbar click
    $(document).on("click", ".navbarBrand a", function (e) {
        e.preventDefault(); // stop default link behavior

        if (fqn) {
            if (fqn.toLowerCase().includes("OBC".toLowerCase())){
                 console.log("Internal User");
                window.location.href = "/Runtime/Runtime/Form/OBBHub.Form/";

            }
           else {
            console.log("External User");
            window.location.href = "/Runtime/Runtime/Form/OBBHubExternal.Form/";
        }
        } 
    });
});
$(window).on("scroll", function () {
  $(".id-calendar-control-popup").hide();
});