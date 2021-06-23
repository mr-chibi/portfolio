//
let pages = document.getElementsByClassName("page");
let pg_nav = document.getElementById("page_nav");

//
let selected_page = 0;
let first_page = 0;
let total_pages = pages.length;


// Display First page:
pages[first_page].style.display = "block";

// Previous Page:
pg_nav.innerHTML+="<li onclick='next_page(-1)'><</li>";	

// Display Navigation:
for(let i = 0; i < total_pages; i++) {

	pg_nav.innerHTML+="<li onclick='toggle_page("+i+")'>"+(i + 1)+"</li>";	
}

// Next Page
pg_nav.innerHTML+="<li onclick='next_page(1)'>></li>";	


function next_page(id) {

	selected_page = selected_page + id;
	
	//
	if(selected_page == -1) {

		selected_page = total_pages - 1;
	}

	//
	else if(selected_page == total_pages) {

		selected_page = first_page;
	}


	//
	for(let p = 0; p < total_pages; p++) {

		pages[p].style.display = "none";
	}

	//
	pages[selected_page].style.display = "block";
	pages[selected_page].style.animation = "fadeIn 500ms";
} 




// If page number, is select change to that page:
function toggle_page(id) {

	//
	if(pages[id].style.display !== "block") {

		//
		for(let j = 0; j < total_pages; j++) {

			pages[j].style.display = "none";
		}

		//
		pages[id].style.display = "block";
		pages[id].style.animation = "fadeIn 500ms";
	}
}