import { VideoPlayer } from '@videojs-player/react'
import 'video.js/dist/video-js.css'

function Movie() {
    return (
        <VideoPlayer
            src="./video.mp4"
            controls
            loop={true}
            volume={0.6}
            />
    );
}

export default Movie;