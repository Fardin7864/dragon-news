import {FcGoogle} from 'react-icons/fc'
import {BsGithub} from 'react-icons/bs'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const SocialLogin = () => {
    const {socialLogin, google, github} = useContext(AuthContext)
    return (
        <div className="w-full">
            <h3 className="text-p text-xl font-bold mb-6">Login With</h3>
            <button onClick={() => socialLogin(google)} className="btn btn-ghost border-1 border-black w-full hover:border-blue-600 hover:text-blue-700 hover:bg-white"><FcGoogle className='text-xl'></FcGoogle> Login With Google</button>
            <button onClick={()=> socialLogin(github)} className="btn btn-ghost border-1 border-black w-full hover:border-blue-600 hover:text-blue-700 hover:bg-white mt-2"><BsGithub className='text-xl'></BsGithub>Login With Github</button>
        </div>
    );
};

export default SocialLogin;