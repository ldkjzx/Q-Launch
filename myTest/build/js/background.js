
function messageHandle(request, sender, sendResponse){
	if(request.cmd=='setURL'){
		console.log(request.arr)
		g_newURL=request.arr;
	}else if(request.cmd=='getURL'){
		sendResponse({'arr':g_newURL});
	}
}


chrome.extension.onMessage.addListener(messageHandle())
