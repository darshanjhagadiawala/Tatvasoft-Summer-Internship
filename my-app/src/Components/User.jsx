import React from "react";

const User = (props) => {
    return (
        <>
            <h1>This is User Component {props.name}</h1>
            <button onClick={props.fun}>Click me</button>
        </>
    );
};

export default User;