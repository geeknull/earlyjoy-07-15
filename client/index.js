import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from 'react-router-dom';

// 开始弄redux
import {Provider} from 'react-redux';
import store from './redux/index.js';
window._store = store;

// 引入组件
import Wrap from './page/wrap/wrap.js'; // 所有页面的包裹容器
import Index from './page/index/index.js'; // 首页容器组件
import Today from './page/today/today.js'; // 今天状态容器组件
import Rank from './page/rank/rank.js'; // 总排行容器组件
import Mine from './page/mine/mine.js'; // 个人中心容器组件

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Wrap>
        <Route path="/index" component={Index}/>
        <Route path="/today" component={Today}/>
        <Route path="/rank" component={Rank}/>
        <Route path="/mine" component={Mine}/>
      </Wrap>
    </HashRouter>
  </Provider>,
  document.querySelector('.doc')
);
import './style/index.less'
