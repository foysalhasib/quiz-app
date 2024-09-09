let submit = document.querySelector(".submit")



submit.addEventListener("click",()=>{
    let q1 = document.querySelector(".q1").checked 
    let q2 = document.querySelector(".q2").checked 
    let q3 = document.querySelector(".q3").checked 
    let q4 = document.querySelector(".q4").checked 
    let q5 = document.querySelector(".q5").checked 
  
   

    let result = 0

    if(q1){
        result++
    }if(q2){
        result++
    }if(q3){
        result++
    }if(q4){
        result++
    }if(q5){
        result++
    }
    
     alert("Your Result is = " + result  )
      
    
})







