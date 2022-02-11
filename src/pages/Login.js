import React from "react";
import { Text, Input, Grid } from "../elements";
import { getCookie, setCookie, deleteCookie } from "../shared/Cookie";

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { emailCheck } from "../shared/commom";
import styled from "styled-components";

const Login = (props) => {

  const dispatch = useDispatch();
  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  
  
  const login  = () =>  {

    console.log(id);

    let _reg = /^[0-9a-zA-Z]([-_.0-9a-zA-Z])*@[0-9a-zA-Z][(-_.0-9a-zA-Z)]*.([a-zA-z])/;
    
    console.log(_reg.test(id));
    
    if( id === "" || pwd === ""){
      window.alert(" 아이디 혹은 비밀번호를 입력해주세요 ")
      return;
    }

    if(!emailCheck(id)){
      window.alert(" 올바른 이메일이 아닙니다 ")

    }
    dispatch(userActions.loginFB(id, pwd));

  };
  
  return (
    <React.Fragment>
      <Grid padding="16px">
        <Text size="32px" bold>
          로그인
        </Text>

        <Grid padding="16px 0px">
          <Input
            label="아이디"
            placeholder="아이디를 입력해주세요."
            _onChange={(e) => {
              setId(e.target.value)
            
            }}
          />
        </Grid>

        <Grid padding="16px 0px">
          <Input
            label="패스워드"
            placeholder="패스워드 입력해주세요."
            type = "password"
            _onChange={(e) => {
              setPwd(e.target.value)
            }}
          />
        </Grid>

        {/* <Button
          _onClick={() => {
            login()
          }} 
        >로그인하기</Button> */}

        <Button onClick={() => {
            login()
          }} disabled = {(id === "" || pwd === "") ? true : false}>
            로그인하기
        </Button>

      </Grid>
    </React.Fragment>
  );
};

export default Login;


const Button = styled.button`
  background-color: ${(props) => (props.disabled ? "#999999" : "#50a0b0")};
  color : white;
  width : 100%;
  height : 50px;
  border-radius : 3px;
  margin-top : 30px

`