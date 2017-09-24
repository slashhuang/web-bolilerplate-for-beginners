import React, {PureComponent} from 'react';
import { Video } from './video';
export class Player extends React.PureComponent {
    render() {
        let src = 'http://tb-video.bdstatic.com/tieba-smallvideo-transcode/62_ab5b58be998d965b5bca6741e668350e_3.mp4';
        let poster = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506264317769&di=ecbe9cd08dd63a21279411bcaf55717d&imgtype=0&src=http%3A%2F%2Fimages.xuejuzi.cn%2F1505%2F1_150528111508_1.jpg';
        let videoProps = {
            src,
            poster,
            autoPlay: true,
            controls: true,
            autoBuffer: true,
        };
        return (
            <div>
                <Video {...videoProps}/>
            </div>);
    }
}
