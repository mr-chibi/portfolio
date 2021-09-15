class dp_search {

	constructor() {

		// Get DOM:
		this.search_packs = document.getElementById("datapack_search");
		this.suggestions = document.getElementById("suggestions");
		this.dp_section = document.getElementById("datapacks");

		//
		this.pack_obj = document.getElementsByClassName("pack");

		//
		this.pack_overlay = document.getElementById("pack_overlay");
		this.pack_modal = document.getElementById("pack_modal");
		this.pack_btn_cls = document.getElementsByClassName("modal_close");

		// Setup array & Sort:
		this.datapack = new Array();

		// List Datapacks:
		this.datapack[0] = ["mmo", 1.17, "images/datapacks/mmo.png"];
		this.datapack[1] = ["mmo_worldgen", 1.17, "images/datapacks/mmo_worldgen.png"];
		this.datapack[2] = ["player_shops", 1.17, "images/datapacks/player_shops.png"];
		this.datapack[3] = ["permissions", 1.17, "images/datapacks/permissions.png"];
		this.datapack[4] = ["claims", 1.17, "images/datapacks/claims.png"];
		this.datapack[5] = ["mcedit", 1.17, "images/datapacks/mcedit.png"];
		this.datapack[6] = ["murder_minigame", 1.17, "images/datapacks/murder_minigame.png"];
		this.datapack[7] = ["assets", 1.16, "images/datapacks/assets.png"];
		this.datapack[8] = ["dimensions", 1.16, "images/datapacks/dimensions.png"];
		this.datapack[9] = ["storage", 1.16, "images/datapacks/storage.png"];

		//
		this.datapack.sort();

		// Count Total Datapacks:
		this.total_packs = this.datapack.length;

		// Run Loop:
		for(let i = 0; i < this.total_packs; i++) {

			// Display Values in search bar:
			this.suggestions.innerHTML+="<option value='"+this.datapack[i][0]+"'>Datapack Version: "+this.datapack[i][1]+"</option>";
		}
	}


	// Display Total Amount of Datapacks:
	total() {

		let ct_packs = document.getElementsByClassName("count_packs");

		// If there's more than 0 packs execute this:
		if(this.total_packs > 0) {

			// Run Loop:
			for(let i = 0; i < ct_packs.length; i++) {

				ct_packs[i].innerHTML=this.total_packs;
			}	
		}

		// If there's no, packs set value to "0":
		else {

			ct_packs[i].innerHTML=0;
		}
		
	}


	//
	search_results() {

		this.search_packs.addEventListener("keyup", e => {

			// Setup Keyword tyed by user:
			let keyword = e.target.value;

			// If Keywords are NOT Empty:
			if(keyword !== "") {

				// Run Loop:
				for(let i = 0; i < this.total_packs; i++) {

					// No Results Found
					if(keyword !== this.datapack[i][0]) {

						this.dp_section.innerHTML="<h1 class='col10'>No, Results Found!</h1>";
						this.list_packs();
					}
				}


				// Run Loop:
				for(let i = 0; i < this.total_packs; i++) {

					// Found Result:
					if(keyword === this.datapack[i][0]) {

						this.dp_section.innerHTML="<h1 class='col10'>Found Result!</h1>";
						this.dp_section.innerHTML+="<figure class='pack' style='background:url("+this.datapack[i][2]+") no-repeat center center; -webkit-background-size:cover; -moz-background-size:cover; background-size:cover;'><figcaption>"+this.datapack[i][0]+"</figcaption></figure>";
						
						//
						let namespace = this.datapack[i][0]+"_modal";

						//
						$(this.pack_obj).click(function() {

							//
							$("#pack_overlay").fadeIn(500);
							$("#"+namespace).fadeIn(500);
						});

						//
						$(this.pack_btn_cls).click(function() {

							//
							$("#pack_overlay").fadeOut(500);
							$("#"+namespace).fadeOut(500);
						});
					}
				}
			}
			else {

				this.dp_section.innerHTML="";
				this.list_packs();
			}
		});
	}


	list_packs() {

		for(let i = 0; i < this.total_packs; i++) {

			this.dp_section.innerHTML+="<figure class='pack' style='background:url("+this.datapack[i][2]+") no-repeat center center; -webkit-background-size:cover; -moz-background-size:cover; background-size:cover;' onclick='packs.toggle_modal("+i+");'><figcaption>"+this.datapack[i][0]+"</figcaption></figure>";
		}
	}


	toggle_modal(id) {

		//
		let namespace = this.datapack[id][0]+"_modal";

		//
		$("#pack_overlay").fadeIn(500);
		$("#"+namespace).fadeIn(500);


		$(this.pack_btn_cls).click(function() {

			//
			$("#pack_overlay").fadeOut(500);
			$("#"+namespace).fadeOut(500);
		});
	}
}