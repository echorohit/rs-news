import React, { Component } from 'react';
import './App.css';
import img_elImage from './images/OnboardingScreen_elImage_363339.jpg';

// UI framework component imports
import Button from 'muicss/lib/react/button';
import Appbar from 'muicss/lib/react/appbar';


export default class OnboardingScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo, ds_userEmail, ds_userFullName

  constructor(props) {
    super(props);
    
    this.state = {
      fullName: this.props.ds_userFullName,
      email: this.props.ds_userEmail,
      ci: 0,
    };
  }

  textInputChanged_fullName = (event) => {
    this.setState({fullName: event.target.value});
    this.props.appActions.updateDataSlot("ds_userFullName", event.target.value);
  }
  
  textInputChanged_email = (event) => {
    this.setState({email: event.target.value});
    this.props.appActions.updateDataSlot("ds_userEmail", event.target.value);
  }
  
  onClick_elButton = (ev) => {
    let newVal = this.state.email;
    this.props.appActions.updateDataSlot('ds_userEmail', newVal);
  
    localStorage.setItem('email', this.state.email);
    localStorage.setItem('fullName', this.state.fullName);
    
    console.log(localStorage.getItem('email'));
    console.log(localStorage.getItem('fullName'));

    this.setState({
      ci : ci + 1
    })
  
    console.log(this.state.ci);
     
  
    // Go to screen 'News'
    this.props.appActions.goToScreen('news', { transitionId: 'fadeIn' });
  
  }
  
  
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
    const style_image = {
        backgroundImage: 'url('+img_elImage+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
     };
    const style_image_outer = {
        pointerEvents: 'none',
     };
    const style_fullName = {
        display: 'block',
        backgroundColor: 'white',
        paddingLeft: '1rem',
        boxSizing: 'border-box', // ensures padding won't expand element's outer size
     };
    const value_fullName = this.props.ds_userFullName;
    
    let transformPropValue_email = (input) => {
      // This function modifies the value for property 'text'.
      // There is a variable named 'input' that provides the property value.
      console.log(input)
      return input;
    }
    const style_email = {
        display: 'block',
        backgroundColor: 'white',
        paddingLeft: '1rem',
        boxSizing: 'border-box', // ensures padding won't expand element's outer size
     };
    const value_email = transformPropValue_email(this.props.ds_userEmail);
    
    const style_button = {
        display: 'block',
        textAlign: 'center',
     };
    const style_button_outer = {
        cursor: 'pointer',
     };
    
    return (
      <div className="AppScreen OnboardingScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='elImage' style={style_image_outer}>
            <div style={style_image} />
          
          </div>
          
          <div className='baseFont elFullName'>
            <input style={style_fullName} type="text" placeholder={this.props.locStrings.onboarding_field_941654} onChange={this.textInputChanged_fullName} defaultValue={value_fullName !== undefined ? value_fullName : ''}  />
          
          </div>
          
          <div className='baseFont elEmail'>
            <input style={style_email} type="email" placeholder={this.props.locStrings.onboarding_field2_681012} onChange={this.textInputChanged_email} defaultValue={value_email !== undefined ? value_email : ''}  />
          
          </div>
          
          <div className='actionFont elButton' style={style_button_outer}>
            <Button style={style_button}  color="accent" onClick={this.onClick_elButton} >
              {this.props.locStrings.onboarding_button_252846}
            </Button>
          
          </div>
          
        </div>
        <Appbar className="navBar">
          <div className="title">Onboarding</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }></div>
        </Appbar>
        
      </div>
    )
  }
  

}
