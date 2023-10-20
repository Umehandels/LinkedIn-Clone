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

const sideAvtivity = document.getElementById('sidebarActivity');
let moreLink = document.querySelector('.js-show-more');
let showMore='';
  moreLink.addEventListener('click',()=>{
    sideAvtivity.classList.toggle('open-activity');

    if(sideAvtivity.classList.contains('open-activity')){
      showMore =`<p id="showMoreLink" class="js-show-more">Show Less <b>-</b></p>`;
      
    }else if(sideAvtivity.classList.contains('sidebar-activity')){
      showMore=`<p id="showMoreLink" class="js-show-more">Show More <b>+</b></p>`
    }
    moreLink.innerHTML=showMore;

  })