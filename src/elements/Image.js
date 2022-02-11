import styled from "styled-components";
import React from "react";

const Image = (props) => {
    const {shape, src, size} = props;
    const styles = {
        src: src,
        size: size,
    }

    if(shape === "circle"){
        return(
            <ImageCircle {...styles}></ImageCircle>
        )
    }

    if(shape ==="rectangle"){
        return (
            <AspectOutter>
                <AspectInner {...styles}></AspectInner>
            </AspectOutter>
        )
    }

    return(
        <React.Fragment>
            <ImageDefailt {...styles}></ImageDefailt>
        </React.Fragment>
    )
}

Image.defaultProps = {
    shape: "circle",
    src: "https://post-phinf.pstatic.net/MjAyMDAyMjlfMjY4/MDAxNTgyOTU0Nzg3MjQ4.PBMFV4WrSJmeSUJ56c4C7Vkz_SsQlJ1SByKU18kkJh0g.T7mQnadCWVtEZ448AGk_9kG1HFBAzdztXZcBjvSbduwg.JPEG/%EA%B3%A0%EC%96%91%EC%9D%B4_%EB%82%98%EC%9D%B41.jpg?type=w1200",
    size: 36,

};

const ImageDefailt = styled.div`
    --size : ${(props) => props.size}px;
    width: var(--size);
    height: var(--size);
    background-image: url("${(props) => props.src}");
    background-size: cover;
`

const AspectOutter = styled.div`
    width: 100%;
    min-width: 250px;
`;

const AspectInner = styled.div`
    position: relative;
    padding-top: 75%;
    overflow: hidden;
    background-image: url("${(props) => props.src}");
    background-size: cover;
`;


const ImageCircle = styled.div`
    --size : ${(props) => props.size}px;
    width: var(--size);
    height: var(--size);
    border-radius: var(--size);

    background-image: url("${(props) => props.src}");
    background-size: cover;
    margin: 4px;
`;

export default Image;