import React from 'react';

const Banner = () => {
    return (
        <section className="banner">
            <div id="demo" className="carousel slide" data-ride="carousel">

                {/* Indicators */}
                <div className="container">
                    <div className="row res_padd">
                        <ul className="carousel-indicators">
                            <li data-target="#demo" data-slide-to="0" className="active"></li>
                            <li data-target="#demo" data-slide-to="1"></li>
                            <li data-target="#demo" data-slide-to="2"></li>
                        </ul>
                    </div>
                </div>

                {/* The slideshow */}
                <div className="carousel-inner">

                    <div className="carousel-item active">
                        <img src="images/banner1.jpg" alt="" />
                        <div className="container">
                            <div className="row res_padd">
                                <div className="sliderr_ttxt">
                                    <div className="carousel-caption">
                                        <h3>Quality Assurance</h3>
                                        <p>Free weighting Machine for our members.</p>
                                        <a href="#">Call For Enquiry</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img src="images/banner2.jpg" alt="" />
                        <div className="container">
                            <div className="row res_padd">
                                <div className="sliderr_ttxt">
                                    <div className="carousel-caption">
                                        <h3>Simply Dummy Caption Here</h3>
                                        <p>Free weighting Machine for our members.</p>
                                        <a href="#">Call For Enquiry</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img src="images/banner3.jpg" alt="" />
                        <div className="container">
                            <div className="row res_padd">
                                <div className="sliderr_ttxt">
                                    <div className="carousel-caption">
                                        <h3>Quality Assurance</h3>
                                        <p>Free weighting Machine for our members.</p>
                                        <a href="#">Call For Enquiry</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Banner;
