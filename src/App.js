import React, { useState } from "react";
import { Button } from "./components/Button";
import { Sun, Moon } from "lucide-react";
import "./index.css";

export default function BrandElevate() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white min-h-screen" : "bg-white text-gray-900 min-h-screen"}>
      <div className="container mx-auto p-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold">BrandElevate</h1>
        <Button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </Button>
      </div>
      <div className="container mx-auto p-8 text-center">
        <h2 className="text-4xl font-bold mb-4">Helping brands grow through powerful influencer collaborations</h2>
        <p className="text-lg">We connect brands with the right influencers for impactful marketing campaigns.</p>
      </div>
    </div>
  );
}
