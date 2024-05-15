const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto" >
      <div className="w-full p-6 rounded-lg shadow-md bg-orange-300 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 z-10">
      <h1 className="text-3xl font-semibold text-center text-gray-300 ">Login
        <span className="text-cyan-500"> VibeSync </span>
      </h1>
      <form >
        <div>
          <label className="label p-2 mt-4">
            <span className="text-base label-text">Username</span>
          </label>
          <input type="text" placeholder="Enter Username" className="input input-bordered w-full max-w-xs" />
        </div>

        <div>
        <label className="label">
            <span className="text-base label-text">Password</span>
          </label>
          <input type="password" placeholder="Enter Password" className="input input-bordered w-full max-w-xs" />
        </div>
        <a href="#" className="text-sm hover:underline hover:text-cyan-500 mt-2 inline-block">{"Dont't"} have an account?</a>
        <div className="flex justify-center pr-4">
        <button className="btn btn-block mt-4">Login</button>
        </div>
      </form>
      </div>

    </div>
  )
}

export default Login;

// STARTER CODE FOR THIS FILE
// const Login = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto" >
//       <div className="w-full p-6 rounded-lg shadow-md bg-orange-300 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 z-10">
//       <h1 className="text-3xl font-semibold text-center text-gray-300 ">Login
//         <span className="text-cyan-500"> VibeSync </span>
//       </h1>
//       <form >
//         <div>
//           <label className="label p-2 mt-4">
//             <span className="text-base label-text">Username</span>
//           </label>
//           <input type="text" placeholder="Enter Username" className="input input-bordered w-full max-w-xs" />
//         </div>

//         <div>
//         <label className="label">
//             <span className="text-base label-text">Password</span>
//           </label>
//           <input type="password" placeholder="Enter Password" className="input input-bordered w-full max-w-xs" />
//         </div>
//         <a href="#" className="text-sm hover:underline hover:text-cyan-500 mt-2 inline-block">{"Dont't"} have an account?</a>
//         <div className="flex justify-center pr-4">
//         <button className="btn btn-block mt-4">Login</button>
//         </div>
//       </form>
//       </div>

//     </div>
//   )
// }

// export default Login;