var date = new Date();

var daynamelist = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var monthlist = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var daynumber = date.getDate();
//var dayname = daynamelist[daynumber];
var month = monthlist[date.getMonth()];
var year = date.getFullYear();
var fulldate = month + ' ' + daynumber + ', ' + year;
//var header = "<div id='topbar'><div id='home'><div id='date'></div><div id='name'><a href='index.html'>Bernard Mendez</a></div><div class='mobile2 links'><a href='about.html'>About</a><a href='contact.html'>Contact</a><a href='employers.html'>Employers</a></div></div></div><div id='extras'><a href='favourites.html'>Favourites</a><a href='projects.html'>Projects</a><a href='publications.html'>Publications</a></div>";

var header = "<div id='topbar'><div id='home'><div id='date'></div><div id='name'><a href='index.html'>Bernard Mendez</a></div><div class='mobile2 links'><a href='#publications'>Publications</a><a href='#about'>About</a><a href='#contact'>Contact</a></div></div></div>";


var entry = "<button class='article' onclick='newtab(this.value)'><div class='description'><div class='title'>title</div><div class='author'>author</div><div class='summary'>summary</div></div><div class='img'></div></button>";

var apnews = 'https://apnews.com';
var hodinkee = 'https://www.hodinkee.com';
var mit = 'https://www.technologyreview.com';
var linkedin = 'https://www.linkedin.com/in/bernardmendez/';
var twitter = 'https://twitter.com/BernardMendezDB';
var github = 'https://github.com/bernardmendez';
var dailybruin = 'https://dailybruin.com/author/bernard-mendez/';
var footer = "<div id='footerlinks' class='footercagtegories'><div class='footertitle'>Unaffiliated Partners</div><div class='line'></div><a onclick='newtab(apnews)' href='javascript:void(0)'>Associated Press</a><a onclick='newtab(hodinkee)' href='javascript:void(0)'>Hodinkee</a><a onclick='newtab(mit)' href='javascript:void(0)'>Mit Tech Review</a></div><div id='footersocialmedia' class='footercagtegories'><div class='footertitle'>Social Media</div><div class='line'></div><a onclick='newtab(linkedin)' href='javascript:void(0)'>LinkedIn</a><a onclick='newtab(twitter)' href='javascript:void(0)'>Twitter</a><a onclick='newtab(github)' href='javascript:void(0)'>Github</a><a onclick='newtab(dailybruin)' href='javascript:void(0)'>Daily&nbspBruin</a></div><div id='footerdescription' class='footercagtegories'><div class='footertitle'>Contact</div><div class='line'></div><a href='contact.html'>Contact Page</a></div><div id='footerdescription' class='footercagtegories'><div class='footertitle'>Description</div><div class='line'></div>Copyright 2019-2019 Bernard H. Mendez All Rights Reserved</div>";

var atwentry = "<button class='article img' onclick='newtab(this.value)' href='javascript:void(0)'><div class='title'>title</div><div class='shortline'></div><div class='author'>author</div><div class='text'>text</div></button>";


function newtab(link) {
window.open(link, '_blank')
}

function articleshudder() {
var temp = link.getElementsByClassName('highlight')[0]
temp.style.backgroundPosition = 'left top';
temp.style.color = 'black';
}
