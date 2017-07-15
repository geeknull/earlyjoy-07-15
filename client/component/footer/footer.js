import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class extends Component {
  constructor() {
    super();
  }

  componentDidMount() {

  }

  render() {
    return (
      <footer className="footer">
        <Link className="footer-item" to="/index">
          <i className="iconfont icon-zhuye"/>
          <span>首页</span>
        </Link>
        <Link className="footer-item" to="/today">
          <i className="iconfont icon-liebiao"/>
          <span>今天</span>
        </Link>
        <Link className="footer-item" to="/rank">
          <i className="iconfont icon-paixingbang"/>
          <span>排行</span>
        </Link>
        <Link className="footer-item" to="/mine">
          <i className="iconfont icon-gerenzhongxin"/>
          <span>我的</span>
        </Link>
      </footer>
    )
  }
}
import './footer.less';
