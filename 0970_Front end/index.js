function appendImageElement(keyword, index){
  const ImgElem  = document.createElement('img');
  ImgElem.src = 'https://source.unsplash.com/400x225/?' + keyword + '&sig=' + index;
  
  const galleryElem = document.querySelector('.gallery');
  galleryElem.appendChild(ImgElem);
}

function removePhotoes(){
  const galleryElem = document.querySelector('.gallery');
  galleryElem.innerHTML = '';
}
function searchPhoes(event){
  const keyword = event.target.value;
  

  if(event.key = 'Enter' && keyword){
    removePhotoes();
    
    for (let i = 1; i<=9 ; i++ ){
      appendImageElement(keyword,i);
    }
  }

}


function run(){

  const inputElement = document.querySelector('input');
  inputElement.addEventListener('keydown', searchPhoes);

}

run();