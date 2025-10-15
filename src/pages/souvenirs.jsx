import React from "react";
import Navigation from "../components/navigation";
import three from "../assets/images/3.png";
import four from "../assets/images/4.png";
import coffee from "../assets/images/coffee.png";

const Souvenirs = () => {
    return (
            <main className="pt-16">
                <section className="flex flex-col xl:flex-row min-h-screen">
                    <div className="w-full xl:w-[25%] bg-lime-600 flex items-center justify-center min-h-[200px] xl:min-h-full"> 
                        <img src={three} alt="Image" className="w-full h-auto max-w-xs xl:max-w-none" />
                    </div>
                    <div className="w-full xl:w-[25%] flex flex-col px-4 xl:px-5 py-6 xl:pt-10">
                        <div className="mb-4 lg:mb-0">
                            <h1 className="text-lg lg:text-xl xl:text-2xl font-bold">Travooz Concierge & Support</h1>
                            <p className="text-base lg:text-lg font-medium">White-Glove Service</p>
                        </div>

                        <div className="text-xs lg:text-sm space-y-3 mt-5">
                            <p>We combine digital efficiency with genuine human care to make every journey stress-free and memorable.</p>

                            <p>
                                Our concierge team is available 24/7 to
                                provide personalized assistance throughout
                                the trip. We help with bookings and
                                reservations, recommend the best places to
                                visit and dine, and resolve any travel issues
                                quickly.
                        </p>

                          <div className="bg-lime-100 p-3 lg:p-4 rounded-xl shadow-sm text-sm lg:text-base mt-5">
                                We also offer <span className="font-bold">Airport
                                Pickups and provide
                                mobile Internet
                                connectivity for
                                both business and
                                leisure visitors, </span> 
                                ensuring uninterrupted
                                connectivity and
                                smooth communication
                                from arrival to departure
                            </div>
                        </div>

                        <div className="flex-1 flex items-center justify-center">
                            <img src="/src/assets/images/travooz_car.png" alt="" className="w-full h-auto max-w-md xl:max-w-lg -ms-10" />
                        </div>
                    </div>

                    <div className="w-full xl:w-[25%] p-4 xl:p-5">
                           <div>
                                 <div className="mb-4 lg:mb-0">
                            <h1 className="text-lg lg:text-xl xl:text-2xl font-bold">Travooz Souvenirs </h1>
                            <p className="text-base lg:text-lg font-medium my-2"> Carry a piece of Rwanda home </p>
                         </div>

                             <div className="space-y-3 lg:space-y-5 text-xs lg:text-sm mt-3">
                                <p className="">
                                    Travooz Souvenirs is your professional
                                    souvenir concierge, helping visitors take
                                    Rwanda’s beauty, culture, and memories
                                    home. More than just shopping, our platform
                                    offers carefully curated Made-in-Rwanda
                                    keepsakes, available conveniently through
                                    our online souvenir shop within the Travooz
                                    app
                                </p>

                                <p>
                                In partnership with Rwanda’s finest artisans,
                                we showcase a wide collection celebrating
                                the country’s heritage, including handwoven
                                baskets, traditional crafts, handmade gifts,
                                clothing, jewelry, woodcarvings, ornaments,
                                and specialty teas, coffees, and gourmet
                                delights. Each item tells a story, and through
                                the app, visitors can even see videos of
                                the making process, from raw creation to
                                beautiful packaging. Many products can be
                                customized for a personal touch.
                                </p>

                                <p>
                                Whether attending a conference, staying in
                                a hotel, or simply exploring Rwanda, Travooz
                                Souvenirs makes it easy to select, package,
                                and deliver keepsakes directly to you. When
                                favorites like Rwanda’s world-class coffee or
                                tea run out, you can reorder anytime through
                                the app for delivery anywhere in the world.
                                </p>

                                <p>
                                    With Travooz Souvenirs, you don’t just buy
                                    a product you carry a piece of Rwanda with
                                    you.
                                </p>
                             </div>
                           </div>

                           </div>

                    <div className="w-full xl:w-[25%] bg-lime-600 flex flex-col items-center justify-center min-h-[200px] xl:min-h-full">
                            <div className="space-y-3 xl:space-y-5 text-xs xl:text-sm w-full">
                                <div className="w-full">
                                    <img src={four} alt="Image" className="w-full h-auto" />
                                </div>
                            </div>
                              
                            <div className="w-full">
                                <img src={coffee} alt="Image" className="w-full h-auto" />
                            </div>
                    </div>
                </section>
            </main>
    )
}

export default Souvenirs;