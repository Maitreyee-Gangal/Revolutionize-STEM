import React from "react";
import Footer from "./Footer";

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous"></link>



function Home(){
    return <div>    
    
    <img class="pagefillimg" src="assets/homeimg.png" alt="The world map with the continents colored in pink. In white text, it says empowering girls, one day at a time."/>
    {/* <p class="faq">Frequently Asked Questions</p>
    <hr /> */}
    <table>
    <tr>
      <td class="question">Who we are</td>
      <td class="answer">Revolutionize STEM is a youth-led, non-profit organization that seeks to empower and celebrate women in STEM.</td>
    </tr>

    <tr>
      <td class="question">What we do</td>
      <td class="answer">Whether it's through our webinars or projects, we hope to inspire the next generation of women in STEM and make them feel seen and supported every step of the way!</td>
    </tr>

    </table>
    {/* Impact section */}
    <div class="impact">
    
    <div class="impactdiv">
    <h1>2000</h1>
    <p>girls inspired.</p>
    </div>
    <div class="impactdiv">
    <h1>34</h1>
    <p>countries reached.</p>
    </div>
    <div class="impactdiv">
    <h1>6</h1>
    <p>continents over.</p>
    </div>
    </div>
    <Footer />
</div>
}
export default Home;