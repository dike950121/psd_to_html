import Image from "next/image"

interface CardProps {
    customers: number;
    content: string;
    discountprice: number;
    discountdel: number;
    savetag: number;
    onClick: () => void;
}

export default function Card({customers, content, discountprice, discountdel, savetag, onClick}: CardProps) {
    return (
        <>
            <div 
                className="card text-center border border-gray-500 rounded-[10px] cursor-pointer hover:shadow-lg transition-shadow duration-300"
                onClick={onClick}
            >
                <div className="bg-[lightblue] p-4 rounded-[10px_10px_0px_0px]">
                    <div>
                        <Image src="/images/xbox.jpg" alt="image load failed." width={40} height={40} className="inline" />
                        <Image src="/images/fut.png" alt="image load failed." width={40} height={40} className="inline" />
                    </div>
                    <div className="text-[50px] font-bold text-[green]">{customers}K</div>
                    <div className="rounded-md bg-[green] text-white text-xl p-2">${4.32}</div>
                </div>
                <div className="p-8 rounded-[0px_0px_10px_10px]">
                    <div className="content">{content}</div>
                    <hr />
                    <div className="discount-del text-xl text-gray-500 py-2 text-left">${discountdel}</div>
                    <div className="flex justify-between items-center">
                        <div className="discount-price text-2xl py-2">${discountprice}</div>
                        <div className="c-save-tag px-2 py-1 bg-green-300 rounded-full">{savetag}%</div>
                    </div>
                </div>
            </div>
        </>
    )
}