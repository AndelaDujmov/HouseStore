window.onload = function(){
  const imageList =    document.getElementsByTagName("img");

  for(i=0; i<=imageList.length; i++){
    imageList[i].addEventListener('click',
                                 function(){
                                   let number = this.src;
                                   document.getElementById('image').src = number;
                                 });
  }
}