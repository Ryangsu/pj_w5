import React from "react";
import styled from "styled-components";
import '../shared/App.css'



const Text = (props) => {

    const {bold, color, size, children, _font} = props;

    const styles = {bold: bold, color:color, size:size, _font : _font
    };

    return (
        <P {...styles} > 
            {children}
        </P>
        )
}


Text.defaultProps = {

    children: null,
    bold: false,
    color: '#222831',
    size: '14px',
    _font: false,

    

}

const P = styled.p`
    color: ${(props) => props.color};
    font-size: ${(props) => props.size};
    font-weight: ${(props) => (props.bold ? "600" : "400")};
    ${(props) => (props.margin? `margin: ${props.margin};` : '')};
`;


export default Text;