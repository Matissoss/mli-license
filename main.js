function copy_license(){
	const LICENSE = document.getElementById("license");
	navigator.clipboard.writeText(LICENSE.innerText);
}
