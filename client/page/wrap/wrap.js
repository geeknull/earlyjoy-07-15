import React, {Component} from 'react';
import Header from '../../component/header/header.js';
import Footer from '../../component/footer/footer.js';

export default class extends Component {
  constructor() {
    super();
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <Header/>
        {this.props.children}
        <Footer/>
      </div>
    )
  }
}
