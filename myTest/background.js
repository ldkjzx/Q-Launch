var count = 0;

function updateIcon() {

	if(count%2==0){
		chrome.browserAction.setIcon({path:"images/icon19_B.png"});
	}else{
		chrome.browserAction.setIcon({path:"images/icon19_G.png"});
	}
	

	count++;

}

document.getElementById("botton1").addEventListener("click",updateIcon);
