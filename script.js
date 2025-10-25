var url_string = window.location.href; 
var url = new URL(url_string);
var check = url.searchParams.get("utm_source");

if (check = "chatgpt.com") {
    window.location.replace("https://toomanyfoxes.org/ai");
};

console.log("nya");
