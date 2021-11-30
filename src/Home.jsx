import "./style.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


const Home = () => {
    const setViewPage = () => {
        window.location.assign(`http://localhost:${window.location.port}/view_customers`);
    }
    const setHomePage = () => {
        window.location.assign(`http://localhost:${window.location.port}/`)
    }
    const setAboutPage = () => {
        window.location.assign(`http://localhost:${window.location.port}/about_page`)

    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" className="link1 m-3" onClick={setHomePage}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" className="link1 m-3" onClick={setViewPage}>View Customers</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" className="link1" onClick={setAboutPage}>About Us</a>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>

            <div className="align-items-center justify-content text-center">
                <ul className="ul1">
                    <li><img src="bank1.jpg" alt="image" /></li>
                    <li><p className="text"> Welcome to the Sparks Bank </p></li>
                </ul>
            </div>
            <br />
            <h1 className="btn-danger text-center bgcolor">How can we help you?</h1>
            <br />
            <div className="row lang">
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Insurance</h5>
                            <p className="card-text">Get to know about your Insurance plans with us.</p><br />
                            <a href="#" className="btn btn-primary">Know our Plans</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Loan</h5>
                            <p className="card-text">Get to know about our Loan proccesses.</p><br />
                            <a href="#" className="btn btn-primary">Know our Plans</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Accounts</h5>
                            <p className="card-text">Get to know about your Savings and Current accounts details.</p>
                            <a href="#" className="btn btn-primary">Know our Plans</a>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Investements</h5>
                            <p className="card-text">Get to know about our Investement rules and plans. </p><br />
                            <a href="#" className="btn btn-primary">Know our Plans</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Digital Products</h5>
                            <p className="card-text">Get to know about our digital products.</p><br />
                            <a href="#" className="btn btn-primary">Know our Plans</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Other Services</h5>
                            <p className="card-text">Take a look on out many more services form here.</p><br />
                            <a href="#" className="btn btn-primary">Know our Plans</a>
                        </div>
                    </div>
                </div>
            </div>
            <br />

            <footer className="footer">
                <ul className="list2 p-4">
                    <li className="list2">Find us on Social media</li>
                    <li className="list-center">
                        <ul className="list2">
                            <li className="list3 m-2"><FacebookIcon /></li>
                            <li className="list3 m-2"><InstagramIcon /></li>
                            <li className="list3 m-2"><TwitterIcon /></li>
                            <li className="list3 m-2"><LinkedInIcon /></li>
                        </ul>
                    </li>
                </ul>
            </footer>
        </>
    )
}
export default Home;