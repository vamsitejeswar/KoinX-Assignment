import React from 'react';
import profile1 from './images/profile1.jpeg';
import profile2 from './images/profile2.jpeg';
import profile3 from './images/profile3.jpeg';

const Sentiments = () => {
    return (
        <div className="bg-white my-4 p-4" style={{borderRadius:"10px"}} id="aboutcoins">
            <h4><b>Team</b></h4>
            <h6 className='pt-3 pb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias unde dignissimos a vero quas expedita animi debitis dolores.</h6>
                {/* profile1 */}
                <div class="row">
                    <div class="col-lg-10 col-md-8 col-12">
                        <div class="card">
                            <div class="row align-items-center">
                                <div class="col-12 col-md-3 text-center">
                                    <img src={profile1} alt="Profile Image" class="profile-img"/>
                                    <h5 class="profile-name">John Smith</h5>
                                    <p class="profile-designation">Designation here</p>
                                </div>
                                <div class="col-12 col-md-9">
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi nisi labore, iusto unde ad architecto quam neque ratione facere? Explicabo optio numquam dolorum, quo blanditiis alias suscipit mollitia quos quod. Animi nisi labore, iusto unde ad architecto quam neque ratione facere?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* profile2 */}
                <div class="row mt-4">
                    <div class="col-lg-10 col-md-8 col-12">
                        <div class="card">
                            <div class="row align-items-center">
                                <div class="col-12 col-md-3 text-center">
                                    <img src={profile2} alt="Profile Image" class="profile-img"/>
                                    <h5 class="profile-name">John Smith</h5>
                                    <p class="profile-designation">Designation here</p>
                                </div>
                                <div class="col-12 col-md-9">
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi nisi labore, iusto unde ad architecto quam neque ratione facere? Explicabo optio numquam dolorum, quo blanditiis alias suscipit mollitia quos quod. Animi nisi labore, iusto unde ad architecto quam neque ratione facere?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* profile3 */}
                <div class="row mt-4">
                    <div class="col-lg-10 col-md-8 col-12">
                        <div class="card">
                            <div class="row align-items-center">
                                <div class="col-12 col-md-3 text-center">
                                    <img src={profile3} alt="Profile Image" class="profile-img"/>
                                    <h5 class="profile-name">John Smith</h5>
                                    <p class="profile-designation">Designation here</p>
                                </div>
                                <div class="col-12 col-md-9">
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi nisi labore, iusto unde ad architecto quam neque ratione facere? Explicabo optio numquam dolorum, quo blanditiis alias suscipit mollitia quos quod. Animi nisi labore, iusto unde ad architecto quam neque ratione facere?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
        </div>
    )
}

export default Sentiments
