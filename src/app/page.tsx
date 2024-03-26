"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { BACKEND_URL } from "@/const";
import axios from "axios";
import { copyFileSync } from "fs";
import { useRouter } from "next/navigation";

const Testing = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [authFailed, setAuthFailed] = useState(false);
  const params = useSearchParams();
  let ignore = false;
  const router = useRouter();

  useEffect(() => {
    const code = params.get("code");

    let ignore = false;
    async function handleLogin() {
      try {
        setIsLoading(true);
        const res = await axios(`${BACKEND_URL}/auth/login`, {
          method: "POST",
          withCredentials: true,
          headers: {
            Authorization: `code ${code}`,
            "Content-Type": "application/json",
          },
        });
        if(res.data['access_token']){
          localStorage.setItem('access_token', res.data['access_token']);
          router.replace('/dashboard');
        }else{
          setAuthFailed(true);
        }
        if (!ignore) {
          setIsLoading(false);
          console.log("hereeee");
        }
      } catch (err) {
        if (!ignore) {
          setIsLoading(false);
          // setError(err);
        }
      }
    }

    handleLogin();

    return () => {
      ignore = true;
    };
  }, [params]);

  return authFailed ? (
    <div>Auth Failed</div>
  ) : <div>Auth Done</div>;
};

export default Testing;
