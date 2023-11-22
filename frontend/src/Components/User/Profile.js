import React from 'react';
import './Profile.css'
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../Action/userAction';
import ProfileImg from '../../images/Profile.png'

const Profile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const alert = useAlert();

    const { user, loading, isAuthenticated } = useSelector((state) => state.user);


    function logoutUser() {
        dispatch(logout());
        alert.success("Logout Successfully");
        navigate('/');
    }
    return (
        <div>
            {/* <h1>Name: {user.name}</h1>
        <h1>Name: {user.email}</h1>
        <button onClick={logoutUser}>Logout</button> */}
            <div className="container mt-5">

                <div className="row d-flex justify-content-center">

                    <div className="col-md-7">

                        <div className="card p-3 py-4">

                            <div className="text-center">
                                <img src={ProfileImg} width="100" className="rounded-circle" />
                            </div>

                            <div className="text-center mt-3">
                                <span className="bg-secondary p-1 px-4 rounded text-white" onClick={logoutUser}>Logout</span>
                                <h5 className="mt-2 mb-0">{user.name}</h5>
                                <span>{user.email}</span>

                            </div>




                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Profile