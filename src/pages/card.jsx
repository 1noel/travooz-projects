import React from "react";
import Navigation from "../components/navigation";
import five from "../assets/images/5.png";
import travoozCard from "../assets/images/travooz_card.png";
import card from "../assets/images/card.png";

const Card = () => {
    return (
        <main className="bg-white">
            <Navigation />
            <div className="pt-16">
                <section className="flex flex-col lg:flex-row min-h-screen">
                    <div className="w-full lg:w-[25%] bg-lime-600 flex items-center justify-center min-h-[200px] lg:min-h-full"> 
                        <img src={five} alt="Image" className="w-full h-auto max-w-xs lg:max-w-none" />
                    </div>
                    <div className="w-full lg:w-[25%] flex flex-col px-4 lg:px-5 py-6 lg:pt-10">
                        <div className="mb-4 lg:mb-0">
                            <h1 className="text-xl lg:text-2xl font-bold">Travooz Convenience Card</h1>
                            <p className="text-lg lg:text-xl font-medium">
                                Effortless transactions
                            </p>
                        </div>

                        <div className="flex-1 flex items-center justify-center mt-4 -ms-5">
                            <img src={travoozCard} alt="" className="w-full h-auto max-w-sm lg:max-w-md xl:max-w-lg" />
                        </div>
                    </div>

                    <div className="w-full lg:w-[50%]">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 lg:p-10">
                           <div>
                             <div className="bg-lime-100 p-3 lg:p-4 rounded-xl shadow-sm text-sm lg:text-base">
                                Enhancing visitor experience while empowering local businesses and organizations.
                            </div>
                             <div className="space-y-3 lg:space-y-5 text-xs lg:text-sm mt-2 ">
                                <p className="">
                                Rwanda is rapidly becoming a digital,
                                cashless economy, boosting efficiency and
                                transparency. Yet international visitors often
                                struggle to make local payments where Visa
                                and Mastercard are not accepted, especially
                                with small vendors, artisans, and transport
                                operators. Organizations also face challenges
                                managing employee travel expenses due to
                                inefficient cash-based systems and limited
                                oversight.
                                </p>

                                <p>
                                    The Travooz Convenience Card solves
                                    these problems. This versatile prepaid card is
                                    designed for both tourists and organizations
                                    and fully integrates into Rwanda’s digital
                                    payment ecosystem.
                                    The Travooz Convenience Card solves
                                    these problems. This versatile prepaid card is
                                    designed for both tourists and organizations
                                    and fully integrates into Rwanda’s digital
                                    payment ecosystem.
                                </p>

                                <p>
                                    For travelers, it offers seamless, secure
                                    spending. Visitors can load USD, EUR, or
                                    GBP before travel or upon arrival, and use
                                    the card at a wide network of shops, markets, 
                                </p>
                             </div>
                           </div>

                           <div>
                           
                           <div>
                            <img src={card} alt="" />
                           </div>

                            <div className="space-y-3 lg:space-y-5 text-xs lg:text-sm mt-3">
                                <p>
                                taxis, and restaurants. USSD support allows
                                payments even without internet, while features
                                like instant freezing, lost card protection, and
                                multilingual support ensure safety and peace
                                of mind.
                            </p>

                                <p>
                                    For organizations, the card enables efficient
                                    expense management. Companies can
                                    pre-load allowances, control spending, and
                                    track every transaction in real time, creating
                                    an auditable digital trail that simplifies
                                    reconciliation and strengthens accountability.
                                </p>
                            </div>
                            

                              <p className="text-xs lg:text-sm mt-3 lg:mt-4">
                                    Beyond convenience, the Travooz
                                    Convenience Card promotes financial
                                    inclusion by connecting small businesses
                                    to visitor spending, enhancing the tourist
                                    experience, and supporting Rwanda’s
                                    cashless economy.
                                </p>


                          
                           </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Card;