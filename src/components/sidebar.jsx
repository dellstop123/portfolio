import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/guny.png)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Guneet Singh</a></h1>
              <span className="email"><i className="icon-mail"></i> guneetsinghbali@gmail.com</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  {/*<li><a href="#" data-nav-section="projects">Projects</a></li>
                  <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                  <br /><br/><br/>
                <li><a href="https://www.facebook.com/dhruv.barochia" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li>
                <li><a href="https://www.instagram.com/myblogbook_official/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
                <li><a href="https://www.linkedin.com/in/guneet-singh-709703182/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/dellstop123" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                Something coming soon !!
              </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}