import React, { Component } from 'react';
import { Image, Popup } from 'semantic-ui-react';
import sizeMe from 'react-sizeme';
import StackGrid, { transitions, easings } from 'react-stack-grid';

import ViewImageModal from '../modal/view-image-modal';
import HoverContent from '../common/hover-content';
import MoreInfoPopup from '../popup/more-info-popup';
import InfoButton from '../button/info-button';
import "./grid.css";
const transition = transitions.scaleDown;

class GridImage extends Component {
  constructor() {
    super();
    this.state = {
      modalOpen: false,
      imgName: ''
    };
  }

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });

  render() {
    const images = this.props.images.map((image, i) => {
      return (
        <div key={i} className="_grid">
          <div className="_img-g" onClick={this.handleOpen}>
            <Image className="_img" size="large" src={image.url} />
            <HoverContent image={image}/>
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
          {/* <ViewImageModal modalOpen={this.state.modalOpen} handleClose={this.handleClose} /> */}
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