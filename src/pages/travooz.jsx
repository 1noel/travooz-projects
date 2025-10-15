import React from "react";
import Navigation from "../components/navigation";
import one from "../assets/images/1.png";

const Travooz = () => {
    return (
            <main className="pt-16">
                <section className="flex flex-col lg:flex-row min-h-screen">
                    <div className="w-full lg:w-[25%] bg-lime-600 flex items-center justify-center min-h-[200px] lg:min-h-full"> 
                        <img src={one} alt="Image" className="w-full h-auto max-w-xs lg:max-w-none" />
                    </div>
                    <div className="w-full lg:w-[25%] flex flex-col px-4 lg:px-5 py-6 lg:pt-10">
                        <div className="mb-4 lg:mb-0">
                            <h1 className="text-xl lg:text-2xl font-bold">Travooz OTA</h1>
                            <p className="text-lg lg:text-xl font-medium">
                                Everything travel in one place.
                            </p>
                        </div>

                        <div className="flex-1 flex items-center justify-center">
                            <img src="/src/assets/images/travooz-person.png" alt="" className="w-full max-w-xs lg:max-w-none" />
                        </div>
                    </div>

                    <div className="w-full lg:w-[50%]">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 lg:p-10">
                           <div>
                             <div className="bg-lime-100 p-3 lg:p-4 rounded-xl shadow-sm text-sm lg:text-base">
                                Using innovative technology to simplify, personalize, and elevate every travel experience
                            </div>
                             <h1 className="text-lime-600 text-base lg:text-lg font-bold my-3">What We Offer</h1>
                             <div className="space-y-3 lg:space-y-5 text-xs lg:text-sm">
                                <p className="">
                                    Travooz Project was born from a shared
                                    vision among a team of travel enthusiasts
                                    and media and event management veterans.
                                    We set out to build a seamless, technologydriven platform that bridges the gap between
                                    individual explorers, corporate clients, and the
                                    unique travel experiences they seek
                                </p>

                                <p>
                                    We leverage cutting-edge technology to
                                    simplify the travel planning process. Our
                                    platform makes it effortless for both leisure
                                    and business travelers to discover, book, and
                                    customize their journeys.
                                </p>

                                <p>
                                    To be the leading technology-powered
                                    travel company in the region, seamlessly
                                    integrating B2C and B2B models to deliver
                                    efficient, personalized, and unforgettable travel
                                    solutions.
                                </p>

                                <p>
                                    To use innovative technology to simplify,
                                    personalize, and elevate every travel
                                    experience. We cater to solo adventurers,
                                    family vacations, and corporate travel needs
                                    with equal dedication and expertise.
                                </p>
                             </div>
                           </div>

                           <div>
                            <h1 className="text-lime-600 text-base lg:text-lg font-bold mb-3">What We Offer</h1>

                            <div className="space-y-3 lg:space-y-5 text-xs lg:text-sm">
                                <p>
                                Travooz OTA provides a complete and
                                dynamic range of travel solutions designed for
                                the modern explorer, from safari adventures,
                                staycations, and corporate retreats to MICE
                                events and business travel management.
                                </p>

                                <p>
                                    We offer a curated listing of travel
                                    opportunities, featuring handpicked
                                    accommodations that combine quality, value,
                                    and unique experiences, from luxury resorts
                                    and eco-lodges to affordable, comfortable
                                    stays that support local communities and
                                    sustainability
                                </p>
                            </div>
                              <div className="relative -mr-4 lg:-mr-10 overflow-visible mt-4 lg:mt-6">
                                <img src="/src/assets/images/travooz-gorilla.png" alt="" className="w-full h-auto" />
                            </div>

                              <p className="text-xs lg:text-sm mt-3 lg:mt-4">
                                    With personalized concierge and 24/7
                                    support, Travooz blends digital convenience
                                    with real human care. Our platform simplifies
                                    booking, provides visa and documentation
                                    assistance, and offers on-demand help
                                    for everything from itinerary adjustments
                                    to restaurant reservations , ensuring
                                    every journey is smooth, meaningful, and
                                    memorable.
                                </p>


                          
                           </div>
                        </div>
                    </div>
                </section>
            </main>
    )
}

export default Travooz;