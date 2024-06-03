import "./mainpage.css"

export default function MainPage(){
    return(
        <div className="mainpage">
            <div className="search--bar--div">
                <h1>What are you looking for :</h1>
                <input type="search" className="main--search--bar" placeholder="Search here"/>
            </div>
            <div className="hotels--presentation">
                <p className="hotel--description">Some of the best hotels currently</p>
                <div className="hotels--divs">
                    <div className="hotels--card">
                        <img src="/hotel 1.jpeg"/>
                        <div className="about--hotel">
                            <p>Country: Kenya</p>
                            <p>hotelname: Rt VIP</p>
                            <p>Price: KES 5000</p>
                            <p>description: Luxury, best accomodation with a balcony and city view</p>
                            <div className="hotel--buttons">
                                <button className="hotel--book">book now</button>
                                <button className="hotel--contact">Contact hotel</button>
                            </div>
                        </div>
                    </div>
                    <div className="hotels--card">
                        <img src="/hotel_2.jpeg"/>
                        <div className="about--hotel">
                            <p>Country: Spain</p>
                            <p>hotelname: Savanah</p>
                            <p>Price: KES 5000</p>
                            <p>description: Luxury, best accomodation with a balcony and city view</p>
                            <div className="hotel--buttons">
                                <button className="hotel--book">book now</button>
                                <button className="hotel--contact">Contact hotel</button>
                            </div>
                        </div>
                    </div>
                    <div className="hotels--card">
                        <img src="/hotel_3.jpeg"/>
                        <div className="about--hotel">
                            <p>Country: California</p>
                            <p>hotelname: Kenya Express</p>
                            <p>Price: KES 5000</p>
                            <p>description: Luxury, best accomodation with a balcony and city view</p>
                            <div className="hotel--buttons">
                                <button className="hotel--book">book now</button>
                                <button className="hotel--contact">Contact hotel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}