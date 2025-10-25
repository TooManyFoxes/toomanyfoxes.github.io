var url_string = window.location.href; 
var url = new URL(url_string);
var check = url.searchParams.get("utm_source");

if (check == "chatgpt.com" || check == "triggeraiflag") {
    console.log("Check failed.");
    window.location.replace("https://toomanyfoxes.org/ai");
} else {
    console.log("Passed check.");
}
console.log("nya");
