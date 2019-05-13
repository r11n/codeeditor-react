import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCode } from '@fortawesome/free-solid-svg-icons'
const Bar = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    height: '100%',
    minWidth: '40px',
    maxWidth: '20%',
    width: '4vw',
    alignItems: 'center',
    background: '#282828'
}

const BarItem = {
    height: '30px',
    width: '30px',
    color: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'center',
    cursorStyle: 'pointer'
}

const iconStyle = {
    width: '30px'
}

class LeftBar extends Component {
    
    render() {
        return(
            <div style={Bar}>
                <div style={BarItem}>
                    <FontAwesomeIcon icon={faFileCode}/>
                </div>
            </div>
        );
    }
}

export default LeftBar;