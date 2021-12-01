import s from '../image/s.jpeg';

function Homepage(){
    return(
    <nav className="navbar">
        <div className="max-width">
            <div><a className="logo">Portfo<span style={{color: '#ffffff'}}>lio</span></a></div>
            <ul className="menu" style={{textDecoration: 'none'}}>
                <li><a href="#home" className="menu-btn">Home</a></li>
                <li><a href="#about" className="menu-btn">About</a></li>
                <li><a href="#services" className="menu-btn">Services</a></li>
                <li><a href="#skills" className="menu-btn">Skills</a></li>
                <li><a href="#projects" className="menu-btn">Projects</a></li>
                <li><a href="#contact" className="menu-btn">Contact</a></li>
            </ul>
            <div className="menu-btn">
                <i className="fas fa-bars"></i>
                <div className="home" id="home">
            <div className="max-width">
                <div className="home-content">
                    <div className="text-1">Hello, my name is</div>
                    <div className="text-2"><span style={{color: '#ffff'}}>Shashank Ranjan</span></div>
                    <div className="text-3">And I'm a "Frontend Developer" <span className="typing"></span></div>
                    <a href="#">Hire me</a>
                </div>
            </div>
        </div>
            </div>
            <section className="about" id="about">
        <div className="max">
            <h2 className="title"><span style={{color: '#FF0000', paddingLeft: '740px'}}>ABOUT ME</span></h2>
            <div className="about-content" style={{paddingLeft: '45px'}}>
                <div className="column-left">
                <img src={s} className="photo" alt="my-photo"/>
                </div>
                <div className="column-right">
                    <div className="text">I'm Shashank Ranjan and I'm a "Frontend Developer".<br/>
                    Hi, i am Computer Science Student currently purusing my B.tech degree from Calcutta Institute of Engineering and Management college, Kolkata.
                    Currently I am Outreach Lead @ GDSC and Student intern @ Ementora/Coding Ninjas. I am well-skilled in HTML & CSS, JavaScript,
                    MySql, React.js, Bootstrap, Framework & Libraries, Version Control, Cross-browser & device testing, Web performance optimization, Search Engine Optimization,
                    Some of my extra curricular activities are Cricket, Singing, Cooking and also intrested in Exploring some new places. Now
                    i am excited to work with tech company escpecially with startup company with new ideas.
                    </div>
                    <br/>
                    <a href="#" style={{width: "250px"}}>Download CV</a>
                </div>
            </div>
        </div>
    </section>
    <section className="skills" id="skills">
        <div className="most">
            <h2 className="lang"><span style={{color: '#FF0000'}}>MY SKILLS</span></h2>
            <div className="skills-content" style={{width: '1000px'}}>
                <div className="column left">
                    <div className="fill" style={{width: '900px'}}>My creative skills & experiences.
                    HTML is the standard markup language for documents designed to be displayed in 
                        a web browser.
                        CSS is a style sheet language used for describing the presentation of a document written in
                             a markup language like HTML.
                        JavaScript is a high-level, just-in-time compiled, multi-paradigm programming language that conforms to the
                         ECMAScript specification.
                         </div>    
                    <a href="#" style={{width: "10px"}}>Read more</a>
                </div>
                <div class="column right">
                    <div class="bars">
                        <div class="info">
                            <span>HTML</span>
                            <span>90%</span>
                        </div>
                        <div class="line html"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>JavaScript</span>
                            <span>50%</span>
                        </div>
                        <div class="line css"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>CSS</span>
                            <span>80%</span>
                        </div>
                        <div class="line js"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>React.js</span>
                            <span>40%</span>
                        </div>
                        <div class="line php"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>MySQL</span>
                            <span>60%</span>
                        </div>
                        <div class="line mysql"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </div>
    </nav>
    )
}

export default Homepage;