import React, { Component } from 'react';
import { Image, Popup } from 'semantic-ui-react';
import sizeMe from 'react-sizeme';
import StackGrid, { transitions, easings } from 'react-stack-grid';

import HoverContent from '../common/hover-content';
import MoreInfoPopup from '../popup/more-info-popup';
import InfoButton from '../button/info-button';
import "./grid.css";
const transition = transitions.scaleDown;

class GridImage extends Component {
  render() {
    const images = this.props.images.map((image, i) => {
      return (
        <div key={i} className="_grid">
          <div className="_img-g">
            <Image className="_img" size="large" src={require(`../../assets/images/photos/${i+1}.jpg`)} />
            <HoverContent />
          </div>
          <span className="_b-dot">
            <Popup
              trigger={<InfoButton />}
              on='click'
              position='bottom center'
              content={<MoreInfoPopup />}
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