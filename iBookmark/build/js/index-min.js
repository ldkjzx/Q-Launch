!function t(e,o,r){function a(i,d){if(!o[i]){if(!e[i]){var l="function"==typeof require&&require;if(!d&&l)return l(i,!0);if(n)return n(i,!0);var k=new Error("Cannot find module '"+i+"'");throw k.code="MODULE_NOT_FOUND",k}var c=o[i]={exports:{}};e[i][0].call(c.exports,function(t){var o=e[i][1][t];return a(o?o:t)},c,c.exports,t,e,o,r)}return o[i].exports}for(var n="function"==typeof require&&require,i=0;i<r.length;i++)a(r[i]);return a}({1:[function(t,e,o){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(o,"__esModule",{value:!0});var a=function(){function t(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,o,r){return o&&t(e.prototype,o),r&&t(e,r),e}}(),n=function(){function t(){r(this,t);var e=this;e.bookmarkDict={},e.initI18n(),e.registerHotBookmark(),e.registerSearchBar(),chrome.bookmarks.getRecent(8,function(t){var o={};o[e.i18n.txtTitleNewest]=t,e.renderBookmarks($("#J_BookmarkRecent"),o)}),chrome.bookmarks.getTree(function(t){chrome.storage.sync.get("hasNewBookmarkBtn",function(o){var r=o.hasNewBookmarkBtn!==!1;e.recursiveTree(t[0],""),e.renderBookmarks($("#J_BookmarkCtr"),e.bookmarkDict,r),e.bindEvent()})})}return a(t,[{key:"initI18n",value:function(){var t=chrome.i18n;this.i18n={errTitle:t.getMessage("extErrTitle"),errUrl:t.getMessage("extErrUrl"),btnCancel:t.getMessage("extBtnCancel"),btnDelete:t.getMessage("extBtnDelete"),btnUpdate:t.getMessage("extBtnUpdate"),btnSubmit:t.getMessage("extBtnSubmit"),txtNewSite:t.getMessage("extTxtNewSite"),txtsearchResult:t.getMessage("extTitleSearchResult"),txtTitleNewest:t.getMessage("extTitleNewest"),txtTitleSearchResult:t.getMessage("extTitleSearchResult"),txtTitleViews:t.getMessage("extTitleViews")},$(".J_UpdateAddBookmark").val(this.i18n.btnUpdate),$(".J_DeleteAddBookmark").val(this.i18n.btnDelete),$(".J_SubmitAddBookmark").val(this.i18n.btnSubmit),$(".J_CancelAddBookmark").text(this.i18n.btnCancel)}},{key:"registerSearchBar",value:function(){function t(t){chrome.bookmarks.search(t,function(t){var o={};o[e.i18n.txtTitleSearchResult]=t,e.renderBookmarks(a,o),a.show()})}var e=this,o=!1,r=$("#J_SearchBookmark"),a=$("#J_BookmarkSearchList");r.on("input",function(e){o||(o=!0,setTimeout(function(e){var n=r.val();n?t(n):a.hide(),o=!1},1e3))}),$("#J_SearchClose").on("click",function(){a.hide()})}},{key:"registerHotBookmark",value:function(){var t=this,e=chrome.storage.local;$(".bookmark-ctr").on("click","li",function(t){t.target.href&&!function(){var o=t.currentTarget.dataset.id.toString();e.get(o,function(t){var r=t[o],a={};a[o]=1,r&&(a[o]=r+1),e.set(a)})}()}),e.get(null,function(e){var o=[],r=[];for(var a in e)/^\d+$/.test(a)&&o.push({id:a,num:e[a]});o.sort(function(t,e){return e.num-t.num}).slice(0,8).forEach(function(t){r.push(t.id)}),chrome.bookmarks.get(r,function(e){var o={};o[t.i18n.txtTitleViews]=e,t.renderBookmarks($("#J_BookmarkHot"),o)})})}},{key:"recursiveTree",value:function(t,e,o){var r=this;t&&t.children?t.children.length?t.children.forEach(function(t){var o=e;t.children&&(o=e?e+"-"+t.title:t.title),r.recursiveTree(t,o)}):r.recursiveTree(null,e,t):r.bookmarkDict[e]?r.bookmarkDict[e].push(t):e&&(r.bookmarkDict[e]=t?[t]:o)}},{key:"renderBookmarks",value:function(t,e,o){var r="",a=this.i18n.txtNewSite;for(var n in e)r+="<section><h2>"+n+'</h2><ul class="clearfix">',e[n].length?(e[n].forEach(function(t){r+='<li data-id="'+t.id+'" data-parentId="'+t.parentId+'" data-index="'+t.index+'" data-title="'+t.title+'" data-url="'+t.url+'"><i class="J_BookmarkEdit" style="background-image:url(chrome://favicon/'+t.url+')"></i><a target="_blank" class="bm-item" href="'+t.url+'" alt="'+t.url+'">'+t.title+"</a></li>"}),r+=o?'<li class="J_BookmarkNew bookmark-new" data-parentId="'+e[n][0].parentId+'" >'+a+"</li></ul></section>":"</ul></section>"):r+=o?'<li class="J_BookmarkNew bookmark-new" data-parentId="'+e[n].id+'" >'+a+"</li></ul></section>":"</ul></section>";t.html(r)}},{key:"bindEvent",value:function(){var t=this,e=0;$(".J_BookmarkNew").on("click",function(o){var r=$(o.target);e=r.attr("data-parentId"),t.showAddBookmarkPop()}),$(".J_BookmarkEdit").on("click",function(e){var o=$(e.target).parent();t.showAddBookmarkPop(o.attr("data-id"),o.attr("data-title"),o.attr("data-url"))}),$(".J_SubmitAddBookmark").on("click",function(o){var r=$("#J_AddBookmarkPop").find("input[name=title]").val(),a=$("#J_AddBookmarkPop").find("input[name=url]").val();return r.length?/(http|https):\/\/.+/g.test(a)?void chrome.bookmarks.create({parentId:e,title:r,url:a},function(t){location.reload()}):void $("#J_AddBookmarkPop").find(".tips").html(t.i18n.errUrl):void $("#J_AddBookmarkPop").find(".tips").html(t.i18n.errTitle)}),$(".J_DeleteAddBookmark").on("click",function(t){chrome.bookmarks.remove($(".J_DeleteAddBookmark").attr("data-id"),function(t){location.reload()})}),$(".J_UpdateAddBookmark").on("click",function(e){var o=$("#J_AddBookmarkPop").find("input[name=title]").val(),r=$("#J_AddBookmarkPop").find("input[name=url]").val();return o.length?/(http|https):\/\/.+/g.test(r)?void chrome.bookmarks.update($(".J_UpdateAddBookmark").attr("data-id"),{title:o,url:r},function(t){location.reload()}):void $("#J_AddBookmarkPop").find(".tips").html(t.i18n.errUrl):void $("#J_AddBookmarkPop").find(".tips").html(t.i18n.errTitle)}),$(".J_CancelAddBookmark").on("click",function(t){$("#J_AddBookmarkPop").removeClass("show")})}},{key:"showAddBookmarkPop",value:function(t,e,o){$("#J_AddBookmarkPop").addClass("show"),$("#J_AddBookmarkPop").find("input[type=button]").hide(),t?($(".J_UpdateAddBookmark").attr("data-id",t).show(),$(".J_DeleteAddBookmark").attr("data-id",t).show(),$("#J_AddBookmarkPop").find("input[name=title]").val(e),$("#J_AddBookmarkPop").find("input[name=url]").val(o)):($(".J_SubmitAddBookmark").show(),$("#J_AddBookmarkPop").find("input[name=title]").val(""),$("#J_AddBookmarkPop").find("input[name=url]").val(""))}}]),t}();o["default"]=n},{}],2:[function(t,e,o){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}var a=t("./Bookmark"),n=r(a);new n["default"]},{"./Bookmark":1}]},{},[2]);