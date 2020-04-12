let button = document.querySelector('#submit');

// let selects = document.querySelector('select');
// selects.addEventListener('change', function() {

// 			selects.classList.remove('correct');
// 			selects.classList.remove('incorrect');

// 				alert(this.value);
// 			});

button.addEventListener('click', function() {
	let forms = document.querySelectorAll('#test form');

	for (let form of forms) {

		let selects = document.querySelector('select');

		selects.classList.remove('correct');
		selects.classList.remove('incorrect');




		if(selects.name == 1) {
			if (selects.value == 'b') {
				selects.classList.add('correct');
			}else {
				selects.classList.add('incorrect');
			}
		};





		answs = ['A', 'B', 'C']	

		form.classList.remove('correct');
		form.classList.remove('incorrect');

		let inputs = form.querySelectorAll('input');



		for (let input of inputs) {
			if (input.checked){
				if (input.name == 1 ) {
					if (input.value == answs[0]) {
						form.classList.add('correct')
					}else {
						form.classList.add('incorrect')
					}		
				};	
				if (input.name == 2 ) {
					if (input.value == answs[1]) {
						form.classList.add('correct')
					} else {
						form.classList.add('incorrect')
					}		
				};	
				if (input.name == 3 ) {
					if (input.value == answs[1]) {
						form.classList.add('correct')
					} else {
						form.classList.add('incorrect')
					}		
				};	
				if (input.name == 4 ) {
					if (input.value == answs[2]) {
						form.classList.add('correct')
					} else {
						form.classList.add('incorrect')
					}		
				};
				if (input.name == 5 ) {
					if (input.value == answs[1]) {
						form.classList.add('correct')
					} else {
						form.classList.add('incorrect')
					}		
				};
			} 
			input.classList.remove('correct');
			input.classList.remove('incorrect');

			if (input.value.toLowerCase() == input.dataset.right){
				input.classList.add('correct');
			} else {
				input.classList.add('incorrect');
			}

		};


		// for (let input of inputs) {
		// 	input.classList.remove('correct');
		// 	input.classList.remove('incorrect');

		// 	if (input.value.toLowerCase() == input.dataset.right){
		// 		input.classList.add('correct');
		// 	} else {
		// 		input.classList.add('incorrect');
		// 	}
		// }

	}
});
