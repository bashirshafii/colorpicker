window.onload = function (){
	initColorPicker();
};

function initColorPicker(){
	let element = document.getElementById("color-box");
	let colors = {
		red: document.getElementById("red"),
		green: document.getElementById("green"),
		blue: document.getElementById("blue")
	};
	let colorPickers  = document.getElementsByClassName("picker");
	setColorPickerEventListeners(element,colors, colorPickers);

}

function setColorPickerEventListeners(element, colors, pickerElements) {
	let pickerLen = pickerElements
	for(let i = 0; i < pickerLen.length; i++) {
		pickerElements[i].addEventListener('change', () => {
			console.log("Red value: ", colors.red.value);
			let red = colors.red.value;
			let green = colors.green.value;
			let blue = colors.blue.value;
			elementBGColor(element,red,green,blue );
			setDisplayValues(red,green,blue);

		});
	}
}


function elementBGColor(element,red, green, blue) {
	rgbVal = [red,green, blue].join(',');
	element.style.backgroundColor = "rgb(" + rgbVal + ")";

}

function setDisplayValues(red, green, blue){
	let redVal = document.getElementById("redVal");
	let greenVal = document.getElementById("greenVal");
	let blueVal = document.getElementById("blueVal");

	redVal.innerText = red;
	greenVal.innerText = green;
	blueVal.innerText = blue;

}
