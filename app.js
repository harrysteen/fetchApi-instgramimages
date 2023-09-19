const dom = document.querySelector(".grid");
  
const url = "https://jsonplaceholder.typicode.com/photos";
let imageCount = 9;

function displayImages(data) {
    for (let i = 0; i < imageCount; i++) {
        const thumbnailUrl = data[i].thumbnailUrl;

        const image = document.createElement("img");
        image.src = thumbnailUrl;

        dom.appendChild(image);
    }
}

function refreshImages() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayImages(data);
            imageCount += 9;  
        })
        .catch(error => {
            console.log("Error fetching data:", error);
        });
}

 
refreshImages();



