//Pin Generate Area....
var pinGenerate = document.getElementById("pin-generate-btn");
pinGenerate.addEventListener("click", function(){
    var randomNumber = Math.random()*9999;
    setNumber = Math.round(randomNumber);
    if(setNumber>=1000 && setNumber <10000)
    {
        document.getElementById("input-number").value = setNumber;
    }
    document.getElementById("reject").style.display = "none";
    document.getElementById("accept").style.display = "none";
    
})
//Number pad button area....
function calculator(id, value){
    document.getElementById(id).addEventListener("click", function(){
        var number = parseFloat(document.getElementById(value).innerText);
        document.getElementById("result").value += number;

    })
}


function submitBtn(){
    var submit = document.getElementById("submit-btn");
    submit.addEventListener("click", function(){
        var resultValue = document.getElementById("result").value;
        var setRandomNumber = setNumber
        if(setRandomNumber == resultValue)
        {
            document.getElementById("accept").style.display = "block";
            document.getElementById("reject").style.display = "none";
            
        }else{
            document.getElementById("reject").style.display = "block";
            document.getElementById("accept").style.display = "none";
        }
        document.getElementById("result").value = "";
        if(resultValue == "")
        {
            document.getElementById("result").focus()
            document.getElementById("reject").style.display = "none";
        }
    })
}


//Remove by per word area....
function deleteFunction(){
    document.getElementById("delete").addEventListener("click", function(){
        var a = document.getElementById("result").value;
       for (var i = 0; i < a.length; i++) 
        {
            var setNumber = a.slice(0, -1);
            document.getElementById("result").value = setNumber;

        }
    })
}

//Clear area.....
function clear(){
    var clearBtn = document.getElementById("clear");
    clearBtn.addEventListener("click", function(){
        document.getElementById("result").value = ""
    })
}


deleteFunction()
submitBtn()
calculator("one-btn","one")
calculator("two-btn","two")
calculator("three-btn","three")
calculator("four-btn","four")
calculator("five-btn","five")
calculator("six-btn","six")
calculator("seven-btn","seven")
calculator("eight-btn","eight")
calculator("nine-btn","nine")
calculator("zero-btn","zero")

clear()