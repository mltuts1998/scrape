
(function() {
    document.querySelectorAll("input")[1].style.visibility = "hidden"
    image = document.querySelectorAll("img")[0]

    function sleep(milliseconds) {
      const date = Date.now();
      let currentDate = null;
      do {
        currentDate = Date.now();
      } while (currentDate - date < milliseconds);
    }

    aaa = prompt("initial date")
    bbb = prompt("final date")
    ccc = prompt("delay")
    data = function(){
    	var date = new Date(`${aaa}-1-1`)
        while(+date.getFullYear() < bbb){
                dd = date.getDate()
                mm = Number(date.getMonth())+1
                yy = date.getFullYear()
                if((mm+"").length <2){
                    mm  = "0"+mm
                }
                if((dd+"").length <2){
                    dd  = "0"+dd
                }
                
                
     	        password = yy+"-"+mm+"-"+dd
	            document.querySelectorAll("input")[1].value = password
                document.querySelectorAll("input")[3].click()
                console.log(password)
                sleep(ccc);
                date.setDate(date.getDate()+1)	
      
        }
    }

    image.addEventListener("click", ()=>{
	    data()	
    })


})();


