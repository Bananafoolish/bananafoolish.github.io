const json = '{"ads": ["541060657","739525745","736963480"]}';
const obj = JSON.parse(json);

const main = document.getElementById("main");
const article = document.getElementById("article");
const common_1 = '<div id="menu_shadow" class="left_off"></div><div class="left_off" id="left_menu"><h2>クレジット</h2><p><a href="https://fonts.google.com/noto/specimen/Noto+Sans+JP">Noto Sans Japanese</a> by Google</p><h2>リンク</h2><p><a href="/index.html">トップページ</a></p><p><a href="/article/index.html">記事一覧</a></p></div><header><label class="hamburger" id="hamburger_left"><div></div><div></div><div></div><input type="checkbox" id="left_switch" onclick="left_Click()" for="hamburger_left"></label><label class="hamburger" id="hamburger_right"><div></div><div></div><div></div><input type="checkbox" id="right_switch" onclick="right_Click()" for="hamburger_right"></label></header><script type="text/javascript" src="common/common-data.js"></script>'
const common_2 = '<div class="right_off" id="right_menu"><h2>サイド</h2><label id="for_ads">広告を見る<input type="button" onClick="ads_Click()" for="for_ads"></label></div>';
const common_3 = '<footer><p>特記のない限り、ページ内のコンテンツは全て<a href="http://creativecommons.org/licenses/by-sa/2.0/"> CC BY-SA 2.0</a>の下に利用可能です。</p></footer>';
main.insertAdjacentHTML("afterend", common_1);
article.insertAdjacentHTML("afterend", common_2);
main.insertAdjacentHTML("beforeend", common_3);

const for_ads = document.getElementById("for_ads");

const left_switch = document.getElementById("left_switch");
left_switch.checked = true;
const left_menu = document.getElementById("left_menu");
const menu_shadow = document.getElementById("menu_shadow");

const right_switch = document.getElementById("right_switch");
const right_menu = document.getElementById("right_menu");


const ads_random = Math.floor(Math.random() * obj.ads.length);
const ads_html = '<iframe src="https://turbowarp.org/' + obj.ads[ads_random] + '/embed/?interpolate&hqpen" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe><a href ="https://scratch.mit.edu/projects/' + obj.ads[ads_random] + '">リンク</a>';

function left_Click() {
	if (left_switch.checked) {
		left_menu.classList.add("left_off");
		menu_shadow.classList.add("left_off");
	} else {
		left_menu.classList.remove("left_off");
		menu_shadow.classList.remove("left_off");
	}
}

function right_Click() {
	if (right_switch.checked) {
		right_menu.classList.add("right_off");
	} else {
		right_menu.classList.remove("right_off");
	}
}

function ads_Click() {
	for_ads.innerHTML = ads_html;
}
