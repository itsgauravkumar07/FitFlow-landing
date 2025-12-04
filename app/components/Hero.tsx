import Image from "next/image";

function Hero(){
    return(
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-10 px-10">
           {/* //All text area */}
            <div className="py-10 px-5">
                <div className="bg-secondary px-4 py-2 rounded-3xl w-fit border border-primary">
                    <p className="text-xs text-primary font-bold">✨ Join 3,000+ Transformers</p>
                </div>

                <div className=" mt-8 ">
                    {/* hero headline */}
                    <h1 className="mb-5 text-4xl sm:text-5xl md:text-6xl leading-10 sm:leading-14 md:leading-16 font-bold w-full sm:w-3/4 md:1.3/2 text-heading">Transform Your Body, One Habit at a Time</h1>
                    
                    {/* hero short discription */}
                    <p className="mb-8 text-lg w-full sm:w-3/4 md:w-1.3/2 lg:w-1.3/2 text-subheading">Personalized plans, live coaching, and progress tracking — start your 30-day transformation.</p>
                    
                    <div className="mb-5 flex flex-col md:flex-row">
                        <button className="bg-btn-primary px-5 py-2 rounded-3xl text-black font-bold text-sm border border-transparent mr-2 mb-2 shadow shadow-primary hover:bg-btn-primary-hover">Start Free Trail</button>
                        <button className="px-5 py-2 border border-primary text-primary font-bold text-sm rounded-3xl hover:bg-secondary hover:text-white mr-2 mb-2">View Plans</button>
                    </div>

                    <p className="text-sm text-subheading w-full md:w-1.3/2">✓ No credit card required • ✓ 30-day money-back guarantee</p>
                </div>
            </div>

            {/* Image */}
            <div className="place-items-center py-10 px-5">
                <Image 
                    src="/images/hero.jpg"
                    alt="Hero section image"
                    width={500}
                    height={500}
                    className="rounded-4xl border-2 border-primary"
                />
            </div>
        </div>
    )
}

export default Hero;