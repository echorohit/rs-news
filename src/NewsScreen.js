import React, { Component } from 'react';
import './App.css';


export default class NewsScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo, ds_userEmail, ds_userFullName

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
    if ( !this.props.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    const style_background = {
        width: '100%',
        height: '100%',
     };
    const style_background_outer = {
        backgroundColor: '#f4f4f4',
        pointerEvents: 'none',
     };
    const style_text = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const value_text = this.props.ds_userEmail;
    
    const style_text_outer = {
        pointerEvents: 'none',
     };
    const style_text2 = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const value_text2 = this.props.ds_userFullName;
    
    const style_text2_outer = {
        pointerEvents: 'none',
     };
    
    return (
      <div className="AppScreen NewsScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='baseFont elText' style={style_text_outer}>
            <div style={style_text}>
              <div>{value_text !== undefined ? value_text : (<span className="propValueMissing">{this.props.locStrings.news_text_637033}</span>)}</div>
            </div>
          
          </div>
          
          <div className='baseFont elText2' style={style_text2_outer}>
            <div style={style_text2}>
              <div>{value_text2 !== undefined ? value_text2 : (<span className="propValueMissing">{this.props.locStrings.news_text2_365775}</span>)}</div>
            </div>
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
