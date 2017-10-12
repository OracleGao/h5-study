slogans = ["德式经典设计，简洁流畅。",
"车身比例协调，线条流畅。",
"老哥，稳！",
"66666666666",
"简洁！实用！耐用！",
"全方位6安全气囊",
"犀利飞鹰式前大灯",
"飞机游艇刷起来",
"车头大气稳重。",
"车身侧面线条流畅。",
"463L超大后备箱，行李携带便利。",
"说走咱就走啊！",
"空调过滤98%的PM2.5，车内空气质量健康环保。",
"低转高扭，适合城市道路驾驶。",
"档位清晰，跟发动机完美匹配。",
"安全可靠！",
"大品牌值得信赖！",
"老司机在哪里？",
"扎心了老铁",
"同级最全面的电子稳定系统。",
"定制化导航指引清晰。",
"智能提醒，随时掌握车辆信息。",
"老司机带带我",
"这个style够free",
"大家好，给大家介绍一下，这是我女朋友@骏派A50",
"功能全面",
"车身结构合理",
"智能炫酷"];
var barrageInterval = window.setInterval(function() {
	var props = {
		top: getRandom($(window).height() - parseInt($(".barrage-screen div").css("line-height"))),
		slogan: slogans[getRandom(slogans.length)],
		color: getRandomColor()
	};
	addBullet(props);
}, 1500);

function addBullet(props) {
	var bullet = $("<div></div>");
	bullet.text(props.slogan);
	bullet.css("color", props.color);
	bullet.css("top", props.top + "px");
	bullet.css("left", ($(window).width() + 10) + "px");
	bullet.animate({
        left: "-" + $(window).width() + "px"
    }, 10000, function() {
        $(this).remove();
    });
	$(".barrage-screen").append(bullet);
}

function getRandomColor() {
    return '#' + (function(h) {
        return new Array(7 - h.length).join("0") + h
    })((Math.random() * 0x1000000 << 0).toString(16))
}
function getRandom(n){
    return Math.floor(Math.random()*n + 1)
}