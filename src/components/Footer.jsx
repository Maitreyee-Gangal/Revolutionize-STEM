import React from "react";

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

function Footer(){
    return <footer>Copyright © {currentYear} Created by Maitreyee Gangal </footer>
}

export default Footer;