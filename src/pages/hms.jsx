import React from "react";
import Navigation from "../components/navigation";
import six from "../assets/images/6.png";
import frontDesk from "../assets/images/front_desk.png";
import okapi from "../assets/images/okapi.png";
import simba from "../assets/images/simba.png";
import inzovu from "../assets/images/inzovu.png";

const HmsPage = () => {
    return (
        <main className="bg-white">
            <Navigation />
            <div className="pt-16">
                <section className="flex flex-col lg:flex-row min-h-screen">
                    <div className="w-full lg:w-[25%] bg-lime-600 flex items-center justify-center min-h-[200px] lg:min-h-full"> 
                        <img src={six} alt="Image" className="w-full h-auto max-w-xs lg:max-w-none" />
                    </div>
                    <div className="w-full lg:w-[25%] flex flex-col px-4 lg:px-5 py-6 lg:pt-10">
                        <div className="mb-4 lg:mb-0">
                            <h1 className="text-xl lg:text-2xl font-bold">Travooz Hotel Management System (HMS) </h1>
                            <p className="text-lg lg:text-xl font-medium">
                                Empowering Hospitality
                            </p>
                        </div>

                        <div className="flex-1 flex items-end justify-center overflow-visible -ms-20 ">
                            <img 
                                src={frontDesk} 
                                alt="" 
                                style={{
                                    width: '400px',
                                    height: 'auto',
                                    marginBottom: '0'
                                }}
                            />
                        </div>
                    </div>

                    <div className="w-full lg:w-[50%] p-8">
                        <div className="bg-lime-100 p-3 lg:p-4 rounded-xl shadow-sm text-sm lg:text-base w-full">
                                Inclusive digitalisation as an enabler to accelerate the growth of the Hospitality Industry in Rwanda.
                            </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
                           <div>
                            <div className="space-y-3 lg:space-y-5 text-xs lg:text-sm">
                                <p>
                                Rwanda is rapidly advancing in digital transformation to boost efficiency, productivity, and customer satisfaction in the private sector, including tourism and hospitality. Despite having over 1,000 accommodation providers, less than 20% currently use digital tools to improve operations. This gap presents a huge opportunity: empowering the remaining 80% with the right technology can improve guest experiences and support the national VISIT RWANDA vision.
                                </p>

                                <p>
                                    The Travooz Hotel Management System (HMS) is designed as an inclusive, easyto-use, and affordable digital solution for all accommodation providers, from small guesthouses to mid-sized hotels. It helps businesses manage bookings, operations, payments, and compliance, making it accessible even for owners with minimal technical experience.
                                </p>

                                <p>
                                    Travooz HMS is fully local, with Kinyarwanda language options, integration with RRA Electronic Billing Machines (EBM), tourism levy collection, and a Digital Guest Register (DGR) that automates guest registration and real-time reporting to authorities. It also includes a credit score engine to support access to loans and financial growth.
                                </p>
                                </div>
                           </div>

                           <div>

                            <div className="space-y-3 lg:space-y-5 text-xs lg:text-sm">
                                <p>
                                The system enhances guest experiences with mobile-friendly tools, in-room entertainment, and personalized communication. Owners can manage their properties on the go through the Travooz HMS mobile app, update rates, track bookings, check guests in and out, and monitor performance metrics.
                                </p>

                                  <p>
                                    Travooz HMS is tailored for small and medium accommodations, fully integrated with the Travooz ecosystem, affordable, and easy to use. Packages are available for guesthouses, boutique hotels, and mid-sized hotels, making digital transformation simple, inclusive, and practical for Rwanda’s hospitality sector.
                                </p>
                                
                            </div>
                            <h1 className="text-lime-600 text-base lg:text-lg font-bold my-3">Travoos HMS Packages</h1>


                            <div className="space-y-2 lg:space-y-3 mt-4 lg:mt-5">
                                <div className="p-1 lg:p-3 flex justify-start items-center bg-lime-100 rounded-lg gap-2 lg:gap-3">
                                    <span className="w-6 h-6 lg:w-12 lg:h-12 flex-shrink-0">
                                        <img src={okapi} alt="Package icon" className="w-full h-full object-contain" />
                                    </span>
                                    <div className="text-xs lg:text-sm">
                                        <p className="font-bold">Package 1 (Okapi):</p>
                                        Guesthouses / AirBnBs (up to 10 rooms)
                                    </div>
                                </div>
                                <div className="p-1 lg:p-3 flex justify-start items-center bg-lime-100 rounded-lg gap-2 lg:gap-3">
                                    <span className="w-6 h-6 lg:w-12 lg:h-12 flex-shrink-0">
                                        <img src={simba} alt="Package icon" className="w-full h-full object-contain" />
                                    </span>
                                    <div className="text-xs lg:text-sm">
                                        <p className="font-bold">Package 2 (Simba):</p>
                                        Boutique hotels/lodges (10-50 rooms)
                                    </div>
                                </div>
                                <div className="p-1 lg:p-3 flex justify-start items-center bg-lime-100 rounded-lg gap-2 lg:gap-3">
                                    <span className="w-6 h-6 lg:w-12 lg:h-12 flex-shrink-0">
                                        <img src={inzovu} alt="Package icon" className="w-full h-full object-contain" />
                                    </span>
                                    <div className="text-xs lg:text-sm">
                                        <p className="font-bold">Package 3(Nzovu):</p>
                                        Mid-size hotels (50+ rooms) 
                                    </div>
                                </div>

                            </div>

                            <h1 className="text-lime-600 text-base lg:text-lg font-bold my-3">Model</h1>
                            <p className="text-ms">
                                Reasonable Monthly payment that comes with the following add-ons. 
                            </p>
                                

                          
                           </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default HmsPage;