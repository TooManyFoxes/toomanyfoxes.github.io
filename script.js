var url_string = window.location.href; 
var url = new URL(url_string);
var check = url.searchParams.get("utm_source");
console.log(url_string);
console.log(url);
console.log(check);

if (check == "chatgpt.com" || check == "triggeraiflag") {
    console.log("Check failed.");
} else {
    console.log("Passed check.");
}
console.log("nya");
