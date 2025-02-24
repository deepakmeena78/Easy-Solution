import React from "react";

const SignUp = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 p-6">
      {/* Left Box - Image (Mobile pe hidden) */}
      <div className="hidden md:flex w-1/2 justify-center items-center">
        <img
          src="https://source.unsplash.com/600x600/?technology"
          alt="Signup"
          className="w-3/4 rounded-lg shadow-lg"
        />
      </div>

      {/* Right Box - Form (Always visible) */}
      <div className="w-full md:w-1/2 bg-white rounded-lg shadow p-8">
        <h1 className="text-xl font-bold text-gray-900 md:text-2xl text-center">
          Turn <span className="text-green-600">Scrap</span> into Savings Sign Up Now!
        </h1>

        <form className="grid grid-cols-1 gap-4 mt-4">
          <input type="text" name="name" placeholder="Name" className="input-field" required />
          <input type="email" name="email" placeholder="Email" className="input-field" required />
          <input type="text" name="mobile" placeholder="Mobile" className="input-field" required />
          <input type="password" name="password" placeholder="Password" className="input-field" required />
          <input type="password" name="confirmPassword" placeholder="Confirm Password" className="input-field" required />

          <button type="submit" className="w-full text-white bg-green-600 hover:bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5">
            Sign Up
          </button>

          <p className="text-sm text-gray-500 text-center">
            Already have an account? <a href="#" className="text-green-600 hover:underline">Log in</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
