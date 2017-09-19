var imageURLs = [
	"http://www.thebusinessofsports.com/wp-content/uploads/2011/03/fcb-300x300.jpg"
	,"http://lofrev.net/wp-content/photos/2014/08/Tottenham-Hotspur-FC-Logo-300x300.png"
	,"http://www.itsroundanditswhite.co.uk/wp-content/uploads/2017/03/real-madrid-logo-300x300.png"
	,"http://www.springbokopus.co.za/images/opus-titles/arsenal-logo.png"
	,"http://getbein.beinsports.com/nz/wp-content/uploads/2015/12/chelsea-300x300.png"
	,"http://cdn-teamtalk.365.co.za/content/uploads/2015/10/06102145/mcfc1.png"
	,"https://www.vintagefootballshirts.com/uploads/teams/images/manchester-united-118.jpg"
	,"http://1.bp.blogspot.com/_S9KbaOLmZ-I/StXFEOGRhnI/AAAAAAAAAAw/NWo1gLQZZz8/s320/fc_bayern_munich_logo-300x300.png"
	,"http://cms.ukintpress.com/UserFiles/Stadia%20News/2013/l73371-borussia-dortmund-logo-68362.gif"
	,"https://i.pinimg.com/736x/72/17/e4/7217e41e7854d6227120c1bcef979457--juventus.jpg"
	,"http://www.richestfootballclubs.com/wp-content/uploads/2012/12/AC-Milan-300x300.png"
	,"https://lol.gamepedia.com/media/lol.gamepedia.com/3/33/PSG-300x300.png"
	,"https://classicfootballshirtscollection.com/wp-content/uploads/2017/05/Inter_Milan-badge-300x300.png"
	,"http://www.stampettes.com/stamp-images/sports_england_liverpool-football-club.png"
];
function removeButton() {
    var elem = document.getElementById('clickMe');
    elem.parentNode.removeChild(elem);
    return false;
}
function getImage() {
	var num = Math.floor(Math.random() * 14);
	document.getElementById("team").src = imageURLs[num];
}