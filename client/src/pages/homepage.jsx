import "./hotelpage.css"



const Hotel = () => {
    return(
        <div className="hotel--page">
            <nav className="hotel--nav">
                <div className="hotel--logo">TH</div>
                <ul className="nav--list">
                    <li>Home</li>
                    <li>About</li>
                    <li>Book now</li>
                    <li>Hotels</li>
                </ul>
                <div className="hotel--users">Log in</div>
            </nav>
            <div className="hotel--page--image">
                <div className="hotel--desc">
                    <h1>Welcome to travel hotel</h1>
                    <p>Book before you even travel. Travelling made adventurer, <br></br>Travelling made easier</p>
                    <div className="hotel--book--btn">
                        <button className="book--btn">Book now</button>
                    </div>
                </div>
                <img className="hotel--image--wallpaper" src="/hotel_image.jpg"/>
            </div>
        </div>
    );
}
export default Hotel;