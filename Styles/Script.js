document.addEventListener("DOMContentLoaded", function() {
    // Select the form container
	
	if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
	}

	// Force scroll to the top before the page renders
	window.onbeforeunload = function () {
		window.scrollTo(0, 0);
	};
	
	
    var formContainer = document.querySelector(".theme-entry .form");

    if (formContainer) {
        // Get the parent of the form container
        var parentContainer = formContainer.parentNode;
		
		
		
		document.body.style.overflow = "hidden"; // Prevents scrolling of the whole page
document.documentElement.style.overflow = "hidden"; // Ensures no scrolling on HTML root


        // Create a wrapper div for the layout
        var layoutDiv = document.createElement("div");
        layoutDiv.className = "form-video-wrapper"; // Add a class for styling
        layoutDiv.style.display = "flex"; // Use flexbox
        //layoutDiv.style.alignItems = "center"; // Align items vertically
        layoutDiv.style.justifyContent = "space-between"; // Space between form & video
        layoutDiv.style.width = "100%"; // Full width
        //layoutDiv.style.gap = "20px"; // Add spacing between elements
		layoutDiv.style.flexDirection = "row-reverse"; // This swaps their positions
		layoutDiv.style.alignItems = "stretch"; // Ensure both elements stretch to the same height
		layoutDiv.style.overflowY = "hidden"; // This prevents vertical scrolling on the entire layout




        // Create a wrapper div for the video
        var videoWrapper = document.createElement("div");
        videoWrapper.className = "video-container"; // Add a class for styling
        videoWrapper.style.flex = "6"; // 70% width for video
        videoWrapper.style.maxWidth = "60vw"; // Ensure it doesn't exceed 70% of screen width
        

        // Add video content
         videoWrapper.innerHTML = `
            <div class="videoContainer" style="width: 100%; height: 100%;">
                <video muted autoplay loop playsinline style="width: 100%; height: 100%; object-fit: cover;">
                    <source src="https://nshq-k2dev-wfe.supply.nama.om/Style/media/video/24hvyAGOdMqFMBb6.mp4">
                </video>
            </div>
			<div class="overlay-content">
        <img src="https://nshq-k2dev-wfe.supply.nama.om/Style/media/logo/logo.png" alt="Logo" class="logo">
        <h1 class="overlay-text">Leading reference for supply services <br> excellence in the region</h1>
    </div>

        `;

        // Create a new wrapper for the form
        var formWrapper = document.createElement("div");
        formWrapper.className = "form-wrapper";
        formWrapper.style.flex = "4"; // 30% width for form
        formWrapper.style.maxWidth = "40vw"; // Ensure it doesn't exceed 30% of screen width


		formWrapper.style.overflowY = "auto"; // This allows scrolling only inside the form
		formWrapper.style.maxHeight = "100vh"; // Ensures it can scroll if content exceeds viewport height


        // Move the form inside formWrapper
        parentContainer.replaceChild(formWrapper, formContainer); // Replace original form
        formWrapper.appendChild(formContainer); // Append form inside the wrapper

        // Append both form and video to the layout
        layoutDiv.appendChild(formWrapper);
        layoutDiv.appendChild(videoWrapper);

        // Insert layoutDiv into the parent container
        parentContainer.appendChild(layoutDiv);
		
		
		    var span = document.getElementById("00000000-0000-0000-0000-000000000000_c43033e9-f288-a521-0ee1-4e4b61d63a65"); // replace with actual span ID

 if (!window.location.href.includes("/Public/Runtime/")) {
					 
					 
					  if (span) span.textContent = "English";
                }
             else if (!window.location.href.includes("/PublicAR/Runtime/")){
                 
					    if (span) span.textContent = "العربية";   

                }


    } else {
        console.error("Form container not found.");
    }
	
	
	
    document.querySelectorAll(".row:nth-child(2) .formcontrol:first-child .innerpanel:first-child").forEach(function (img) {
        img.onclick = function () {
    var span = document.getElementById("00000000-0000-0000-0000-000000000000_c43033e9-f288-a521-0ee1-4e4b61d63a65"); // replace with actual span ID

           
                if (!window.location.href.includes("/Public/Runtime/")) {
                    window.location.href = "https://nshq-k2dev-wfe.supply.nama.om/Public/Runtime/Form/User.UserRegistration.Form/";
					 if (span) span.textContent = "العربية";
                }
             else if (!window.location.href.includes("/PublicAR/Runtime/")){
                 {
                    window.location.href = "https://nshq-k2dev-wfe.supply.nama.om/PublicAR/Runtime/Form/User.UserRegistration.Form/";
					        if (span) span.textContent = "English";

                }
            
        };
    };
	});
});
// Function to translate the heading based on URL parameters
function translateHeadingBasedOnURL() {
    // Retrieve the current URL
    var currentURL = window.location.href;

    // Define translation mappings
    var translations = {
        'PublicAR': 'المرجع الرائد لتميز خدمات التوريد<br>في المنطقة',
        // Add more mappings as needed
    };

    // Iterate over each translation key
    for (var key in translations) {
        if (translations.hasOwnProperty(key)) {
            // Check if the URL contains the key
            if (currentURL.includes(key)) {
                // Select the heading element within the videoWrapper
                var videoWrapper = document.querySelector('.video-container');
                if (videoWrapper) {
                    var heading = videoWrapper.querySelector('.overlay-content h1.overlay-text');
                    if (heading) {
                        // Update the heading text with the corresponding translation
                        heading.innerHTML = translations[key];
                    }
                }
                break; // Exit the loop once a translation is applied
            }
        }
    }
}

// Execute the translation function after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', translateHeadingBasedOnURL);

