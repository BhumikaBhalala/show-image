import React from 'react';

class UploadImage extends React.Component {
  state = {
    desktopImage: null,
    tabletImage: null,
    mobileImage: null,
    device: "browser"
  }

  componentDidMount() {
    this.renderContent();
    window.addEventListener('resize', this.renderContent)
  }

  onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let desktopimg = event.target.files[0];
      this.setState({
        desktopImage: URL.createObjectURL(desktopimg)
      });
    }
  };

  onTabletImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let tabletimg = event.target.files[0];
      this.setState({
        tabletImage: URL.createObjectURL(tabletimg)
      });
    }
  };

  onMobileImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let mobileimg = event.target.files[0];
      this.setState({
        mobileImage: URL.createObjectURL(mobileimg)
      });
    }
  };

  renderContent = () => {
    const $windowWidth = window.innerWidth;
    var device = this.state.device;
    if ($windowWidth > 1024) {
      device = "browser";
    }
    else if ($windowWidth > 767) {
      device = "tablet";
    }
    else {
      device = "mobile";
    }
    this.setState({
      device: device
    })
  }

  render() {
    return (
      <div>
        <div>
          <div className="button-wrapper">
            <input type="file" name="desktopImage" onChange={this.onImageChange} />
            <label className="upload-btn">Upload Desktop Image</label>
          </div>
          <div className="button-wrapper">
            <input type="file" name="tabletImage" onChange={this.onTabletImageChange} />
            <label className="upload-btn">Upload Tablet Image</label>
          </div>
          <div className="button-wrapper">
            <input type="file" name="mobileImage" onChange={this.onMobileImageChange} />
            <label className="upload-btn">Upload Mobile Image</label>
          </div>
        </div>

        <div>
          {this.state.device === 'browser' ?
            <img src={this.state.desktopImage} alt={""} /> : ""
          }
          {this.state.device === 'tablet' ?
            <img src={this.state.tabletImage} alt={""} /> : ""
          }
          {this.state.device === 'mobile' ?
            <img src={this.state.mobileImage} alt={""} /> : ""
          }
        </div>
      </div>
    )
  }
}

export default UploadImage;
