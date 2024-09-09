function str(){
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    
    if (typeof a !== 'string' && typeof b !== 'string') {
        alert("Both inputs are not strings");
        return;
    }
    
    document.getElementById('result').innerHTML = `
    <div>
        <h3>String Functions</h3>
        <p>Concatenation: ${a.concat("",b)}</p>
        <p>Length of a: ${a.length}</p>
        <p>Length of b: ${b.length}</p>
        <p>Lowercase of a: ${a.toLowerCase()}</p>
        <p>Uppercase of b: ${b.toUpperCase()}</p>
        <p>Substring of a(1,3): ${a.substring(1,3)}</p>
        <p>Substring of b(1,3): ${b.substring(1,3)}</p>
        <p>Repeat of a twice: ${a.repeat(2)}</p>
        <p>Repeat of b twice: ${b.repeat(2)}</p>
        <p>Replace a with b: ${a.replace(a,b)}</p>
        <p>Replace b with a: ${b.replace(b,a)}</p>        
    </div>`;
}

function arr(){
    var a = document.getElementById('a').value.split(',');
    var b = document.getElementById('b').value.split(',');
    console.log(a, b);
    document.getElementById('result').innerHTML = `
    <div>
        <h3>Array Functions</h3>
        <p>Concatenation: ${a.concat(b)}</p>
        <p>Length of a: ${a.length}</p>
        <p>Length of b: ${b.length}</p>
        <p>Joining a: ${a.join(', ')}</p>
        <p>Joining b: ${b.join(', ')}</p>
        <p>Pushing a: ${a.push('test')}</p>
        <p>Pushing b: ${b.push('test')}</p>
        <p>Poping a: ${a.pop()}</p>
        <p>Poping b: ${b.pop()}</p>
        <p>Reversing a: ${a.reverse()}</p>
        <p>Reversing b: ${b.reverse()}</p>
        <p>Sorting a: ${a.sort()}</p>
        <p>Sorting b: ${b.sort()}</p>
        <p>Splicing a(1,2): ${a.splice(1,2)}</p>
        <p>Splicing b(1,2): ${b.splice(1,2)}</p>
    </div>
    `;
}

function maths(){
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    console.log(Number(a), Number(b));
    if (isNaN(Number(a)) || isNaN(Number(b))) {
        alert("Both inputs are not numbers");
        return;
    }
    document.getElementById('result').innerHTML = `
    <div>
        <h3>Math Operation</h3>
        <p>Addition Operator (+): ${Number(a)+Number(b)}</p>
        <p>Subtraction Operator (-): ${Number(a)-Number(b)}</p>
        <p>Multiplication Operator (*): ${Number(a)*Number(b)}</p>
        <p>Division Operator (/): ${Number(a)/Number(b)}</p>
        <p>Modulus Operator (%): ${Number(a)%Number(b)}</p>
        <p>Exponential Operator (**): ${Number(a)**Number(b)}</p>
        <p>Math.Pi: ${Math.PI}</p>
        <p>Math.Euler: ${Math.E}</p>
        <p>Math.Pow: ${Math.pow(Number(a),Number(b))}</p>
        <p>Math.SQRT (a): ${Math.sqrt(Number(a))}</p>
        <p>Math.SQRT (b): ${Math.sqrt(Number(b))}</p>
        <p>Math.min: ${Math.min(Number(a),Number(b))}</p>
        <p>Math.max: ${Math.max(Number(a),Number(b))}</p>
        <p>Math.random: ${Math.random()}</p>
        <p>Math.log(a): ${Math.log(Number(a))}</p>
        <p>Math.log(b): ${Math.log(Number(b))}</p>
        <p>Math.abs(a): ${Math.abs(Number(a))}</p>
        <p>Math.abs(b): ${Math.abs(Number(b))}</p>
    </div>
    `;
}

function clr(){
    document.getElementById('a').value = '';
    document.getElementById('b').value = '';
    document.getElementById('result').innerHTML = '';
}