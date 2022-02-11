import React from "react";
import {Grid, Text, Button, Image, Input} from "../elements";
import Upload from "../shared/Upload";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postAction } from "../redux/modules/post";
import { actionCreators as imageActions } from "../redux/modules/image";

const PostWrite = (props) => {
    const dispatch = useDispatch();
    const is_login = useSelector((state) => state.user.is_login);
    const preview = useSelector((state) => state.image.preview);
    const post_list = useSelector((state) => state.post.list);
    const post_id = props.match.params.id;
    const is_edit = post_id? true : false;

    let _post = is_edit? post_list.find((p)=> p.id === post_id) : null;

    const [layout, setLayout] = React.useState(_post ? _post.layout : "bottom");

    const {history} = props;

    const [contents, setContents] = React.useState(_post ? _post.contents : "");
    

    React.useEffect(()=>{
      if(is_edit && !_post){
        console.log("포스트 정보가 없어요")
        history.goBack();

        return;
      }

      if(is_edit){
        dispatch(imageActions.setPreview(_post.image_url));
      }
    }, []);

    const changeContents = (e) => {
      setContents(e.target.value)
    }
    const addPost = () => {
      dispatch(postAction.addPostFB(contents, layout));
    }

    const editPost = () => {
      dispatch(postAction.editPostFB(post_id, {contents: contents, layout}))
    }

    // 레이아웃 배치 선택
    const layout_check = (e) => {
      if (e.target.checked) {
        setLayout(e.target.value);
      }
    }


    if(!is_login){
        return(
            <Grid margin ="100px 0px" padding = "16px" center>
                <Text size="32px">앗! 잠깐</Text>
                <Text size="16px">로그인 후에만 글을 쓸 수 있어요</Text>
                {/* replace 를 활용하여 뒤로가기를 눌러도 다시 보이지 않게 */}
                <Button _onClick={()=>{history.replace("/");}}>로그인 하러가기</Button>
            </Grid>
        )
    }
    return (
      <React.Fragment>
        <Grid padding="16px">
          <Text margin="0px" size="36px" bold>
            {is_edit ? "게시글 수정" : "게시글 작성"}
          </Text>
          <Upload/>
        </Grid>

        
          <Grid padding="16px">
            <Text margin="0px" size="24px" bold>
              미리보기
            </Text>
          </Grid>


          <Grid is_flex padding="16px">
          <label>
            <input
              type="radio"
              name="layout"
              value="right"
              
              onChange={layout_check}
            />
          </label>
          <text>이미지 오른쪽배열</text>
          <Grid>
            <Image
              half
              shape="rectangle"
              src={
                preview
                  ? preview
                  : "https://user-images.githubusercontent.com/75834421/124501682-fb25fd00-ddfc-11eb-93ec-c0330dff399b.jpg"
              }
            />
          </Grid>
        </Grid>

        {/* 왼쪽 배치 */}
        <Grid is_flex padding="16px">
          <Grid>
            <Image
              half
              shape="rectangle"
              src={
                preview
                  ? preview
                  : "https://user-images.githubusercontent.com/75834421/124501682-fb25fd00-ddfc-11eb-93ec-c0330dff399b.jpg"
              }
            />
          </Grid>
          <text>이미지 왼쪽배열</text>
          <label>
            <input
              type="radio"
              name="layout"
              value="left"
              
              onChange={layout_check}
            />
          </label>
        </Grid>

        {/* 아래 배치 */}
        <Grid padding="16px">
          <Grid padding="20px 0">
            <label>
              <input
                type="radio"
                name="layout"
                value="bottom"
                id="bottom"
                onChange={layout_check}
              />
            </label>
            <text>이미지 아래배열</text>
          </Grid>
          <Image shape="rectangle" src={preview? preview : "http://via.placeholder.com/400x300"}/>
        </Grid>

        <Grid padding="16px">
          <Input
          value={contents}
          _onChange={changeContents} 
          label="게시글 내용" 
          placeholder="게시글 작성" 
          multiLine 
          />
        </Grid>

        <Grid padding="16px">
          {is_edit?(
            <Button text="게시글 수정" _onClick={editPost} _disabled={contents === "" || layout === "" ? true : false}></Button>
            )  :   (
            <Button text="게시글 작성" _onClick={addPost} _disabled={contents === "" || layout === "" ? true : false}></Button>
            )}
        </Grid>
      </React.Fragment>
    );
}




export default PostWrite;