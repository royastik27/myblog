import { useEffect } from 'react';

import './MainContent.css';

import Content from './../Content/Content.js';

function MainContent() {

    useEffect(function() {
        const el = document.getElementById('main-content');

        el.addEventListener('click', function () {

            const els = document.getElementsByClassName('side-click-display-none');

            for(let i = 0; i < els.length; ++i)
                els[i].style.display = 'none';
        });
    }, []);

    return (
        <div id="main-content" className="col-12 p-0">
            <Content />
        </div>
    );
}

export default MainContent;
