function makeid(l) {
  // write your code here
	let characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789";
	let res="";
	for(let i=0;i<l;i++)	{
		res+=characters[Math.floor(Math.random()*characters.length)];
	}
	return res;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
