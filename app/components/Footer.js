import React from 'react';
import Upload from './Upload';
import styles from '../public/App.css';
const { func } = React.PropTypes;


export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uploaded: false
    };
  }

  render() {
    return (
     <div className={styles.footer}>
      <Upload path="/upload" getImageList={this.props.getImageList }/>
     </div>
     );
  }
}

Footer.PropTypes = {
  getImageList: func
};
