import React, {PureComponent} from 'react';
export class Video extends React.PureComponent {
    render() {
        return (
            <video {...this.props}
                ref={(video) => {
                    this.videoRef = video;
                }}>
                {this.renderChildren()}
            </video>);
    }
    renderChildren() {
        return null;
    }
}
