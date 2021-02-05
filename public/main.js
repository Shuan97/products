let btn = document.querySelector("#btn")
btn.addEventListener('click', () => {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            JSON.parse(xmlHttp.responseText).forEach(el => console.log(el));
        }
    }
    xmlHttp.open("GET", 'http://localhost:7000/items', true); // true for asynchronous 
    xmlHttp.send(null);

})

console.log("Hello world!")