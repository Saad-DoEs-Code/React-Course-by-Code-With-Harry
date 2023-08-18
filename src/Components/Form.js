import React, { useState } from 'react'

export const Form = () => {

    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const emailOnChange = (event) => {
        setUserEmail(event.target.value);
    }
    const passwordOnchange = (event) => {
        setUserPassword(event.target.value);
    }
    const showConfirmation=()=>{
        alert("You have successfully Signed Up");
    }

    return (
        <div className="container">
            <div className="modal-content rounded-4 shadow">
                <div className="modal-header p-5 pb-4 border-bottom-0">
                    <h1 className="fw-bold mb-0 fs-2">Sign up for free</h1>
                    {/* <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    /> */}
                </div>
                <div className="modal-body p-5 pt-0">
                    <form className="">
                        <div className="form-floating mb-3">
                            <input
                                type="email"
                                className="form-control rounded-3"
                                id="floatingInput"
                                placeholder="name@example.com"
                                value={userEmail}
                                onChange={emailOnChange}
                            />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="password"
                                className="form-control rounded-3"
                                id="floatingPassword"
                                placeholder="Password"
                                value={userPassword}
                                onChange={passwordOnchange}
                            />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                        <button
                            className="w-100 mb-2 btn btn-lg rounded-3 btn-primary"
                            type="submit" onClick={showConfirmation}
                        >
                            Sign up
                        </button>
                    </form>
                </div>

            </div>
        </div>
    )
}
