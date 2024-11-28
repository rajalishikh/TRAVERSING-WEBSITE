let cards=document.getElementsByClassName('card')
let count=0;

for (let card of cards){
   
    card.addEventListener('click',function(){
        // calculate the count place 
        count=count+1;
        let count_of_traveling_place=find_id('count_total_travel_place',count)
        
    })
}
