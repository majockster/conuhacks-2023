import React from "react";
import { Button } from "semantic-ui-react"
import 'semantic-ui-css/semantic.min.css'


const ActionButton = (props) => {
    return (
        <Button
            primary size='huge' color='blue'
            onClick={props.onClick}
        >
            {props.text}
        </Button>
    );
};

export default ActionButton;