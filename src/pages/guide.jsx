import React from "react";
import Navigation from "../components/navigation";
import eight from "../assets/images/8.png";
import gorilla from "../assets/images/gorilla.jpg";
import gorillaRead from "../assets/images/gorilla_read.png";

const Guide = () => {
    return (
        <main className="bg-white">
            <Navigation />
            <div className="pt-16">
                <section className="flex flex-col lg:flex-row min-h-screen">
                    <div className="w-full lg:w-[25%] bg-lime-600 flex items-center justify-center min-h-[200px] lg:min-h-full"> 
                        <img src={eight} alt="Image" className="w-full h-auto max-w-xs lg:max-w-none" />
                    </div>
                    <div className="w-full lg:w-[25%] flex flex-col px-4 lg:px-5 py-6 lg:pt-10">
                        <div className="mb-4 lg:mb-0">
                            <h1 className="text-xl lg:text-2xl font-bold">Travooz Pocket Guide</h1>
                            <p className="text-lg lg:text-xl font-medium">
                                Your passport to our city
                            </p>
                        </div>

                        <div className="space-y-3 lg:space-y-5 text-xs lg:text-sm mt-5">
                                <p className="">
                                    The Travooz Pocket Guide is a compact,
                                    passport-sized book uniting print charm with
                                    digital convenience. Ideal for visitors and
                                    business guests, it offers essential information
                                    on attractions, dining, services, and local
                                    experiences.
                                </p>

                                <p>
                                Small enough for your pocket or bag, it’s the
                                ultimate travel companion. Each page gives
                                clear, succinct tips on where to go, stay, and
                                how to get around.
                            </p>

                                <p>
                                    TWith built-in QR codes linked to the Travooz
                                    OTA platform, the guide merges reliable
                                    print with interactive features—your simple,
                                    powerful tool to explore and enjoy the city
                                </p>

                             </div>

                        <div className="flex-1 flex items-center justify-center">
                            <img src={gorillaRead} alt="" className="w-full max-w-xs lg:max-w-none" />
                        </div>
                    </div>

                    <div 
                        className="w-full lg:w-[50%] bg-cover bg-center bg-no-repeat min-h-[200px] lg:min-h-full relative"
                        style={{ backgroundImage: `url(${gorilla})` }}
                    >
                        {/* Background image section */}
                        <div className="absolute inset-0 bg-black/50"></div>
                        <div className="absolute inset-0 flex items-center justify-center p-4">
                            <div className="text-center p-6 lg:p-10 bg-lime-600 text-white rounded-lg shadow-lg max-w-sm lg:max-w-sm">
                            <p className="font-medium">
                            The Travooz Project represents
                            more than just a suite of services,
                            it is a visionary platform dedicated
                            to enriching every facet of the
                            Rwandan travel and hospitality
                            landscape. By uniting cuttingedge technology with authentic
                            local experiences, Travooz not only
                            elevates the journey of each visitor
                            but also empowers local businesses
                            and communities. Together, these
                            efforts support Rwanda’s growth
                            as a leading global destination
                            while creating lasting, meaningful
                            connections for all who visit.
                                </p>
                            </div>
                        </div>
                    </div>
                
                </section>
            </div>
        </main>
    )
}

export default Guide;