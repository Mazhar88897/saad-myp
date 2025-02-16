"use client";

import React from "react";
import Image from "next/image";
const RedirectBoxes = () => {
  const handleRedirect = (url: string) => {
    window.location.href = url; // Redirect to the specified URL
  };

  return (
    <div className="p-8 flex-1">
      <h1 className="text-2xl  font-bold"> Dashboard</h1>
        <p className="text-gray-500 mb-4 dark:text-gray-400">
          Welcome to your dashboard. Here you can manage your data.
       </p>
    <div className=" flex flex-col h-full justify-center items-center space-y-4">
       
      <div
        onClick={() => handleRedirect("/llm/database")}
        className="h-96 w-3/5 border-dashed border-2 border-black rounded-xl shadow-xl flex justify-center items-center cursor-pointer hover:bg-gray-100 transition"
     
      >
      <Image src="https://www.ssuet.edu.pk/wp-content/uploads/SSUET-Official-Logo.webp" height="80" alt="Description of the image" width="500" />
                
      </div>
     
    </div>
    </div>
  );
};

export default RedirectBoxes;
