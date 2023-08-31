/**
 * We need to make this bit of code known as being a Chrome Extension
 * so it can be run in the browser and affect our webpage... how?
 * 
 * We do so using the manifest.json config file. This is how we let
 * our browser know that this is a chrome extension.
 * 
 * REQUIRED fields are:
 * -manifest_version
 * -name
 * -version
 * -content_scripts 
 * 
 * We can add many more fields to make our Chrome Extension more
 * customizable and fun. 
 */

/**
 * 
 * Other Features we can add:
 * 
 *  -animate text using jQuery
 *  -cycle through multiple images instead of just one
 *  -have the text change colors
 * 
 *  -use event listeners & callbacks
 *  -use setTimeout & setInterval
 * 
 *  -Unsplash API w/ and without OAuth
 * 
 *  -play around with jQuery & vanilla JS/HTML/CSS a lot more
 * 
 */


const content = $('#content');

const contentsParent = content.parent();
let pic = $("<img>");

let URL = chrome.runtime.getURL("tiger.jpg")
pic.attr("src", URL)

let text = $("<p>SIMPLE TEXT TESTING</p>");
text.addClass('beautText')

text.css({
    "color": "green",
    "font-size": "large",
    "border": "1px solid red",
})

// contentsParent.prepend(pic);
content.remove();
contentsParent.prepend(text); 

// AJAX request (picture)

let newPic = $("<img>");

newPic.css({
    "width": "300px",
    "height": "auto"
})

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

$.get("https://picsum.photos/v2/list", function(res) {
    newPic.attr("src", 
    res[getRandomArbitrary(0, res.length-1)].download_url);
})

contentsParent.append(newPic)



// const b = $('div').click(function() {
//     alert('A div was clicked!');
// });

// b.css({
//     "border": "2px solid blue"
// })

// contentsParent.append(b);


// const contents = document.getElementById('contents')
// const contentsParent = contents.parentNode
// let image = document.createElement("img")

// // let URL = chrome.runtime.getURL("code.png")
// // image.src=URL

// contentsParent.prepend(image)
// contents.parentNode.removeChild(contents)



