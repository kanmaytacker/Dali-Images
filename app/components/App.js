import React from 'react';
import styles from '../public/App.css';
import Footer from './Footer';
import Preview from './Preview';
import { Header, Image } from 'semantic-ui-react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { imageUrls: []};
    this.getImageList = this.getImageList.bind(this);
  }

  getImageList(imageUrls) {
    this.setState({
      imageUrls
    });
  }

  render() {
    return (
            <div>
              <Header as="h1" block className={styles.header} style={{background: '#755b79'}}>
                <Image shape="circular" src="https://baterbys.com/wp-content/uploads/2014/06/salvador-dali2.jpg"/> Dali
              </Header>
              <Preview imageUrls={this.state.imageUrls}/>

              <Footer getImageList={this.getImageList} />
            </div>
            );
  }
}
