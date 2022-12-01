import React ,{useState} from "react";
import { Link ,useNavigate} from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, signUp } = UserAuth();
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="w-full h-screen">
        <img
          className="absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/0678255b-ecfd-4775-999a-0680d539f07c/2f11b3a5-ff8f-41a5-8202-e7631372ae18/ET-en-20221128-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt=""
        />
        <div className=" bg-black/60 fixed top-0 left-0 w-full h-screen">
          <div className="fixed w-full px-4 py-24 z-50 ">
            <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white rounded-xl">
              <div className="max-w-[320px] mx-auto py-16">
                <h1 className="text-3xl font-bold">Sign Up</h1>
                <form
                 
                  className="w-full flex flex-col py-4"
                >
                  <input
                  onChange={(e) => setEmail(e.target.value)}
                    className="p-3 my-2 bg-gray-700 rounded"
                    type="email"
                    placeholder="Email"
                  />
                  <input
                  onChange={(e) => setPassword(e.target.value)}

                    className="p-3 my-2 bg-gray-700 rounded"
                    type="password"
                    placeholder="Password"
                  />
                  <button onClick={handleSubmit} className="bg-red-600 py-3 my-6 rounded font-bold">
                    Sign Up
                  </button>
                  <div className="flex items-center justify-between">
                    <p>
                      <input className="mr-2" type="checkbox" />
                      Remember me
                    </p>
                    <p>Need Help?</p>
                  </div>
                  <p className="py-14">
                    <span className="text-gray-400">
                      Already subscribed to Netflix?
                    </span>
                    <Link to="/login">Sign In</Link>{" "}
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
