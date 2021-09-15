class slideshow {

	constructor() {

		// Declare Objects:
		this.start = 0;
		this.stop = 4;

		//
		if(this.start < this.stop) {

			this.start++;
		}
		else {

			this.start = 0;
		}

		console.log(this.start);
 	}
}


let test = new slideshow;