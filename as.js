const hour=document.querySelector('.h'),
min=document.querySelector('.m'),
sec=document.querySelector('.s'),
hoursNum=document.querySelector('.hours'),
minutesNum=document.querySelector('.minutes')

function clock() {
    let time=new Date()
    let secund=time.getSeconds()*6
    let minutes=time.getMinutes()*6
    let hours=time.getHours()*30

    sec.style.transform=`rotate(${secund}deg)`
    min.style.transform=`rotate(${minutes}deg)`
    hour.style.transform=`rotate(${hours}deg)`
     
    hoursNum.innerHTML=time.getHours()<10 ? '0'+time.getHours():time.getHours()
    minutesNum.innerHTML=time.getMinutes()<10 ? '0'+time.getMinutes():time.getMinutes()
    setTimeout(() => {
         clock()
     }, 1000);

}
console.log(clock());
const tabsContentItem =document.querySelectorAll('.tabsContentItem'),
tabsItem=document.querySelectorAll('.tabsItem')

for (let i = 0; i <tabsItem.length;i++) {
    tabsItem[i].addEventListener('click',()=>{
        for (let j = 0; j <tabsItem.length;j++) {
            tabsItem[j].classList.remove('active')
            tabsContentItem[j].classList.remove('active')  
        }
        tabsItem[i].classList.add('active')
        tabsContentItem[i].classList.add('active')
    })
    
}

const stopwatchHours=document.querySelector(".stopwatch__hours"),
stopwatchMinutes=document.querySelector(".stopwatch__minutes"),
stopwatchSeconds=document.querySelector(".stopwatch__seconds"),
stopwatchBtn=document.querySelector(".stopwatch__btn"),
point=document.querySelector(".tabsLink__span")

stopwatchBtn.addEventListener('click',function(){
  if(stopwatchBtn.innerHTML=='start'){
   stopwatchBtn.innerHTML='stop'
   point.classList.add('active') 
  }
  else if(stopwatchBtn.innerHTML=='stop'){
    point.classList.remove('active')
    point.classList.add('active_clear')
    stopwatchBtn.innerHTML='clear'
  }
  else if(stopwatchBtn.innerHTML=='clear'){
    point.classList.remove('active_clear')
    stopwatchBtn.innerHTML='start'
  }
})

function watch(){
  if(stopwatchBtn.innerHTML=='stop'){
    stopwatchSeconds.innerHTML++
    
     if(stopwatchSeconds.innerHTML>59){
     stopwatchSeconds.innerHTML=0
     stopwatchMinutes.innerHTML++
     
     if(stopwatchMinutes.innerHTML>59){
       stopwatchMinutes.innerHTML=0
      stopwatchHours.innerHTML++
     }
    }
  }
  else if(stopwatchBtn.innerHTML=='start'){
    stopwatchSeconds.innerHTML=0;
    stopwatchMinutes.innerHTML=0
    stopwatchHours.innerHTML=0
  }
    setTimeout( ()=> watch() , 1000);
}
 watch()
  
    



