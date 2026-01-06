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

    // Ensure jQuery is available
    if (typeof jQuery === "undefined") {
        console.error("jQuery is required for this script.");
        return;
    }

    const isArabic = fullUrl.includes("publicar");

    // Create sidebar container
    const sidebar = $('<div id="sidebar" class="sidebar"></div>');

    // Logo section
    const logoContainer = $('<div class="navbarBrand"><a href="#" target="_blank"><img src="https://frontenduiux.github.io/OBB_Services/Images/OBBLogo.png" alt="Oman Broad Band"></a></div>');
    sidebar.append(logoContainer);

    // Sidebar title
    sidebar.append(`<div class="sidebar-section topic">${isArabic ? "القائمة" : "MENU"}</div>`);

    // Add sidebar to body if not on the excluded path
    if (urlPath !== "/Public/Public/Form.aspx") {
        $('body').addClass("sidebarAvailable sidebarVisible").append(sidebar);
    }

    // Initialize sidebar functionality
    initSidebarContent();
    initSidebarToggle();
});

// Sidebar toggle functionality
function initSidebarToggle() {
    const sidebar = document.querySelector(".sidebar");
    const existingBtn = document.getElementById("toggleSidebarBtn");

    // If mobile and button doesn't exist → create it
    if (window.innerWidth < 992 && sidebar && !existingBtn) {
        console.log("📱 Mobile detected — adding toggle button");

        const toggleButton = document.createElement("button");
        toggleButton.id = "toggleSidebarBtn";
        toggleButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M22.8 10.8031H1.2C0.5376 10.8031 0 11.3407 0 12.0031C0 12.6667 0.5376 13.2031 1.2 13.2031H22.8C23.4624 13.2031 24 12.6667 24 12.0031C24 11.3407 23.4624 10.8031 22.8 10.8031ZM22.8 20.4031H1.2C0.5376 20.4031 0 20.9407 0 21.6031C0 22.2667 0.5376 22.8031 1.2 22.8031H22.8C23.4624 22.8031 24 22.2667 24 21.6031C24 20.9407 23.4624 20.4031 22.8 20.4031ZM1.2 3.60312H22.8C23.4624 3.60312 24 3.06672 24 2.40312C24 1.74072 23.4624 1.20312 22.8 1.20312H1.2C0.5376 1.20312 0 1.74072 0 2.40312C0 3.06672 0.5376 3.60312 1.2 3.60312Z"
                    fill="#616162"/>
            </svg>
        `;

        toggleButton.style.border = "none";
        toggleButton.style.padding = "8px";
        toggleButton.style.margin = "10px";
        toggleButton.style.cursor = "pointer";
        toggleButton.style.zIndex = "1000";
        toggleButton.style.position = "fixed";
        toggleButton.style.top = "10px";
        toggleButton.style.left = "10px";
        toggleButton.style.background = "transparent";

        document.body.appendChild(toggleButton);

        toggleButton.addEventListener("click", () => {
            sidebar.classList.toggle("visible");
            document.body.classList.toggle("collapseSidebar");
        });
    }
}

// Initialize sidebar content
function initSidebarContent() {
    let fqn = null;
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
        const sidebar = $('#sidebar');
        let menuItems = [];

        if (currentUrl.includes("Dashboard.VendorManagementTeamDashboard.Form") || 
            currentUrl.includes("Vendor.VendorList.Form") || 
            currentUrl.includes("VendorRegistrationReadOnly.Form") || 
            currentUrl.includes("Vendor.WelcomeLetterList.Form") || 
            currentUrl.includes("VendorRegistrationApproval.Form/") || 
            currentUrl.includes("Vendor.VendorList.Form/")) {
            menuItems = [
                { text: "Home", url: "/Runtime/Runtime/Form/Dashboard.VendorManagementTeamDashboard.Form/" },
                { text: "Vendor List/Welcome Letters", url: "/Runtime/Runtime/Form/Vendor.WelcomeLetterList.Form/" },
                { text: "All Vendors and Statuses", url: "/Runtime/Runtime/Form/Vendor.VendorList.Form/" },
            ];
        } 
        else if (currentUrl.includes("Dashboard.ProcurementTeamDashboard.LandingPage") ||
                 currentUrl.includes("Tenders.BidOpening.Form") ||
                 currentUrl.includes("Tender__RFQCreationReadOnly.Form") || 
                 currentUrl.includes("Tensders.Awarding.Form") || 
                 currentUrl.includes("VendorBiddingReadOnly.Form") || 
                 currentUrl.includes("Vendor.ClarificationsResponseForm") || 
                 currentUrl.includes("Dashboard.ProcurementTeamDashboard.ListAllTenders/") || 
                 currentUrl.includes("Dashboard.ProcurementTeamDashboard.Form/") || 
                 currentUrl.includes("Dashboard.ProcurementTeamDashboard.ListAllTenders/") || 
                 currentUrl.includes("Tender__RFQCreation.Form/") || 
                 currentUrl.includes("Tender__RFQCreationApproval.Form/")) {
            menuItems = [
                { text: "Home", url: "/Runtime/Runtime/Form/Dashboard.ProcurementTeamDashboard.LandingPage/" },
                { text: "Tenders/RFQs Page", url: "/Runtime/Runtime/Form/Dashboard.ProcurementTeamDashboard.ListAllTenders/" },
                { text: "Pre-Clarifications", url: "/Runtime/Runtime/Form/Vendor.ClarificationsResponseForm/" },
                { text: "RFQ/Tender Openning", url: "/Runtime/Runtime/Form/Tenders.BidOpening.Form/" },
                { text: "Bids and Post-Clarifications", url: "/Runtime/Runtime/Form/VendorBiddingReadOnly.Form/" },
                { text: "RFQ/Tender Awarding", url: "/Runtime/Runtime/Form/Tensders.Awarding.Form/" },
            ];
        }
        else if (currentUrl.includes("Vendor.ExternalDashboard") || 
                 currentUrl.includes("VendorUpdateProfile.Form") ||
                 currentUrl.includes("VendorRenewal.Form") || 
                 currentUrl.includes("VendorRegistrationReview.Form") || 
                 currentUrl.includes("VendorBidding.Form") || 
                 currentUrl.includes("Vendor.PostSubmissionClarificationsForm") ||
                 currentUrl.includes("Vendor.ClarificationsForm/") || 
                 currentUrl.includes("ExternalHub.Form/") || 
                 currentUrl.includes("VendorRegistration.Form/") ||
                 currentUrl.includes("VendorRenewalProfile.Form"))
                  {
            menuItems = [
                { text: "Home", url: "/eservices/Runtime/Form/Vendor.ExternalDashboard/" },
                { text: "Vendor Pre-Clarifications", url: "/eservices/Runtime/Form/Vendor.ClarificationsForm/" },
                { text: "Vendor Post-Clarifications", url: "/eservices/Runtime/Form/Vendor.PostSubmissionClarificationsForm/" },
                { text: "Bidding", url: "/eservices/Runtime/Form/VendorBidding.Form/" },
            ];
        }
        else if (currentUrl.includes("InternalHub.Form/") || currentUrl.includes("SubmittedTenders.Form/")) {
            menuItems = [
                { text: "Home", url: "/Runtime/Runtime/Form/InternalHub.Form/" },
                { text: "Submitted Tenders", url: "/Runtime/Runtime/Form/SubmittedTenders.Form/" },
            ];
        }
        else if (currentUrl.includes("Tender__RFQCreationReview.Form") && fqn && fqn.includes("OBC\\")) {
            menuItems = [
                { text: "Home", url: "/Runtime/Runtime/Form/Dashboard.ProcurementTeamDashboard.LandingPage/" },
                { text: "Tenders/RFQs Page", url: "/Runtime/Runtime/Form/Dashboard.ProcurementTeamDashboard.ListAllTenders/" },
                { text: "Pre-Clarifications", url: "/Runtime/Runtime/Form/Vendor.ClarificationsResponseForm/" },
                { text: "RFQ/Tender Openning", url: "/Runtime/Runtime/Form/Tenders.BidOpening.Form/" },
                { text: "Bids and Post-Clarifications", url: "/Runtime/Runtime/Form/VendorBiddingReadOnly.Form/" },
                { text: "RFQ/Tender Awarding", url: "/Runtime/Runtime/Form/Tensders.Awarding.Form/" },
            ];
        }
        else if (currentUrl.includes("Tender__RFQCreationReview.Form") && fqn && !fqn.includes("OBC\\")) {
            menuItems = [
                { text: "Home", url: "/eservices/Runtime/Form/Vendor.ExternalDashboard/" },
                { text: "Vendor Pre-Clarifications", url: "/eservices/Runtime/Form/Vendor.ClarificationsForm/" },
                { text: "Vendor Post-Clarifications", url: "/eservices/Runtime/Form/Vendor.PostSubmissionClarificationsForm/" },
                { text: "Bidding", url: "/eservices/Runtime/Form/VendorBidding.Form/" },
            ];
        }        
        else {
            menuItems = [];
        }

        // Build menu
        if (menuItems && menuItems.length > 0) {
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

        $(window).on("load", function () {
            if ($(".tab-box-tabs").length) {
                $('body').addClass('topbarExists');
            }
        });
    }
}

// Grid content observation and grayscale fixes
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
            if (lastIcon.length === 0) return;
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
            if (lastIcon.length === 0) return;
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
            if (lastIcon.length === 0) return;
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
            if (lastIcon.length === 0) return;
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

// POC - Make certain elements non-clickable based on status
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('td[data-options]').forEach(function (td) {
        let dataOptions = td.getAttribute('data-options');

        try {
            let options = JSON.parse(dataOptions);
            let value = options.value;

            if (value === "Rejected" || value === "Approved") {
                let row = td.parentElement;
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

// Navbar brand click handler
$(document).ready(function () {
    let fqn = null;

    setTimeout(function () {
        try {
            fqn = SourceCode.Forms.Settings.User.FQN || null;
            console.log("Logged-in User FQN:", fqn);
        } catch (e) {
            console.error("Error retrieving FQN:", e);
        }
    }, 1000);

    $(document).on("click", ".navbarBrand a", function (e) {
        e.preventDefault();

        if (fqn) {
            if (fqn.toLowerCase().includes("OBC".toLowerCase())) {
                console.log("Internal User");
                window.location.href = "/Runtime/Runtime/Form/OBBHub.Form/";
            } else {
                console.log("External User");
                window.location.href = "/Runtime/Runtime/Form/OBBHubExternal.Form/";
            }
        }
    });
});

// Hide calendar popup on scroll
$(window).on("scroll", function () {
    $(".id-calendar-control-popup").hide();
});

// Re-initialize toggle on resize
window.addEventListener("resize", initSidebarToggle);