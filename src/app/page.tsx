"use client";

import { useEffect, useState } from "react"
import Loading from "./loading";


const services = [
    "HTML", "CSS / CSS3", "SCSS/SASS", "JavaScript", "jQuery", "Bootstraps", "Tailwind", "Reactjs", "Nextjs", "Nuxtjs", "Directus", "Motion UI", "Responsive design", "Testing and debugging", "Email template", "Git and Version", "GitHub"
]
const projects = [
    {
        "img": "landingpage/1-bam.jpg",
        "name": "BAM",
        // "des": "HTML, SCSS, JQUERY, Responsive"
    },
    {
        "img": "landingpage/2-BconsPlazaCode.jpg",
        "name": "Bcons Plaza Code",
        // "des": "HTML, SCSS, Responsive, React, Nextjs"
    },
    {
        "img": "landingpage/10-Swancity.jpg",
        "name": "Swancity",
        // "des": "HTML, SCSS, Responsive, React, Nextjs"
    },
    {
        "img": "landingpage/3-AmazonNIC.png",
        "name": "Amazon NIC",
        "des": "xxx"
    },
    {
        "img": "landingpage/5-freeplus.jpg",
        "name": "Freeplus",
        "des": "xxx"
    },
    {
        "img": "landingpage/6-gastro.png",
        "name": "Gastro",
        "des": "xxx"
    },
    {
        "img": "landingpage/7-Ichni.jpg",
        "name": "Ichni",
        "des": "xxx"
    },
    {
        "img": "landingpage/8-Oasia.jpg",
        "name": "Oasia",
        "des": "xxx"
    },
    {
        "img": "landingpage/9-SkyResturant.jpg",
        "name": "Sky Resturant",
        "des": "xxx"
    },
    // {
    //     "img": "landingpage/11-Taisun.png",
    //     "name": "Taisun",
    //     "des": "xxx"
    // },
    // {
    //     "img": "landingpage/12-teco.png",
    //     "name": "Teco",
    //     "des": "xxx"
    // },
    // {
    //     "img": "landingpage/15-victoria.png",
    //     "name": "Victoria",
    //     "des": "xxx"
    // },
    {
        "img": "landingpage/10-Swancity.jpg",
        "name": "Swancity",
        "des": "xxx"
    },
    {
        "img": "landingpage/13-Verosa.jpg",
        "name": "Verosa",
        "des": "xxx"
    },
]

