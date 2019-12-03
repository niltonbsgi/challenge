import React from 'react';
import './header-list.scss';    

const HeaderList = () => {
    return (
        <section className="custom-section">
            <div className="display-mode" >
                <i className="fas fa-puzzle-piece style-icons fa-3x"></i>
            </div>
            <div className="display-mode _additional-padding" >
                <label className="display-block">Sport type</label>
                <label className="display-label display-block">Cycling</label>                
            </div>

            <div className="display-mode" >
                <i className="fas fa-trophy style-icons fa-3x"></i>
            </div>
            <div className="display-mode _additional-padding" >
                <label className="display-block">Mode</label>
                <label className="display-label display-block">Advanced</label>                
            </div>

            <div className="display-mode" >
                <i className="fas fa-map-signs style-icons fa-3x"></i>              
            </div>
            <div className="display-mode _additional-padding" >
                <label className="display-block">Route</label>
                <label className="display-label display-block">30 miles</label>                
            </div>
        </section>
    )
}

export default  HeaderList;