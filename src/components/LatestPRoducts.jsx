import React from 'react';

const LatestProducts = () => {
    return (
        <div className="latest_products">
            <div className="container">
                <div className="row rellati">
                    <div className="lp_product"></div>
                    <h1>Latest Products</h1>
                    <h3>Shoping made easy or some caption text show here</h3>
                    <img src="images/icon05.jpg" alt="" />
                    <div className="linee"></div>
                    <div id="latest_product_slider" className="owl-carousel testimonial-carousel-main rounded_pro">
                        <div className="item">
                            <div className="lp_round"><a href="#"><img src="images/icon30.jpg" alt="" /></a></div>
                            <a href="#">Product name show here</a>
                            <p>Rs.40.00 </p>
                            <a href="#" className="inqq">Call For Enquiry</a>
                        </div>
                        {/* Other items go here */}
                        <div className="item">
                            <div className="lp_round"><a href="#"><img src="images/icon26.jpg" alt="" /></a></div>
                            <a href="#">Product name show here</a>
                            <p>Rs.40.00 </p>
                            <a href="#" className="inqq">Call For Enquiry</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestProducts;
