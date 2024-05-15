import GenderCheckBox from "./GenderCheckBox"

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-orange-300 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up <span className="text-cyan-500">VibeSync</span>
        </h1>
        <form>
        <div>
          <label className="label p-2 mt-4">
            <span className="text-base label-text">Full Name</span>
          </label>
          <input type="text" placeholder="John Doe" className="input input-bordered w-full max-w-xs" />
        </div>

        <div>
          <label className="label p-2 mt-4">
            <span className="text-base label-text">Username</span>
          </label>
          <input type="text" placeholder="johndoe" className="input input-bordered w-full max-w-xs" />
        </div>

        <div>
        <label className="label">
            <span className="text-base label-text">Password</span>
          </label>
          <input type="password" placeholder="Enter Password" className="input input-bordered w-full max-w-xs" />
        </div>

        <div>
        <label className="label">
            <span className="text-base label-text">Password</span>
          </label>
          <input type="password" placeholder="Confirm Password" className="input input-bordered w-full max-w-xs" />
        </div>

        <GenderCheckBox/>

        <a className="text-sm hover:underline hover:text-cyan-500 mt-4 inline-block" href="#">Already have an account?</a>
        <div className="flex justify-center pr-4">
        <button className="btn btn-block mt-4">Sign up</button>
        </div>
        </form>
      </div>

    </div>
  )
}

export default SignUp;


// STARTER CODE FOR THIS FILE
// import GenderCheckBox from "./GenderCheckBox"

// const SignUp = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg shadow-md bg-orange-300 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//           Sign Up <span className="text-cyan-500">VibeSync</span>
//         </h1>
//         <form>
//         <div>
//           <label className="label p-2 mt-4">
//             <span className="text-base label-text">Full Name</span>
//           </label>
//           <input type="text" placeholder="John Doe" className="input input-bordered w-full max-w-xs" />
//         </div>

//         <div>
//           <label className="label p-2 mt-4">
//             <span className="text-base label-text">Username</span>
//           </label>
//           <input type="text" placeholder="johndoe" className="input input-bordered w-full max-w-xs" />
//         </div>

//         <div>
//         <label className="label">
//             <span className="text-base label-text">Password</span>
//           </label>
//           <input type="password" placeholder="Enter Password" className="input input-bordered w-full max-w-xs" />
//         </div>

//         <div>
//         <label className="label">
//             <span className="text-base label-text">Password</span>
//           </label>
//           <input type="password" placeholder="Confirm Password" className="input input-bordered w-full max-w-xs" />
//         </div>

//         <GenderCheckBox/>

//         <a className="text-sm hover:underline hover:text-cyan-500 mt-4 inline-block" href="#">Already have an account?</a>
//         <div className="flex justify-center pr-4">
//         <button className="btn btn-block mt-4">Sign up</button>
//         </div>
//         </form>
//       </div>

//     </div>
//   )
// }

// export default SignUp