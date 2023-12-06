import { Link } from 'react-router-dom';

import './FetchError.css';

function FetchError() {
    return (
        <div id="fetch-error">

            <h4>Opps! We did't found what you're looking for ☹</h4>
            <br></br>
            
            Steps to follow:
            <ul>
                <li>Make sure that the URL you've entered is correct.</li>
                <li>Check your internet connection and try again.</li>
                <li>Maybe the content is not available right now. In this case, you better&nbsp;
                <Link to="/contact">contact</Link> with the developer.</li>
            </ul>
        </div>
    );
}

export default FetchError;