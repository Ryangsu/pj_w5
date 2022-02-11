import React from "react";
import {Grid, Image, Text, Button} from "../elements";
import { actionCreators as postdeleteActions } from "../redux/modules/post";

import { history } from "../redux/configureStore";
import { useDispatch } from "react-redux";
import '../shared/App.css'




const Post = (props) => {
    const dispatch = useDispatch();
    
    const {
      layout,
      id
    } = props;

    const deletePost = () =>{
      dispatch(postdeleteActions.deletePostFB(id))
    };

    return (
      <React.Fragment>
        <Grid>
          <Grid is_flex padding="16px">
            <Grid is_flex width="auto">
              <Image shape="circle" src={props.src} />
              <Text bold>{props.user_info.user_name}</Text>
            </Grid>
            <Grid is_flex width="auto">
              <Text>{props.insert_dt}</Text>
              {props.is_me && <Button width="auto" margin="4px" padding="4px" _onClick={()=>{
                history.push(`/write/${props.id}`);
              }}>
                수정
              </Button>}
              {props.is_me && <Button width="auto" margin="4px" padding="4px" _onClick={deletePost}>삭제</Button>}
            </Grid>
          </Grid>
          

          {layout === "right" && (
            <>
            <Grid is_flex padding="16px">
            <Text>
              {props.contents}
            </Text>
            <Image
            shape= "rectangle"
            src={props.image_url} />
          </Grid>
          <Grid>
          </Grid>
          </>
          )}

          {layout === "left" && (
            <>
            <Grid is_flex padding="16px">
            <Image 
            shape= "rectangle"
            src={props.image_url} />
            <Grid>
            <Text>{props.contents}</Text>
            </Grid>
          </Grid>
          <Grid>
          </Grid>
          </>
          )}

          {layout === "bottom" && (
            <>
            <Grid padding="16px">
            <Text>{props.contents}</Text>
          </Grid>
          <Grid>
            <Image shape="rectangle" src={props.image_url} />
          </Grid>
          </>
          )}
          


          <Grid padding="16px">
            <Text margin="0px" bold>댓글 {props.comment_cnt}개</Text>
          </Grid>
        </Grid>
      </React.Fragment>
    );
}

Post.defaultProps = {
  user_info: {
    user_name: "mean0",
    user_profile: "https://mean0images.s3.ap-northeast-2.amazonaws.com/4.jpeg",
  },
  image_url: "https://mean0images.s3.ap-northeast-2.amazonaws.com/4.jpeg",
  contents: "고양이네요!",
  comment_cnt: 10,
  insert_dt: "2021-02-27 10:00:00",
  is_me : false,
};

export default Post;