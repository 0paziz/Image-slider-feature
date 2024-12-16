const images=[

    'images/1.jpg',
    'images/2.jpg',
    'images/3.jpg',
    'images/4.jpg'
    
]


const Sliderimages= document.getElementById("Sliderimages");
const nextbtn= document.getElementById("next");
const prevbtn=document.getElementById("prev");
let currentIndex=0;


    



function updateImage() { 
    Sliderimages.src = images[currentIndex]; 
  } 
   
  // Show the previous image 
  prevbtn.addEventListener('click', function prev()  { 
    currentIndex = (currentIndex - 1 + images.length) % images.length; 
    updateImage(); 
  }); 
   
  // Show the next image 
  nextbtn.addEventListener('click', function next() { 
    currentIndex = (currentIndex + 1) % images.length; 
    updateImage(); 
  }); 

  setInterval(() => { 
    currentIndex = (currentIndex + 1) % images.length; 
    updateImage(); 
  }, 3000);