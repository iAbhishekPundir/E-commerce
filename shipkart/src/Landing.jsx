import React from "react";

export const Landing = () => {
  const getData = async () => {
    try {
      const creds = {
        email: "adarshbalika@gmail.com",
        password: "adarshbalika",
      };
      const response = await fetch("api/auth/login", {
        method: "POST",
        body: JSON.stringify(creds),
      });

      const fetchedData = await response.json();
      const { encodedToken } = fetchedData;
      localStorage.setItem("encodedToken", encodedToken);
      console.log(fetchedData);
    } catch (e) {
      console.error(e);
    }
  };
  return <div onClick={getData}>Landing Page for E-commerce</div>;
};
