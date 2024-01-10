
import React, { useEffect } from 'react';
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Component() {
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        });
      }
    };

    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    return () => {
      smoothScrollLinks.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);
  return (
    <div className="bg-[#333333]">
      <div className="max-w-7xl mx-auto py-5 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              alt="Logo"
              className="h-10"
              height="40"
              src="/logo.png"
              style={{
                aspectRatio: "120/40",
                objectFit: "cover",
              }}
              width="120"
            />
            <div className="ml-10 space-x-8">
              <a className="text-white hover:text-gray-300 hover:underline" href="#top" smooth={true} duration={500}>
                TOP
              </a>
              <a className="text-white hover:text-gray-300 hover:underline" href="#about" smooth={true} duration={500}>
                ABOUT
              </a>
              <a className="text-white hover:text-gray-300 hover:underline" href="#loadmap" smooth={true} duration={500}>
                LOADMAP
              </a>
              <a className="text-white hover:text-gray-300 hover:underline" href="#media" smooth={true} duration={500}>
                MEDIA
              </a>
              <a className="text-white hover:text-gray-300 hover:underline" href="#wanted" smooth={true} duration={500}>
                WANTED
              </a>
            </div>
          </div>
          {/* <div className="flex items-center">
            <Button className="bg-[#000000] text-white hover:bg-[#1a1a1a] mr-5">MENU</Button>
          </div> */}
        </div>
      </div>
    </div>
  )
}






