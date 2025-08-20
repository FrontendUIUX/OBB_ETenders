document.addEventListener("DOMContentLoaded", function () {
    const urlPath = window.location.pathname;
    const fullUrl = window.location.href.toLowerCase();

    // Skip specific runtime page
    if (urlPath === "/Public/Public/Form.aspx" || urlPath === "/Runtime/Runtime/Form.aspx") {
        return;
    }

    // Ensure jQuery is loaded
    if (typeof jQuery === "undefined") {
        console.error("jQuery is required for this script.");
        return;
    }

    // Avoid duplicate sidebar
    if ($(".sidebar").length === 0) {
        const sidebar = $('<div id="sidebar" class="sidebar"></div>');

        // Logo section
        const logoContainer = $('<div class="navbarBrand"></div>');
        const logoLink = $('<a target="_blank"></a>').append(
            $('<img>', {
                src: 'https://frontenduiux.github.io/OBB_Services/Images/OBBLogo.png',
                alt: 'Oman Broad Band'
            })
        );
        logoContainer.append(logoLink);
        sidebar.append(logoContainer);

        // Sidebar title
        const isArabic = fullUrl.includes("publicar");
        sidebar.append(`<div class="sidebar-section topic">${isArabic ? "القائمة" : "MENU"}</div>`);

        $("body").append(sidebar).addClass("sidebarVisible");
    }

    let fqn = null;
    const currentUrl = window.location.href;

    // Get FQN after small delay
    $(document).ready(function () {
        setTimeout(function () {
            try {
                fqn = SourceCode.Forms.Settings.User.FQN || null;
                console.log("Logged-in User FQN:", fqn);
                buildMenu();
            } catch (e) {
                console.error("Error retrieving FQN:", e);
            }
        }, 1000);
    });

    function buildMenu() {
        let menuItems = [];

        if (currentUrl.includes("Dashboard.VendorManagementTeamDashboard.Form/") || currentUrl.includes("Vendor.VendorList.Form/")) {
            menuItems = [
                { text: "Home", url: "/Runtime/Runtime/Form/Dashboard.VendorManagementTeamDashboard.Form/" },
                { text: "Vendor List", url: "/Runtime/Runtime/Form/Vendor.VendorList.Form/" },
            ];
        } else if (currentUrl.includes("Dashboard.ProcurementTeamDashboard.LandingPage/") || currentUrl.includes("Dashboard.ProcurementTeamDashboard.ListAllTenders/") || currentUrl.includes("Dashboard.ProcurementTeamDashboard.Form/")) {
            menuItems = [
                { text: "Home", url: "/Runtime/Runtime/Form/Dashboard.ProcurementTeamDashboard.LandingPage/" },
                { text: "Clarification Review Page", url: "/Runtime/Runtime/Form/Dashboard.ProcurementTeamDashboard.Form/" },
                { text: "Tenders/RFQs Page", url: "/Runtime/Runtime/Form/Dashboard.ProcurementTeamDashboard.ListAllTenders/" },
                { text: "Worklist", url: "#" }
            ];
        } else if (currentUrl.includes("Vendor.ExternalDashboard/") || currentUrl.includes("Vendor.ClarificationsForm/") || currentUrl.includes("ExternalHub.Form/")) {
            menuItems = [
                { text: "Home", url: "/Runtime/Runtime/Form/Vendor.ExternalDashboard/" },
                { text: "Vendor Clarifications", url: "/Runtime/Runtime/Form/Vendor.ClarificationsForm/" },
                { text: "Worklist", url: "/Runtime/Runtime/Form/ExternalHub.Form/" },
            ];
        } else if (currentUrl.includes("InternalHub.Form/") || currentUrl.includes("SubmittedTenders.Form/")) {
            menuItems = [
                { text: "Home", url: "/Runtime/Runtime/Form/InternalHub.Form/" },
                { text: "Submitted Tenders", url: "/Runtime/Runtime/Form/SubmittedTenders.Form/" },
            ];
        }

        const sidebar = $("#sidebar");

        // Clear old menu before appending new items
        sidebar.find(".sidebar-item").remove();

        menuItems.forEach(item => {
            const link = $('<a>')
                .attr('href', item.url)
                .addClass('sidebar-link nav-link')
                .append($('<span>').text(item.text));

            const itemContainer = $('<div class="sidebar-item"></div>').append(link);
            sidebar.append(itemContainer);
        });
    }

    // Navbar brand click
    $(document).on("click", ".navbarBrand a", function (e) {
        e.preventDefault();
        if (!fqn) return;

        if (fqn.toLowerCase().includes("obc")) {
            console.log("Internal User");
            window.location.href = "/Runtime/Runtime/Form/InternalHub.Form/";
        } else {
            console.log("External User");
            window.location.href = "/Runtime/Runtime/Form/Vendor.ExternalDashboard/";
        }
    });
});
