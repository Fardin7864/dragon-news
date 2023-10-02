import { useNavigate, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
const navigate = useNavigate();
  return (
    <div className=" h-full">
     <div className=" flex flex-col justify-center items-center mt-[20%]">
     <h1 className=" text-3xl font-bold text-red-700">Oops!</h1>
      <p className="text-xl">Sorry, an unexpected error has occurred.</p>
      <p className=" font-bold">
        <i>{error.statusText || error.message}</i>
      </p>
      <button onClick={() => navigate(-1)} className="btn btn-warning">Go Back</button>
     </div>
    </div>
  );
};

export default Error;
