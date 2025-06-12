document.addEventListener("DOMContentLoaded", function() {
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }

    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    };

    var formContainer = document.querySelector(".theme-entry .form");

    if (formContainer) {
        var parentContainer = formContainer.parentNode;

        document.body.style.overflow = "hidden";
        document.documentElement.style.overflow = "hidden";

        var layoutDiv = document.createElement("div");
        layoutDiv.className = "form-video-wrapper";
        layoutDiv.style.display = "flex";
        layoutDiv.style.justifyContent = "space-between";
        layoutDiv.style.width = "100%";
        layoutDiv.style.flexDirection = "row-reverse";
        layoutDiv.style.alignItems = "stretch";
        layoutDiv.style.overflowY = "hidden";

        // Replace old video content with the new introSection structure
        var videoWrapper = document.createElement("div");
        videoWrapper.className = "video-container";
        videoWrapper.style.flex = "6";
        videoWrapper.style.maxWidth = "50vw";

        videoWrapper.innerHTML = `
            <div class="introSection" style="width: 100%; height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 2rem;">
                <div class="logo" style="margin-bottom: 1.5rem;">
                    <img src="https://nshq-k2dev-wfe.supply.nama.om/Style/media/logo/logo.png" alt="Logo" style="max-width: 100%; height: auto;">
                </div>
                <div class="description">
                    <h1 class="overlay-text">Leading reference for supply services <br> excellence in the region</h1>
                </div>
            </div>
        `;

        var formWrapper = document.createElement("div");
        formWrapper.className = "form-wrapper";
        formWrapper.style.flex = "4";
        formWrapper.style.maxWidth = "50vw";
        formWrapper.style.overflowY = "auto";
        formWrapper.style.maxHeight = "100vh";

        parentContainer.replaceChild(formWrapper, formContainer);
        formWrapper.appendChild(formContainer);

        layoutDiv.appendChild(formWrapper);
        layoutDiv.appendChild(videoWrapper);
        parentContainer.appendChild(layoutDiv);

        var span = document.getElementById("00000000-0000-0000-0000-000000000000_c43033e9-f288-a521-0ee1-4e4b61d63a65");
        if (!window.location.href.includes("/Public/Runtime/")) {
            if (span) span.textContent = "English";
        } else if (!window.location.href.includes("/PublicAR/Runtime/")) {
            if (span) span.textContent = "العربية";
        }

    } else {
        console.error("Form container not found.");
    }

    document.querySelectorAll(".row:nth-child(2) .formcontrol:first-child .innerpanel:first-child").forEach(function (img) {
        img.onclick = function () {
            var span = document.getElementById("00000000-0000-0000-0000-000000000000_c43033e9-f288-a521-0ee1-4e4b61d63a65");
            if (!window.location.href.includes("/Public/Runtime/")) {
                window.location.href = "https://nshq-k2dev-wfe.supply.nama.om/Public/Runtime/Form/User.UserRegistration.Form/";
                if (span) span.textContent = "العربية";
            } else if (!window.location.href.includes("/PublicAR/Runtime/")) {
                window.location.href = "https://nshq-k2dev-wfe.supply.nama.om/PublicAR/Runtime/Form/User.UserRegistration.Form/";
                if (span) span.textContent = "English";
            }
        };
    });
});

function translateHeadingBasedOnURL() {
    var currentURL = window.location.href;
    var translations = {
        'PublicAR': 'المرجع الرائد لتميز خدمات التوريد<br>في المنطقة',
    };

    for (var key in translations) {
        if (translations.hasOwnProperty(key)) {
            if (currentURL.includes(key)) {
                var videoWrapper = document.querySelector('.video-container');
                if (videoWrapper) {
                    var heading = videoWrapper.querySelector('.description h1.overlay-text');
                    if (heading) {
                        heading.innerHTML = translations[key];
                    }
                }
                break;
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', translateHeadingBasedOnURL);
