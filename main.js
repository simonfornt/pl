const images = ['imge1', 'image2', 'image3'];

 let currentIndex = 0;

 for(var i = 0; i < images.length; i++){
   setInterval(()=>{
    currentIndex++;
   },1000);

 }

 console.log(currentIndex);