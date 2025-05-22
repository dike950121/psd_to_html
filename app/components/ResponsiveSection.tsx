'use client';

import Image from "next/image";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function ResponsiveSection() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    // Initial check
    checkScreenSize();

    // Add event listener
    window.addEventListener('resize', checkScreenSize);

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return isLargeScreen ? (
    <div className="flex">
      <div><Image src="/images/layer_66_copy_5.png" alt="FC25 load is failed." width={300} height={500} /></div>
      <div className="flex flex-col gap-5 p-8">
        <div className="uppercase text-[30px] lg:text-[2vw]">Buy <b>EA FC 25</b> coins title width</div>
        <div>
          <FontAwesomeIcon icon={faStar} className="text-2xl text-[gold]" />
          <FontAwesomeIcon icon={faStar} className="text-2xl text-[gold]" />
          <FontAwesomeIcon icon={faStar} className="text-2xl text-[gold]" />
          <FontAwesomeIcon icon={faStar} className="text-2xl text-[gold]" />
          <FontAwesomeIcon icon={faStar} className="text-2xl text-[gold]" />
          <span className="mx-3">4.9/5 | 15.000+ Reviews</span>
        </div>
        <div className="flex items-center text-xl gap-4">
          <Image src="/images/fut.png" alt="FC25 load is failed." width={30} height={30} />
          <div>52.342K sold in last 24h</div>
        </div>
        <div className="flex items-center text-xl gap-4">
          <Image src="/images/layer_89.png" alt="FC25 load is failed." width={30} height={30} />
          <div>10 Years trusted in Germany</div>
        </div>
        <div className="flex items-center text-xl gap-4">
          <Image src="/images/layer_88.png" alt="FC25 load is failed." width={30} height={30} />
          <div>7 Days After Sale Guarantee</div>
        </div>
        <div className="flex flex-col 2xl:flex-row items-center gap-8 text-xl">
          <button className="flex items-center gap-1 border min-w-40 w-full 2xl:w-[12vw] rounded-md p-4 justify-center border-gray-200 text-gray">
            <FaMagnifyingGlass />
            <div>PlayStation</div>
          </button>
          <button className="flex items-center gap-1 border min-w-40 w-full 2xl:w-[12vw] rounded-md p-4 justify-center text-white bg-[green]">
            <FaMagnifyingGlass />
            <div>Xbox</div>
          </button>
          <button className="flex items-center gap-1 border min-w-40 w-full 2xl:w-[12vw] rounded-md p-4 justify-center border-gray-200 text-gray">
            <FaMagnifyingGlass />
            <div>PC</div>
          </button>
        </div>
      </div>
    </div>
  ) : (
    <>
      <div className="flex">
        <div><Image src="/images/layer_66_copy_5.png" alt="FC25 load is failed." width={300} height={500} /></div>
        <div className="flex flex-col gap-5 p-8">
          <div className="uppercase text-2xl lg:text-[2vw]">Buy <b>EA FC 25</b> coins title width</div>
          <div>4.9/5 | 15.000+ Reviews</div>
          <div className="flex items-center text-xl gap-4">
            <Image src="/images/fut.png" alt="FC25 load is failed." width={30} height={30} />
            <div>52.342K sold in last 24h</div>
          </div>
          <div className="flex items-center text-xl gap-4">
            <Image src="/images/layer_89.png" alt="FC25 load is failed." width={30} height={30} />
            <div>10 Years trusted in Germany</div>
          </div>
          <div className="flex items-center text-xl gap-4">
            <Image src="/images/layer_88.png" alt="FC25 load is failed." width={30} height={30} />
            <div>7 Days After Sale Guarantee</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col 2xl:flex-row items-center gap-8 text-xl">
        <button className="flex items-center gap-1 border min-w-40 w-full 2xl:w-[12vw] rounded-md p-4 justify-center border-gray-200 text-gray">
          <FaMagnifyingGlass />
          <div>PlayStation</div>
        </button>
        <button className="flex items-center gap-1 border min-w-40 w-full 2xl:w-[12vw] rounded-md p-4 justify-center text-white bg-[green]">
          <FaMagnifyingGlass />
          <div>Xbox</div>
        </button>
        <button className="flex items-center gap-1 border min-w-40 w-full 2xl:w-[12vw] rounded-md p-4 justify-center border-gray-200 text-gray">
          <FaMagnifyingGlass />
          <div>PC</div>
        </button>
      </div>
    </>
  );
} 