import { useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Authentication/AuthProvidor";

const Register = () => {
    const { createUserWithEmail, setUser, upDateUserProfileNow } = useContext(AuthContext)
        const location = useLocation();
        const navigate = useNavigate();
          const from = location?.state?.pathname || '/';

    const handleRegistration = (e) => {
      e.preventDefault();
        const form = e.target;
         const displayName = form.displayName.value;
         const photoURL = form.photoURL.value;
         const email = form.email.value;
         const password = form.password.value;
      
    //  console.log({displayName, image, email, password})
     createUserWithEmail(email, password)
        
     .then(result =>{ 
        upDateUserProfileNow(displayName, photoURL)
        setUser(result.user),
        console.log(result.user)
        navigate(from, {replace:true})
     })
       .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
         // ..
       });
         console.log({displayName, photoURL, email, password})
  }



    return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register Now!</h1>
                    <p className="py-6">
                        Join us and enjoy amazing features. Register with your details to get started.
                    </p>
                </div>
                <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                    {/* sing In with Gogle Button */}
                    <div className="shadow-xl flex cursor-pointer items-center justify-center mt-4 text-gray-600       transition-colors duration-300 transform border rounded-lg   hover:bg-gray-50 mx-6 ">
                        <div className="px-4 py-2">
                           <svg aria-label="Google logo" width="40" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        </div>
                        <span className="w-5/6 px-4 py-3 font-bold text-center">Sign in with Google</span>
                    </div>
                    <div className="flex items-center justify-between mt-4 mx-7">
                        <span className="w-1/5 border-b  lg:w-1/4"></span>
                        <div className="text-xs text-center text-gray-500 uppercase  hover:underline">or login with email</div>
                        <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
                    </div>
                    <form onSubmit={handleRegistration} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input
                                name="displayName"
                                type="text"
                                placeholder="User Name"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo UrL</span>
                            </label>
                            <input
                                name="photoURL"
                                type="url"
                                placeholder="Photo UrL"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                name="email"
                                type="email"
                                placeholder="Email"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                name="password"
                                type="password"
                                placeholder="Password"
                                className="input input-bordered"
                                required
                            />
                        </div>

                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-neutral">Register</button>
                        </div>
                    </form>
                    <div className="flex items-center justify-between mt-0 mb-2 mx-7">
                        <span className="w-1/5 border-b  lg:w-1/4"></span>
                        <NavLink to='/login' className="text-xs text-center text-gray-500 uppercase  hover:underline">or  sign in</NavLink>
                        <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
