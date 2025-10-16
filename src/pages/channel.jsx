import React from "react";
import Navigation from "../components/navigation";
import two from "../assets/images/2.png";
import channelP from "../assets/images/channel_p.png";

const Channel = () => {
    return (
            <main className="pt-16">
                <section className="flex flex-col lg:flex-row min-h-screen">
                    <div className="w-full lg:w-[25%] bg-lime-600 flex items-center justify-center min-h-[200px] lg:min-h-full"> 
                        <img src={two} alt="Image" className="w-full h-auto max-w-xs lg:max-w-none" />
                    </div>
                    <div className="w-full lg:w-[25%] flex flex-col px-4 lg:px-5 py-6 lg:pt-10">
                        <div className="mb-4 lg:mb-0">
                            <h1 className="text-xl lg:text-2xl font-bold">Travooz Channel</h1>
                            <p className="text-lg lg:text-xl font-medium">
                                The 24/7 tourism ambassador.
                            </p>
                        </div>

                        <div className="flex-1 flex items-center justify-center">
                            <img src={channelP} alt="" className="w-full max-w-xs lg:max-w-none" />
                        </div>
                    </div>

                    <div className="w-full lg:w-[50%]">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 lg:p-10">
                           <div>
                             <div className="bg-lime-100 p-3 lg:p-4 rounded-xl shadow-sm text-sm lg:text-base">
                                The channel is strategically placed where it matters most: in hotel rooms, airport lounges, embassies, and high-end restaurants, and most  importantly, in the palm of the visitor.
                            </div>
                             <h1 className="text-lime-600 text-base lg:text-lg font-bold my-3">Transforming Visitor Engagement</h1>
                             <div className="space-y-3 lg:space-y-5 text-xs lg:text-sm">
                                <p className="">
                                    Rwanda is experiencing significant tourism
                                    growth, welcoming over 1.36 million visitors
                                    in 2024. However, a key opportunity lies in
                                    engaging a specific segment, conference
                                    delegates and business travelers who often
                                    remain confined to their hotels, limiting their
                                    exposure to the country’s broader experiences.
                                </p>

                                <p>
                                    The Travooz Channel is the proposed solution:
                                    a Free Ad-Supported Streaming Television
                                    (FAST) channel that acts as a 24/7 tourism
                                    ambassador. It is strategically placed in hotels,
                                    airport lounges, and on mobile devices to
                                    inspire visitors. Its content is built on seven key
                                    pillars: Attractions & Experiences, Hospitality,
                                    Culinary Journeys, Culture, Wildlife, Events,
                                    and Business & Investment, all presented
                                    through captivating storytelling
                                </p>
                            
                             </div>
                           </div>

                           <div>

                            <div className="space-y-5 text-sm">
                                <p>
                                The channel’s core innovation is its seamless
                                integration with the Travooz Online Travel
                                Agency. By embedding QR codes directly
                                in the programming, it creates a closed-loop
                                ecosystem that allows viewers to instantly
                                book tours, restaurant reservations, or
                                purchase crafts, directly converting inspiration
                                into transaction and increasing visitor
                                spending.
                                </p>

                                <p>
                                    To ensure maximum reach, the channel is
                                    distributed via the StreamPoto Android TV box,
                                    a dedicated mobile app, and online platforms.
                                    This is amplified by a dynamic social media
                                    presence that builds a global audience and
                                    drives engagement back to the main channel.
                                </p>
                                <p>
                                    The value proposition is clear: for the Rwanda
                                    tourism sector, it is a direct tool to increase
                                    visitor yield and distribute economic benefits
                                    more widely to local SMEs. For hospitality
                                    partners, it enhances guest engagement,
                                    drives direct revenue through upselling, and
                                    positions them as providers of an authentic,
                                    tech-savvy Rwandan experience.
                                </p>
                            </div>

                            {/* pillars */}
                            <div className="space-y-2 lg:space-y-3 mt-4 lg:mt-5">
                                <h1 className="text-lime-600 text-xs lg:text-sm font-semibold">Our content is built on seven key pillars:</h1>

                                <div className="p-2 lg:p-3 flex justify-start items-center bg-lime-100 rounded-lg gap-2 lg:gap-3">
                                    <span> <i className="fa-solid fa-car text-lg lg:text-xl"></i> </span>
                                    <p className="text-xs lg:text-sm">Attraction & Experiences</p>
                                </div>

                                 <div className="p-2 lg:p-3 flex justify-start items-center bg-lime-100 rounded-lg gap-2 lg:gap-3">
                                    <span> <i className="fa-solid fa-hotel text-lg lg:text-xl"></i> </span>
                                    <p className="text-xs lg:text-sm">Hospitality & Stays</p>
                                </div>

                                 <div className="p-2 lg:p-3 flex justify-start items-center bg-lime-100 rounded-lg gap-2 lg:gap-3">
                                    <span> <i className="fa-solid fa-utensils text-lg lg:text-xl"></i> </span>
                                    <p className="text-xs lg:text-sm">Culinary Journeys</p>
                                </div>

                                    <div className="p-2 lg:p-3 flex justify-start items-center bg-lime-100 rounded-lg gap-2 lg:gap-3">
                                    <span> <i className="fa-solid fa-earth-africa text-lg lg:text-xl"></i> </span>
                                    <p className="text-xs lg:text-sm">Culture & Heritage</p>
                                </div>

                                    <div className="p-2 lg:p-3 flex justify-start items-center bg-lime-100 rounded-lg gap-2 lg:gap-3">
                                    <span> <i className="fa-solid fa-hippo text-lg lg:text-xl"></i> </span>
                                    <p className="text-xs lg:text-sm">Wildlife & Conservation</p>
                                </div>

                                    <div className="p-2 lg:p-3 flex justify-start items-center bg-lime-100 rounded-lg gap-2 lg:gap-3">
                                    <span> <i className="fa-solid fa-users text-lg lg:text-xl"></i> </span>
                                    <p className="text-xs lg:text-sm">Events & Nightlife</p>
                                </div>

                            <div className="p-2 lg:p-3 flex justify-start items-center bg-lime-100 rounded-lg gap-2 lg:gap-3">
                                    <span> <i className="fa-solid fa-person-chalkboard text-lg lg:text-xl"></i> </span>
                                    <p className="text-xs lg:text-sm">Business & Investment</p>
                                </div>
                            </div>


                           </div>
                        </div>
                    </div>
                </section>
            </main>
    )
}

export default Channel;