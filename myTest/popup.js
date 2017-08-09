

function updateIcon() {
	x = document.getElementById("Title").innerHTML;
	if(x == "啦啦啦！！！"){
		document.getElementById("Title").innerHTML="哈哈哈！！！";
		document.getElementById("botton1").innerHTML="Turn On";
	}else{
		document.getElementById("Title").innerHTML="啦啦啦！！！";
		document.getElementById("botton1").innerHTML="Turn Off";
	}



}

document.getElementById("botton1").addEventListener("click",updateIcon);





