import { Outlet } from "react-router-dom";
import { Profile } from "./Profile";
import { ProfileClass } from "./ProfileClass";

const About = () => {
  return (
    <div className="about-container">
            <h1>About Us</h1>
            <p>
                Welcome to our website! We are passionate about delivering quality content and experiences.
            </p>
            <div className="about-content">
                <h2>Our Mission</h2>
                <p>
                    Our mission is to provide valuable resources and services to our community.
                </p>
                <h2>Our Team</h2>
                <p>
                    We are a diverse group of professionals with expertise in various fields, dedicated to achieving excellence.
                </p>
            </div>
            {/* <Profile /> */}
            <ProfileClass name={"tamana"} />
            <Outlet />
        </div>
  );
}

export default About;
