const marqueeContainer1=document.getElementById("console-music-title"),marqueeContent1=document.getElementById("console-music-title-text"),marqueeContainer2=document.getElementById("console-music-author"),marqueeContent2=document.getElementById("console-music-author-text");var userInfo,ipAddress="",frameCount=0,startTime=performance.now();let animationId;var winbox="";window.onload=function(){var e=document.querySelector("#set-switch-music input");function t(){var e=document.createElement("link");e.id="dodododooocss",e.rel="stylesheet",e.type="text/css",e.href="https://dodododooo.com/mplayer2/remote/css/app-mplayer.css",(document.head||document.getElementsByTagName("head")[0]).appendChild(e);var t=document.createElement("script");t.id="dodododooojs",t.type="text/javascript",t.src="https://dodododooo.com/mplayer2/remote/js/app-mplayer.js",document.body.appendChild(t)}e.checked&&t(),e.addEventListener("change",(()=>{e.checked?t():function(){var e=document.getElementById("dodododooocss");e&&document.head.removeChild(e);var t=document.getElementById("dodododooojs");t&&document.body.removeChild(t);var a=document.getElementById("mplayer");a&&document.body.removeChild(a)}()})),null!=localStorage.getItem("notice_state")&&(set_notice.checked="true"==localStorage.getItem("notice_state")),null!=localStorage.getItem("fps_state")&&(set_fps.checked="true"==localStorage.getItem("fps_state")),null!=localStorage.getItem("scroll_state")&&(set_scroll.checked="true"==localStorage.getItem("scroll_state")),null!=localStorage.getItem("lrc_state")&&"true"==localStorage.getItem("lrc_state")&&document.getElementById("lrcSwitchBtn").click(),null!=localStorage.getItem("system_theme_state")&&(set_sys_theme.checked="true"==localStorage.getItem("system_theme_state")),null!=localStorage.getItem("theme-color")&&ctrl.changeThemeColor(localStorage.getItem("theme-color")),null!=localStorage.getItem("aside-direction")&&"right"==localStorage.getItem("aside-direction")&&ctrl.asideContentDirection(),null!=saveToLocal.get("theme")&&("light"==saveToLocal.get("theme")?document.querySelector("#set-theme-light input").checked=!0:document.querySelector("#set-theme-dark input").checked=!0),console.log("\n %c GC音频控制器 v1.3.2 参星阁出品 %c https://blog.cancin.cn \n","color: #fadfa3; background: #030307; padding:5px 0;","background: #fadfa3; padding:5px 0;"),console.log(`Welcome to:\n%c参星阁:%c https://blog.cancin.cn%c\nThis site has been running stably for %c${Math.round(((new Date).getTime()-new Date("2023/01/04 20:53:58").getTime())/864e5)} %c days`,"border:1px #888 solid;border-right:0;border-radius:5px 0 0 5px;padding: 5px 10px;color:white;background:#4976f5;margin:10px 0","border:1px #888 solid;border-left:0;border-radius:0 5px 5px 0;padding: 5px 10px;","","color:#4976f5","")};var ctrl={GlobalTheme(e){console.log(`changed to ${e.matches?"dark":"light"} mode`),e.matches?(activateDarkMode(),document.querySelector("#set-theme-dark input").checked=!0,saveToLocal.set("theme","dark",2)):(activateLightMode(),document.querySelector("#set-theme-light input").checked=!0,saveToLocal.set("theme","light",2))},switchDarkMode(){"light"===("dark"===document.documentElement.getAttribute("data-theme")?"dark":"light")?document.getElementById("set-theme-dark").click():document.getElementById("set-theme-light").click(),"function"==typeof utterancesTheme&&utterancesTheme(),"function"==typeof changeGiscusTheme&&changeGiscusTheme(),"object"==typeof FB&&window.loadFBComment(),"function"==typeof runMermaid&&window.runMermaid()},consoleBackBtn(){var e=document.querySelectorAll(".item-show");if(e.length>0)if(1==e.length)switch(e[0].id){case"console-music-item-mini":break;case"console-music-item-main":ctrl.hideConsole();break;case"console-music-item-list":e[0].classList.remove("item-show"),document.getElementById("console-music-item-main").classList.add("item-show");break;case"console-songsheet-item-list":e[0].classList.remove("item-show"),document.getElementById("console-music-item-list").classList.add("item-show");break;default:console.log("异常情况")}else e[e.length-1].classList.remove("item-show")},lrcShowHide(){var e=document.querySelector(".global-music .aplayer-lrc"),t=document.getElementById("lrcItem");e&&t&&(e.classList.contains("aplayer-lrc-hide")?(e.classList.remove("aplayer-lrc-hide"),t.classList.add("on"),localStorage.setItem("lrc_state",!0),set_notice.checked&&tools.showMessage("桌面歌词已打开","success",2)):(e.classList.add("aplayer-lrc-hide"),t.classList.remove("on"),localStorage.setItem("lrc_state",!1),set_notice.checked&&tools.showMessage("桌面歌词已关闭","success",2)))},hideAsideBtn(){const e=document.documentElement.classList;e.contains("hide-aside")?(saveToLocal.set("aside-status","show",2),document.getElementById("asideItem").classList.remove("on"),set_notice.checked&&tools.showMessage("侧边栏已启用","success",2)):(saveToLocal.set("aside-status","hide",2),document.getElementById("asideItem").classList.add("on"),set_notice.checked&&tools.showMessage("侧边栏已隐藏","success",2)),e.toggle("hide-aside")},settingsOpen(){alert("开发中...敬请期待！")},musicSwitch(){var e=document.querySelector(".global-music").aplayer.audio.paused,t=document.querySelector("#music-Switch i"),a=document.querySelector("#music-ctrl-btn-center i");e?(t.classList.remove("icon-play"),t.classList.add("icon-pause"),a.classList.remove("icon-play"),a.classList.add("icon-pause")):(t.classList.remove("icon-pause"),t.classList.add("icon-play"),a.classList.remove("icon-pause"),a.classList.add("icon-play")),document.querySelector(".global-music").aplayer.toggle()},musicForward(){document.querySelector(".global-music").aplayer.skipForward(),ctrl.getMusicInfo()},musicBackward(){document.querySelector(".global-music").aplayer.skipBack(),ctrl.getMusicInfo()},getMusicInfo(){var e=document.querySelector(".global-music").aplayer.list.index,t=document.querySelector(".global-music").aplayer.list.audios[e].cover,a=document.querySelector(".global-music").aplayer.list.audios[e].author,o=document.querySelector(".global-music").aplayer.list.audios[e].title;document.getElementById("console-music-cover").innerHTML="<img src='"+t+"'>",document.querySelector("#console-music-item-main .cover-shadow").style.background="url('"+t+"') center center / 100% 100% no-repeat",document.getElementById("console-music-title-text").innerHTML=o,document.getElementById("console-music-author-text").innerHTML=a,ctrl.marqueeMusicInfo()},refreshProgress(){var e=document.querySelector(".global-music").aplayer.audio.currentTime;isNaN(e)&&(e=0);var t=tools.secToTime(e),a=document.querySelector(".global-music").aplayer.audio.duration;isNaN(a)&&(a=0);var o=tools.secToTime(a);document.getElementById("progress-low-btn").innerHTML=t,document.getElementById("progress-high-btn").innerHTML=o,document.getElementById("p_bar").style.transform="translateX(-"+100*(1-e/a)+"%)"},importMusicList(){var e,t=document.querySelector(".global-music").aplayer.list.audios;for(let a=0;a<t.length;a++)e=document.getElementById("console-music-list").innerHTML,document.getElementById("console-music-list").innerHTML=e+"<li class='music-list-item'><div class='list-music-info1'><a class='list-music-id' data-pjax-state=''>"+(a+1)+"</a><a class='list-music-state' data-pjax-state=''><i class='blogfont icon-waveform'></i></a></div><div class='list-music-info2'><a class='list-music-title' data-pjax-state=''>"+t[a].name+"</a><a class='list-music-author' data-pjax-state=''>&nbsp;-&nbsp;"+t[a].artist+"</a></div></li>"},changeMusicList(e,t){var a=document.querySelector(".global-music").aplayer,o="https://metingjs.cancin.cn/api?server="+t+"&type=playlist&id="+e;a.list.clear(),fetch(o).then((e=>e.json())).then((e=>{newSongsheetLen=e.length,console.log("本专辑有"+newSongsheetLen+"首歌曲"),a.list.add(e)})).catch((e=>console.error(e)))},JayMusicList(){var e=document.querySelector(".global-music").aplayer;e.list.clear(),console.log("本专辑有"+JaySongsheet.length+"首歌曲"),e.list.add(JaySongsheet)},JokerMusicList(){var e=document.querySelector(".global-music").aplayer;e.list.clear(),console.log("本专辑有"+QianSongsheet.length+"首歌曲"),e.list.add(QianSongsheet)},musicState(){var e=document.querySelector(".global-music").aplayer.audio.paused,t=document.querySelector("#music-Switch i"),a=document.querySelector("#music-ctrl-btn-center i");e?(t.classList.remove("icon-pause"),t.classList.add("icon-play"),a.classList.remove("icon-pause"),a.classList.add("icon-play")):(t.classList.remove("icon-play"),t.classList.add("icon-pause"),a.classList.remove("icon-play"),a.classList.add("icon-pause"))},clearConsoleMusicList(){document.getElementById("console-music-list").innerHTML=""},addMusicToList(e,t,a,o,s){var c=document.querySelector(".global-music").aplayer;ctrl.clearConsoleMusicList(),c.list.add([{title:e,author:t,url:a,pic:o,lrc:s}]),c.list.switch(c.list.audios.length-1)},mcToggleMusic(e,t){const a=document.getElementById(e);if(a){const e=a.querySelector(".content");if(!e.classList.contains("canplay")){const o=a.querySelector(".audio");o.src=t,o.addEventListener("loadeddata",(function t(){e.classList.add("canplay"),o.removeEventListener("loadeddata",t)}))}const o=a.querySelector(".audio");o.paused?o.play():o.pause()}},mcRefreshTime(e){var t=document.getElementById(e);if(t){var a=t.querySelector(".audio"),o=a.currentTime+.5,s=a.duration,c=tools.secToTime(o),i=tools.secToTime(s);t.querySelector(".time").innerHTML=`${c}&nbsp;/&nbsp;${i}`,t.querySelector(".mc-progressbar").style.transform="translateX(-"+100*(1-o/s)+"%)"}},setMediaMetadata:function(e,t){const a=e.list.audios[e.list.index],o=a.cover||"./img/avatar.webp",s=document.querySelector(".global-music").querySelector(".aplayer-lrc-current").textContent;let c,i;"mediaSession"in navigator?(t&&s?(c=s,i=`${a.artist} | ${a.name}`):(c=a.name,i=a.artist),navigator.mediaSession.metadata=new MediaMetadata({title:c,artist:i,album:a.album,artwork:[{src:o,sizes:"96x96",type:"image/jpeg"},{src:o,sizes:"128x128",type:"image/jpeg"},{src:o,sizes:"192x192",type:"image/jpeg"},{src:o,sizes:"256x256",type:"image/jpeg"},{src:o,sizes:"384x384",type:"image/jpeg"},{src:o,sizes:"512x512",type:"image/jpeg"}]})):(console.log("当前浏览器不支持 Media Session API"),document.title=`${a.name} - ${a.artist}`)},setupMediaSessionHandlers:function(e){"mediaSession"in navigator&&(navigator.mediaSession.setActionHandler("play",(()=>{e.play()})),navigator.mediaSession.setActionHandler("pause",(()=>{e.pause()})),navigator.mediaSession.setActionHandler("seekbackward",null),navigator.mediaSession.setActionHandler("seekforward",null),navigator.mediaSession.setActionHandler("previoustrack",(()=>{e.skipBack()})),navigator.mediaSession.setActionHandler("nexttrack",(()=>{e.skipForward()})),navigator.mediaSession.setActionHandler("seekto",(t=>{t.fastSeek&&"fastSeek"in e.audio?e.audio.fastSeek(t.seekTime):e.audio.currentTime=t.seekTime})),e.on("loadeddata",(()=>{ctrl.setMediaMetadata(e,!1)})),e.on("play",(()=>{"mediaSession"in navigator&&(navigator.mediaSession.playbackState="playing",ctrl.setMediaMetadata(e,!0))})),e.on("pause",(()=>{"mediaSession"in navigator&&(navigator.mediaSession.playbackState="paused",ctrl.setMediaMetadata(e,!1))})),e.on("timeupdate",(()=>{ctrl.setMediaMetadata(e,!0)})))},marqueeMusicInfo(){if(marqueeContent1.offsetWidth>marqueeContainer1.offsetWidth){var e=marqueeContent1.offsetWidth/marqueeContainer1.offsetWidth*6;marqueeContent1.style.animation="marquee-1 "+e+"s linear infinite"}else marqueeContent1.style.animation="";if(marqueeContent2.offsetWidth>marqueeContainer2.offsetWidth){e=marqueeContent2.offsetWidth/marqueeContainer2.offsetWidth*6;marqueeContent2.style.animation="marquee-1 "+e+"s linear infinite"}else marqueeContent2.style.animation=""},initConsoleState(){var e=document.querySelector(".aplayer > .aplayer-lrc-hide"),t=document.querySelector(".aplayer > .aplayer-lrc");null===e&&null!=t?document.getElementById("lrcItem").classList.add("on"):document.getElementById("lrcItem").classList.remove("on"),"hide"===saveToLocal.get("aside-status")?document.getElementById("asideItem").classList.add("on"):document.getElementById("asideItem").classList.remove("on"),ctrl.getMusicInfo();var a=document.querySelector(".global-music").aplayer.audio.volume;document.getElementById("v_bar").style.transform="translateX(-"+100*(1-a)+"%)","light"==saveToLocal.get("theme")?document.querySelector("#set-theme-light input").checked=!0:document.querySelector("#set-theme-dark input").checked=!0}};