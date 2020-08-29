function makeIt(length){
    const btn = document.getElementById("btn");
    btn.addEventListener("click", function(){
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charLength = characters.length;
        for(var i=0;i<length; i++)
        {
            result = result + characters.charAt(Math.floor(Math.random()*charLength));
        }
        document.getElementById("demo").innerText = result;
        // return result
    })
}
console.log(makeIt(10))