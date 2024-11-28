let cards=document.getElementsByClassName('card')
let count=0;

for (let card of cards){
    
   
    card.addEventListener('click',function(e){
        
        // calculate the count place 
        count=count+1;
        let count_of_traveling_place=find_id('count_total_travel_place',count)
        // find the touring place price
        let find_traverse_place_price=e.target.parentNode.childNodes[3].childNodes[1].innerText
        console.log('total price traversing place',find_traverse_place_price)
        // find_touring_place_name
        let find_touring_place_name=e.target.parentNode.childNodes[1].innerText
        console.log('touring_place_name :',find_touring_place_name)
        // converted the touring place price
        let convert_find_traverse_place=parseInt(find_traverse_place_price)

        // removing the budget after buy touring place 
        let total_budget_price= find_id_value('total_budget') - convert_find_traverse_place
        
        // set the price in total budget 
        find_id('total_budget',total_budget_price)
        

        // crete element in card section 
        let find_created_place=document.getElementById('selected_place_name')
        const ul=document.createElement('ul')
        
        const li=document.createElement('li')
        const p1=document.createElement('p')
        p1.innerText=find_touring_place_name
        const p2=document.createElement('p')
        p2.innerText=find_traverse_place_price
        li.appendChild(p1)
        li.appendChild(p2)
       ul.appendChild(li)
       find_created_place.appendChild(ul)
       // crete element in card section end 

    //    find the total cost 
    let find_total_cost=find_id_value('total_cost');
    let final_total_cost_afterBuy=find_total_cost+convert_find_traverse_place;
    find_id('total_cost',final_total_cost_afterBuy)
    

        

        
       
        
    })
}
