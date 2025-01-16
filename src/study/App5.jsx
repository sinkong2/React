import React, { useState } from 'react';

function App5(props) {
    const [ userList, setUserList ] = useState([]);

    const [signupInputValue, setSignupInputValue] = useState({
        username:"",
        password: "",
        name:"",
        email:""
    });

    const[ signinInputValue, setSigninInputValue] = useState({
        username:"",
        password:""
    });

    const handleSignupInputOnChange = (e) => {
        setSignupInputValue({
            ...signupInputValue,
            [e.target.name]: e.target.value,
        });
    };
    const handleSigupButtonOnClick =() => {
        setUserList([
            ...userList,
            signupInputValue,
        ]);
        alert("가입완료");

        setSignupInputValue({
            username:"",
            password:"",
            name:"",
            email:""
        });
    };

    const handleSigninInputOnChange = (e) => {
        setSigninInputValue({
            ...signinInputValue,
            [e.target.name]:e.target.value,
        });
    }

    const handleSigninButtonOnClick = () => {
        const foundUser = userList.find(user => user.username === signinInputValue.username)
        if(!foundUser) {
            alert("사용자 정보를 다시 확인하세요.");
            return;
        }
        if(foundUser.password !== signinInputValue.password){
            alert("사용자 정보를 다시 확인하세요.");
            return;
        }
        alert(`${foundUser.name}(${foundUser.email})님 환영합니다.`);
    };

    return (
        <div>
            <h1>회원가입</h1>
            <input type="text" name='username' placeholder='username' onChange={handleSignupInputOnChange} value={signupInputValue.username}/>
            <input type="password" name='password' placeholder='password'onChange={handleSignupInputOnChange} value={signupInputValue.password}/>
            <input type="text" name='name' placeholder='name' onChange={handleSignupInputOnChange} value={signupInputValue.name}/>
            <input type="text" name='email' placeholder='email' onChange={handleSignupInputOnChange} value={signupInputValue.email}/>
            <div>
                <button onClick={handleSigupButtonOnClick}>가입하기</button>
            </div>
            
        </div>
    );
}

export default App5;