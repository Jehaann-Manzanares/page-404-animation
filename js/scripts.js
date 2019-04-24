const $luz = document.getElementById('luz');
const $vaca = document.getElementById('vaca');

$luz.addEventListener('animationend', (event)=>{

    if (event.animationName === 'bajar-luz'){
        $vaca.style.animationName = 'subir-vaca';
        $luz.style.animationIterationCount = '2'
    }
});