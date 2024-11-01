import './Background.css';
import video1 from '../../Assets/lambo.mp4';
import image1 from '../../Assets/lambo1.png';
import image2 from '../../Assets/lambo2.png';
import image3 from '../../Assets/lambo3.png';

const Background = ({ playStatus, heroCount, videoRef }) => {
    if (playStatus) {
        return (
            <video ref={videoRef} className='background' autoPlay loop muted>
                <source src={video1} type='video/mp4' />
                Your browser does not support the video tag.
            </video>
        );
    } else if (heroCount === 0) {
        return <img src={image1} className='background' alt="" />;
    } else if (heroCount === 1) {
        return <img src={image2} className='background' alt="" />;
    } else if (heroCount === 2) {
        return <img src={image3} className='background' alt="" />;
    }

    return null; // Handle cases where none of the conditions match
};

export default Background;
