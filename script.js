//your JS code here. If required.
const returnPromis = () => {
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve();
		},1000);
	})
}

const successCallback = () => {
	const output = document.getElementById("output");
	output.innerText = "Hello, world!";
}

returnPromis().then(successCallback);