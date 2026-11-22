const inputs = document.getElementById('inputs');
const output = document.getElementById('output');

console.log(output.innerText);
inputs.addEventListener('submit',(e)=>{
    e.preventDefault();
    infos={
        Name:e.target.elements.names.value,
        Age:e.target.elements.age.value
    }
    localStorage.setItem('infos',JSON.stringify(infos));
    output.innerText = '' || localStorage.getItem('infos');
})