import React from "react";
import "./AccountSettings.css";
import account from "../../Assets/AccountSettings/accpic.png"



function Body() {
    return (
        <>
            <div className="main-body">
                {/*info*/}
                <h1 className="acc-title">Account Settings</h1>
                <h2 className="acc-sub-title"> Personal details </h2>
                <p className="details-title"> Update your info
                    <img
                        className="image-acc-pic"
                        src={account}
                        alt="Sri_Lanka_Map"
                    />
                </p>
                <br/>
                <hr className="acc-set-hr"/>



                {/*name*/}
                <p className="details-title">Name
                    <a href="#" className="span-edit">Edit</a>
                </p>
                <p className="updated-details-para">John Andrew</p>

                {/*Edit*/}
                <form>
                    <label>
                        <span className="editable-text-box-name">First name:</span>
                        <input type="text" name="lname" className="acc-text-box" />
                        <span className="editable-text-box-name">Last name:</span>
                        <input type="text" name="lname" className="acc-text-box"/>
                    </label>

                    <button className="name-save-btn save-btn">save</button>

                </form>


                <hr className="acc-set-hr"/>

                {/*display name*/}
                <p className="details-title">Display name
                    <a href="#" className="span-edit">Edit</a>
                </p>
                <p className="update-details-para">Choose a display name</p>

                <form>
                    <label>
                        <span className="editable-text-box-name">Display name:</span>
                        <input type="text" name="displayName" className="acc-text-box display-name-text-box" />
                    </label>

                    <button className="display-name-save-btn save-btn">save</button>
                </form>
                <hr className="acc-set-hr"/>

                {/*email address*/}
                <p className="details-title"> Email address
                    <a href="#" className="span-edit">Edit</a>
                </p>
                <p className="updated-details-para">user@gmail.com</p>
                <p className="update-details-para">This is the email address you use to sign in. It’s also where we send
                    your booking confirmations.</p>
                <hr className="acc-set-hr"/>

                {/*phone number*/}
                <p className="details-title"> Phone number
                    <a href="#" className="span-edit">Verify</a>
                </p>
                <p className="updated-details-para">+94 71 9064 944</p>
                <p className="update-details-para">TTo sign in with this number, first you need to verify it.</p>
                <hr className="acc-set-hr"/>

                {/*birth day*/}
                <p className="details-title"> Date of birth
                    <a href="#" className="span-edit">Edit</a>
                </p>
                <p className="update-details-para"> Enter your date of birth</p>
                <hr className="acc-set-hr"/>

                {/*Nationality*/}
                <p className="details-title"> Nationality
                    <a href="#" className="span-edit">Edit</a>
                </p>
                <p className="update-details-para">Select the country/region you're from</p>
                <hr className="acc-set-hr"/>

                {/*gender*/}
                <p className="details-title"> Gender
                    <a href="#" className="span-edit">Edit</a>
                </p>
                <p className="update-details-para">Select your gender</p>
                <hr className="acc-set-hr"/>

                {/*address*/}
                <p className="details-title"> Address
                    <a href="#" className="span-edit">Edit</a>
                </p>
                <p className="updated-details-para">No:1, Paris, Colombo, Sri lanka</p>
                <hr className="acc-set-hr"/>

                {/*address*/}
                <p className="details-title"> Email notification
                    <a href="#" className="span-edit">Edit</a>
                </p>
                <p className="updated-details-para">user@gmail.com</p>
                <p className="update-details-para">subscribe or unsubscribe from deals and recommendations for this email address.</p>
                <hr className="acc-set-hr"/>

                {/*Preferences*/}
                <h2 className="acc-sub-title"> Preferences </h2>
                <p className="details-title"> Currency
                    <a href="#" className="span-edit">Edit</a>
                </p>
                <p className="update-details-para">€£$ Property currency</p>
                <hr className="acc-set-hr"/>

                {/*Security*/}
                <h2 className="acc-sub-title"> Security</h2>
                <p className="details-title"><a href="/security" className="link-secure">Change your password</a> </p>
                <hr className="acc-set-hr sub-hr"/>



            </div>
        </>
    );
}

export default Body;
