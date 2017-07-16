import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions/index.js';
import {ajax} from '../../util/util.js';

@connect(state => ({
  myInfo: state.myInfo // 将myInfo放到我们的props中
}), { ...actions }) // 将所有的action放到我们的props中
export default class extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // 我们的store里面还没有用户信息的数据 就要发请求
    // 说明我们直接访问的mine页面
    if (!this.props.myInfo.userName) {
      ajax({
        url: 'http://localhost:8333/api/myinfo',
        method: 'get'
      }).then(res => {
        this.props.setMyInfo(res); // 设置我们store里面的myInfo节点
        this.props.backupMyInfo(res); // 设置我们store里面的myInfoBackup节点
      }).
      catch(err => {
        debugger
      });
    } else {
      this.props.backupMyInfo(this.props.myInfo); // 将myInfo的数据 备份到myInfoBackup里面
    //  我们store里面已经有用户信息的数据了
    //  说明我们已经访问过了首页
    }
  }

  userNameChangeHandler (e) {
    let value = e.target.value;
    this.props.modifyMyUserName(value);
  }

  render() {
    let { avatar, userName, getupTime } = this.props.myInfo;
    return (
      <div className="page-wrap mine-wrap">
        <div className="user-info">
          <img src={avatar} className="avatar"/>
          <input
            type="text"
            className="user-name"
            value={userName}
            onChange={this.userNameChangeHandler.bind(this)}
          />
          <input
            type="text"
            className="getup-time"
            value={getupTime}
            onChange={() => {}}
          />
        </div>
        <div className="btn-wrap">
          <div className="page__bd page__bd_spacing">
            <a href="" className="weui-btn weui-btn_primary">
              确定提交
            </a>
          </div>
        </div>
      </div>
    )
  }
}
import './mine.less';
