let x=document.getElementById("calculator");

x.addEventListener("mouseenter",function(){
x.style.backgroundColor="green";
let r=Math.floor(Math.random()*256);
let r2=Math.floor(Math.random()*256);
let r3=Math.floor(Math.random()*256);
x.style.backgroundColor=`rgb(${r},${r2},${r3})`;
})

let currentDisplay = '';
document.querySelector('#display').value = currentDisplay;

document.addEventListener("keydown", function(event) {
    let key = event.key;

    if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key))
    {
        currentDisplay += key;
    }
     else if (key == "Enter") 
        {
        try{
  currentDisplay = eval(currentDisplay);
        }
        catch(e){
            currentDisplay="Error";
        }
      
    } 
    else if (key === "Backspace")
         {
        currentDisplay = currentDisplay.slice(0, -1);
    } 
    else if (key === "End") 
    {
        currentDisplay = '';
    }

    document.querySelector('#display').value = currentDisplay;
});


