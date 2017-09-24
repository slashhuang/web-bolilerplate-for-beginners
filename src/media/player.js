import React, {PureComponent} from 'react';
import { Video } from './video';
export class Player extends React.PureComponent {
    constructor() {
        super();
        this.videoRef = null;
    }
    render() {
        let src = 'http://tb-video.bdstatic.com/tieba-smallvideo-transcode/62_ab5b58be998d965b5bca6741e668350e_3.mp4';
        let poster = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506264317769&di=ecbe9cd08dd63a21279411bcaf55717d&imgtype=0&src=http%3A%2F%2Fimages.xuejuzi.cn%2F1505%2F1_150528111508_1.jpg';
        let videoProps = {
            src,
            poster,
            // autoPlay: true,
            controls: true,
            playsInline: true,
            // width: '100px',
            // height: '200px',
        };
        return (
            <div>
                <Video {...videoProps}
                       ref={(videoRef) => {
                            if (videoRef) {
                                this.videoRef = videoRef.videoRef
                            }
                        }}/>
                <button onClick={this.forward}>+3s</button>
            </div>);
    }
    forward = () => {
        if (this.videoRef) {
            this.videoRef.currentTime = this.videoRef.currentTime + 3;
        }
    }
}

// set get
