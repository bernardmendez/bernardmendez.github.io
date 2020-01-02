var date = new Date();

daynamelist = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
monthlist = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var daynumber = date.getDay() - 2;
var dayname = daynamelist[daynumber];
var month = monthlist[date.getMonth()];
var year = date.getFullYear();
var fulldate = dayname + ' ' + month + ' ' + daynumber + ', ' + year;

var header = "<div id='date'></div><div id='topbar'><div id='home'><div id='name'><a href='index.html'>Bernard<br>Mendez</a></div><div id='links'><a href='about.html'>About</a><a href='contact.html'>Contact</a><a href='employers.html'>Employers</a></div></div></div><div id='extras'><a href='favourites.html'>favourites</a><a href='projects.html'>projects</a><a href='publications.html'>publications</a></div>";

var entry = "<a class='article' onclick='newtab(this.value)' href='javascript:void(0)'><div class='description'><div class='title'>title</div><div class='line0'></div><div class='author'>author</div><div class='summary'>summary</div></div><div class='img'></div></a>";

var apnews = 'https://apnews.com';
var hodinkee = 'https://www.hodinkee.com';
var mit = 'https://www.technologyreview.com';
var linkedin = 'https://www.linkedin.com/in/bernardmendez/';
var twitter = 'https://twitter.com/BernardMendezDB';
var github = 'https://github.com/bernardmendez';
var dailybruin = 'https://dailybruin.com/author/bernard-mendez/';
var footer = "<div id='footerlinks' class='footercagtegories'><div class='footertitle'>Unaffiliated Partners</div><div class='line'></div><a onclick='newtab(apnews)' href='javascript:void(0)'>Associated Press</a><a onclick='newtab(hodinkee)' href='javascript:void(0)'>Hodinkee</a><a onclick='newtab(mit)' href='javascript:void(0)'>Mit Tech Review</a></div><div id='footersocialmedia' class='footercagtegories'><div class='footertitle'>Social Media</div><div class='line'></div><a onclick='newtab(linkedin)' href='javascript:void(0)'>LinkedIn</a><a onclick='newtab(twitter)' href='javascript:void(0)'>Twitter</a><a onclick='newtab(github)' href='javascript:void(0)'>Github</a><a onclick='newtab(dailybruin)' href='javascript:void(0)'>Daily&nbspBruin</a></div><div id='footerdescription' class='footercagtegories'><div class='footertitle'>Contact</div><div class='line'></div><a href='contact.html'>Contact Page</a></div><div id='footerdescription' class='footercagtegories'><div class='footertitle'>Description</div><div class='line'></div>Copyright 2019-2019 Bernard H. Mendez All Rights Reserved</div>";

var atwentry = "<a class='atw img' onclick='newtab(value)' href='javascript:void(0)'><div class='title'>title</div><div class='shortline'></div><div class='author'>author</div><div class='org'>org</div></a>";


function newtab(link) {
setTimeout(function() {
window.open(link, '_blank')
}, 10);
}
