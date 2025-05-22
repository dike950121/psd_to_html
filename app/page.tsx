"use client";

import Image from "next/image";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaGift } from "react-icons/fa";
import { BsCart3, BsPerson, BsList } from "react-icons/bs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import Card from "@/app/components/Card";
import ResponsiveSection from "@/app/components/ResponsiveSection";
import { useState, useEffect } from 'react';

interface CardData {
  customers: number;
  content: string;
  discountdel: number;
  discountprice: number;
  savetag: number;
}

export default function Home() {
  const [isLargeScreen, setIsLargeScreen] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const cardsdata: CardData[] = [
    {
      customers: 3000,
      content: "3000K FC25 COINS XBOX",
      discountdel: 824.15,
      discountprice: 732.15,
      savetag: -47
    },
    {
      customers: 2000,
      content: "3000K FC25 COINS XBOX",
      discountdel: 664.15,
      discountprice: 632.15,
      savetag: -47
    },
    {
      customers: 3000,
      content: "3000K FC25 COINS XBOX",
      discountdel: 564.15,
      discountprice: 532.15,
      savetag: -47
    },
    {
      customers: 3000,
      content: "3000K FC25 COINS XBOX",
      discountdel: 34.15,
      discountprice: 32.15,
      savetag: -47
    },
    {
      customers: 3000,
      content: "3000K FC25 COINS XBOX",
      discountdel: 664.15,
      discountprice: 632.15,
      savetag: -47
    },
    {
      customers: 3000,
      content: "3000K FC25 COINS XBOX",
      discountdel: 664.15,
      discountprice: 632.15,
      savetag: -47
    },
    {
      customers: 3000,
      content: "3000K FC25 COINS XBOX",
      discountdel: 564.15,
      discountprice: 532.15,
      savetag: -47
    },
    {
      customers: 3000,
      content: "3000K FC25 COINS XBOX",
      discountdel: 34.15,
      discountprice: 32.15,
      savetag: -47
    }
  ]

  useEffect(() => {
    // Initialize selectedCard with the first card
    if (cardsdata.length > 0) {
      setSelectedCard(cardsdata[0]);
    }
  }, []); // Empty dependency array means this runs once when component mounts

  useEffect(() => {
    const checkScreenSize = () => {
      const value = window.innerWidth > 1536
        ? 2
        : window.innerWidth > 1024
          ? 1
          : 0;
      setIsLargeScreen(value);
      console.log('isModal is:', isModalOpen);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {
        isLargeScreen == 0 &&
        <div className="bg-black flex px-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <div onClick={toggleSidebar} className="cursor-pointer"><BsList className="font-bold text-white text-[40px]" /></div>
            <div><Image src="/images/logo.png" alt="logo" width={300} height={100} /></div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-[gray] font-bold">$EUR</div>
            <Image src="/images/Ger_flag.jpg" alt="flag image load is failed." width={100} height={50} />
          </div>
        </div>
      }
      <div className={`fixed top-0 left-0 h-full w-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-8 bg-gray-200 text-right cursor-pointer" onClick={() => setIsSidebarOpen(false)}><FontAwesomeIcon icon={faClose} className="text-2xl" /> </div>
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">All Products</h2>
          <hr />
          <ul className="space-y-2">
            <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">Categories</li>
            <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">Budget Games</li>
            <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">Game Pass Hub</li>
            <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">New Releases</li>
            <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">Minecraft</li>
            <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">Current Hits</li>
          </ul>
        </div>
      </div>
      {
        isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleSidebar}
          />
        )
      }
      <div className="bg-gray-800 text-white text-center p-4">5% New Users Promo Code: TOTS</div>
      {
        isLargeScreen != 0 &&
        <>
          <div className="flex justify-between gap-8 2xl:gap-16 items-center px-16">
            <Image src="/images/logo.png" alt="logo" width={400} height={100} />
            <div className="flex flex-1 items-center gap-2a relative">
              <input type="text" placeholder="Search..." className="rounded-full w-full outline-none border border-gray-300 p-2 [text-indent:10px]" />
              <button className="rounded-full absolute right-0 bg-gradient-to-br from-[#ff44aa] to-[#ffa500] h-full w-[80px]"><FaMagnifyingGlass className="mx-auto" /></button>
            </div>
            <div
              className="flex rounded-full border border-gray-300 p-2 cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              <div className="px-2 border-r border-gray-300">EN</div>
              <div className="px-2">EUR</div>
            </div>
            <div className="flex p-2 items-center gap-2">
              <BsPerson className="font-bold text-2xl" />
              {isLargeScreen > 1 && <div>Sign in/ Register</div>}
            </div>
            <div>
              <BsCart3 className="font-bold text-2xl" />
            </div>
          </div>
          <div className="bg-gray-100 flex justify-between text-center px-24 font-bold">
            <div className="flex items-center gap-2">
              <BsList className="font-bold text-2xl" />
              <div>Categories</div>
            </div>
            <div className="flex items-center p-3">
              <div className="px-4 py-3 bg-[linear-gradient(135deg,#550077,#ff0000aa)] text-white rounded-full">Save with SE^L+Pass</div>
            </div>
            <div className="flex items-center p-3">
              Budget Games
            </div>
            <div className="flex items-center p-3">
              Game Pass Hub
            </div>
            <div className="flex items-center p-3">
              New Releases
            </div>
            <div className="flex items-center p-3 uppercase">
              Minecraft
            </div>
            <div className="flex items-center p-3">
              Current Hits
            </div>
          </div>
        </>
      }

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="rounded-2xl p-1 [background-image:linear-gradient(127deg,_#FF1EB9,_#FFBA30)] m-[-3px] border-solid">
            <div className="bg-white [border-radius:inherit] p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Language & Currency</h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <FontAwesomeIcon icon={faClose} className="text-xl" />
                </button>
              </div>
              <hr />
              <div className="pt-8">
                <h3 className="font-semibold mb-2">Currencies</h3>
                <div className="grid grid-cols-2 xl:grid-cols-3 gap-y-3 gap-x-32">
                  <button className="flex justify-between w-28 rounded-full py-2 px-4 transition-bg duration-[0.3s] hover:bg-gray-300">
                    <span>€</span>
                    <span>EUR</span>
                  </button>
                  <button className="flex justify-between w-28 rounded-full py-2 px-4 transition-bg duration-[0.3s] hover:bg-gray-300">
                    <span>$</span>
                    <span>USD</span>
                  </button>
                  <button className="flex justify-between w-28 rounded-full py-2 px-4 transition-bg duration-[0.3s] hover:bg-gray-300">
                    <span>€</span>
                    <span>AUD</span>
                  </button>
                  <button className="flex justify-between w-28 rounded-full py-2 px-4 transition-bg duration-[0.3s] hover:bg-gray-300">
                    <span>€</span>
                    <span>CAD</span>
                  </button>
                  <button className="flex justify-between w-28 rounded-full py-2 px-4 transition-bg duration-[0.3s] hover:bg-gray-300">
                    <span>€</span>
                    <span>CHF</span>
                  </button>
                </div>
                <div className="text-center py-4">
                  <button className="bg-gradient-to-br from-[#ff44aa] to-[#ffa500] transition-all duration-[0.3s] hover:from-[#ffa500] hover:to-[#ffa500] hover:text-black uppercase w-[265px] p-4 rounded-full text-sm text-white">Accept</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-col lg:flex-row gap-[20px] 2xl:gap-20 px-16 xl:px-32 py-32">
        <div>
          <ResponsiveSection />
          <div className="card-group grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
            {cardsdata.map((carddata, key) => (
              <Card
                key={key}
                customers={carddata.customers}
                content={carddata.content}
                discountdel={carddata.discountdel}
                discountprice={carddata.discountprice}
                savetag={carddata.savetag}
                onClick={() => {
                  setSelectedCard(carddata);
                }}
              />
            ))}
          </div>
        </div>
        {isLargeScreen ? (
          <div className="w-full lg:w-[400px] border border-gray-300 rounded-[30px] h-[min-content]">
            <div className="flex items-center justify-between rounded-[30px_30px_0px_0px] bg-[linear-gradient(135deg,#550077,#ff0000aa)] p-4">
              <div className="text-white">With SE^L+Pass you 0.55$</div>
              <div
                onClick={() => setIsSwitchOn(!isSwitchOn)}
                className="switch bg-white w-[70px] p-2 rounded-full cursor-pointer transition-all duration-300"
              >
                <div
                  className={`bg-[pink] w-4 h-4 rounded-full transition-transform duration-300 ${isSwitchOn ? 'translate-x-[42px]' : 'translate-x-0'}`}
                ></div>
              </div>
            </div>
            <div className="flex flex-col gap-5 bg-white rounded-[0px_0px_30px_30px] p-8">
              <h2 className="text-2xl">{selectedCard?.content}</h2>
              <label className="inline-flex items-center space-x-2 cursor-pointer text-2xl">
                <input type="radio" name="option" className="appearance-none w-4 h-4 rounded-full border border-gray-400 checked:bg-green-400 checked:border-green-400" />
                <span>Delivery 30-60 min</span>
              </label>
              <div className="flex justify-between items-center gap-2">
                <div className="font-bold">
                  <div className="text-[30px]">{selectedCard?.discountdel}</div>
                  <div className="text-green-400">Saving ${selectedCard?.savetag}</div>
                </div>
                <div className="flex items-center gap-3 bg-green-400 text-white px-5 py-2 rounded-full">
                  <FaGift className="text-[25px]" />
                  <div>
                    <div className="text-sm">CashBack</div>
                    <div className="text-xl font-bold">$4.32</div>
                  </div>
                </div>
              </div>
              <button className="bg-gradient-to-br from-[#ff44aa] to-[#ffa500] uppercase w-full p-4 rounded-full text-sm text-white">Buy now</button>
              <button className="w-full p-4 border border-black rounded-full"><Image src="/images/apple_pay_logo_svg_2.png" alt="image load is failed." width={50} height={30} className="mx-auto" /></button>
            </div>
          </div>
        ) : (
          <div className="w-full lg:w-[400px] border border-gray-300 rounded-[30px] h-[min-content]">
            <div className="flex items-center justify-between rounded-[30px_30px_0px_0px] bg-[linear-gradient(135deg,#550077,#ff0000aa)] p-4">
              <div className="text-white">With SE^L+Pass you 0.55$</div>
              <div
                onClick={() => setIsSwitchOn(!isSwitchOn)}
                className="switch bg-white w-[70px] p-2 rounded-full cursor-pointer transition-all duration-300"
              >
                <div
                  className={`bg-[pink] w-4 h-4 rounded-full transition-transform duration-300 ${isSwitchOn ? 'translate-x-[42px]' : 'translate-x-0'}`}
                ></div>
              </div>
            </div>
            <div className="flex flex-col gap-5 bg-white rounded-[0px_0px_30px_30px] p-8">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-5">
                <div className="text-xl">
                  <h2>{selectedCard?.content}</h2>
                  <label className="inline-flex items-center space-x-2 cursor-pointer">
                    <input type="radio" name="option" className="appearance-none w-4 h-4 rounded-full border border-gray-400 checked:bg-green-400 checked:border-green-400" />
                    <span>Delivery 30-60 min</span>
                  </label>
                </div>
                <div className="flex items-center gap-3 bg-green-400 text-white px-5 py-2 rounded-full">
                  <FaGift className="text-[25px]" />
                  <div>
                    <div className="text-sm">CashBack</div>
                    <div className="text-xl font-bold">$4.32</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-5">
                <div className="font-bold">
                  <div className="text-[30px]">${selectedCard?.discountdel}</div>
                  <div className="text-green-400">Saving ${selectedCard?.savetag}</div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <button className="w-full sm:min-w-40 bg-gradient-to-br from-[#ff44aa] to-[#ffa500] uppercase p-4 rounded-full text-sm text-white">Buy now</button>
                  <button className="w-full sm:min-w-40 p-4 border border-black rounded-full"><Image src="/images/apple_pay_logo_svg_2.png" alt="image load is failed." width={50} height={30} className="mx-auto" /></button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
