(function()){

var task1 = {
	render: function(){
		document.getElementById("screenX").textContent = window.screenX;
		document.getElementById("screenY").textContent = window.screenY;
		document.getElementById("screenWidth").textContent = window.innerWidth;
		document.getElementById("screenHeight").textContent = window.innerHeight;
		document.getElementById("location").textContent = window.location;
		document.getElementById("location").textContent = window.location;

		document.getElementById("location").textContent = window.location.pathname;
		"Isah Bello Doro",
		"Student",
		"https://github.com/bellodoro"
		
	},
resize: function() {
	window.addeventListener("resize",this.render);


},
	devInfo: function() {
		var btnDev = document.getElementById("dev-info");
		btnDev.addEventListner("click", function() {

});
	}
}
task1.render();
task1.resize();
task1.devInfo();
})();