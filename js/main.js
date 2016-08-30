var search = document.querySelector(".search-hotels");
var myform = document.querySelector(".form-wrapper");
var adult_minus = document.querySelector(".adult-minus");
var adult_plus = document.querySelector(".adult-plus");
var adult_counter = document.querySelector("#adultcount");
var kid_minus = document.querySelector(".kid-minus");
var kid_plus = document.querySelector(".kid-plus");
var kid_counter = document.querySelector("#kidcount");
var form = document.querySelector(".search");
var fromdata = document.querySelector(".fromdatarent");
var todata = document.querySelector(".todatarent");

	search.addEventListener("click", function (event) {
	event.preventDefault();
	myform.classList.toggle("form-show");
	myform.classList.remove("form-send");
	});

	adult_minus.addEventListener("click", function (event) {
	event.preventDefault();
	adult_counter.value = parseInt(adult_counter.value) - 1;
	if(adult_counter.value < 1) { adult_counter.value = 1;}
	});

	adult_plus.addEventListener("click", function (event) {
		event.preventDefault();
		adult_counter.value = parseInt(adult_counter.value) + 1;
		if (adult_counter.value > 9) { adult_counter.value = 9};
	});

	kid_minus.addEventListener("click", function (event) {
	event.preventDefault();
	kid_counter.value = parseInt(kid_counter.value) - 1;
	if(kid_counter.value < 0) { kid_counter.value = 0;}
	});

	kid_plus.addEventListener("click", function (event) {
		event.preventDefault();
		kid_counter.value = parseInt(kid_counter.value) + 1;
		if (kid_counter.value > 9) { kid_counter.value = 9};
	});
	
	form.addEventListener("click", function (event) {
			event.preventDefault();
			myform.classList.add("form-send");
			setTimeout(function() { myform.classList.remove("form-show") }, 1000);
	})
		