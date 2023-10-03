import { useContext, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
    const [formData, setFormData] = useState({
    name: '',
    photoURL: '',
    email: '',
    password: '',
    termsAndConditions: false,
  });
  const [error, setError] = useState();
  const {createUserWithEmail} = useContext(AuthContext);
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
    setError('')
    if (formData.password.length < 6) {
        setError('Password have to 6 charectar or more!')
    }else{
        createUserWithEmail(formData.email, formData.password)
        .then(() => {
            navigate('/')
        })
        .catch(err => {
          console.log(err.message)
            if (err.message === 'Firebase: Error (auth/network-request-failed).') {
                setError('Please check Your Network!!')
            }else if (err.message === 'Firebase: Error (auth/email-already-in-use).') {
              setError("This email address already used!")
            }
        })
    }

    // Add your form submission logic here
    // formData will contain the form data

    console.log(formData);
  };

  return (
    <>
    <Navbar formData={formData}></Navbar>
    <div className="min-h-screen flex items-center justify-center bg-gray-100 pt-20">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="photoURL" className="block text-gray-600">Photo URL</label>
            <input
              type="text"
              id="photoURL"
              name="photoURL"
              value={formData.photoURL}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
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
          <div className="mb-4">
            <input
              type="checkbox"
              id="termsAndConditions"
              name="termsAndConditions"
              checked={formData.termsAndConditions}
              onChange={handleChange}
              className="mr-2"
              required
            />
            <label htmlFor="termsAndConditions" className="text-gray-600">
              I agree to the Terms and Conditions
            </label>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600"
            >
              Sign Up
            </button>
          </div>
        </form>
        <p className=" mt-3 text-sm">Already have account? <Link to='/login' className="text-blue-600">LogIn</Link></p>
      </div>
    </div>
    </>
  );
};


export default Signup;