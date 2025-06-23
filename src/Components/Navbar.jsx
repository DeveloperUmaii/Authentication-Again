import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../Authentication/AuthProvidor';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {

        logOut()
        .then((result) => 
            console.log(result.user),
            console.log('sign outtttttttt')
        // Sign-out successul.
        ).catch((error) => { console.log(error.message)});
  }
return (
    <div>
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <NavLink to='/' className="btn btn-ghost text-xl"    >Home</NavLink>
                        <NavLink to='/login' className="btn btn-ghost text-xl"   >LogIn</NavLink>
                        <NavLink to='/register' className="btn btn-ghost text-xl">Register</NavLink>
                        <NavLink to='/secret' className="btn btn-ghost text-xl"  >Secret</NavLink>
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <NavLink to='/' className="btn btn-ghost text-xl">Home</NavLink>
                <NavLink to='/login' className="btn btn-ghost text-xl">LogIn</NavLink>
                <NavLink to='/register' className="btn btn-ghost text-xl">Register</NavLink>
                <NavLink to='/secret' className="btn btn-ghost text-xl">Secret</NavLink>
            </div>

            <div className="navbar-end">
                {user ? <div className=""><h1>{user?.email}</h1>
                    <button onClick={handleLogOut} className="btn btn-ghost btn-circle">
                        Log Out
                    </button>
                </div>
                    :
                    ''}

                {/* <label className="flex cursor-pointer gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <circle cx="12" cy="12" r="5" />
                            <path
                                d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                        </svg>
                        <input type="checkbox" value="synthwave" className="toggle theme-controller" />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                    </label> */}
            </div>
        </div>
    </div>
);
};

export default Navbar;