import React from "react";

export default function Hero() {
    return (
        <div className="h-screen p-6 bg-gray-100 flex items-center justify-center">
            <div className="w-full max-w-4xl overflow-hidden rounded-lg shadow-lg">
                {/* Image Slider */}
                <div className="relative">
                    <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: 'translateX(0)' }}>
                        <img src="https://via.placeholder.com/800x400" alt="Slide 1" className="w-full" />
                        <img src="https://via.placeholder.com/800x400" alt="Slide 2" className="w-full" />
                        <img src="https://via.placeholder.com/800x400" alt="Slide 3" className="w-full" />
                    </div>
                    {/* Navigation Dots */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        <button className="w-3 h-3 bg-gray-300 rounded-full focus:outline-none"></button>
                        <button className="w-3 h-3 bg-gray-300 rounded-full focus:outline-none"></button>
                        <button className="w-3 h-3 bg-gray-300 rounded-full focus:outline-none"></button>
                    </div>
                </div>
            </div>
        </div>
    );
}
