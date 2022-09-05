window.addEventListener("load", function () {
    const start=document.getElementById("start")
    var status=document.getElementById("status")
    var boundary= document.getElementsByClassName("boundary")
    var End=document.getElementById("end")
    var c=0

    start.addEventListener("mouseover",play)
        function play (){
            start.style.color="red"
            status.innerHTML="Guide the mouse cursor to the end area with out touch the walls"
            for (i=0;i<boundary.length;i++){
                boundary[i].addEventListener("mouseover",oups)
                End.addEventListener("mouseover",congrats)
            }
            // End.addEventListener("mouseover",congrats)
        }

        function oups(){
            c=c-10
            if (c>0){
                status.innerHTML="You lost(10pts),your score is"+c+"moving your mouse over the S to continue. (Be sure to avoid the walls!),click on S to reset the score."
            }
            else if (c<0){
                reset()
            }
            else{
                status.innerHTML="You lost(10pts),your score is 0, moving your mouse over the S to continue. (Be sure to avoid the walls!)"
            }
           
            for (let j=0;j<boundary.length;j++){
                boundary[j].style.background="maroon"
            }
            start.style.color="black"
            start.addEventListener("mouseover",restart)
        }
        function restart(){
            for (let j=0;j<boundary.length;j++){
                boundary[j].style.background="#eeeeee"
            }
            play()
        }
        
        function congrats(){
            c=c+5
            status.innerHTML="congrats!your scor is "+c+"pts,moving your mouse over the S to play again.(Be sure to avoid the walls!)"
            start.addEventListener("mouseover",play)
            start.addEventListener("click",reset);
        }
        function reset(){
            c=0
            play
        }

            
        function p(){
            start.style.color="red"
            status.innerHTML="Guide the mouse cursor to the end area with out touch the walls"
                
            for ( var i=0; i<boundaries.length; i++){
                boundaries[i].addEventListener("mouseover",lose())
            }}

})
        
    
    
        