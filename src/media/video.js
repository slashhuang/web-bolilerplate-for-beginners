import React, {PureComponent} from 'react';
export class Video extends React.PureComponent {
    render() {
        return (
            <video {...this.props}>
                {this.renderChildren()}
            </video>);
    }
    renderChildren() {
        return null;
    }
}
