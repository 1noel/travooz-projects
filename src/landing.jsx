import React from "react";
import gorillaImage from "./assets/images/gorilla.jpg";
import gorilla2Image from "./assets/images/gorilla2.png";
import travooz from './assets/images/travooz_logo.png';
import travoozblack from './assets/images/travooz_logo_black.png';
import gorillatree from './assets/images/gorilla_tree.png';
import gorillabag from './assets/images/gorilla-bag.png';
import gorilla_products from './assets/images/gorilla_products.png';
import one from './assets/images/1.png';
import two from './assets/images/2.png';
import three from './assets/images/3.png';
import four from './assets/images/4.png';
import five from './assets/images/5.png';
import six from './assets/images/6.png';
import seven from './assets/images/7.png';
import eigth from './assets/images/8.png';
import oneg from './assets/images/1g.png';
import twog from './assets/images/2g.png';
import threeg from './assets/images/3g.png';
import fourg from './assets/images/4g.png';
import fiveg from './assets/images/5g.png';
import sixg from './assets/images/6g.png';
import seveng from './assets/images/7g.png';
import eigthg from './assets/images/8g.png';
import chain from './assets/images/chain.png';
import gorillaTem from './assets/images/gorilla_tem.png';
import Travooz from "./pages/travooz";
import Channel from "./pages/Channel";
import Souvenirs from "./pages/souvenirs";
import Card from "./pages/card";
import HmsPage from "./pages/hms";
import Events from "./pages/events";
import Guide from "./pages/guide";

