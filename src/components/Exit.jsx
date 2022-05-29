import React from 'react'

function Exit() {
    const exit = () => {
        // window.opener = null;
        // window.open("", "_self");
        window.open("about:blank", "_self");
        window.close();
    };
    return (
        <div>
            <div id='center'>
                <button className="button-30" onClick={exit}>Exit</button>
            </div>
        </div>
    )
}

export default Exit