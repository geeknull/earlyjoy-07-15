import React, {Component} from 'react';
import {ajax} from '../../util/util.js';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions/index.js';

@connect((state) => ({
  myInfo: state.myInfo
}), { ...actions })
export default class extends Component {
  constructor() {
    super();
    this.state = {
      myList: { // 个人状态的列表
        list: [], // 列表数据
        offset: 0, // 当前最后一个列表的下标
        limit: 10, // 每次请求加载的条数
        hasMore: false, // 是否还有更多
        isEmpty: false, // 是否为空
        loading: false, // 是否在加载中状态
        isInit: false, // 列表是否初始化
      }
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
      this.props.setMyInfo(res);
      // this.setState({
      //   myInfo: res
      // })
    }).catch(err => {
      debugger
    });

    let { offset, limit } = this.state.myList;
    // 获取个人状态列表

    // 请求之前 要将列表的状态置为loading状态
    this.setState({
      myList: {
        ...this.state.myList,
        loading: true
      }
    });

    ajax({
      url: 'http://localhost:8333/api/mylist',
      method: 'post',
      data: { offset, limit }
    }).then(res => {
      // 1500ms之后 请求成功了
      this.setState({
        myList: {
          list: res.list,
          offset: res.list.length,
          limit: 10,
          hasMore: res.hasMore,
          isEmpty: false,
          loading: false,
          isInit: true,
        }
      });
    }).catch(err => {
      // 请求失败了
      this.setState({
        myList: {
          ...this.state.myList,
          loading: false
        }
      });
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

    let { list, hasMore, loading } = this.state.myList;

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
