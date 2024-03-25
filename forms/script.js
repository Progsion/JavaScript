// 1
let elem = document.querySelector('#elem');
let par = document.querySelector('#par')
elem.addEventListener('blur', fun);
function fun(){
    par.innerHTML = elem.value;
}

// 2
let el1 = document.querySelector('#el1')
let b1 = document.querySelector('#b1')
b1.addEventListener('click', f1)
function f1() {
    el1.disabled = true
}

let el2 = document.querySelector('#el2')
let b2 = document.querySelector('#b2')
let b3 = document.querySelector('#b3')
b2.addEventListener('click', f2)
function f2() {
    el2.disabled = true
}
b3.addEventListener('click', f3)
function f3() {
    el2.disabled = false
}

let el3 = document.querySelector('#el3')
let b4 = document.querySelector('#b4')
b4.addEventListener('click', f4)
function f4() {
    console.log(el3.disabled)
}

// 3
let ele1 = document.querySelector('#ele1')
let but1 = document.querySelector('#but1')
let but2 = document.querySelector('#but2')
but1.addEventListener('click', f5)
function f5() {
    ele1.checked = true
}
but2.addEventListener('click', f6)
function f6() {
    ele1.checked = false
}

let ele2 = document.querySelector('#ele2')
let but3 = document.querySelector('#but3')
let pa1 = document.querySelector('#pa1')
but3.addEventListener('click', f7)
function f7() {
    if (ele2.checked) (
        pa1.innerHTML = 'привет'
    )
    else (
        pa1.innerHTML = 'пока'
    )
}

// 4
let eleme1   = document.querySelector('#eleme1');
let butto1 = document.querySelector('#butto1');
butto1.addEventListener('click', function() {
	eleme1.checked = !eleme1.checked;
});

// 5
let radios = document.querySelectorAll('input[type="radio"]');
let rb1 = document.querySelector('#rb1');
let rp1 = document.querySelector('#rp1');
rb1.addEventListener('click', function() {
	for (let radio of radios) {
		if (radio.checked) {
			rp1.innerHTML = radio.value;
		}
	}
});

// 6
let in1 = document.querySelector('#in1');
let p1 = document.querySelector('#p1')
in1.addEventListener('change', function() {
	p1.innerHTML = in1.value;
});

let in2 = document.querySelector('#in2')
in2.addEventListener('change', function() {
    console.log(in2.checked)
})

let in3 = document.querySelector('#in3')
in3.addEventListener('change', function(){
    if (in3.value.length < 5) {
        in3.style.border = 'solid green'
    } else {
        in3.style.border = 'solid red'
    }
})

// 7
let inp1 = document.querySelector('#inp1')
inp1.addEventListener('input', function(){
    if (inp1.value.length == 5){
        console.log('5 symbol')
    }
})

let inp2 = document.getElementById('inp2');
let para1 = document.getElementById('para1');
inp2.addEventListener('input', function() {
  let remainingChars = 5 - inp2.value.length;

  if (remainingChars >= 0) {
    para1.innerHTML = remainingChars;
  } else {
    para1.innerHTML = Math.abs(remainingChars);
  }
});

// 8
let inpu1 = document.querySelector('#inpu1')
let inpu2 = document.querySelector('#inpu2')
inpu1.addEventListener('input', function(){
    if (inpu1.value.length == 2){
        inpu2.focus()
    }
})
inpu2.addEventListener('input', function(){
    if (inpu2.value.length == 2){
        inpu2.blur()
    }
})