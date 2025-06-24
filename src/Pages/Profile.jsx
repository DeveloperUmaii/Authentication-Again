import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvidor";
import { auth } from "../Authentication/Firebase.config";

const Profile = () => {
    const { user, upDateUserProfileNow, setUser } = useContext(AuthContext)
    console.log(user)
    // console.log(user?.auth?.displayName)

    const handleUpdateProfile = (e) => {
        e.preventDefault();
        const form = e.target;
        const displayName = form.displayName.value;
        const photoURL = form.photoURL.value;

        upDateUserProfileNow(displayName, photoURL)
            .then(() => {
                const updatedUser = auth.currentUser; // এখনকার ইউজার
                setUser(updatedUser); // ইউজার context এ বসাও
                console.log({ displayName, photoURL });
            })
            .catch((error) => {
                console.error("Profile update failed:", error.message);
            });


        //  console.log({name, image, email, password})

        //  .then(result =>{ 
        //     setUser(result.user),
        //     console.log(result.user)
        //  })
        //    .catch((error) => {
        //      const errorCode = error.code;
        //      const errorMessage = error.message;
        //      // ..
        //    });
        //      console.log({name, image, email, password})
        //   const displayName = user.displayName;
        //   const email = user.email;
        //   const photoURL = user.photoURL;
    }

    return (
        <div className="bg-[#12ff0a3b] min-h-screen  flex items-center justify-center">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Update Now!</h1>
                    <p className="py-6">
                        Join us and enjoy amazing features. Register with your details to get started.
                    </p>
                </div>
                <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="flex items-center justify-between mt-4 mx-7">
                        <span className="w-1/5 border-b  lg:w-1/4"></span>
                        <div className="text-xs text-center text-gray-500 uppercase  hover:underline">Update Profile</div>
                        <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
                    </div>
                    <form onSubmit={handleUpdateProfile} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input
                                defaultValue={user?.displayName || 'name !!!!'}
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
                                defaultValue={user?.photoURL || 'image !!!!'}
                                name="photoURL"
                                type="url"
                                placeholder="Photo UrL"
                                className="input input-bordered"
                                required
                            />
                        </div>

                        <div className="form-control mt-6 flex justify-center">
                            <button type="submit" className="btn btn-neutral">Update</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Profile;