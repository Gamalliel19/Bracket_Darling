const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');


function addOne(){
    var foo = document.getElementById('thisone').innerHTML
    foo++;
    document.getElementById('thisone').innerHTML = foo;
}

function minusOne(){
    var soo = document.getElementById('thisone').innerHTML
    soo--;
    document.getElementById('thisone').innerHTML = soo
}