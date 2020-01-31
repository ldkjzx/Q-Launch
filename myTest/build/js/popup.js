var e_url;
var urlList = [
	"http://weibo.com/",
	"http://www.cnbeta.com/",
	"http://focus.tianya.cn/",
	"https://www.chiphell.com/",
	"http://www.iplaysoft.com/",
	"http://www.mafengwo.cn/",
	"http://www.fengniao.com/",
	"http://www.dgtle.com/"
];



function updateIcon() {
	x = document.getElementById("Title").innerHTML;
	if(x == "啦啦啦！！！"){
		document.getElementById("Title").innerHTML="哈哈哈！！！";
		document.getElementById("button1").innerHTML="Turn On";
	}else{
		document.getElementById("Title").innerHTML="啦啦啦！！！";
		document.getElementById("button1").innerHTML="Turn Off";
	}
}

function openURL() {

	var mylistItems = document.getElementById("urllist").childNodes;

	for(i=0; i<mylistItems.length; i++){

		if(mylistItems[i].innerHTML.substr(0,7)=="http://"){
			e_url = mylistItems[i].innerHTML;
		}else{
			e_url = "http://" + mylistItems[i].innerHTML;
		}

		chrome.tabs.create({url:e_url});
	}
}

function addItem() {
	var myitem = document.getElementById("ItemToAdd").value;
	//var mylistItems = document.getElementById("urllist");
	var newP = document.createElement("li");
	var textNode = document.createTextNode(myitem);
	newP.appendChild(textNode);
	document.getElementById("urllist").appendChild(newP);
	urlList.push(myitem);
	return false;
}



//chrome.extension.sendMessage({cmd: "setURL", 'arr':'http://www.youku.com'},function(response) {alert("url sending...");});
//chrome.extension.sendMessage({cmd: "getURL"},function(response) {e_url=response.arr;});


for(i=0; i<urlList.length; i++){
	var textNode = document.createTextNode(urlList[i]);
	var newP = document.createElement("li");
	newP.appendChild(textNode);
	document.getElementById("urllist").appendChild(newP);
	}



//document.getElementById("button1").addEventListener("click",updateIcon);
document.getElementById("button2").addEventListener("click",openURL);
document.getElementById("AddButton").addEventListener("click",addItem);



