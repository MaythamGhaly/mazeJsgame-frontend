window.addEventListener("load", function () {
    var start=document.getElementById("start")
    var status=document.getElementById("status")
    var boundary= document.getElementsByClassName("boundary")
    var End=document.getElementById("end")

    start.addEventListener("mouseover",play)
        function play (){
            start.style.color="red"
            status.innerHTML="Guide the mouse cursor to the end area with out touch the walls"
            for (i=0;i<boundary.length;i++){
                boundary[i].addEventListener("mouseover",oups)
            }

            function oups(){
                for (j=0;j<boundary.length;j++){
                    boundary[j].style.background="maroon"
                }
                
            }
            End.addEventListener("click",congrats)

            function congrats(){
            
                alert("button was clicked")
        }
            
            }
            function p(){
                start.style.color="red"
                status.innerHTML="Guide the mouse cursor to the end area with out touch the walls"
                
                for ( var i=0; i<boundaries.length; i++){
                    boundaries[i].addEventListener("mouseover",lose())
                }}

        }
        
    
    
)