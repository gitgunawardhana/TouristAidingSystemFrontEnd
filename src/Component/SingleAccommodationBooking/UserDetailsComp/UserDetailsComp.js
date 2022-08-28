import React, {useState} from "react";
import "./UserDetailsComp.css"
import PhoneInput from "react-phone-number-input";

function UserDetailsComp() {
    const [value, setValue] = useState()
    return (
        <div className="user-details-body">
            <p className="heading-title">
                Enter Your Details
            </p>
            <p>
                all field is required
            </p>

            <form>
                <div className="row mb-2">
                    <div className="col-4">
                        <div className="form-outline">
                            <label className="form-label form-label-user" htmlFor="form3Example1">First name</label>
                            <input type="text" id="form3Example1" className="form-control input-field-user"/>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="form-outline">
                            <label className="form-label form-label-user" htmlFor="form3Example2">Last name</label>
                            <input type="text" id="form3Example2" className="form-control input-field-user"/>
                        </div>
                    </div>
                </div>
                <div className=" form-outline mb-2">
                    <label className=" form-label form-label-user" htmlFor=" form3Example3">Address</label>
                    <input type=" text" id=" form3Example3" className=" form-control input-field-user input-field-user-width"/>
                </div>

                <div className=" row mb-4">
                    <div className=" col-4">
                        <div className=" form-outline">
                            <label className=" form-label form-label-user" htmlFor=" form3Example1">City</label>
                            <input type=" text" id=" form3Example1" className=" form-control input-field-user"/>
                        </div>
                    </div>
                    <div className=" col-4">
                        <div className=" form-outline">
                            <label className=" form-label form-label-user" htmlFor=" form3Example2">Zip Code</label>
                            <input type=" text" id=" form3Example2" className=" form-control input-field-user"/>
                        </div>
                    </div>
                </div>



                <div className=" row mb-2">
                    <div className=" col-4">
                        <div className=" form-outline">
                            <label className=" form-label form-label-user" htmlFor=" form3Example1">Country</label>
                            <input type=" text" id=" form3Example1" className=" form-control input-field-user"/>
                        </div>
                    </div>
                    <div className=" col-4">
                        <div className=" form-outline">
                            <label className=" form-label form-label-user" htmlFor=" form3Example2">Contact no</label>
                            <input type="tel" id=" form3Example2" className=" form-control input-field-user"/>


                            {/*<label className="reg-ven-label">Phone Number</label>*/}
                            {/*<PhoneInput className="form-control input-field-user"*/}
                            {/*            country="US"*/}
                            {/*            value={value}*/}
                            {/*            onChange={setValue}/>*/}
                        </div>
                    </div>
                </div>


            </form>


        </div>

    );
}

export default UserDetailsComp;