import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions/index.js';
import {ajax} from '../../util/util.js';

@connect(state => ({
  myInfo: state.myInfo, // 将myInfo放到我们的props中
  myInfoBackup: state.myInfoBackup // 我们备份过的数据
}), { ...actions }) // 将所有的action放到我们的props中
export default class extends Component {
  constructor() {
    super();
    this.state = {
      isSubmit: false
    }
  }

  // 这个生命周期只会运行一次
  componentDidMount() {
    // 当我们在mine页面第一时间能获取到myInfo的时候就立刻将
    // myInfo的数据备份到myInfoBackup里面 使用backupMyinfo的action

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

  componentWillUnmount () {
    // 如果还没提交数据 我们就要恢复
    if (this.state.isSubmit === false) {
      // 从备份里面取得数据 去恢复
      console.log('mine 页面销毁，我们要恢复数据啦');
      this.props.recoverMyinfo(this.props.myInfoBackup);
    }
  }

  userNameChangeHandler (e) {
    let value = e.target.value;
    this.props.modifyMyUserName(value);
  }

  submitHandler () {
    this.setState({ isSubmit: true });
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
        </div>
        <div className="btn-wrap">
          <div
            className="page__bd page__bd_spacing"
            onClick={this.submitHandler.bind(this)}
          >
            <span className="weui-btn weui-btn_primary">
              确定提交
            </span>
          </div>
        </div>
      </div>
    )
  }
}
import './mine.less';
