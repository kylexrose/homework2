let count = 0;

document.querySelector(".remove").addEventListener('click', ()=>{
    if(count > 0){
        count --;
        document.querySelector('.count').innerHTML = count;
        displayStars();
    }
})

document.querySelector(".add").addEventListener('click', ()=>{
        count ++;
        document.querySelector('.count').innerHTML = count;
        displayStars();
})

function displayStars(){
    let innerHTML = "";
    for(let i = 0; i < count; i++){
        innerHTML += "<img src='./star.png'/>"
    }
    document.querySelector('.stars').innerHTML = innerHTML;
}
