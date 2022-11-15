import React from "react";

// Demo component.
export const Demo = ({ children }) => {
    return(
    <section className="grid-demo">
        {children}
    </section>
    )
};

// Header component.
export const Header = () => (
    <React.Fragment>
        <div className="header">
            <div className="noti_div">
                <img alt="gas pump icon" src="https://ultrasound.money/_next/static/media/gas-slateus.08e75f71.svg" width="14px"/>&nbsp;
                <p><span className="text-orange-400">20</span> Gwei</p> &nbsp;&nbsp;&nbsp;
                <img alt="Ethereum Ether icon" src="https://ultrasound.money/_next/static/media/eth-slateus.4ac61d8c.svg" width="14px" />
                <p><span className="text-white">1,218</span> USD <span className="text-green-400">(+1.1%)</span></p>
            </div>
        </div>
    </React.Fragment>
);