// let key = document.querySelectorAll('.key');
// console.log(key);
// let display = document.getElementById('display');

// key.forEach(keys =>{
//     keys.addEventListener('click',(event)=>{
//         let dataset = event.currentTarget.dataset;
//         console.log(dataset);
//         let value = event.currentTarget.dataset.id;
//         display.innerHTML = value;
//     })
// })

let keys = document.querySelectorAll('.key');
let display = document.getElementById('display');
let a = ""; let b = ""; let result = 0; let o;

keys.forEach(key =>{
    console.log(key.id);
    if(key.classList.contains('key--num')){
        key.addEventListener('click' , (event) =>{
            let value = event.currentTarget.innerHTML;
            // console.log(typeof(value));
            display.innerHTML += value;
            if(!o){
                a += value;
            }
            else{
                b += value;
                console.log(b);
                
            }
        })
    } 
    else if(key.classList.contains('key--op')){
        key.addEventListener('click', (event) =>{
            let value = event.currentTarget.innerHTML;
            display.innerHTML += value;
            o = value;
        })
    }
    else if(key.classList.contains('key--eq')){
        key.addEventListener('click', (event) =>{
            result = Number(a) + Number(b);
            display.innerHTML = result;
        })
    } 
    else if(key.id === 'key-clear'){
        key.addEventListener('click', (event) =>{
            display.innerHTML = "";
        })
    }
}

    // console.log(key.classList.contains('key--num'));
    // if(key.className == key--num)
    // key.addEventListener('click' , (event)=>{
    //     let value = event.currentTarget.innerHTML;
    //     console.log(value);
    //     display.innerHTML += value;
    // })
)