export default function () {
    const [loading, setLoading] = useState(false)
    const [fixed, setFixed] = useState(true)
    const [activeNavToggle, setActiveNavToggle] = useState(false)
    const [isMenuFixed, setIsMenuFixed] = useState(false);

    const [listServices, setListServices] = useState(services)
    const [listProjects, setListProjects] = useState(projects)


    // smooth scroll
    useEffect(() => {
        console.log(333);

        const handleClick = (event: any) => {
            const { hash } = event.currentTarget;
            if (hash !== "") {
                event.preventDefault();
                const targetElement = document.querySelector(hash);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: "smooth"
                    });
                }
            }
        };

        const navLinks = document.querySelectorAll(".navbar .nav-link");
        navLinks.forEach((link) => {
            link.addEventListener("click", handleClick);
        });

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsMenuFixed(scrollPosition > 100);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            navLinks.forEach((link) => {
                link.removeEventListener("click", handleClick);
            });
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const onClickNavToggle = () => {
        setActiveNavToggle(!activeNavToggle)
    }

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        // first prevent the default behavior
        e.preventDefault();
        // get the href and remove everything before the hash (#)
        const href = e.currentTarget.href;
        const targetId = href.replace(/.*\#/, "");
        // get the element by id and use scrollIntoView
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    };

    return (
        loading ? <Loading /> :
            <>
                <div>
                    {/* Page Navbar */}
                    <nav className={`custom-navbar ${isMenuFixed ? 'affix' : 'affix-top'}`} data-spy="affix" data-offset-top={20}>
                        <div className="container">
                            <a className="logo" href="#">
                                tudo
                            </a>
                            <ul className={`nav ${activeNavToggle ? 'show' : ''}`}>
                                <li className="item">
                                    <a className="link" href="#home" onClick={handleScroll}>
                                        Home
                                    </a>
                                </li>
                                <li className="item">
                                    <a className="link" href="#about" onClick={handleScroll}>
                                        About
                                    </a>
                                </li>
                                <li className="item">
                                    <a className="link" href="#service" onClick={handleScroll}>
                                        Languages
                                    </a>
                                </li>
                                <li className="item">
                                    <a className="link" href="#portfolio" onClick={handleScroll}>
                                        Projects
                                    </a>
                                </li>
                                <li className="item">
                                    <a target="_blank" className="btn-on-header btn-link btn btn-primary btn-rounded" href="https://uyendo.notion.site/Uyen-Do-86a2c735f87747479a529634542cce9b">Visit My Works</a>
                                </li>
                            </ul>
                            <a
                                id="nav-toggle"
                                onClick={() => onClickNavToggle()}
                                className={`${activeNavToggle ? 'is-active' : ''} hamburger hamburger--elastic`}
                            >
                                <div className="hamburger-box">
                                    <div className="hamburger-inner" />
                                </div>
                            </a>
                        </div>
                    </nav>
                    {/* End of Page Navbar */}
                    {/* page header */}
                    <header id="home" className="header">
                        <div className="overlay" />
                        <div className="header-content container">
                            <h1 className="header-title">
                                <span className="up">HI!</span>
                                <span className="down">I am Uyen Do</span>
                            </h1>
                            <p className="header-subtitle">Frontend Web Developer</p>
                        </div>
                    </header>
                    {/* end of page header */}
                    {/* about section */}
                    <section className="section pt-0" id="about">
                        {/* container */}
                        <div className="container text-center">
                            {/* about wrapper */}
                            <div className="about">
                                <div className="about-img-holder">
                                    <img
                                        src="/image-3.jpg"
                                        className="about-img"
                                        alt="Project"
                                    />
                                </div>
                                <div className="about-caption">
                                    <p className="section-subtitle">Who Am I ?</p>
                                    <h2 className="section-title mb-3">About Me</h2>
                                    <p>
                                        I'm a Frontend engineer based in Vietnam with over 5 years of experience in the software industry. Passion for continuous learning and staying up-to-date with the latest design trends ensures, delivers high-quality work that meets the needs of clients. I also values feedback and constructive criticism, as it helps me identify areas for growth and refine my work. I believes that learning is a lifelong journey and is always eager to explore new techniques and approaches in my development work.
                                    </p>
                                    <p> <u>Email</u> :
                                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=uyendo.0203@gmail.com" target="_blank">
                                            uyendo.0203@gmail.com
                                        </a>  <br />
                                        <u>Skype</u> : <a href="skype:live:nhatrang234?chat" target="_blank">
                                            live:nhatrang234 </a><br />
                                        <u>Graduate</u> : University of Science HCM</p>
                                    <div className="flex gap-3 justify-center md:justify-start">
                                        {/* <button className="btn-rounded btn btn-outline-primary mt-4">
                                    Download CV
                                </button> */}
                                        <a target="_blank" href="https://uyendo.notion.site/Uyen-Do-86a2c735f87747479a529634542cce9b" className="btn-link btn-rounded btn btn-primary mt-4">
                                            Open my CV
                                        </a>
                                        {/* <a target="_blank" href="https://uyendo.notion.site/Uyen-Do-86a2c735f87747479a529634542cce9b" className="btn-link btn-rounded btn btn-primary mt-4">
                                    My Portfolio
                                </a> */}
                                    </div>
                                </div>
                            </div>
                            {/* end of about wrapper */}
                        </div>
                        {/* end of container */}
                    </section>{" "}
                    {/* end of about section */}
                    {/* service section */}
                    <section className="section service" id="service">
                        <div className="container text-center">
                            <p className="section-subtitle">What I Do ?</p>
                            <h6 className="section-title mb-6">Languages</h6>
                            {/* row */}
                            <div className="flex flex-wrap justify-center gap-2">
                                {
                                    listServices && listServices.length && listServices.length > 0 && listServices.map((item, index) => {
                                        return (
                                            <h6 key={index} className="title">{item}</h6>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </section>
                    {/* end of service section */}

                    {/* section */}
                    <section className="section-sm bg-primary">
                        {/* container */}
                        <div className="container text-center text-sm-left">
                            {/* row */}
                            <div className="row align-items-center">
                                <div className="col-sm offset-md-1 mb-4 mb-md-0">
                                    <h6 className="title text-light">Want to work with me?</h6>
                                    <p className="m-0 text-light">
                                        Always feel Free to Contact &amp; Hire me
                                    </p>
                                </div>
                                <div className="col-sm offset-sm-2 offset-md-3">
                                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=uyendo.0203@gmail.com" target="_blank" className=" btn btn-lg my-font btn-light rounded btn-hire-me">
                                        Hire Me
                                    </a>
                                </div>
                            </div>
                            {/* end of row */}
                        </div>
                        {/* end of container */}
                    </section>
                    {/* end of section */}

                    <section className="section" id="portfolio">
                        <div className="container text-center">
                            <p className="section-subtitle">What I Did ?</p>
                            <h6 className="section-title mb-6">Some Projects</h6>
                            {/* row */}
                            <div className="row">

                                {
                                    listProjects && listProjects.length && listProjects.length > 0 && listProjects.map((item, index) => {
                                        return (
                                            <div key={index} className="col-md-4">
                                                <div className="portfolio-card mb-4">
                                                    <img
                                                        src={item.img}
                                                        className="portfolio-card-img"
                                                        alt={item.name}
                                                    />
                                                    <span className="portfolio-card-overlay">
                                                        <span className="portfolio-card-caption">
                                                            <h5>{item.name}</h5>
                                                            {/* <p className="portfolio-card-des">{item.des}</p> */}
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            {/* end of row */}
                        </div>
                        {/* end of container */}
                    </section>


                    {/* blog section */}
                    {/* <section className="section" id="blog">
                        <div className="container text-center">
                            <p className="section-subtitle">Recent Posts?</p>
                            <h6 className="section-title mb-6">Blog</h6>
                            <div className="row">
                                <div className="col-md-6 col-lg-4">
                                    <div className="blog-card">
                                        <div className="blog-card-body">
                                            <h5 className="blog-card-title">Consectetur adipisicing elit</h5>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                                                nesciunt qui sit velit delectus voluptates, repellat ipsum culpa id
                                                deleniti. Rerum debitis facilis accusantium neque numquam mollitia
                                                modi quasi distinctio.
                                            </p>
                                            <a href="#" className="blog-card-link">
                                                Read more <i className="ti-angle-double-right" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4">
                                    <div className="blog-card">
                                        <div className="blog-card-body">
                                            <h5 className="blog-card-title">Explicabo illo</h5>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
                                                excepturi laborum enim, vitae ipsam atque eum, ad iusto consequuntur
                                                voluptas, esse doloribus. Perferendis porro quisquam vitae.
                                            </p>
                                            <a href="#" className="blog-card-link">
                                                Read more <i className="ti-angle-double-right" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4">
                                    <div className="blog-card">
                                        <div className="blog-card-body">
                                            <h5 className="blog-card-title">Explicabo illo</h5>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
                                                excepturi laborum enim, vitae ipsam atque eum, ad iusto consequuntur
                                                voluptas, esse doloribus. Perferendis porro quisquam vitae.
                                            </p>
                                            <a href="#" className="blog-card-link">
                                                Read more <i className="ti-angle-double-right" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> */}
                    {/* end of blog section */}
                    {/* contact section */}
                    {/* <section className="section bg-primary" id="contact">
                        <div className="container text-center">
                            <p className="section-subtitle text-white">How can you communicate?</p>
                            <h6 className="section-title mb-5 text-white">Contact Me</h6>
                            <form action="" className="contact-form col-md-10 col-lg-8 m-auto">
                                <div className="form-row">
                                    <div className="form-group col-sm-6">
                                        <input
                                            type="text"
                                            size={50}
                                            className="form-control"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                    <div className="form-group col-sm-6">
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Enter Email"
                                        />
                                    </div>
                                    <div className="form-group col-sm-12">
                                        <textarea
                                            name="comment"
                                            id="comment"
                                            rows={6}
                                            className="form-control"
                                            placeholder="Write Something"
                                            defaultValue={""}
                                        />
                                    </div>
                                    <div className="form-group col-sm-12 mt-3">
                                        <input
                                            type="submit"
                                            defaultValue="Send Message"
                                            className="btn btn-light btn-rounded"
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </section> */}
                    {/* end of contact section */}
                    <footer className="footer text-center bg-primary">
                        <div className="container">
                            <div className="w-full">
                                <a className="text-white" href="https://mail.google.com/mail/?view=cm&fs=1&to=uyendo.0203@gmail.com" target="_blank">
                                    <strong>Let's mail to me &rarr;</strong>
                                </a>
                            </div>
                        </div>
                    </footer>
                </div>
            </>
    )
}