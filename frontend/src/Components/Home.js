import {Link} from "react-router-dom";

const Home = () => {
    return(
        <div style={{backgroundImage: "linear-gradient(#00d5ff, #0095ff, rgba(93,0,255,0.555))",
            height: "100vh",  // Ensures full viewport height
            display: "flex",  // Flexbox to center items
            flexDirection: "column",
            justifyContent: "center",  // Center vertically
            alignItems: "center",  // Center horizontally
            textAlign: "center",  // Center text
            }} 
            // className="d-flex flex-column justify-contnet-center align-items-center text-center vh-100"
            >
            <h1>Login Success Page</h1>
            <Link to='/login' className="btn btn-light my-5">Logout</Link>
        </div>
    )
}

export default Home;