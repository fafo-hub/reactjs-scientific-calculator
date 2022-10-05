import React from 'react'

function buttons({buttonClicked, calculateScreen, allClear, toDelete, showResult, resultScreen, showAns}) {
  return (
    <div>
        <div className="calculator-grid">
        <div className="output">
            <div className="calculate-screen">{calculateScreen}</div>
            <div className="result-screen">{resultScreen}</div>
        </div>
            <button onClick={allClear} className="AC" id="span-two" data-all-clear>AC</button>
            <button onClick={toDelete} className="key" data-delete>DEL</button>
            <button onClick={buttonClicked} name='(' className="number">(</button>
            <button onClick={buttonClicked} name=')' className="number">)</button>
            <button onClick={buttonClicked} name='/' className="division">÷</button>
            <button onClick={buttonClicked} name='Math.sqrt(' className="trigo_function">√</button>
            <button onClick={buttonClicked} name='Math.sin(' className="trigo_function">sin</button>
            <button name='7' onClick={buttonClicked} className="number">7</button>
            <button onClick={buttonClicked} name='8' className="number">8</button>
            <button onClick={buttonClicked} name='9' className="number">9</button>
            <button onClick={buttonClicked} name='*' className="number">x</button>
            <button onClick={buttonClicked} name='Math.PI' className="number">π</button>
            <button  onClick={buttonClicked} name='Math.cos(' className="trigo_function">cos</button>
            <button onClick={buttonClicked} name='4' className="number">4</button>
            <button onClick={buttonClicked} name='5' className="number">5</button>
            <button onClick={buttonClicked} name='6' className="number">6</button>
            <button onClick={buttonClicked} name='+' className="number">+</button>
            <button onClick={buttonClicked} name='Math.log10(' className="math_function">log</button>
            <button onClick={buttonClicked} name='Math.tan(' className="trigo_function">tan</button>
            <button onClick={buttonClicked} name='1' className="number">1</button>
            <button onClick={buttonClicked} name='2' className="number">2</button>
            <button onClick={buttonClicked} name='3' className="number">3</button>
            <button onClick={buttonClicked} name='-' className="operator">-</button>
            <button onClick={buttonClicked} name='0'id="span-two" className="key">0</button>
            <button onClick={buttonClicked} name='.' className="number">.</button>
            <button onClick={showResult} className="equals" id="span-three" data-operation>=</button>
    </div>
    </div>
  )
}

export default buttons