import Image from "next/image"

export default function Testimonials(){

    return(
        <div className="px-10 py-20 bg-redbg">
            {/* Headline and short description */}
            <div className="text-center">
                <h1 className="text-3xl font-bold text-heading">Success Stories</h1>
                <p className="text-subheading">Real transformations from real people</p>
            </div>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-3 mt-10 ">
                <div className="bg-black px-5 py-5 rounded-3xl shadow-sm border border-white/20">
                    <div className="px-2 rounded flex items-center">
                            <Image 
                                src="/images/person1.avif"
                                alt="Hero section image"
                                width={100}
                                height={100}
                                className="rounded-full w-8 h-8 mr-3 mt-5"
                            />
                            <div>
                                <h3 className="text-sm mt-5 font-bold text-heading">Sarah Mitchell</h3>
                                <p className="text-xs text-primary bg-secondary w-fit px-3 rounded-2xl py-0.5 mt-1">Lost 10kg</p>
                            </div>   
                    </div>
                        <p className="text-subheading mt-5">"Lost 10kg in 3 months with FitFlow's personalized coaching and meal plans."</p>
                </div>

                <div className="bg-black px-5 py-5 rounded-3xl shadow-sm border border-white/20">
                    <div className="px-2 rounded flex items-center">
                            <Image 
                                src="/images/Person2.jpg"
                                alt="Hero section image"
                                width={100}
                                height={100}
                                className="rounded-full w-8 h-8 mr-3 mt-5"
                            />
                            <div>
                                <h3 className="text-sm mt-5 font-bold text-heading">James Chen</h3>
                                <p className="text-xs text-primary bg-secondary w-fit px-3 rounded-2xl py-0.5 mt-1">Built muscle mass</p>
                            </div>   
                    </div>
                        <p className="text-subheading mt-5">"The live coaching sessions kept me motivated and accountable every week."</p>
                </div>

                <div className="bg-black px-5 py-5 rounded-3xl shadow-sm border border-white/20">
                    <div className="px-2 rounded flex items-center">
                            <Image 
                                src="/images/person3.jpg"
                                alt="Hero section image"
                                width={100}
                                height={100}
                                className="rounded-full w-8 h-8 mr-3 mt-5"
                            />
                            <div>
                                <h3 className="text-sm mt-5 font-bold text-heading">Emma Rodriguez</h3>
                                <p className="text-xs text-primary bg-secondary w-fit px-3 rounded-2xl py-0.5 mt-1">Improved fitness</p>
                            </div>   
                    </div>
                        <p className="text-subheading mt-5">"Best investment I made in my health. The results speak for themselves."</p>
                </div>

            </div>
            
        </div>
    )
}