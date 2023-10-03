import {FcGoogle} from 'react-icons/fc'
import {BsGithub} from 'react-icons/bs'

const SocialLogin = () => {
    return (
        <div className="w-full">
            <h3 className="text-p text-xl font-bold mb-6">Login With</h3>
            <button className="btn btn-ghost border-1 border-black w-full hover:border-blue-600 hover:text-blue-700 hover:bg-white"><FcGoogle className='text-xl'></FcGoogle> Login With Google</button>
            <button className="btn border-1 border-black w-full hover:border-blue-600 hover:text-blue-700 hover:bg-white mt-2"><BsGithub className='text-xl'></BsGithub>Login With Github</button>
        </div>
    );
};

export default SocialLogin;