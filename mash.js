
// The Crib 
const GodsOrder = Math.random();
if (GodsOrder >= .51){

function getHome() { 
   let home = ["Mansion" , "Apartment" , "Shack" , "House", "Cardboard Box"]
    home.push (process.argv[2]); 
    let alpha = Math.floor(Math.random()* home.length);
    return home[alpha];
}

const pipe = getHome();

// Your Screwed 
function getChildrenCount() {
    let prob = Math.random(); 
    if (prob < .51){
            child = Math.floor(Math.random()* 100 + 1);
        
            return child; 
    }else {
            child  = (process.argv[3]);  
            
            return child; 
    }  

}
const lit = getChildrenCount(); 

// Hot wheels
function getCar() { 
        let opt = Math.random();
        let car = ["Toyota",
        "Box with Wheels" , 
        "Buggy" , 
        "Go Cart" ,
        "Chevrolet" ,  ]
         car.push (process.argv[4]); 
         let omega = Math.floor(opt * car.length );
         return car[omega]; 
         
}

const mans = getCar(); 

// deciding factor 
function mash() {
   return console.log("You will live in a ", pipe +", have"  ,lit ,"kids and will drive a" ,mans +"!");
}

mash()


}else {
        console.log("Sorry but you died at a very young age and never make it to adulthood ;(");
}
