// Fetch Objects:
let dropmenu = document.getElementsByClassName("dropmenu_title");
let dropmenu_section = document.getElementsByClassName("dropmenu_section");
let dropmenu_total = dropmenu.length;


// Run Loop:
for(let i = 0; i < dropmenu_total; i++) {

	// Check if User, Selects "dropmenu title":
	dropmenu[i].addEventListener("click", function() {

		if(dropmenu_section[i].style.display === "block") {

			// Close Section:
			dropmenu_section[i].style.display = "none";
		}
		else {

		// Hide All Open Sections:
		for(let j = 0; j < dropmenu_section.length; j++) {

			dropmenu_section[j].style.display = "none";
			dropmenu_section[i].style.animation = "fadeOut 0.8s";
		}

		// Open Selected Section:
		dropmenu_section[i].style.display = "block";
		dropmenu_section[i].style.animation = "fadeIn 0.8s";		
		}
	});
}