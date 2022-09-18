import React from 'react'

export default function About(props) {



  return (
    <div className='container mt-3'>
    <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button style={props.about} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        What is Website?
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body" style={props.about}>A website (also written as a web site) is a collection of web pages and related content that is identified by a common domain name and published on at least one web server. Examples of notable websites are Google, Facebook, Amazon, and Wikipedia.

All publicly accessible websites collectively constitute the World Wide Web. There are also private websites that can only be accessed on a private network, such as a company's internal website for its employees.

Websites are typically dedicated to a particular topic or purpose, such as news, education, commerce, entertainment, or social networking. Hyperlinking between web pages guides the navigation of the site, which often starts with a home page.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" style={props.about} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Website Overview
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body" style={props.about}>Websites can be used in various fashions: a personal website, a corporate website for a company, a government website, an organization website, etc. Websites can be the work of an individual, a business or other organization, and are typically dedicated to a particular topic or purpose. Any website can contain a hyperlink to any other website, so the distinction between individual sites, as perceived by the user, can be blurred.

Some websites require user registration or subscription to access the content. Examples of subscription websites include many business sites, news websites, academic journal websites, gaming websites, file-sharing websites, message boards, web-based email, social networking websites, websites providing real-time stock market data, as well as sites providing various other services.

While "web site" was the original spelling (sometimes capitalized "Web site", since "Web" is a proper noun when referring to the World Wide Web), this variant has become rarely used, and "website" has become the standard spelling. All major style guides, such as The Chicago Manual of Style[4] and the AP Stylebook,[5] have reflected this change.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" style={props.about} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Dynamic Website
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body" style={props.about}>A dynamic website is one that changes or customizes itself frequently and automatically. Server-side dynamic pages are generated "on the fly" by computer code that produces the HTML (CSS are responsible for appearance and thus, are static files). There are a wide range of software systems, such as CGI, Java Servlets and Java Server Pages (JSP), Active Server Pages and ColdFusion (CFML) that are available to generate dynamic web systems and dynamic sites. Various web application frameworks and web template systems are available for general-use programming languages like Perl, PHP, Python and Ruby to make it faster and easier to create complex dynamic websites.

A site can display the current state of a dialogue between users, monitor a changing situation, or provide information in some way personalized to 
the requirements of the individual user. For example, when the front page of a news site is requested, the code running on the webserver might 
combine stored HTML fragments with news stories retrieved from a database or another website via RSS to produce a page that includes the latest 
information. Dynamic sites can be interactive by using HTML forms, storing and reading back browser cookies, or by creating a series of pages that
 reflect the previous history of clicks. Another example of dynamic content is when a retail website with a database of media products allows 
 a user to input a search request, e.g. for the keyword Beatles. In response, the content of the web page will spontaneously change the way it
  looked before, and will then display a list of Beatles products like CDs, DVDs, and books. Dynamic HTML uses JavaScript code to instruct the
   web browser how to interactively modify the page contents. One way to simulate a certain type of dynamic website while avoiding the performance
    loss of initiating the dynamic engine on a per-user or per-connection basis is to periodically automatically regenerate a large series of 
    static pages.</div>
    </div>
  </div>
</div>
    </div>
  )
}
