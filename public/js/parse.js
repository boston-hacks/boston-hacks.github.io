// live
// Parse.initialize("TpddRNEVg1gw0BJmle7yrRgiLYqAbLLJQN1mJTDC", "sxYXMbpj2jpjHX7I20HQpAGyVjQpajfIwZox22WB");
// dev
Parse.initialize("On3EyoDBIBxbSbnMqNtLoYQ6dukFbIqdEgmNJbJH", "AMgaThihsjIc6QwZpoHxBAfynPbhQIgVaf4KYhl6");

var announcements = Parse.Object.extend("Announcements");
var query = new Parse.Query(announcements);
var box = $(".parse > div")[0];
var now = new Date();
console.log(now);



function cleanDate(ugly) {
    var ms = now.getTime() - ugly.getTime(),
        months = Math.floor((ms / 1000 / 60 / 60 / 24 / 7 / 30)),
        weeks = Math.floor((ms / 1000 / 60 / 60 / 24 / 7 % 30)),
        days = Math.floor((ms / 1000 / 60 / 60 / 24 % 7)),
        hours = Math.floor((ms / 1000 / 60 / 60 % 24)),
        minutes = Math.floor((ms / 1000 / 60) % 60),
        seconds = Math.floor((ms / 1000) % 60);

    if (months) {
        return (months > 1) ? (months + " months ago.") : (months + " month ago.");
    } else if (weeks) {
        return (weeks > 1) ? (weeks + " weeks ago.") : (weeks + " week ago.");
    } else if (days) {
        return (days > 1) ? (days + " days ago.") : (days + " day ago.");
    } else if (hours) {
        return (hours > 1) ? (hours + " hours ago.") : (hours + " hour ago.");
    } else if (minutes) {
        return (minutes > 1) ? (minutes + " minutes ago.") : (minutes + " minute ago.");
    } else if (seconds) {
        return (seconds > 1) ? (seconds + " seconds ago.") : (seconds + " second ago.");
    } else {
        return " ";
    }
}

// window.setInterval(function(){

    query.include("parent");
    query.find({
        success: function(events) {
            console.log(events);
            var html;
            box.innerHTML = "h";
            for (var i = events.length - 1; i >= 0; i--) {
                console.log(i);
                var event = events[i],
                    title = event.get("title"),
                    date = event.get("createdAt"),
                    description = event.get("description");
                html +=
                    "<h2>" + title + "</h2>" +
                    "<p>" + description + "</p>" +
                    "<p>" + cleanDate(date) + "</p>";
                if (i == 0) {
                    box.innerHTML += html;
                }
            }

        },
        error: function(error) {
            alert(error);
        }
    });
// },3000);