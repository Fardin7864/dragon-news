import Findus from '../FindUs/Findus';
import Qzone from '../QZone/Qzone';
import SocialLogin from '../SocialLogin/SocialLogin';

const RightNav = () => {
    return (
        <div>
            <SocialLogin></SocialLogin>
            <Findus></Findus>
            <Qzone></Qzone>
        </div>
    );
};

export default RightNav;