////////////////////////////////////////////////////////////////////////
// Fetch Searchbar, "filter":
let filter = document.getElementById("filter-datapacks");
let filter_search = filter.value;

////////////////////////////////////////////////////////////////////////
// Fetch Searchbar Results: 
let filter_search_result = document.getElementById("datapacks-search-results");
filter_search_result.style.display = "none";

////////////////////////////////////////////////////////////////////////
// Fetch Section Datapacks List:
let list_packs = document.getElementById("datapacks-list");

////////////////////////////////////////////////////////////////////////
// Fetch Datpacks Figures:
let datapacks_list = document.getElementsByClassName("datapacks");




////////////////////////////////////////////////////////////////////////
// Setup Datapacks List:
let list = new Array();

function packs(img, id) {

	list_packs.innerHTML+="<figure class='datapacks modal-btn' id='"+id+"'><img src='images/datapacks/"+img+"' /><figcaption class='more_info'></figcaption><figcaption class='keywords'>"+id+"</figcaption></figure>";
	list[id] = document.getElementById(id);
}


////////////////////////////////////////////////////////////////////////
// If user, types in "searchbar" do this:
filter.addEventListener("keyup", function(e) {

	// Get Searchbar value:
	let filter_keyword = e.target.value;

	// If Seachbar NOT EMPTY:
	if(filter_keyword !== "") {

		// If Item Exists in Searchbar:
		if(list[filter_keyword]) {

			// Found Result:
			filter_search_result.innerHTML= "Result Found pack named, \"<b>"+filter_keyword+"\"</b>!";
			filter_search_result.style.display = "block";

			// Hide Non-Results:
			for(let i = 0; i < datapacks_list.length; i++) {

				datapacks_list[i].style.display = "none";
			}

			// Display Result:
			datapacks_list[filter_keyword].style.display = "block";
		}

		else {

			// No Results Found
			filter_search_result.innerHTML= "No, Results Found!";
			filter_search_result.style.display = "block";

			// Display Packs:
			for(let i = 0; i < datapacks_list.length; i++) {

				datapacks_list[i].style.display = "block";
			}
		}
	}

	// If Searchbar is EMPTY:
	else {

		// Hide Results:
		filter_search_result.style.display = "none";

		// Display Packs:
		for(let i = 0; i < datapacks_list.length; i++) {

			datapacks_list[i].style.display = "block";
		}
	}
});