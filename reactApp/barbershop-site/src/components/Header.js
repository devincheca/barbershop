import React from 'react';
const fontStyle = {
  fontFamily: 'Marcellus SC'
};
function Header() {
  return (
    <div>
      <header className="w3-container w3-red w3-section w3-card-24 w3-animate-opacity">
        <a href="https://localbz.co/hbs">
          <div>
            <h1 className="w3-container" style={fontStyle}>Manhattan Beach BarberShop</h1>
          </div>
        </a>
        <div>
          <h2 style={fontStyle}>
            <a href="https://localbz.co/hbs">We put the <span style={fontStyle}>MAN</span> back in Manhattan Beach<span className="w3-right"></span></a>
            <a className="w3-right w3-hover-opacity w3-padding" href="https://www.yelp.com/biz/manhattan-beach-barbershop-manhattan-beach">
              <i className="fa fa-yelp"></i>
            </a>
            <a className="w3-right w3-hover-opacity w3-padding" href="https://www.instagram.com/manhattanbeachbarbershop">
              <i className="fa fa-instagram"></i>
            </a>
          </h2>
        </div>
      </header>
    </div>
  );
}
export default Header
