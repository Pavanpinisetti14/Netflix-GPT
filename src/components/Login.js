import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/2f8ae902-8efe-49bb-9a91-51b6fcc8bf46/IN-en-20240617-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="BackgroundImg"
        />
      </div>

      <form className="p-12 bg-black absolute w-3/12 my-20 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4 ">Sign In</h1>
        <center>
          <input
            type="text"
            placeholder="E-mail Address"
            className="p-2 my-2 w-full bg-transparent border-2 outline-none rounded-lg"
          />
          <input
            type="Password"
            placeholder="Password"
            className="p-2 my-2 w-full bg-transparent border-2 outline-none rounded-lg"
          />
          <button className="p-4 my-4 bg-red-600 w-full rounded-lg">
            Sign In
          </button>
          <h4 className="font-sans text-slate-400 ">OR</h4>
          <button className="p-2 my-4 font-bold bg-zinc-700 bg-opacity-75 w-full rounded-lg">
            Use a Sign In code
          </button>
          {/* <a href="#">Forgot Password ?</a> */}
          <button>Forgot Password ?</button>
        </center>
        <br></br>
        <div className="text-left flex items-center">
          <input type="checkbox" className="w-5 h-5" name="checkbox_remember" />
          <label className="px-2  justify-center">Remember me</label>
        </div>
        <br></br>
        <h5>
          New To Netflix ? <button className="font-bold">Sign Up Now</button>
        </h5>
      </form>
    </div>
  );
};

export default Login;
