import * as React from 'react';
import {Header} from 'features/common';
import {Footer} from 'features/common';
import { MyPage } from 'features/common';
import 'features/common/style/LayOutStyle.scss'
import 'features/common/style/Button.scss'

//const Item = styled(Paper)(({ theme }) => ({
//  ...theme.typography.body2,
//  padding: theme.spacing(1),
//  textAlign: 'center',
//  color: theme.palette.text.secondary,
//}));

const LayOut = (props) => {
  return (
    <div class="wrapper">
      <div class="container">
        <div class="header"><Header/></div>
        <div class="menu"><MyPage/></div>
        <div class="main">{props.children}</div>
        <div class="item1"><a class="gradient-btn" href="#">챗봇자리</a></div>
        <div class="footer"><Footer/></div>
      </div>
    </div>
  );
}
export default LayOut

