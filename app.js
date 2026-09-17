let keys = document.querySelectorAll('.key');
let display = document.getElementById('display');
let a = ""; let o; let b =""; let result;
// console.log(keys);

keys.forEach(key => {
    // console.log(key);
    if(key.classList.contains('key--num')){
        key.addEventListener('click' , (event) =>{
            let value = event.currentTarget.dataset.value;
            // a += value;
            display.innerHTML += value;
            console.log(value);
            if(!o){
                a += value;
                console.log(a);
            }
            else{
                b += value;
                console.log(b);
            }
            // console.log(a);
        })
    }
    else if(key.classList.contains('key--op')){
        key.addEventListener('click' , (event)=>{
            let value = event.currentTarget.innerHTML;
            let value1 = event.currentTarget.dataset.op;
            display.innerHTML += value;
            o = value1;
            // console.log(value);
        })
    }
    else if(key.classList.contains('key--eq')){
        key.addEventListener('click', (event)=>{
            // result = Number(a) + Number(b);
            // display.innerHTML = result;
            if(o === 'add'){
                console.log(Number(a));
                result = Number(a) + Number(b);
                display.innerHTML = result;
            }
            else if (o === 'subtract'){
                result = Number(a) - Number(b);
                display.innerHTML = result;
            }
            else if (o === 'multiply'){
                result = Number(a) * Number(b);
                display.innerHTML = result;
            }
            else if (o === 'divide'){
                result = Number(a) / Number(b);
                display.innerHTML = result;
            }
        })
    }
    else if(key.id === "key-clear"){
        key.addEventListener('click' , (event)=>{
            display.innerHTML = "";
        })
    }
});