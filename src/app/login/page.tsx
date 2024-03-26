'use client';
import { OAUTH_CALLBACK_URI, OAUTH_CLIENT_ID, OAUTH_REDIRECT_URI } from '@/const';
import axios from 'axios';
import Link from 'next/link';
import { useEffect } from 'react';

const Login = () => {
  const uril = `https://github.com/login/oauth/authorize?response_type=code&redirect_uri=${encodeURIComponent(OAUTH_REDIRECT_URI || 'http://localhost:3000')}&scope=email&client_id=${OAUTH_CLIENT_ID}&service=lso&o2v=2&theme=glif&flowName=GeneralOAuthFlow`;
  useEffect(() => {});
  function handleEventClick() {
    console.log('Event Triggered');
    axios.get('https://simplytics.com/pranav-1720/gh-btn-click?userId=ayushchaudhary')
}
function handleClick() {
  console.log('Event Triggered');
  axios.get('https://simplytics.com/pranav-1720/envt-click')
}

  return (
    <div className='flex h-[100vh] w-full flex-col items-center justify-center'>
      <button onClick={handleEventClick}>github btn</button>
      <button onClick={handleClick}>linkedIn btn</button>
      <Link className='btn-base h-[112px] w-[232.7px] text-[3rem]' href={uril}>
        Login
      </Link>
    </div>
    
  );
};

export default Login;