import React, { useState } from 'react';
import Signin from './components/sign/Signin/Signin';
import Signup from './components/sign/Signup/Signup';

function App6(props) {
    const [ path, setPath ] = useState("signin");
    const [ userList, setUserList ] = useState([]);

    const hadlePageChangeButtonOnClick = (e, path) => {
        setPath(path);
    }

    return (
        <div>
            <button onClick ={(e) => hadlePageChangeButtonOnClick(e, "signin")}>로그인</button>
            <button onClick = {(e) => hadlePageChangeButtonOnClick(e, "signup")}>회원가입</button>
            {
                path === "signin" &&  <Signin userList={userList} />
            }
            {
                path === "signup" &&  <Signup userList={userList} setUserList={setUserList} />
            }
        </div>
    );
}

export default App6;