import React, { Component } from 'react';

export class SlideShow extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
        };

        this._handleClick = this._handleClick.bind(this);
    }

    componentWillUnmount() {
    }

    componentDidMount() {
    }

    _handleClick(e) {
        this.setState({
        })
    }

    render() {
        return (
            <div>
                <button onClick={this._handleClick}>撥放</button>
            </div>
        );
    }
}

SlideShow.defaultProps = {
}
