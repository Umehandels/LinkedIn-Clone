const profileMenu = document.getElementById("profileMenu");
const clickButton = document.querySelector('.js-online');

    clickButton.addEventListener('click',()=>{
      profileMenu.classList.toggle("open-menu");
      });

    document.addEventListener('click',(event)=>{
      if(event.target !== profileMenu && !clickButton.contains(event.target)){
        profileMenu.classList.remove('open-menu');
      }
    });