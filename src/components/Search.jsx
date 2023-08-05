import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios"

const SearchMainSection = () => {
    const [products, setProducts] = useState([]);
    const [keyword, setKeyword] = useState('');
    const [category, setCategory] = useState('');
    const [subCategories, setSubCategories] = useState([]);
    const [priceRange, setPriceRange] = useState([0, 100]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    const filterProducts = () => {
        console.log(keyword)
        const filtered = products.filter((product) => {
            const productName = product.name.toLowerCase();
            console.log(productName)
            if (keyword && !productName.includes(keyword.toLowerCase())) {
                return false;
            }

            if (category && product.name !== category) {
                return false;
            }

            if (
                subCategories.length > 0 &&
                !subCategories.includes(product.name) &&
                !product.sub_categories.some((subCategory) =>
                    subCategories.includes(subCategory.name)
                )
            ) {
                return false;
            }

            const productPrice = parseFloat(product.price);
            if (productPrice < priceRange[0] || productPrice > priceRange[1]) {
                return false;
            }

            return true;
        });

        setFilteredProducts(filtered);
    };


    const fetchProducts = async () => {
        try {
            const res = await axios.post("https://phpwebdevelopmentservices.com/project-react-backend/api/common-data");
            setProducts(res.data.result.categories);
            setFilteredProducts(res.data.result.categories);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    }

    useEffect(() => {
        fetchProducts()
    }, []);

    const handleKeywordChange = (e) => {
        setKeyword(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    const handleSubCategoryChange = (subCategoryName) => {
        console.log(subCategoryName)
        console.log(subCategories)
        if (subCategories.includes(subCategoryName)) {
            setSubCategories(subCategories.filter((name) => name !== subCategoryName));
        } else {
            setSubCategories([...subCategories, subCategoryName]);
        }
    };

    const handlePriceRangeChange = (e, ui) => {
        setPriceRange(ui.values);
    };

    const handleFilterSubmit = (e) => {
        e.preventDefault();
        filterProducts();
    };


    console.log(products)

    return (
        <div className="search_main_section">
            <div className="container">
                <div className="row res_padd">

                    <div className="bread_crumb">
                        <Link to="/">Home</Link>
                        <span><i className="fa fa-angle-right" aria-hidden="true"></i></span>
                        <a href="#">Vegetables</a>
                    </div>

                    <div className="mobile_filter"> <i className="fa fa-filter" aria-hidden="true"></i>
                        <p>Show Filter</p>
                    </div>

                    <div className="laft_search_panel">
                        <h3>Filter Options</h3>

                        <div className="form_group" style={{ position: 'relative' }}>
                            <input
                                type="text"
                                placeholder="Search Category"
                                className="search-input"
                                value={keyword}
                                onChange={handleKeywordChange} // Connect input to update keyword state
                            />
                            <img src="images/icon36.png" className="search_icon" alt="" />
                        </div>

                        <div className="form_group">
                            <label className="search_label">Category</label>
                            <select
                                className="slectt"
                                value={category}
                                onChange={handleCategoryChange} // Connect select to update category state
                            >
                                <option value="">Select Category</option>
                                <option value="Vegetable">Vegetable</option>
                                <option value="Fruits">Fruits</option>
                                {/* Add other category options */}
                            </select>
                        </div>

                        <div className="form_group">
                            <label className="search_label">Sub Category</label>
                            <ul className="c_ul">
                                {products.map((product) => (
                                    <li key={product.id}>
                                        <label className="contect_container_checkBox">
                                            {product.name}
                                            <input
                                                type="checkbox"
                                                checked={subCategories.includes(product.name)}
                                                onChange={() => handleSubCategoryChange(product.name)}
                                            />
                                            <span className="contect_checkmark"></span>
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="form_group">
                            <label className="search_label">Price Range</label>
                            <div className="slider_rnge">
                                {/* Slider component */}
                                <div
                                    id="slider-range"
                                    className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"
                                >
                                    {/* ...slider range elements... */}
                                </div>
                                <span className="range-text">
                                    <input
                                        type="text"
                                        className="price_numb"
                                        readOnly
                                        id="amount"
                                    />
                                </span>
                            </div>
                        </div>

                        <button type="submit" className="search-submit1" onClick={handleFilterSubmit}>
                            Filter
                        </button>

                    </div>

                    {/* Right Search Panel */}
                    <div className="right_search_panel">
                        <div className="evnt_shot_by_main">
                            <label className="event-sort">Showing 1-20 out of 100 product for Vegetable</label>
                            <div className="sort-filter">
                                <p>Sort by :</p>
                                <select className="sort-select">
                                    <option>Select</option>
                                    <option>Price - Low to High</option>
                                    <option>Price - High to Low</option>
                                </select>
                            </div>
                        </div>

                        {/* Filtered Product Items */}
                        {filteredProducts.map((product) => (
                            <>
                                {/* Map through sub_categories array */}
                                {product.sub_categories.map((subCategory) => (
                                    <div className="search_proo"><div key={subCategory.id}>
                                        <div className="srch_pic_box">
                                            <img src={subCategory.image} alt="" />
                                            <span><a href="#">Call For Enquiry</a></span>
                                            <span><a href="#">{product.slug}</a></span>
                                        </div>
                                        <div className="srch_dtls_box">
                                            <a href="#">{subCategory.name}</a>
                                            <p>Rs. 50</p>
                                        </div>
                                    </div></div>

                                ))}
                            </>


                        ))}





                        {/* More Product Items... */}

                        {/* Pagination */}
                        <div className="pagination_area">
                            <ul>
                                <li><a href="#"><i className="fa fa-angle-left" aria-hidden="true"></i> </a></li>
                                <li><a href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li className="active"><a href="#">3</a></li>
                                <li><a href="#">4</a></li>
                                <li><a href="#">...</a></li>
                                <li><a href="#">25</a></li>
                                <li><a href="#"> <i className="fa fa-angle-right" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SearchMainSection;
