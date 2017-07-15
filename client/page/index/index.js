import React, {Component} from 'react';
import {ajax} from '../../util/util.js';

export default class extends Component {
  constructor() {
    super();
    this.state = {
      myInfo: {}, // 个人信息
    }
  }

  componentDidMount() {
    // Node 服务器提供API接口
    // Node 服务器是8333端口
    // 发起获取个人信息的请求
    ajax({
      url: 'http://localhost:8333/api/myinfo',
      method: 'get'
    }).then(res => {
      this.setState({
        myInfo: res
      })
    }).catch(err => {
      debugger
    })
  }

  render() {
    // 我们的个人信息
    let { avatar, continued,
      getupTime, rank, uid, userName } = this.state.myInfo;

    return (
      <div className="page-wrap index-page">
        {
          userName ?
            <div className="user-info-wrap">
              <img src={avatar}/>
              <p className="user-name">{userName}</p>
            </div>
            : <div>loading</div>
        }
      </div>
    )
  }
}
import './index.less';
