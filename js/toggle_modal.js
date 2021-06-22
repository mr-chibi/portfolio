// Fetch Objects:
let modal_cls_btn = document.getElementsByClassName("cls-modal");
let modal_btn = document.getElementsByClassName("modal-btn");
let modal = document.getElementsByClassName("modal");
let overlay = document.getElementById("overlay");

// Fetch Object Total:
let modal_total = modal_btn.length;



// Run Loop:
for(let c = 0; c < modal_total; c++) {

	// Check if User, Selects "X":
	modal_cls_btn[c].addEventListener("click", function() {

		overlay.style.display = "none";
		modal[c].style.display = "none";
	});


	// User, pressed, "Esc" Close Window:
	document.addEventListener("keydown", function(e) {

		if(e.keyCode == 27) {

			overlay.style.display = "none";
			modal[c].style.display = "none";
		}
	});
}


// Run Loop:
for(let i = 0; i < modal_total; i++) {

	// Check if User, Selects "dropmenu title":
	modal_btn[i].addEventListener("click", function() {

		if(modal[i].style.display === "block") {

			// Close Section:
			modal[i].style.display = "none";
		}
		else {

		// Hide All Open Sections:
		for(let j = 0; j < modal.length; j++) {

			modal[j].style.display = "none";
		}

		// Open Selected Section:
		overlay.style.display = "block";
		overlay.style.animation = "fadeIn 0.8s";
		modal[i].style.display = "flex";		
		}
	});
}