         
                  var nm = document.getElementsByClassName('mytxt3');
                  var pass = document.getElementsByClassName('mytxt4');        

            function store(){
                console.log("abc",nm,pass, document.getElementsByClassName("mytxt1"));
                localStorage.setItem('nm', nm[0].value);
                localStorage.setItem('pass', pass[0].value);
        
            }
        function myfuncheck(){
           // console.log("abc");
                

                  var storenm = localStorage.getItem('nm');
                  var storepw = localStorage.getItem('pass');              
        
        
                  var r1 = document.getElementsByClassName('mytxt1');
                  var r2 = document.getElementsByClassName('mytxt2');        
//console.log(r1);
            if(r1[0].value == storenm && r2[0].value == storepw){
               alert("sucessful login");
                console.log(storenm);
                console.log(storepw);
                
            }
            else{
                alert("Wrong user");
            }
        }
