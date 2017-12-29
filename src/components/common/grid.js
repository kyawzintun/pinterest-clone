import React, { Component } from 'react';
import { Grid, Image, Popup } from 'semantic-ui-react';
import Masonry from 'react-masonry-component';
import sizeMe from 'react-sizeme';
import StackGrid, { transitions, easings } from 'react-stack-grid';

import dummy from '../../assets/images/dummy.jpg';
import MoreInfoPopup from '../common/more-info-popup';
import "./grid.css";
const transition = transitions.scaleDown;

class GridImage extends Component {
  render() {
    const { width } = this.props;
    const images = this.props.images.map((image, i) => {
      return (
        <div key={i} className="_grid">
          <div className="_img-g">
            <Image className="_img" size="large" src={require(`../../assets/images/photos/${i+1}.jpg`)} />
          </div>
          <span className="_b-dot">
            <Popup
              trigger={
                <button className="_info-btn">
                  <svg height="5" width="5" viewBox="0 0 24 24" aria-hidden="true" aria-label="" role="img" data-reactid="91">
                    <title data-reactid="92"></title>
                    <path d="M12.00,9.00 C10.34,9.00 9.00,10.34 9.00,12.00 C9.00,13.66 10.34,15.00 12.00,15.00 C13.66,15.00 15.00,13.66 15.00,12.00 C15.00,10.34 13.66,9.00 12.00,9.00 M3.00,9.00 C4.66,9.00 6.00,10.34 6.00,12.00 C6.00,13.66 4.66,15.00 3.00,15.00 C1.34,15.00 0.00,13.66 0.00,12.00 C0.00,10.34 1.34,9.00 3.00,9.00 Z M21.00,9.00 C22.66,9.00 24.00,10.34 24.00,12.00 C24.00,13.66 22.66,15.00 21.00,15.00 C19.34,15.00 18.00,13.66 18.00,12.00 C18.00,10.34 19.34,9.00 21.00,9.00 Z" data-reactid="93"></path>
                  </svg>
                </button>
              }
              on='click'
              position='bottom right'
              content={
                <MoreInfoPopup />
              }
              className="_i-popup"
            />
          </span>
        </div>
      );
    });

    return (
      <StackGrid 
        monitorImagesLoaded
        columnWidth={300}
        duration={600}
        gutterWidth={15}
        gutterHeight={15}
        easing={easings.cubicOut}
        appearDelay={60}
        appear={transition.appear}
        appeared={transition.appeared}
        enter={transition.enter}
        entered={transition.entered}
        leaved={transition.leaved}
      >
        {images}
      </StackGrid>
    );
  }
}

export default sizeMe()(GridImage);