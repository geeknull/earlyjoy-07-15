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
    if (!this.props.myInfo.userName) {
      ajax({
        url: 'http://localhost:8333/api/myinfo',
        method: 'get'
      }).then(res => {
        this.props.setMyInfo(res);
      }).
      catch(err => {
        debugger
      });
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
