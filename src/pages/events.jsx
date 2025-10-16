import React from "react";
import Navigation from "../components/navigation";
import seven from "../assets/images/7.png";
import sport from "../assets/images/sport.png";
import sport2 from "../assets/images/sport2.png";

const Travooz = () => {
    return (
            <main className="pt-16">
                <section className="flex flex-col lg:flex-row min-h-screen">
                    <div className="w-full lg:w-[25%] bg-lime-600 flex items-center justify-center min-h-[200px] lg:min-h-full"> 
                        <img src={seven} alt="Image" className="w-full h-auto max-w-xs lg:max-w-none" />
                    </div>
                    <div className="w-full lg:w-[25%] flex flex-col px-4 lg:px-5 py-6 lg:pt-10">
                        <div className="mb-4 lg:mb-0">
                            <h1 className="text-xl lg:text-2xl font-bold">Travooz Events</h1>
                            <p className="text-lg lg:text-xl font-medium">
                                Creating unforgettable smoments
                            </p>
                        </div>

                        <div className="flex-1 flex items-center justify-center -ms-20">
                            <img src={sport} alt="" className="w-full h-full max-w-xs lg:max-w-none" />
                        </div>
                    </div>

                    <div className="w-full lg:w-[50%]">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 lg:p-10">
                           <div>
                             <div className="bg-lime-100 p-3 lg:p-4 rounded-xl shadow-sm text-sm lg:text-base">
                                Travooz is a pioneer
                                in creating innovative,
                                sports-driven experiences
                                that enrich Rwanda’s
                                tourism and corporate
                                landscape. Our mission is
                                to design unique events
                                that add vibrancy to
                                the national calendar,
                                attract regional and
                                international visitors, and
                                encourage longer stays
                                by offering unforgettable
                                experiences. We
                                specialize in fostering
                                professional networking,
                                corporate wellness, and
                                cultural exchange through
                                two flagship initiatives.
                            </div>
                             
                           </div>

                           <div>
                            <h1 className="text-lime-600 text-base lg:text-lg font-bold mb-3">1. The Kivu Trail Marathon</h1>

                            <div className="space-y-3 lg:space-y-5 text-xs lg:text-sm">
                                <p>
                                This event is far more than a race; it is a
                                strategic showcase of Rwanda’s natural
                                beauty, designed to boost tourism. Based
                                on a “destination running” model, it invites
                                international participants to experience the
                                stunning Congo Nile Trail. Visitors come for
                                the challenge but stay to explore, turning
                                runners into tourists. The marathon also serves
                                as a premier networking activity for regional
                                corporate teams, all while promoting wellness
                                and environmental conservation in a fun, noncompetitive atmosphere.
                                </p>
                            </div>
                            <h1 className="text-lime-600 text-base lg:text-lg font-bold mb-3">2. Kigali Corporate Sports</h1>


                            <p className="text-xs lg:text-sm mt-3 lg:mt-4">
                                    As a leading corporate wellness platform,
                                    Kigali Corporate Sports uses the power
                                    of sport to build professional networks
                                    and strengthen team culture. We bring
                                    professionals together in a relaxed, social
                                    setting to facilitate meaningful connections
                                    beyond the office, promoting work-life balance
                                    and organizational health.
                                </p>

                          
                           </div>
                        </div>
                        
                        {/* Full-width image spanning both columns */}
                        <div className="px-4 lg:px-10 pb-4 lg:pb-10">
                            <img src={sport2} alt="" className="w-full h-auto" />
                        </div>
                    </div>
                </section>
            </main>
    )
}

export default Travooz;