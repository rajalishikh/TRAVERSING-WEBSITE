let cards=document.getElementsByClassName('card')
let count=0;

for (let card of cards){
    
   
    card.addEventListener('click',function(e){
        
        // calculate the count place 
        count=count+1;
        let count_of_traveling_place=find_id('count_total_travel_place',count)
        // find the total budget 
        let find_traverse_place_price=e.target.parentNode.childNodes[3].childNodes[1].innerText
        let convert_find_traverse_place=parseInt(find_traverse_place_price)

        // removing the budget after buy touring place 
        let total_budget_price= find_id_value('total_budget') - convert_find_traverse_place
        console.log('after money',total_budget_price)
        // set the price in total budget 
        find_id('total_budget',total_budget_price)

        

        
       
        
    })
}
