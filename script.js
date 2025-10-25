var url_string = window.location.href; 
var url = new URL(url_string);
var check = url.searchParams.get("utm_source");
console.log(check);

if (check == "chatgpt.com") {
    window.location.replace("https://toomanyfoxes.org/ai");
    console.log("Check failed.");
} else {
    console.log("Passed check.");
}

console.log("nya");
