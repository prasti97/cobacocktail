import React from 'react';
import { GoogleLogin } from 'react-google-login';

const About = () => {
  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <div>
      <h1>About Page</h1>
      <GoogleLogin clientId="51318181491-1gingdvkhhhvimmsobsbch955oe2ce1k.apps.googleusercontent.com" buttonText="Login" onSuccess={responseGoogle} onFailure={responseGoogle} cookiePolicy={'single_host_origin'} />,
    </div>
  );
};

export default About;
