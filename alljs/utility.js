// find id and set the value 
function find_id(event,value){
    let id=document.getElementById(event)
    id.innerText=value

}

// find the id value
function find_id_value(element){
    let x = document.getElementById(element).innerText
    let y=parseInt(x)
    return y
}
