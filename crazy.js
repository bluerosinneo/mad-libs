function talkCrazyToMe(){
    let animal = prompt("Name a kind of animal");
    let place = prompt("Name a place");
    let food = prompt("Name a food");
    // document.write("Here is a story for you!<br>");  
    creatP("The inconsiderate " + animal + " strode proudly through " + place + ", dropping " + food + " everywhere.");
}

function creatP(story){
    var storyP = document.createElement("p");
    storyP.setAttribute('id', 'theStory');
    var textNode = document.createTextNode(story);
    storyP.appendChild(textNode);

    var element = document.getElementById("crazyStory");
    
    
    // var theButton = document.getElementById("talkCrazyButton");
    
    // element.parentNode.removeChild(theButton);

    var elementToAdd = document.getElementById("crazyStory");
    elementToAdd.appendChild(storyP);
}