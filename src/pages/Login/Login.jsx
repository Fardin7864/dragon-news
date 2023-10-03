import { useContext, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
    const [formData, setFormData] = useState({
        name: '',
        photoURL: '',
        email: '',
        password: '',
        termsAndConditions: false,
      });
      const [error, setError] = useState();
      const {logInwithEmailandPass} = useContext(AuthContext);
      const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
    
        setFormData({
          ...formData,
          [name]: newValue,
        });
      };


      const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password.length < 6) {
            setError('Password is ivalid!')
        }else{
            logInwithEmailandPass(formData.email, formData.password)
            .then(() => {
                navigate('/')
            })
            .catch(err => {
                if (err.message === 'Firebase: Error (auth/network-request-failed).') {
                    setError('Please check Your Network!!')
                }
                
            })
        }
      };

      

    return (
        <>
        <Navbar></Navbar>
        <div className="min-h-screen flex items-center justify-center bg-gray-100 pt-20">
          <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-4">Log In</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-600">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-600">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                  required
                />
                {error &&
                    <p className="text-red-600">{error}</p>
                }
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600"
                >
                  Log In
                </button>
              </div>
            </form>
            <p className=" mt-3 text-sm">Don't have account? <Link to='/signup' className="text-blue-600">Sign Up</Link></p>
          </div>
        </div>
        </>
    );
};

export default Login;