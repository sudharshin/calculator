import './calci.css';
import React, { useState } from 'react';
function Calculator() {
    const [result, setResult] = useState('');

    const handleClick = (value) => {
      if (value === '=') {
        try {
          setResult(eval(result).toString());
        } catch (error) {
          setResult('Error');
        }
      } else if (value === 'clr') {
        setResult('');
      } else {
        setResult((prevResult) => prevResult + value);
      }
    };
    return (
        <main>
   <input type="text"
   className='bb'
   value={result}
   />
    <div className="box">
    <button className="box1" onClick={() => handleClick('9')}>9</button> 
<button className="box2" onClick={() => handleClick('8')}>8</button>
<button className="box3" onClick={() => handleClick('clr')}>clr</button> 
<button className="box4" onClick={() => handleClick('7')}>7</button>
<button className="box5" onClick={() => handleClick('6')}>6</button>
<button className="box6" onClick={() => handleClick('5')}>5</button>
<button className="box7" onClick={() => handleClick('4')}>4</button>
<button className="box8" onClick={() => handleClick('3')}>3</button>
<button className="box9" onClick={() => handleClick('2')}>2</button>
<button className="box10" onClick={() => handleClick('1')}>1</button>
<button className="box11" onClick={() => handleClick('0')}>0</button>
<button className="box12" onClick={() => handleClick('00')}>00</button>
<button className="box13" onClick={() => handleClick('.')}>.</button>
<button className="box14" onClick={() => handleClick('+')}>+</button>
<button className="box15" onClick={() => handleClick('-')}>-</button>
<button className="box16" onClick={() => handleClick('*')}>*</button>
<button className="box17" onClick={() => handleClick('/')}>/</button>
<button className="box18" onClick={() => handleClick('=')}>=</button>

    </div>

</main>
    );
}

export default Calculator;