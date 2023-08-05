import axios from 'axios';
import React, { useEffect, useState } from 'react';

const EditProfileSection = () => {
    const [name, setName] = useState()
    const [phone, setPhone] = useState()
    const [email, setEmail] = useState()
    const [userDetails, setUserDetails] = useState({})

    useEffect(() => {
        const user = localStorage.getItem('userDetails')
        setUserDetails(JSON.parse(user))
    }, [])

    // console.log('Edit Profile', (userDetails))

    const handleEditProfile = async (e) => {
        e.preventDefault()
        const token = localStorage.getItem('userToken')
        console.log(name, email, phone)
        console.log(token)
        if (!isValidFullName(name)) {
            alert("Please enter a valid full name.");
            return;
        }

        if (!isValidEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (!isValidMobileNumber(phone)) {
            alert("Please enter a valid mobile number.");
            return;
        }

        try {
            const response = await axios.post(
                "https://phpwebdevelopmentservices.com/project-react-backend/api/edit-profile",
                { name, email, phone },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`, // Replace with your actual access token
                    },
                }
            );

            console.log(response.data); // This should log the response from the API
            if (response.data.error) {
                const errorMessages = Object.values(response.data.error).flat();
                window.alert(errorMessages.join("\n"));
                return;
            } else {
                const profileData = {
                    name: response.data.userdata.name,
                    email: response.data.userdata.email,
                    phone: response.data.userdata.phone
                }
                localStorage.removeItem('userDetails'); // Remove the old user details
                localStorage.setItem('userDetails', JSON.stringify(profileData)); // Save the new updated details
                window.alert(response.data.result.message)
                setUserDetails(profileData)
            }


        } catch (error) {
            console.error("Error occurred while submitting the form:", error);
            // Handle the error here
            // Show an error message to the user
            window.alert("An error occurred during registration. Please try again.");
        }
    }


    const isValidFullName = (fullName) => {
        // Basic validation for full name: Should not be empty
        return fullName.trim() !== "";
    };

    const isValidEmail = (email) => {
        // Basic validation for email address using regular expression
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    const isValidMobileNumber = (mobileNumber) => {
        // Basic validation for mobile number: Should be a 10-digit number
        return /^\d{10}$/.test(mobileNumber);
    };

    return (
        <>
            <section class="mainDasbordsec">
                <div class="container">
                    <div class="mainDasbordInr">
                        <div class="row">
                            <div class="col-lg-3 col-md-12 col-sm-12 pl-0">
                                <div class="dasbordLeftsec">
                                    <a href="#url" class="showmeu" data-toggle="collapse" data-target="#demo"><i class="fa fa-bars"></i>Show Menus</a>
                                    <div class="dasbordLeft ">
                                        <div class="profibx">
                                            <em><img src="images/dachprofi.jpg" alt="" /></em>
                                            <strong>Name:{userDetails.name}</strong>
                                            <strong>Email:{userDetails.email}</strong>
                                            <strong>Phone:{userDetails.phone}</strong>
                                            <ul>
                                                <li><a href="#"><img src="images/star1.png" alt="" /></a></li>
                                                <li><a href="#"><img src="images/star1.png" alt="" /></a></li>
                                                <li><a href="#"><img src="images/star1.png" alt="" /></a></li>
                                                <li><a href="#"><img src="images/star1.png" alt="" /></a></li>
                                                <li><a href="#"><img src="images/star2.png" alt="" /></a></li>
                                                <li><span>(410)</span></li>
                                            </ul>
                                        </div>
                                        <div class="dasbordLeftlink">
                                            <ul>
                                                <li><a href="#">
                                                    <span>
                                                        <img src="images/dashico1.png" alt="" class="dashico1" />
                                                    </span>
                                                    Dashboard
                                                </a></li>
                                                <li><a href="#" class="activ">
                                                    <span>
                                                        <img src="images/dashico2.png" alt="" class="dashico1" />
                                                    </span>
                                                    Edit Profile
                                                </a></li>
                                                <li><a href="#">
                                                    <span>
                                                        <img src="images/dashico3.png" alt="" class="dashico1" />
                                                    </span>
                                                    My Order
                                                </a></li>
                                                <li><a href="#">
                                                    <span>
                                                        <img src="images/dashico10.png" alt="" class="dashico1" />
                                                    </span>
                                                    My Favorite
                                                </a></li>
                                                <li><a href="#">
                                                    <span>
                                                        <img src="images/dashico4.png" alt="" class="dashico1" />
                                                    </span>
                                                    Reviews
                                                </a></li>

                                                <li><a href="#">
                                                    <span>
                                                        <img src="images/dashico7.png" alt="" class="dashico1" />
                                                    </span>
                                                    Messages<em>10</em>
                                                </a></li>
                                                <li><a href="#">
                                                    <span>
                                                        <img src="images/dashico8.png" alt="" class="dashico1" />
                                                    </span>
                                                    Notifications
                                                    <em>14</em>
                                                </a></li>
                                                <li><a href="login.html">
                                                    <span>
                                                        <img src="images/dashico9.png" alt="" class="dashico1" />
                                                    </span>
                                                    Log Out

                                                </a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-9 col-md-12 col-sm-12 pr-0">
                                <div class="dasbordRightlink">
                                    <h1>Edit Profile</h1>
                                    <div class="dasbordRightBody">

                                        <div class="editProformBx">
                                            <form action="edit-profile-service-offered.html">
                                                <div class="editProformir">

                                                    <div class="row">
                                                        <div class="col-md-4 col-sm-12">
                                                            <div class="iputBx">
                                                                <label>Name</label>
                                                                <input
                                                                    type="text"
                                                                    placeholder="Enter here"
                                                                    value={name}
                                                                    onChange={(e) => setName(e.target.value)}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div class="col-md-4 col-sm-12">
                                                            <div class="iputBx">
                                                                <label>Email</label>
                                                                <input
                                                                    type="text"
                                                                    placeholder="Enter here"
                                                                    value={email}
                                                                    onChange={(e) => setEmail(e.target.value)}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div class="col-md-4 col-sm-12">
                                                            <div class="iputBx">
                                                                <label>Phone</label>
                                                                <input
                                                                    type="text"
                                                                    placeholder="Enter here"
                                                                    value={phone}
                                                                    onChange={(e) => setPhone(e.target.value)}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-12">
                                                            <div class="iputBx">
                                                                <label>About me</label>
                                                                <textarea placeholder="Enter your description here..."></textarea>
                                                            </div>
                                                        </div>



                                                        <div class="col-md-5 col-sm-6">
                                                            <div class="iputBx">
                                                                <label>Date of Birth</label>
                                                                <input type="text" class="datepicker" placeholder="Enter here" />
                                                            </div>
                                                        </div>

                                                        <div class="col-md-4 col-sm-6">
                                                            <div class="genfil">
                                                                <span>Gender</span>
                                                                <ul>
                                                                    <li>
                                                                        <input type="radio" id="radio1" name="radios" value="all" checked />
                                                                        <label for="radio1">Male</label>
                                                                    </li>
                                                                    <li>
                                                                        <input type="radio" id="radio2" name="radios" value="all" />
                                                                        <label for="radio2">Female</label>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>

                                                        <div class="col-sm-12">
                                                            <div class="form_group edt_checkk">
                                                                <label class="search_label">Travel</label>
                                                                <ul class="c_ul">
                                                                    <li>
                                                                        <label class="contect_container_checkBox">Bus
                                                                            <input type="checkbox" checked="" name="text" />
                                                                            <span class="contect_checkmark"></span>
                                                                        </label>
                                                                    </li>
                                                                    <li>
                                                                        <label class="contect_container_checkBox">Car
                                                                            <input type="checkbox" name="text" />
                                                                            <span class="contect_checkmark"></span>
                                                                        </label>
                                                                    </li>
                                                                    <li>
                                                                        <label class="contect_container_checkBox">Track
                                                                            <input type="checkbox" name="text" />
                                                                            <span class="contect_checkmark"></span>
                                                                        </label>
                                                                    </li>
                                                                    <li>
                                                                        <label class="contect_container_checkBox">Walk
                                                                            <input type="checkbox" name="text" />
                                                                            <span class="contect_checkmark"></span>
                                                                        </label>
                                                                    </li>
                                                                    <li>
                                                                        <label class="contect_container_checkBox">Scooter
                                                                            <input type="checkbox" name="text" />
                                                                            <span class="contect_checkmark"></span>
                                                                        </label>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>

                                                        <div className="col-sm-12 col-md-12">
                                                            <div className="form_fild_area_m frm_grp arro">
                                                                <label>Language</label>
                                                                <select data-placeholder="Select" className="chosen-select" multiple tabIndex="4">
                                                                    <option value=""></option>
                                                                    <option value="">Htmuyyiyyuyu uyytuyl</option>
                                                                    <option value="">Htmuyyiyyuyu uyytuyl</option>
                                                                    <option value="">Htmuyyiyyuyu uyytuyl</option>
                                                                    <option value="">Htmuyyiyyuyu uyytuyl</option>
                                                                </select>
                                                            </div>
                                                        </div>


                                                        <div class="col-sm-12">
                                                            <div class="uplodimg">
                                                                <span>Profile Image</span>
                                                                <div class="uplodimgfil">
                                                                    <input type="file" name="file-1[]" id="file-1" class="inputfile inputfile-1" data-multiple-caption="{count} files selected" multiple />
                                                                    <label for="file-1">Click here to Upload Profile Image<img src="images/clickhe.png" alt="" /></label>
                                                                </div>
                                                                <div class="uplodimgfilimg">
                                                                    <em><img src="images/uplodimg.jpg" alt="" /></em>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>



                                                    <div class="locatioSec">
                                                        <h3>Location</h3>
                                                        <div class="row">
                                                            <div class="col-md-4 col-sm-6">
                                                                <div class="iputBx">
                                                                    <label>Country</label>
                                                                    <select>
                                                                        <option>Select</option>
                                                                        <option>Select1</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-4 col-sm-6">
                                                                <div class="iputBx">
                                                                    <label>State</label>
                                                                    <input type="text" placeholder="Enter here" />
                                                                </div>
                                                            </div>
                                                            <div class="col-md-4 col-sm-12">
                                                                <div class="iputBx">
                                                                    <label>City</label>
                                                                    <input type="text" placeholder="Enter your full address" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div class="locatioSec">
                                                        <h3>Change password</h3>
                                                        <div class="row">
                                                            <div class="col-md-4 col-sm-6">
                                                                <div class="iputBx">
                                                                    <label>Current password</label>
                                                                    <input type="password" placeholder="Enter here" />
                                                                </div>
                                                            </div>
                                                            <div class="col-md-4 col-sm-6">
                                                                <div class="iputBx">
                                                                    <label>New password</label>
                                                                    <input type="password" placeholder="Enter here" />
                                                                </div>
                                                            </div>
                                                            <div class="col-md-4 col-sm-12">
                                                                <div class="iputBx">
                                                                    <label>Confirm password</label>
                                                                    <input type="password" placeholder="Enter here" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div class="footdashSec">
                                                        <input
                                                            type="submit"
                                                            value="Save all changes"
                                                            className="subbtn"
                                                            onClick={handleEditProfile}
                                                        />
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default EditProfileSection;
