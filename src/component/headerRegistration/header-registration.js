import React from 'react';
import './header-registration.scss';  

const HeaderRegistration = () => {
    return (
        <section style={{paddingLeft: '30px'}}>
           
            <div className="header">
                <h1>Registration</h1>
            </div>

            <div className="header-bar"/>
                        
            <div className="display-mode-header" >
                <label>Need Help?</label>
            </div>

            <div className="display-mode-header" >
                <label>Why Register?</label>
            </div>

            <div className="display-mode-header" >
                <label>What people are saying...</label>
            </div>
            <br/>
            <div className="detail-header">
                <div className="display-icon">
                    <i className="fas fa-life-ring fa-3x"></i>
                </div>
                <p className="display-paragraph">
                    Lorem Ipsum is simply dummy text of the printing
                    and typesetting industry. Lorem Ipsum has been the
                    industry's...
                </p>                
            </div>
            <div className="detail-header">
                <div className="display-icon">
                    <i className="fas fa-heartbeat fa-3x"></i>
                </div>
                <p className="display-paragraph">
                    Lorem Ipsum is simply dummy text of the printing
                    and typesetting industry. Lorem Ipsum has been the
                    industry's...
                </p>
            </div>

            <div className="detail-header">
                <div className="display-icon">
                    <i className="fas fa-smile fa-3x"></i>
                </div>
                <p className="display-paragraph">
                    Lorem Ipsum is simply dummy text of the printing
                    and typesetting industry. Lorem Ipsum has been the
                    industry's...
                </p>
            </div>

        </section>
    )
}

export default  HeaderRegistration;