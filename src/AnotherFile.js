import React from "react";

function AnotherFile(props) {
    return(
        <div>
            {props.stringContent}
            <hr/>
            {props.children} {/*for 2nd way*/}
        </div>
    );
}

export default AnotherFile;