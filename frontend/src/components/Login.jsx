import React from 'react'
import { GoogleLogin } from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import PicShareVideo from '../assets/production ID_5076636.mp4';
import LogoPicShare from '../assets/PicShare-logos/PicShare-logos_white.png';
import { client } from '../client';

const Login = () => {
  const navigate = useNavigate();

  const responseGoogle = (response) => {
    localStorage.setItem('user', JSON.stringify(response.profileObj))
    const { name, googleId, imageUrl } = response.profileObj

    const doc = {
      _id: googleId,
      _type: 'user',
      userName: name,
      image: imageUrl,
    }

    client.createIfNotExists(doc)
      .then((res) => {
        navigate('/', { replace: true })
      })
  }


  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <video
          src={PicShareVideo}
          type="video/mp4"
          loop
          muted
          preload
          autoPlay
          controls={false}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute flex flex-col justify-center items-center top-0 left-0 right-0 bottom-0 bg-blackOverlay">
        <div className="p-5">
          <img src={LogoPicShare} alt="logo pic share" width="200" />
        </div>

        <div className="shadow-2x1">
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}
            render={(renderProps) => (
              <button
                type="button"
                className="bg-mainColor flex items-center p-3 rounded-lg cursor-pointer"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                <FcGoogle className="mr-4" /> Sign in with google
              </button>
            )}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
        </div>
      </div>
    </div>
  )
}

export default Login