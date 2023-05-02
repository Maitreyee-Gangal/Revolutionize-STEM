import React from "react";
import Footer from "./Footer";

function Project(props){

}

function Projects(){
    return <div>
    <div class="projectblob">
        <div class = "project">
        <table> 
          <tr>
          <td><img src="https://d374oxlv7wyffd.cloudfront.net/B0BQRV9HN4/caf7f3e6/cover.jpeg"/></td>
          <td>
          
          <h1>50 Inspirational Women in STEMM : The spectacular journeys of women revolutionizing STEM and Medicine</h1>
          <p>We recently published a book highlighting 50 inspirational women in STEM!</p>
          <br></br>
          <a href="https://www.amazon.com/Inspirational-Women-STEMM-spectacular-revolutionizing-ebook/dp/B0BQRV9HN4/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=&sr=" class="button">Check it out!</a>
          
          </td>
          </tr>
        </table>
      </div>
    </div>
    <Footer />
    </div>
}

export default Projects;