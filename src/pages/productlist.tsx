import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

interface Commodity {
    image: string;
    name: string;
    market_price: number[];
    price_grade1: number[]; 
    price_grade2:number[];// now three possible prices
    change: number; // positive or negative
}

const commodities: Commodity[] = [
    {
        image: "https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=400&q=60",
        name: "Aluminium Ingots",
        market_price:[1500, 3000],
        price_grade1: [2000, 3000],
        price_grade2:[1500, 2000],        
        change: 33.3,
    },

    {
        image: "https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=400&q=60",
        name: "Bitter Kola",
        market_price:[6000],
        price_grade1: [8000],
        price_grade2:[6000, 8000],        
        change: 10.0,
    },

    {
        image: "https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=400&q=60",
        name: "Bitumen",
        market_price:[400, 1000],
        price_grade1: [750, 1000],
        price_grade2:[400, 750],        
        change: 20.3,
    },

    {
        image: "https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=400&q=60",
        name: "Cashew Nuts (Raw)",
        market_price:[1000, 2000],
        price_grade1: [1600, 1000],
        price_grade2:[1000, 1600],        
        change: 28.3,
    },

    {
        image: "https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=400&q=60",
        name: "Cashew Nuts (Kernel)",
        market_price:[5500, 9000],
        price_grade1: [7500, 9000],
        price_grade2:[9000, 5000],        
        change: 25.5,
    },

    {
        image: "https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=400&q=60",
        name: "Cassava Flour",
        market_price:[500, 1500],
        price_grade1: [1000, 1500],
        price_grade2:[500, 1000],        
        change: 28.5,
    },

    {
        image: "https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=400&q=60",
        name: "Charcoal",
        market_price:[200, 600],
        price_grade1: [400, 600],
        price_grade2:[200, 400],        
        change: 25.5,
    },

    
];


const ProductList: React.FC = () => {
    // each entry stores the index (0..2) of the currently displayed price for that commodity
    const [currentPriceIndex, setCurrentPriceIndex] = useState<number[]>(
        () => commodities.map(() => Math.floor(Math.random() * 3))
    );

    // update prices every 3 seconds, picking a different index (cycles if same)
    useEffect(() => {
        const id = setInterval(() => {
            setCurrentPriceIndex((prev) =>
                prev.map((p, i) => {
                    const len = commodities[i].market_price.length;
                    let next = Math.floor(Math.random() * len);
                    if (next === p) next = (p + 1) % len;
                    return next;
                })
            );
        }, 5000);

        return () => clearInterval(id);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 px-6 py-12">
            <h1 className="text-3xl font-bold text-green-700 mb-8 text-center">
                Real-Time Commodity Prices
            </h1>

            <div className="max-w-3xl mx-auto grid gap-4">
                {commodities.map((item, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        className="flex justify-between items-center bg-white shadow-md rounded-xl p-5 border border-gray-200"
                    >
                        <div className="flex items-center">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-14 h-14 rounded-md object-cover mr-4"
                            />
                            <div>
                                <h2 className="text-lg font-semibold text-gray-800">
                                    {item.name}
                                </h2>
                                <p className="text-sm text-gray-500">Market price: $
                                    {item.market_price[currentPriceIndex[index]]}
                                </p>
                                <p className="text-sm text-gray-500">Grade 1: $
                                    {item.price_grade1[0]} - ${item.price_grade1[1]}
                                </p>

                                <p className="text-sm text-gray-500">Grade 2: $
                                    {item.price_grade2[0]} - ${item.price_grade2[1]}
                                </p>
                            </div>
                        </div>

                        <div
                            className={`flex items-center font-semibold ${
                                item.change >= 0 ? "text-green-600" : "text-red-500"
                            }`}
                        >
                            {item.change >= 0 ? (
                                <ArrowUpRight className="w-5 h-5 mr-1" />
                            ) : (
                                <ArrowDownRight className="w-5 h-5 mr-1" />
                            )}
                            {item.change >= 0 ? `+${item.change.toFixed(1)}%` : `${item.change.toFixed(1)}%`}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
