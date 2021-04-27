const moreBtn = document.querySelector('.info .metadata .moreBtn');
const title = document.querySelector('.info .metadata .title');
const actionBtn = document.querySelectorAll('.info .actions button');
const subscribe = document.querySelector('.info .channel .subscribe')
const upNextmoreBtn = document.querySelectorAll('.upNext .item .moreBtn');
const upNextlist = document.querySelectorAll('.upNext .item .moreBtn_list')

moreBtn.addEventListener('click', ()=>{
    moreBtn.classList.toggle('clicked');
    title.classList.toggle('active');
})

for(let i=0; i<actionBtn.length;i++){
actionBtn[i].addEventListener('click', ()=> {
    actionBtn[i].classList.toggle('active');
})
}

subscribe.addEventListener('click', () => {

    if (subscribe.innerHTML==='SUBSCRIBE')   { 
        subscribe.innerHTML = '구독중';
        subscribe.style.color="gray";
    }
    else  {
        subscribe.innerHTML = 'SUBSCRIBE'
        subscribe.style.color="red";
   
    }  
})

for(let i=0;i<upNextlist.length;i++){
upNextmoreBtn[i].addEventListener('click', ()=> {
    // 작은 서브메뉴 나타나게 하기
    upNextlist[i].classList.toggle('active');

})
}