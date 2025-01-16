
/** 
 * useState 상태관리
 * 
*/

import { useState } from "react";

function App2() {
    const[ num, setNum ] = useState(0);

    let number = 0;

    console.log(num);
    console.log(number);

    const handleIncreseOnClick = () => {
        setNum(num + 1);
    }
    const handleDecreseOnClick = () => {
        setNum(num - 1);
    }


    return<>
        <h1>{num}</h1>
        <button onClick = {handleIncreseOnClick}>1증가</button>
        <button onClick = {handleDecreseOnClick}>1감소</button>
    </>
}

export default App2;