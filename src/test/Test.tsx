import { Link } from "react-router-dom";

interface IProps {

}

const Test = ({} : IProps) => {

  return (
    
    <> 


<header>
      <div className="bg-gray-900 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">متجري</div>
          <div className="space-x-6">
            <a href="javascript:void(0)" className="text-gray-400 hover:text-white">
              <i className="lni lni-facebook-filled"></i>
            </a>
            <a href="javascript:void(0)" className="text-gray-400 hover:text-white">
              <i className="lni lni-twitter-original"></i>
            </a>
            <a href="javascript:void(0)" className="text-gray-400 hover:text-white">
              <i className="lni lni-instagram"></i>
            </a>
            <a href="javascript:void(0)" className="text-gray-400 hover:text-white">
              <i className="lni lni-skype"></i>
            </a>
          </div>
        </div>
      </div>
    </header>

<section className="hero-area py-12">
      <div className="container mx-auto flex">
        <div className="lg:w-2/3 w-full">
          <div className="relative">
            <div
              className="bg-cover bg-center h-96"
              style={{ backgroundImage: "url(assets/images/hero/slider-bg1.jpg)" }}
            >
              <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white text-center p-6">
                <h2 className="text-3xl font-bold">M75 Sport Watch</h2>
                <p className="my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <h3 className="text-xl font-semibold">Now Only $320.99</h3>
                <a href="product-grids.html" className="btn bg-blue-600 text-white py-2 px-4 rounded mt-4">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 w-full flex flex-col space-y-6">
          <div
            className="hero-small-banner bg-cover bg-center h-48"
            style={{ backgroundImage: "url('assets/images/hero/slider-bnr.jpg')" }}
          >
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white text-center p-4">
              <h2 className="text-2xl font-bold">iPhone 12 Pro Max</h2>
              <h3 className="text-lg">$259.99</h3>
            </div>
          </div>
          <div className="hero-small-banner bg-gray-800 text-white p-6">
            <h2 className="text-2xl font-bold">Weekly Sale!</h2>
            <p>Save up to 50% off all online store items this week.</p>
            <a href="product-grids.html" className="btn bg-blue-600 text-white py-2 px-4 rounded mt-4">
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </section>


     <section className="trending-product py-12">
      <div className="container mx-auto">
        <div className="section-title mb-8 text-center">
          <h2 className="text-3xl font-bold">Trending Products</h2>
          <p>Discover the latest trending products in our store.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="single-product border rounded-lg overflow-hidden">
              <div className="product-image">
                <img src={`assets/images/products/product-${index + 1}.jpg`} alt={`product-${index + 1}`} className="w-full" />
                <div className="button absolute bottom-4 right-4">
                  <a href="product-details.html" className="btn bg-blue-600 text-white py-2 px-4 rounded">
                    <i className="lni lni-cart"></i> Add to Cart
                  </a>
                </div>
              </div>
              <div className="product-info p-4">
                <span className="category text-gray-600">Category</span>
                <h4 className="title text-xl font-semibold mt-2">
                  <a href="product-grids.html">Product Name</a>
                </h4>
                <ul className="review flex space-x-1 mt-2">
                  <li><i className="lni lni-star-filled"></i></li>
                  <li><i className="lni lni-star-filled"></i></li>
                  <li><i className="lni lni-star-filled"></i></li>
                  <li><i className="lni lni-star-filled"></i></li>
                  <li><i className="lni lni-star"></i></li>
                  <li><span className="ml-2 text-sm">4.0 Review(s)</span></li>
                </ul>
                <div className="price mt-4">
                  <span className="text-xl font-semibold">$199.00</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


    <section className="call-action section py-16 bg-gray-100">
      <div className="container mx-auto">
        <div className="row flex justify-center">
          <div className="col-lg-8 col-12 text-center">
            <div className="inner">
              <div className="content">
                <h2 className="text-3xl font-bold my-4">Currently You are using free Lite version of ShopGrids</h2>
                <p className="text-lg my-4">Please, purchase full version of the template to get all pages, features, and commercial license.</p>
                <div className="button">
                  <a href="javascript:void(0)" className="btn px-6 py-3 bg-blue-500 text-white rounded-md">Purchase Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="banner section py-16">
      <div className="container mx-auto">
        <div className="row flex">
          <div className="col-lg-6 col-md-6 col-12 mb-8">
            <div className="single-banner bg-cover bg-center" style={{ backgroundImage: "url('assets/images/banner/banner-1-bg.jpg')" }}>
              <div className="content p-6 bg-opacity-50 bg-black text-white">
                <h2 className="text-2xl font-bold">Smart Watch 2.0</h2>
                <p>Space Gray Aluminum Case with Black/Volt Real Sport Band</p>
                <div className="button mt-4">
                  <a href="product-grids.html" className="btn px-6 py-3 bg-blue-500 text-white rounded-md">View Details</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12 mb-8">
            <div className="single-banner bg-cover bg-center custom-responsive-margin" style={{ backgroundImage: "url('assets/images/banner/banner-2-bg.jpg')" }}>
              <div className="content p-6 bg-opacity-50 bg-black text-white">
                <h2 className="text-2xl font-bold">Smart Headphone</h2>
                <p>Lorem ipsum dolor sit amet, eiusmod tempor incididunt ut labore.</p>
                <div className="button mt-4">
                  <a href="product-grids.html" className="btn px-6 py-3 bg-blue-500 text-white rounded-md">Shop Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="shipping-info py-8 bg-gray-100">
      <div className="container mx-auto">
        <ul className="flex justify-between">
          <li className="flex items-center space-x-4">
            <div className="media-icon">
              <i className="lni lni-delivery text-2xl"></i>
            </div>
            <div className="media-body">
              <h5 className="text-lg">Free Shipping</h5>
              <span>On order over $99</span>
            </div>
          </li>
          <li className="flex items-center space-x-4">
            <div className="media-icon">
              <i className="lni lni-support text-2xl"></i>
            </div>
            <div className="media-body">
              <h5 className="text-lg">24/7 Support</h5>
              <span>Live Chat or Call</span>
            </div>
          </li>
          <li className="flex items-center space-x-4">
            <div className="media-icon">
              <i className="lni lni-credit-cards text-2xl"></i>
            </div>
            <div className="media-body">
              <h5 className="text-lg">Online Payment</h5>
              <span>Secure Payment Services</span>
            </div>
          </li>
          <li className="flex items-center space-x-4">
            <div className="media-icon">
              <i className="lni lni-reload text-2xl"></i>
            </div>
            <div className="media-body">
              <h5 className="text-lg">Easy Return</h5>
              <span>Hassle Free Shopping</span>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <footer className="footer bg-gray-800 text-white py-16">
      <div className="footer-top">
        <div className="container mx-auto">
          <div className="inner-content flex justify-between">
            <div className="col-lg-3 col-md-4 col-12">
              <div className="footer-logo">
                <a href="index.html">
                  <img src="assets/images/logo/white-logo.svg" alt="ShopGrids Logo" />
                </a>
              </div>
            </div>
            <div className="col-lg-9 col-md-8 col-12">
              <div className="footer-newsletter">
                <h4 className="text-2xl">Subscribe to our Newsletter</h4>
                <span>Get all the latest information, Sales, and Offers.</span>
                <form action="#" method="get" target="_blank" className="newsletter-form mt-4">
                  <input name="EMAIL" placeholder="Email address here..." type="email" className="p-2 rounded-md"/>
                  <button className="btn px-6 py-3 bg-blue-500 text-white rounded-md ml-4">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-middle bg-gray-700 py-16">
        <div className="container mx-auto">
          <div className="bottom-inner">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12">
                <h3>Get In Touch With Us</h3>
                <p>Phone: +1 (900) 33 169 7720</p>
                <p>Email: <a href="mailto:support@shopgrids.com">support@shopgrids.com</a></p>
                <ul>
                  <li>Monday-Friday: 9.00 am - 8.00 pm</li>
                  <li>Saturday: 10.00 am - 6.00 pm</li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <h3>Our Mobile App</h3>
                <ul>
                  <li>
                    <a href="javascript:void(0)">
                      <i className="lni lni-apple"></i>
                      <span>Download on the</span>
                      <span>App Store</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i className="lni lni-play-store"></i>
                      <span>Download on the</span>
                      <span>Google Play</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <h3>Information</h3>
                <ul>
                  <li><a href="javascript:void(0)">About Us</a></li>
                  <li><a href="javascript:void(0)">Contact Us</a></li>
                  <li><a href="javascript:void(0)">FAQs</a></li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <h3>Shop Departments</h3>
                <ul>
                  <li><a href="javascript:void(0)">Computers & Accessories</a></li>
                  <li><a href="javascript:void(0)">Smartphones & Tablets</a></li>
                  <li><a href="javascript:void(0)">Cameras</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}
export default Test