var url_string = window.location.href; 
var url = new URL(url_string);
var check = url.searchParams.get("utm_source");
console.log(url_string);
console.log(url);
console.log(check);

//pls do not hate on my terrible js T-T

if (check == "chatgpt.com" || check == "triggeraiflag") {
    console.log("Check failed.");
    window.location.replace("https://toomanyfoxes.org/ai");
} else {
    console.log("Passed check.");
}
console.log("nya");
