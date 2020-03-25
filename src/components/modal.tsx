import React, { Component, MouseEvent } from 'react';

export default class Modal extends Component {
    handleClick(event: MouseEvent) {
        this.props.toggle()
    }

    render() {
        <div className="modal">
            <div className="modal_content">
                <span className="close" onClick={this.handleClick}>&times</span>
            </div>
        </div>
    }
}