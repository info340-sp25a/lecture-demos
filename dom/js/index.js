'use strict';

/* STATE */

const songArray = [
  { artist: "Queen", title: "Don't Stop Me Now", youtubeUrl: "https://www.youtube.com/watch?v=HgzGwKwLmgM" },
  { artist: "David Bowie", title: "Starman", youtubeUrl: "https://www.youtube.com/watch?v=rpO1U-nEgRU"
  },
  { artist: "Taylor Swift", title: "Cruel Summer", youtubeUrl: "https://www.youtube.com/watch?v=ic8j13piAhQ"
  },
  { artist: "Queen", title: "Bohemian Rhapsody", youtubeUrl: ""}
];

let isSmallPuppy = true;


const h1ELem = document.querySelector('h1');
h1ELem.textContent = "New Title, Who Dis?";
const headerElem = document.querySelector('header');
headerElem.classList.add('bg-success');

// const puppyImg = document.querySelector('img');
// puppyImg.src = "img/husky.jpg";
// puppyImg.alt = "a grown husky";


//input: {artist, title, youtubeUrl}
function createSongListItem(songObj){

  //add a new item to the list
  const newAnchor = document.createElement('a');
  newAnchor.textContent = songObj.artist + " - " + songObj.title;
  newAnchor.href = songObj.youtubeUrl;
  const newLi = document.createElement('li');
  newLi.appendChild(newAnchor);
  
  return newLi; //return to use elsewhere;
}

function renderSongList(aSongArray) {
  //[{},{},{}] => [<>,<>,<>]
  const songItemElemArray = aSongArray.map(createSongListItem);

  const songListElem = document.querySelector('#dataSection ol');

  songListElem.innerHTML = '';  //clear old
  for(const songItem of songItemElemArray){ //recreate
    songListElem.appendChild(songItem);  
  }

  // for(const songObj of aSongArray){
  //   const songLi = createSongListItem(songObj);
  //   songListElem.appendChild(songLi);  
  // }
}

renderSongList(songArray);

const puppyButton = document.querySelector('#puppySection button');

puppyButton.addEventListener('click', function(event){
  console.log("You clicked me!");

  //change the status!
  isSmallPuppy = !isSmallPuppy; //boolean toggle

  //update the display
  if(isSmallPuppy){
    const puppyImg = document.querySelector('img');
    puppyImg.src = "img/puppy.jpg";
    puppyImg.alt = "a cute puppy";
  } 
  else { //big puppy
    const puppyImg = document.querySelector('img');
    puppyImg.src = "img/husky.jpg";
    puppyImg.alt = "a grown husky";
  }

  //console.log(event);

});



const formButton = document.querySelector('#formSection button');

formButton.addEventListener('click', function(event){
  event.preventDefault();

  //1. UPDATE STATE
  const artistInput = document.querySelector('#artistInput');
  const artistValue = artistInput.value;

  const titleInput = document.querySelector('#titleInput');
  const titleValue = titleInput.value;

  const newSongObj = {artist: artistValue, title:titleValue, youtubeUrl: ''};
  console.log(newSongObj);
  songArray.push(newSongObj);

  //2. RERENDER CONTENT
  renderSongList(songArray);


})
