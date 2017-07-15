import React, {Component} from 'react';
import {ajax} from '../../util/util.js';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions/index.js';

@connect((state) => ({
  myInfo: state.myInfo,
  myList: state.myList
}), { ...actions })
export default class extends Component {
  constructor() {
    super();
    this.state = {}
  }

  componentDidMount() {
    // Node 服务器提供API接口
    // Node 服务器是8333端口
    // 发起获取个人信息的请求
    ajax({
      url: 'http://localhost:8333/api/myinfo',
      method: 'get'
    }).then(res => {
      this.props.setMyInfo(res);
    }).catch(err => {
      debugger
    });

    let { offset, limit } = this.props.myList;
    // 获取个人状态列表

    // 请求之前 要将列表的状态置为loading状态
    this.props.setMyListLoading(true);

    ajax({
      url: 'http://localhost:8333/api/mylist',
      method: 'post',
      data: { offset, limit }
    }).then(res => {
      // 1500ms之后 请求成功了
      this.props.setMyList(res);
    }).catch(err => {
      // 请求失败了
      this.props.setMyListLoading(false);
      debugger
    });
  }

  componentWillUnmount () {
    console.log('首页组件销毁');
  }

  render() {
    // 我们的个人信息 从redux里面取出来的
    let { avatar, continued,
      getupTime, rank, uid, userName } = this.props.myInfo;

    let { list, hasMore, loading } = this.props.myList;

    return (
      <div className="page-wrap index-page">
        {
          userName ?
            <div className="user-info-wrap">
              <img src={avatar}/>
              <p className="user-name">{userName}</p>
            </div>
          : null
        }
        <div className="my-list-wrap">
          {
            list.map((item, index) => {
              let { img, text, time } = item;
              return (
                <div key={index}
                     className="list-item">
                  <img src={img}/>
                  <div className="item-info">
                    <p className="item-text">{text}</p>
                    <p className="item-date">{time}</p>
                  </div>
                </div>
              )
            })
          }
          {
            loading ?
              <div className="loading">加载中</div>
              : null
          }
        </div>
      </div>
    )
  }
}
import './index.less';