const Landing = () => {
    return(
        <main className="pt-16">
            {/* hello */}
            <section 
                className="bg-cover bg-center bg-no-repeat min-h-screen relative"
                style={{ backgroundImage: `url(${gorillaImage})` }}
            >
            {/* Opacity overlay */}
            <div className="absolute inset-0 bg-black/40 z-10"></div>
            
            <div className="text-center flex justify-center flex-col py-10 md:py-15 px-4 relative z-20">
                <h1 className="text-white text-3xl md:text-5xl lg:text-5xl font-light tracking-wide " >THE</h1>
                <div className="flex justify-center py-2">
                    <img src={travooz} alt="" className="w-[200px] md:w-[300px] lg:w-[400px]" />
                </div>
                <h1 className="text-white text-3xl md:text-5xl lg:text-5xl font-light tracking-wide " >PROJECTS</h1>
                <h1 className="text-white text-lg md:text-2xl font-semibold flex flex-col md:flex-row justify-center gap-2 md:gap-4 items-center mt-4">
                    <span>EXPLORE</span>
                    <span className="hidden md:inline"><i class="fa-solid fa-circle text-[8px] "></i></span>
                    <span> INVEST</span>
                    <span className="hidden md:inline"><i class="fa-solid fa-circle text-[8px] "></i></span>
                    <span> ENGAGE</span>
                </h1>
            </div>


            <div className="bg-lime-600/35 p-3 md:p-5 w-[80%] md:w-[50%] text-center text-white rounded-xl mx-auto mt-10 relative z-20">
            <h1 className="text-xl md:text-2xl font-ligth  tracking-wide" >PRODUCTS</h1>
            <h1 className="text-3xl md:text-4xl font-ligth  tracking-wide">CATALOGUE</h1>
            </div>
            </section>

            {/* second section */}
            <section className="bg-cover bg-center bg-no-repeat min-h-screen relative py-10 md:py-30 px-4"
                style={{ backgroundImage: `url(${gorilla2Image})` }} >
                     <div className="absolute inset-0 bg-black/40 z-10"></div>
                <div className="bg-lime-600 text-white space-y-5 relative z-20 w-full md:w-90 p-4 md:p-8 mx-auto md:mx-30 rounded-2xl text-base md:text-xl max-w-4xl">
                    <p className="">
                    The Travooz Project is a
                    comprehensive, technologydriven ecosystem designed
                    to revolutionize Rwanda’s
                    visitor experience by
                    seamlessly integrating
                    inspiration, planning,
                    convenience, and memorymaking, Travooz bridges
                    the gap between travelers
                    and the rich cultural, natural,
                    and business opportunities
                    Rwanda has to offer.
                    </p>

                    <p>
                    Through its seven
                    interconnected
                    products,Travooz transforms
                    how visitors explore,
                    engage, and connect with
                    the heart of Rwanda.
                    </p>
                </div>
            </section>

            {/* third page */}
            <section className="flex flex-col lg:flex-row w-full bg-lime-600">
                <div className="w-full lg:w-[25%] h-64 lg:h-auto" >
                    <img src={gorillatree} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="w-full lg:w-[25%] pt-8 lg:pt-15 px-4 lg:px-5 bg-white" >
            <div className="text-center flex justify-center flex-col py-3 relative z-20 border-b-2 border-lime-600 border-dashed">
                <h1 className="text-2xl lg:text-3xl" >THE</h1>
                <div className="flex justify-center ">
                    <img src={travoozblack} alt="" className="w-[150px] lg:w-[200px]" />
                </div>
                <h1 className="text-2xl lg:text-3xl" >PROJECTS</h1>
            </div>
                
                <h1 className="text-lime-600 text-lg lg:text-xl font-bold py-6 lg:py-10">
                    Revolutionizing the Rwandan visitor experience, from destination to unforgettable journey.
                </h1>
                <p className="text-xs lg:text-sm">
                    Rwanda, the “Land of a Thousand Hills,” is on the rise. It has firmly established itself as a premier destination for international conferences, breathtaking
                    eco-tourism, and transformative business ventures. Many visitors continue to arrive, drawn by its beauty, safety, and vibrant culture. Yet, a profound opportunity lies beneath this success: many visitors, especially business and conference delegates, experience only a fraction of what Rwanda has to offer, yet the true magic of Rwanda-its emerald rainforests, majestic gorillas, vibrant culinary scenes, and rich tapestry of crafts and culture awaits just beyond the itinerary.
                </p>
                </div>

                <div className="w-full lg:w-1/2">
                <div className="px-4 lg:px-8 p-4 lg:p-5">
                    <h1 className="text-white text-xl lg:text-3xl font-bold ">
                        The magic of integration, from inspiration to action
                    </h1>
                    <p className="text-xs lg:text-sm font-bold ">
                        The true genius of The Travooz Project lies in the synergy between its parts. As a
                        viewer is inspired by a documentary on the Travooz Channel, a simple scan of a QR
                        code instantly connects them to the Travooz OTA to book that very experience. A craft
                        seen on screen can be ordered via Travooz Souvenirs and delivered to their hotel.
                    </p>

                        <p className="text-xs lg:text-sm font-bold mt-5 ">
                            The Travooz HMS ensures the hotel is equipped to provide this premium, integrated
                            experience. This creates a powerful, closed-loop ecosystem that directly converts
                            viewer interest into revenue for local businesses.
                        </p>

                </div>

                <div className="bg-white pb-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 px-4 lg:px-8 gap-4 pb-8">
                    <div className="space-y-6 lg:space-y-10 text-xs lg:text-sm mt-5">
                        <p>Travooz Project was born from a shared vision among a team of travel enthusiasts and media and event management veterans. We set out to build a seamless, technology-driven platform that bridges
                        the gap between individual explorers, corporate clients, and the unique travel experiences they seek. We envision a situation where every visitor goes from a passive guest to an active explorer, and to ensure that the economic benefits of tourism flow deeply into local scommunities
                        </p>

                        <p>
                            The Travooz Project is a holistic, technology-driven ecosystem designed to revolutionize the entire visitor journey. We move beyond traditional tourism
                            by seamlessly integrating inspiration, planning, convenience, and memorymaking into one fluid experience.
                        </p>
                    </div>

                    <div className="space-y-3 lg:space-y-5 mt-5">
                        <p className="text-center text-sm lg:text-base">We envision a future where:</p>

                        <div className="bg-lime-200 p-2 lg:p-3 flex items-center rounded-xl shadow-sm gap-2">
                            <span><i class="fa-solid fa-tv text-xl lg:text-3xl"></i></span>
                            <p className="text-xs lg:text-sm font-medium">
                                A visitor is captivated by Rwanda's stories before they even arrive.
                            </p>
                        </div>
                        <div className="bg-lime-200 p-2 lg:p-3 flex items-center rounded-xl shadow-sm gap-2">
                            <span><i class="fa-solid fa-mobile text-xl lg:text-3xl"></i></span>
                            <p className="text-xs lg:text-sm font-medium">
                                Every journey is effortlessly customized and bookable with a single click.
                            </p>
                        </div>
                         <div className="bg-lime-200 p-2 lg:p-3 flex items-center rounded-xl shadow-sm gap-2">
                            <span><i class="fa-solid fa-globe text-xl lg:text-3xl"></i></span>
                            <p className="text-xs lg:text-sm font-medium">
                                The transition from inspiration to transaction is frictionless.
                            </p>
                        </div>
                        <div className="bg-lime-200 p-2 lg:p-3 flex items-center rounded-xl shadow-sm gap-2">
                            <span><i class="fa-solid fa-bag-shopping text-xl lg:text-3xl"></i></span>
                            <p className="text-xs lg:text-sm font-medium">
                            Every traveler returns home not just with photographs, but with authentic memories and a deeper connection to Rwanda.
                            </p>
                        </div>
                         
                    </div>

                    </div>
                </div>

                <div className="bg-lime-200 p-4 lg:p-5 relative overflow-visible">
                   <h1 className="font-bold italic text-lg lg:text-xl">Our Vision:</h1>
                   <p className="italic font-medium text-gray-800 text-sm lg:text-base"> A seamless ecosystem, not just a service</p>
                   
                   <div className="absolute -top-20 lg:-top-30 right-4 lg:right-10">
                        <img src={gorillabag} alt="" className="w-32 lg:w-50 z-20" />
                   </div>
                </div>



                </div>

            </section>

            {/* eight projects */}
            <section>
                <div className="bg-lime-600 flex flex-col md:flex-row gap-4 md:gap-10">
                    <div className="hidden md:block md:w-[50%]"></div>
                    <div className="flex w-full md:w-[50%]">
                        <div className="flex flex-col sm:flex-row items-center px-4 md:px-2 gap-4 md:gap-10 w-full">
                            <img src={chain} alt="" className="hidden sm:block w-16 sm:w-20 h-full object-contain" />

                            <div className="text-sm sm:text-md md:text-lg text-center sm:text-left py-6 md:py-10 w-full font-semibold italic">
                                Our integrated approach is built on eight
                                interconnected products, working in harmony
                                to deliver a 360-degree experience.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 bg-white">
                    <div className="order-1 lg:order-1">
                    <div className="-mt-10 sm:-mt-15 md:-mt-20 lg:-mt-25">
                        <img src={gorillaTem} alt="" className="w-full h-full object-cover" />
                    </div>
                      <div className="px-2 sm:px-4">
                     <h1 className="font-bold text-xl sm:text-2xl lg:text-3xl p-3 lg:p-5 text-center text-lime-600">
                            An ecosystem of eight products to transform travel and hospitality.
                        </h1>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-5 text-xs sm:text-sm p-3 sm:p-5">
                            
                            <div className="">
                                <div className="flex justify-start items-center gap-1">
                                    <img src={oneg} alt="" />
                                    <div>
                                        <h1 className="text-lime-600 font-bold" >Travooz Online Travel Agency (OTA) </h1>
                                        <p className="italic font-bold">Your Journey, Your Way</p>
                                    </div>
                                </div>
                                <p className="mt-3 ps-8">
                                    A versatile digital platform where inspiration
                                    meets action. We offer everything from
                                    half-day urban explorations and corporate
                                    retreats to extended safaris, making it easy
                                    for both leisure and business travelers to
                                    discover, book, and customize their ideal
                                    Rwandan adventure.
                                </p>
                            </div>

                             <div className="">
                                <div className="flex justify-start items-center gap-1">
                                    <img src={twog} alt="" />
                                    <div>
                                        <h1 className="text-lime-600 font-bold" >Travooz Channel</h1>
                                        <p className="italic font-bold">The 24/7 Tourism Ambassador</p>
                                    </div>
                                </div>

                                <p className="mt-3 ps-8">
                                A dedicated Free Ad-Supported Streaming
                                Television (FAST) channel, broadcasting
                                from hotel rooms, airport lounges, and
                                personal devices. Through cinematic
                                content across seven pillars-from Wildlife
                                & Conservation to Business & Investment,
                                we spark curiosity and build anticipation,
                                transforming a visitor’s screen into a
                                window to Rwanda’s soul.
                                </p>
                            </div>

                        </div>
                </div>
                    </div>

                      <div className="order-2 lg:order-2">
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-5 text-xs sm:text-sm p-3 sm:p-5">
                            
                            <div className="mb-4 sm:mb-6">
                                <div className="flex justify-start items-start sm:items-center gap-2 sm:gap-3">
                                    <img src={threeg} alt="" className="w-8 sm:w-10 md:w-12 flex-shrink-0" />
                                    <div>
                                        <h1 className="text-lime-600 font-bold text-sm sm:text-base" >Travooz Concierge & Support </h1>
                                        <p className="italic font-bold text-xs sm:text-sm">White-Glove Service, Digitally Enhanced</p>
                                    </div>
                                </div>
                                <p className="mt-2 sm:mt-3 ps-6 sm:ps-8 text-xs sm:text-sm leading-relaxed">
                                From the moment a visitor lands, we ensure
                                seamless comfort. Our services include
                                airport pickup, mobile internet connectivity,
                                and 24/7 personalized support, blending
                                digital convenience with real human care.
                                </p>
                            </div>

                             <div className="">
                                <div className="flex justify-start items-center gap-1">
                                    <img src={fourg} alt="" />
                                    <div>
                                        <h1 className="text-lime-600 font-bold" >Travooz Hotel Management System (HMS)</h1>
                                        <p className="italic font-bold">Empowering Hospitality</p>
                                    </div>
                                </div>

                                <p className="mt-3 ps-8">
                                A tailor-made digital solution for
                                Rwanda’s accommodation providers.
                                This ERP system streamlines operations
                                from bookings to guest registration
                                while enhancing the in-room experience
                                by integrating the Travooz Channel,
                                positioning partners as tech-savvy
                                leaders.
                                </p>
                            </div>

 <div className="">
                                <div className="flex justify-start items-center gap-1">
                                    <img src={fiveg} alt="" />
                                    <div>
                                        <h1 className="text-lime-600 font-bold" >Travooz Souvenirs</h1>
                                        <p className="italic font-bold">Carry a Piece of Rwanda Home</p>
                                    </div>
                                </div>

                                <p className="mt-5 ps-8">
                                More than a shop, it’s a curated cultural
                                journey. We partner with Rwanda’s finest
                                artisans, allowing visitors to browse,
                                customize, and have authentic, beautifully
                                packaged keepsakes from handwoven
                                baskets to world-class coffee delivered to
                                their hotel or home abroad. Try the Travooz
                                signature Specialty Coffees.
                                </p>
                            </div>


                             <div className="">
                                <div className="flex justify-start items-center gap-1">
                                    <img src={sixg} alt="" />
                                    <div>
                                        <h1 className="text-lime-600 font-bold" >Travooz Events</h1>
                                        <p className="italic font-bold">Creating Unforgettable Moments</p>
                                    </div>
                                </div>

                                <p className="mt-3 ps-8">
                                    We design and host unique events
                                    from corporate sports gatherings to
                                    fun competitions that add vibrancy
                                    to Rwanda’s calendar and attract
                                    regional and international audiences,
                                    extending stays and enriching the visitor
                                    experience.
                                </p>
                            </div>



                             <div className="">
                                <div className="flex justify-start items-center gap-1">
                                    <img src={seveng} alt="" />
                                    <div>
                                        <h1 className="text-lime-600 font-bold" >Travooz Convenience Card</h1>
                                        <p className="italic font-bold">Effortless Transactions</p>
                                    </div>
                                </div>

                            <p className="mt-3 ps-8">
                            Recognizing the challenges of a cashless
                            economy for international visitors, this smart
                            solution facilitates seamless spending,
                            ensuring that exploring local markets and
                            supporting small businesses is always
                            effortless.
                                </p>
                            </div>



                             <div className="">
                                <div className="flex justify-start items-center gap-1">
                                    <img src={eigthg} alt="" />
                                    <div>
                                        <h1 className="text-lime-600 font-bold" >Travooz Pocket Guide</h1>
                                        <p className="italic font-bold">Your passport to our city</p>
                                    </div>
                                </div>

                                <p className="mt-3 ps-8">
                                The Travooz Pocket Guide is a compact,
                                passport-sized book uniting print charm
                                with digital convenience. Ideal for visitors
                                and business guests, it offers essential
                                information on attractions,
                                </p>
                            </div>

                            
                        </div>
                      </div>
                    
                  
                </div>

             
            </section>

            {/* products */}
            <section 
            className="bg-cover bg-center bg-no-repeat min-h-screen relative flex flex-col lg:flex-row"
                style={{ backgroundImage: `url(${gorilla_products})` }}>
                
                {/* Left side - Title and Background */}
                <div className="w-full lg:w-4/5 relative flex items-center justify-center lg:justify-start p-8 lg:p-16">
                    {/* Opacity overlay for left side */}
                    <div className="absolute inset-0  bg-black/50"></div>
                    <div className="absolute bottom-0 z-20">
                        <h1 className="text-white lg:text-4xl  font-bold leading-tight">
                            Travooz Products<br />
                            <span className="text-lime-400">Explained</span>
                        </h1>
                    </div>
                </div>
                
                {/* Right side - Products List */}
                <div className="w-full lg:w-[40%] bg-lime-500 relative z-20 p-6 lg:p-8">
                    <div className="h-full flex flex-col justify-center space-y-5">
                        
                        {/* Product 1 */}
                        <div className="flex items-start gap-3 lg:gap-4 border-b border-white pb-2">
                            <div className="w-12 lg:w-14 h-12 lg:h-14 flex-shrink-0">
                                <img src={one} alt="Product 1" className="w-full h-full object-contain" />
                            </div>
                            <div>
                                <h3 className="font-bold">Travooz Online Travel Agency (OTA)</h3>
                                <p className="text-white/90 text-sm lg:text-base italic">Everything travel in one place.</p>
                            </div>
                        </div>

                        {/* Product 2 */}
                        <div className="flex items-start gap-3 lg:gap-4 border-b border-white pb-2">
                            <div className="w-12 lg:w-14 h-12 lg:h-14 flex-shrink-0">
                                <img src={two} alt="Product 2" className="w-full h-full object-contain" />
                            </div>
                            <div>
                                <h3 className="font-bold">Travooz Channel</h3>
                                <p className="text-white/90 text-sm lg:text-base italic">The 24/7 Tourism Ambassador</p>
                            </div>
                        </div>

                        {/* Product 3 */}
                        <div className="flex items-start gap-3 lg:gap-4 border-b border-white pb-2">
                            <div className="w-12 lg:w-14 h-12 lg:h-14 flex-shrink-0">
                                <img src={three} alt="Product 3" className="w-full h-full object-contain" />
                            </div>
                            <div>
                                <h3 className="font-bold">Travooz Concierge & Support</h3>
                                <p className="text-white/90 text-sm lg:text-base italic">White-Glove Service</p>
                            </div>
                        </div>

                        {/* Product 4 */}
                        <div className="flex items-start gap-3 lg:gap-4 border-b border-white pb-2">
                            <div className="w-12 lg:w-14 h-12 lg:h-14 flex-shrink-0">
                                <img src={four} alt="Product 4" className="w-full h-full object-contain" />
                            </div>
                            <div>
                                <h3 className="font-bold">Travooz Souvenirs</h3>
                                <p className="text-white/90 text-sm lg:text-base italic">Carry a Piece of Rwanda Home</p>
                            </div>
                        </div>

                        {/* Product 5 */}
                        <div className="flex items-start gap-3 lg:gap-4 border-b border-white pb-2">
                            <div className="w-12 lg:w-14 h-12 lg:h-14 flex-shrink-0">
                                <img src={five} alt="Product 5" className="w-full h-full object-contain" />
                            </div>
                            <div>
                                <h3 className="font-bold">Travooz Convenience Card</h3>
                                <p className="text-white/90 text-sm lg:text-base italic">Effortless Transactions</p>
                            </div>
                        </div>

                        {/* Product 6 */}
                        <div className="flex items-start gap-3 lg:gap-4 border-b border-white pb-2">
                            <div className="w-12 lg:w-14 h-12 lg:h-14 flex-shrink-0">
                                <img src={six} alt="Product 6" className="w-full h-full object-contain" />
                            </div>
                            <div>
                                <h3 className="font-bold">Travooz Hotel Management System (HMS)</h3>
                                <p className="text-white/90 text-sm lg:text-base italic">Empowering Hospitality</p>
                            </div>
                        </div>

                        {/* Product 7 */}
                        <div className="flex items-start gap-3 lg:gap-4 border-b border-white pb-2">
                            <div className="w-12 lg:w-14 h-12 lg:h-14 flex-shrink-0">
                                <img src={seven} alt="Product 7" className="w-full h-full object-contain" />
                            </div>
                            <div>
                                <h3 className="font-bold">Travooz Events</h3>
                                <p className="text-white/90 text-sm lg:text-base italic">Creating Unforgettable Moments</p>
                            </div>
                        </div>

                        {/* Product 8 */}
                        <div className="flex items-start gap-3 lg:gap-4 border-b border-white pb-2">
                            <div className="w-12 lg:w-14 h-12 lg:h-14 flex-shrink-0">
                                <img src={eigth} alt="Product 8" className="w-full h-full object-contain" />
                            </div>
                            <div>
                                <h3 className="font-bold">Travooz Pocket Guide</h3>
                                <p className="text-white/90 text-sm lg:text-base italic">Your Passport to our City</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Travooz /> 
            <Channel />
            <Souvenirs />
            <Card />
            <HmsPage />
            <Events />
            <Guide />

            {/* Footer */}
            <footer className="bg-lime-600 text-white py-3">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center space-y-4">
                        {/* Logo Section */}
                        <div className="space-y-2">
                            <h1 className="text-2xl font-light tracking-wide">THE</h1>
                            <div className="flex justify-center">
                                <img src={travooz} alt="Travooz Logo" className="w-30" />
                            </div>
                            <h1 className="text-2xl font-light tracking-wide">PROJECT</h1>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-2">
                            <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-6">
                                <span className="font-medium">+250 788 394 395</span>
                                <span className="hidden sm:inline text-lg">|</span>
                                <span className="font-medium">+250 793 903 844</span>
                            </div>
                            <p className="font-medium">www.thetravoozproject.rw</p>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Back to Top Button */}
            <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-6 right-6 bg-lime-600 hover:bg-lime-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
                aria-label="Back to top"
            >
                <i className="fa-solid fa-arrow-up text-lg"></i>
            </button>
        </main>
    )
}

export default Landing;