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
    console.log(typeof a, typeof b);
}

function clr(){
    document.getElementById('a').value = '';
    document.getElementById('b').value = '';
    document.getElementById('result').innerHTML = '';
}