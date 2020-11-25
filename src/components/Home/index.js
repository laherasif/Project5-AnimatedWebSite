import React, { useState, useEffect } from 'react'
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom'
// import Flip from 'react-reveal/Flip';
import { Link } from 'react-router-dom'
import './home.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

function Home() {
    const [days, setdays] = useState(0)
    const [hours, sethours] = useState(0)
    const [minutes, setminutes] = useState(0)
    const [seconds, setseconds] = useState(0)
    const [date] = useState({ name: 'Election Day', date: 'Oct 15 ,2021' })

    useEffect(() => {
        let updateClock = () => {
            let t = getTimeDifference(date.date);

            if (t.time <= 0 || isNaN(t.time)) {

                clearInterval(timeinterval);
            }
        }
        updateClock();

        var timeinterval = setInterval(updateClock, 1000);

    }, [date.date])

    const leadingZero = (num) => {
        return (num < 10 && num > 0) ? "0" + num : num;
    }
    const getTimeDifference = (eventDate) => {
        const time = Date.parse(eventDate) - Date.parse(new Date());
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((time / 1000 / 60) % 60);
        const seconds = Math.floor((time / 1000) % 60);

        if (days && hours && minutes && seconds <= 0) {
            setdays(0)
            sethours(0)
            setminutes(0)
            setseconds(0)

        }
        if (isNaN(days && hours && minutes && seconds)) {
            setdays(0)
            sethours(0)
            setminutes(0)
            setseconds(0)
           
        }


        else

        setdays(days)
        sethours(hours)
        setminutes(minutes)
        setseconds(seconds)


        return { time, days, hours, minutes, seconds }

    }

    return (
        <div>
            <section className="categories ">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 p-0">
                            <div className="categories__item categories__large__item set-bg">

                                <div className="categories__text">
                                    {/* <Flip left cascade> */}
                                    <h1>Women’s fashion</h1>

                                    {/* </Flip> */}
                                    {/* <h1>
											<Typewriter


												options={{
													strings: "Women’s fashion",
													autoStart: true,
													loop: true,
												}}
											/>
										</h1> */}
                                    <p>Sitamet, consectetur adipiscing elit, sed do eiusmod tempor incidid-unt labore
                        edolore magna aliquapendisse ultrices gravida.</p>
                                    {/* <Link to="#">Shop now</Link> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                                    <div className="categories__item set-bg-2" >
                                        <div className="categories__text">
                                            <h4>

                                                Men’s fashion
													{/* <Typewriter


														options={{
															strings: "Men’s fashion",
															autoStart: true,
															loop: true,
														}}
													/> */}
                                            </h4>
                                            <p>358 items</p>
                                            {/* <Link to="#">Shop now</Link> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                                    <div className="categories__item set-bg-3" >
                                        <div className="categories__text">
                                            <h4>
                                                Kid’s fashion
													{/* <Typewriter


														options={{
															strings: "Kid’s fashion",
															autoStart: true,
															loop: true,
														}}
													/> */}
                                            </h4>
                                            <p>273 items</p>
                                            {/* <Link to="#">Shop now</Link> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                                    <div className="categories__item set-bg-4">
                                        <div className="categories__text">
                                            <h4>
                                                Cosmetics
													{/* <Typewriter


														options={{
															strings: "Cosmetics",
															autoStart: true,
															loop: true,
														}}
													/> */}
                                            </h4>
                                            <p>159 items</p>
                                            {/* <Link to="#">Shop now</Link> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                                    <div className="categories__item set-bg-5" >
                                        <div className="categories__text">
                                            <h4>
                                                Accessories
													{/* <Typewriter


														options={{
															strings: "Accessories",
															autoStart: true,
															loop: true,
														}}
													/> */}
                                            </h4>
                                            <p>792 items</p>
                                            {/* <Link to="#">Shop now</Link> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="product spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4">
                            <div className="section-title">
                                <h4>New product</h4>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-8">
                            <ul className="filter__controls">
                                <li className="active" data-filter="*">All</li>
                                <li data-filter=".women">Women’s</li>
                                <li data-filter=".men">Men’s</li>
                                <li data-filter=".kid">Kid’s</li>
                                <li data-filter=".accessories">Accessories</li>
                                <li data-filter=".cosmetic">Cosmetics</li>
                            </ul>
                        </div>
                    </div>
                    <Zoom>

                   
                    <div className="row property__gallery">
                        <div className="col-lg-3 col-md-4 col-sm-6 mix women">
                            <div className="product__item">
                                <div className="product__item__pic set-bg-cat-1">
                                    <div className="label new">New</div>
                                    <ul className="product__hover">
                                        <li><Link to="/Single" className="image-popup"><span><i className="fa fa-eye"></i></span></Link></li>
                                        <li><Link to="/Single" className="image-popup"><span><i className="fa fa-shopping-basket"></i></span></Link></li>
                                        <li><Link to="/Single" className="image-popup"><span><i className="fa fa-hourglass-start"></i></span></Link></li>

                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6>Buttons tweed blazer</h6>
                                    <div className="rating">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                    </div>
                                    <div className="product__price">$ 59.0</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 mix men">
                            <div className="product__item">
                                <div className="product__item__pic set-bg-cat-2" >
                                    <ul className="product__hover">
                                        <li><Link to="/Single" className="image-popup"><span><i className="fa fa-eye"></i></span></Link></li>
                                        <li><Link to="/Single" className="image-popup"><span><i className="fa fa-shopping-basket"></i></span></Link></li>
                                        <li><Link to="/Single" className="image-popup"><span><i className="fa fa-hourglass-start"></i></span></Link></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6>Flowy striped skirt</h6>
                                    <div className="rating">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                    </div>
                                    <div className="product__price">$ 49.0</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 mix accessories">
                            <div className="product__item">
                                <div className="product__item__pic set-bg-cat-3" >
                                    <div className="label stockout">out of stock</div>
                                    <ul className="product__hover">
                                        <li><Link to="/Single" className="image-popup"><span><i className="fa fa-eye"></i></span></Link></li>
                                        <li><Link to="/Single" className="image-popup"><span><i className="fa fa-shopping-basket"></i></span></Link></li>
                                        <li><Link to="/Single" className="image-popup"><span><i className="fa fa-hourglass-start"></i></span></Link></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6>Cotton T-Shirt</h6>
                                    <div className="rating">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                    </div>
                                    <div className="product__price">$ 59.0</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 mix cosmetic">
                            <div className="product__item">
                                <div className="product__item__pic set-bg-cat-4" >
                                    <ul className="product__hover">
                                        <li><Link to="/Single" className="image-popup"><span><i className="fa fa-eye"></i></span></Link></li>
                                        <li><Link to="/Single" className="image-popup"><span><i className="fa fa-shopping-basket"></i></span></Link></li>
                                        <li><Link to="/Single" className="image-popup"><span><i className="fa fa-hourglass-start"></i></span></Link></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6>Slim striped pocket shirt</h6>
                                    <div className="rating">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                    </div>
                                    <div className="product__price">$ 59.0</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 mix kid">
                            <div className="product__item">
                                <div className="product__item__pic set-bg-cat-5" >
                                    <ul className="product__hover">
                                        <li><Link to="/Single" className="image-popup"><span><i className="fa fa-eye"></i></span></Link></li>
                                        <li><Link to="/Single" className="image-popup"><span><i className="fa fa-shopping-basket"></i></span></Link></li>
                                        <li><Link to="/Single" className="image-popup"><span><i className="fa fa-hourglass-start"></i></span></Link></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6>Fit micro corduroy shirt</h6>
                                    <div className="rating">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                    </div>
                                    <div className="product__price">$ 59.0</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 mix women men kid accessories cosmetic">
                            <div className="product__item sale">
                                <div className="product__item__pic set-bg-cat-6" >
                                    <div className="label sale">Sale</div>
                                    <ul className="product__hover">
                                        <li><Link to="/Single" className="image-popup"><span><i className="fa fa-eye"></i></span></Link></li>
                                        <li><Link to="/Single" className="image-popup"><span><i className="fa fa-shopping-basket"></i></span></Link></li>
                                        <li><Link to="/Single" className="image-popup"><span><i className="fa fa-hourglass-start"></i></span></Link></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6>Tropical Kimono</h6>
                                    <div className="rating">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                    </div>
                                    <div className="product__price">$ 49.0 <span>$ 59.0</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 mix women men kid accessories cosmetic">
                            <div className="product__item">
                                <div className="product__item__pic set-bg-cat-7" >
                                    <ul className="product__hover">
                                        <li><Link to="/Single" className="image-popup"><span><i className="fa fa-eye"></i></span></Link></li>
                                        <li><Link to="/Single" className="image-popup"><span><i className="fa fa-shopping-basket"></i></span></Link></li>
                                        <li><Link to="/Single" className="image-popup"><span><i className="fa fa-hourglass-start"></i></span></Link></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6>Contrasting sunglasses</h6>
                                    <div className="rating">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                    </div>
                                    <div className="product__price">$ 59.0</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 mix women men kid accessories cosmetic">
                            <div className="product__item sale">
                                <div className="product__item__pic set-bg-cat-8" >
                                    <div className="label">Sale</div>
                                    <ul className="product__hover">
                                        <li><Link to="/Single" className="image-popup"><span><i className="fa fa-eye"></i></span></Link></li>
                                        <li><Link to="/Single" className="image-popup"><span><i className="fa fa-shopping-basket"></i></span></Link></li>
                                        <li><Link to="/Single" className="image-popup"><span><i className="fa fa-hourglass-start"></i></span></Link></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6>Water resistant backpack</h6>
                                    <div className="rating">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                    </div>
                                    <div className="product__price">$ 49.0 <span>$ 59.0</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Zoom>
             
                </div>
            </section>
            <section className="trend spad">
                <div className="container">
                    <div className="row">
                        <Slide left cascade >
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="trend__content">
                                    <div className="section-title">
                                        <h4>Hot Trend</h4>
                                    </div>
                                    <div className="trend__item">
                                        <div className="trend__item__pic">
                                            <img src="img/trend/ht-1.jpg" alt="pic" />
                                        </div>
                                        <div className="trend__item__text">
                                            <h6>Chain bucket bag</h6>
                                            <div className="rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                            <div className="product__price">$ 59.0</div>
                                        </div>
                                    </div>
                                    <div className="trend__item">
                                        <div className="trend__item__pic">
                                            <img src="img/trend/ht-2.jpg" alt="" />
                                        </div>
                                        <div className="trend__item__text">
                                            <h6>Pendant earrings</h6>
                                            <div className="rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                            <div className="product__price">$ 59.0</div>
                                        </div>
                                    </div>
                                    <div className="trend__item">
                                        <div className="trend__item__pic">
                                            <img src="img/trend/ht-3.jpg" alt="" />
                                        </div>
                                        <div className="trend__item__text">
                                            <h6>Cotton T-Shirt</h6>
                                            <div className="rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                            <div className="product__price">$ 59.0</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slide>
                        <Slide bottom cascade >
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="trend__content">
                                    <div className="section-title">
                                        <h4>Best seller</h4>
                                    </div>
                                    <div className="trend__item">
                                        <div className="trend__item__pic">
                                            <img src="img/trend/bs-1.jpg" alt="" />
                                        </div>
                                        <div className="trend__item__text">
                                            <h6>Cotton T-Shirt</h6>
                                            <div className="rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                            <div className="product__price">$ 59.0</div>
                                        </div>
                                    </div>
                                    <div className="trend__item">
                                        <div className="trend__item__pic">
                                            <img src="img/trend/bs-2.jpg" alt="" />
                                        </div>
                                        <div className="trend__item__text">
                                            <h6>Zip-pockets pebbled tote <br />briefcase</h6>
                                            <div className="rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                            <div className="product__price">$ 59.0</div>
                                        </div>
                                    </div>
                                    <div className="trend__item">
                                        <div className="trend__item__pic">
                                            <img src="img/trend/bs-3.jpg" alt="" />
                                        </div>
                                        <div className="trend__item__text">
                                            <h6>Round leather bag</h6>
                                            <div className="rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                            <div className="product__price">$ 59.0</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slide>
                        <Slide right cascade >
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="trend__content">
                                    <div className="section-title">
                                        <h4>Feature</h4>
                                    </div>
                                    <div className="trend__item">
                                        <div className="trend__item__pic">
                                            <img src="img/trend/f-1.jpg" alt="" />
                                        </div>
                                        <div className="trend__item__text">
                                            <h6>Bow wrap skirt</h6>
                                            <div className="rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                            <div className="product__price">$ 59.0</div>
                                        </div>
                                    </div>
                                    <div className="trend__item">
                                        <div className="trend__item__pic">
                                            <img src="img/trend/f-2.jpg" alt="" />
                                        </div>
                                        <div className="trend__item__text">
                                            <h6>Metallic earrings</h6>
                                            <div className="rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                            <div className="product__price">$ 59.0</div>
                                        </div>
                                    </div>
                                    <div className="trend__item">
                                        <div className="trend__item__pic">
                                            <img src="img/trend/f-3.jpg" alt="" />
                                        </div>
                                        <div className="trend__item__text">
                                            <h6>Flap cross-body bag</h6>
                                            <div className="rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                            <div className="product__price">$ 59.0</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slide>
                    </div>
                </div>
            </section>

            <section className="discount">
                <div className="container">
                    <div className="row">
                        <Slide left cascade >
                            <div className="col-lg-6 p-0">
                                <div className="discount__pic">
                                    <img src="img/discount.jpg" alt="pic-discount" />
                                </div>
                            </div>
                        </Slide>
                        <Slide right cascade >
                            <div className="col-lg-6 p-0">
                                <div className="discount__text">
                                    <div className="discount__text__title">
                                        <span>Discount</span>
                                        <h2>Election Date</h2>
                                        <h5><span>Sale</span> 50%</h5>

                                    </div>




                                    <div className="discount__countdown" id="countdown-time">
                                        <div className="countdown__item">
                                            <span>{leadingZero(days)} {days === 1 ? "" : ""}</span>
                                            <p>Days</p>
                                        </div>
                                        <div className="countdown__item">
                                            <span> {leadingZero(hours)} {hours === 1 ? '' : ''}</span>
                                            <p>Hour</p>
                                        </div>
                                        <div className="countdown__item">
                                            <span>
                                                {leadingZero(minutes)} {minutes === 1 ? '' : ''}</span>
                                            <p>Min</p>
                                        </div>
                                        <div className="countdown__item">
                                            <span>  {leadingZero(seconds)} {seconds === 1 ? '' : ''}</span>
                                            <p>Sec</p>
                                        </div>
                                    </div>
                                    <Link to="#">Shop now</Link>
                                </div>
                            </div>
                        </Slide>
                    </div>
                </div>
            </section>

            <section className="services spad">
                <div className="container">
                    <div className="row">
                        <Slide left cascade >
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="services__item">
                                    <i className="fa fa-car"></i>
                                    <h6>Free Shipping</h6>
                                    <p>For all oder over $99</p>
                                </div>
                            </div>
                        </Slide>
                        <Slide bottom cascade >
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="services__item">
                                    <i className="fa fa-money"></i>
                                    <h6>Money Back Guarantee</h6>
                                    <p>If good have Problems</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="services__item">
                                    <i className="fa fa-support"></i>
                                    <h6>Online Support 24/7</h6>
                                    <p>Dedicated support</p>
                                </div>
                            </div>
                        </Slide>
                        <Slide right cascade>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="services__item">
                                    <i className="fa fa-headphones"></i>
                                    <h6>Payment Secure</h6>
                                    <p>100% secure payment</p>
                                </div>
                            </div>
                        </Slide>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default Home
