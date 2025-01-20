import axios from 'axios';
import React from 'react';

function App14(props) {

    const handleRequestOnClick = async () => {
        let response = null;

        try{
            response = await axios.get("http://localhost:8080/servlet_study_war/api/user");
            console.log(response);
            console.log(response.data.username);
        }catch(error) {
            console.error(error);
        }
    }

    const handleBookRequestOnClick = async () => {
        let response = null;

        try{
            response = await axios.get("http://localhost:3000/")
            console.log(response);
            console.log(response.data.book);
        }catch(error) {
            console.error(error);
        }
    }



/**
 * BookRestServlet(/api/book)
 * get요청으로
 * bookId,
 * bookName,
 * author,publisher,
 * category,
 * imgUrl
 */

    return (
        <div>
            <button onClick={handleRequestOnClick}>요청</button>
            <button onClick={handleBookRequestOnClick}>책 요청</button>
        </div>
    );
}

export default App14;<button>요청</button>