// Created an empty array
ssize = 0
var stackarr = [];
var z = -1;
// Variable topp initialized with -1
var topp = -1;
var delayInMilliseconds = 1000;
var time=500
// setInterval(outputMessage, 1000)
function outputMessage(message) {
	// const div = document.createElement('div');
	// div.classList.add('message');
	// // div.setAttribute('id', `${topp}`);
	// const p = document.createElement('p');
	// p.classList.add('meta');
	// p.innerText = message;
	// div.appendChild(p);
	// const para = document.createElement('p');
	// para.classList.add('text');
	// for (var i = 0; i < 100000; i++) {
	//     setTimeout(function(){
	//         document.querySelector('.stack').appendChild(div);
	//     }, 10000000 * i);
	// }
	// setTimeout(()=>{
	// myInterval =	setInterval(displayHello, 3000);
	// for(var k=0;k<10000;k++){
	// 	for (let ct = 0; ct < 1000000; ct++) {
			
	// 	}
	// }
	// for(let j=1000;j<100000;j)
	// {
	// 	setTimeout(()=>{$(".stack").append(div);},i);
	// 	// time+=250;
	// }
	// function displayHello() {
		// $(".stack").append(div);
		// document.querySelector('.stack').appendChild(div).delay(800);
	// }
	
	// clearInterval(myInterval);

	// console.log(list)
	// }, 1000 * 1);
	// console.log($('#stack').children().size())
	
	for(var i=0;i<1;i++){
	setTimeout(()=>{
		const div = document.createElement('div');
	div.classList.add('message');
	// div.setAttribute('id', `${topp}`);
	const p = document.createElement('p');
	p.classList.add('meta');
	p.innerText = message;
	div.appendChild(p);
	document.querySelector('.stack').appendChild(div);
	},time);
	console.log(time);
	time+=2000;
}
}

function popping(topp) {
	// 	if(topp!=-1){
	// 	console.log(topp);
	// 	const element = document.getElementById(`${topp}`);
	// element.remove();
	//}
	
	// console.log()
	// const list = document.getElementById("stack");
	// const a=list.lastElementChild;
	// console.log(a)
	// a.style.background="gray"
	// list.removeChild(list.lastElementChild);

	
	// console.log(list.innerHTML);	

	// console.log("hi")
	// var element = document.getElementById(`${ssize--}`);
	// // console.log(element)
	// if (element != null) {
	// 	// setTimeout(()=>{
	// 	element.style.display = "none"
	// 	// }, 1000 * 1);
	// $(".stack").slideUp( 300 ).delay( 2000 ).fadeIn( 1000 )
	// }
	// 	element.remove();	
	for(var i=0;i<1;i++){
		setTimeout(()=>{
			const list = document.getElementById("stack");
	const a=list.lastElementChild;
	list.removeChild(list.lastElementChild);
		},time);
		console.log(time);
		time+=2000;
	
}
}
// Push function for pushing
// elements inside stack
function push(e) {
	// for(var i=0;i<1000;i++)
	// {
	// 	for(var j=0;j<1000;j++)
	// 	{
	// 		for(var k=0;k<1000;k++)
	// 		{

	// 		}
	// 	}
	// }
	topp++;
	stackarr[topp] = e;
	// if(!(e==='@'))
	// console.log(e)
	// setTimeout(() => {
	// }, 1000 * 3);
	outputMessage(e);




}
var idx=0;
// Pop function for returning top element
function pop(i) {
	// console.log("Hello")
	if (topp == -1)
		return 0;
	else {
		var popped_ele = stackarr[topp];
		popping(topp);
		const div1 = document.createElement('div');
		div1.classList.add('message');
		const p = document.createElement('p');
		p.classList.add('meta');
		
		if(popped_ele!='(')
			p.innerText = popped_ele;
		div1.appendChild(p);
		$(".stack1").append(div1);

		topp--;
		// console.log(popped_ele)
		return popped_ele;
	}
}

// Function to check whether the passed
// character is operator or not
function operator(op) {
	if (op == '+' || op == '-' ||
		op == '^' || op == '*' ||
		op == '/' || op == '(' ||
		op == ')') {
		return true;
	}
	else
		return false;
}

// Function to return the precedency of operator
function precedency(pre) {
	if (pre == '@' || pre == '(' || pre == ')') {
		return 1;
	}
	else if (pre == '+' || pre == '-') {
		return 2;
	}
	else if (pre == '/' || pre == '*') {
		return 3;
	}
	else if (pre == '^') {
		return 4;
	}
	else
		return 0;
}

// Function to convert Infix to Postfix

function InfixtoPostfix() {

	// Postfix array created
	var postfix = [];
	var temp = 0;
	push('@');
	// console.log(list)
	infixval = document.getElementById("infixvalue").value;
	var code, i, len;

	for (i = 0, len = infixval.length; i < len; i++) {
		code = infixval.charCodeAt(i);
		
		console.log(infixval[i], code)
		if ((!(code > 47 && code < 58) && // numeric (0-9)
			!(code > 64 && code < 91) && // upper alpha (A-Z)
			!(code > 96 && code < 123) && !infixval[i] == ')')) { // lower alpha (a-z)
			ssize = ssize + 1;
			// console.log(str[i])

		}
	}

	console.log(ssize)
	// Iterate on infix string
	for (var i = 0; i < infixval.length; i++) {
	// $(".stack").slideUp( 300 ).delay( 200 ).fadeIn( 1000 )

		// console.log(topp)
		idx++;
		var el = infixval[i];
		// Checking whether operator or not
		if (operator(el)) {
			if (el == ')') {
				while (stackarr[topp] != "(") {
					// popping();
					postfix[temp++] = pop(i);
					// const list = document.getElementById("stack");
					// const a=list.lastElementChild;
					// console.log(a)
					// a.style.background="gray"
				}
				// popping();
				pop(i);
			}

			// Checking whether el is ( or not
			else if (el == '(') {
				push(el);
			}

			// Comparing precedency of el and
			// stackarr[topp]
			else if (precedency(el) > precedency(stackarr[topp])) {
				push(el);
			}
			else {
				while (precedency(el) <=
					precedency(stackarr[topp]) && topp > -1) {
					//popping();
					postfix[temp++] = pop(i);
					// const list = document.getElementById("stack");
					// const a=list.lastElementChild;
					// console.log(a)
					// a.style.background="black"
				}
				push(el);
			}
		}
		else {
			postfix[temp++] = el;
		}

		// for (var i = 0; i < 1000; i++) {

		// }

	}

	// Adding character until stackarr[topp] is @
	while (stackarr[topp] != '@') {
		// popping();
		postfix[temp++] = pop(i);
		// const list = document.getElementById("stack");
		// const a=list.lastElementChild;
		// console.log(a)
		// a.style.background="pink"
	}

	// String to store postfix expression
	var st = "";
	for (var i = 0; i < postfix.length; i++)
		st += postfix[i];

	// To print postfix expression in HTML
	document.getElementById("text").innerHTML = st;
}
