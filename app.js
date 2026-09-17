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

let key = document.querySelectorAll('.key');
let display = document.getElementById('display');

key.forEach(keys =>{
    keys.addEventListener('click' , (event)=>{
        let value = event.currentTarget.innerHTML;
        console.log(value);
        display.innerHTML = value;
    })
})