import { CircleCheck } from "lucide-react"

export default function Pricing(){

    return(
        <div className="px-10 py-20">
            <div className="">
                <h1 className="text-3xl font-bold text-heading">Simple, Transparent Pricing</h1>
            </div>

            {/* all pricing cards */}
            <div className="grid grid-cols-1 gap-3 md:grid-cols-3 mt-10">
                {/* 1st Pricing card */}
                <div className="bg-white/10 border border-gray-100/20 px-5 py-5 rounded-3xl shadow-sm">
                    <h3 className="text-2xl mt-5 font-bold text-heading">Starter</h3>
                    <p className="text-subheading mt-1 text-sm">Perfect to get started</p>
                        <div className="flex mt-4">
                            <h1 className="text-4xl font-bold text-primary ">$29 </h1>
                            <p className="mt-3 text-subheading"> /month</p>
                        </div>
                    <button className="bg-black border border-white/20 text-white w-full py-1 rounded-lg mt-2 font-bold text-sm hover:cursor-pointer hover:bg-secondary">Choose Plan</button>
                    <div className="mt-5">
                        <div className="flex items-center">
                            <CircleCheck className="w-5 h-5 mr-3 text-primary"/>
                            <p className="text-sm text-subheading">Workout plans</p>
                        </div>
                        <div className="flex items-center mt-2">
                            <CircleCheck className="w-5 h-5 mr-3 text-primary"/>
                            <p className="text-sm text-subheading">Progress tracking</p>
                        </div>
                        <div className="flex items-center mt-2">
                            <CircleCheck className="w-5 h-5 mr-3 text-primary"/>
                            <p className="text-sm text-subheading">Email support</p>
                        </div>

                    </div>
                        
                </div>

                {/* 2nd Pricing card */}
                <div className=" px-5 py-5 rounded-3xl shadow-lg border-2 border-primary bg-white/10 ">
                    <div className="flex justify-center -mt-8">
                        <h2 className="text-center bg-primary px-2 py-0.5 rounded-2xl text-heading text-xs w-fit">Most Popular</h2>
                    </div>
                    
                    <h3 className="text-2xl mt-5 font-bold text-heading">Pro</h3>
                    <p className="text-subheading mt-1 text-sm">Most popular plan</p>
                        <div className="flex mt-4">
                            <h1 className="text-4xl font-bold text-primary ">$79 </h1>
                            <p className="mt-3 text-subheading"> /month</p>
                        </div>
                    <button className="bg-primary text-white w-full py-1 rounded-lg mt-2 font-bold text-sm hover:cursor-pointer hover:bg-btn-primary-hover">Choose Plan</button>
                    <div className="mt-5">
                        <div className="flex items-center">
                            <CircleCheck className="w-5 h-5 mr-3 text-primary"/>
                            <p className="text-sm text-subheading">All Starter Features</p>
                        </div>
                        <div className="flex items-center mt-2">
                            <CircleCheck className="w-5 h-5 mr-3 text-primary"/>
                            <p className="text-sm text-subheading">Weekly coaching calls</p>
                        </div>
                        <div className="flex items-center mt-2">
                            <CircleCheck className="w-5 h-5 mr-3 text-primary"/>
                            <p className="text-sm text-subheading">Nutrition plans</p>
                        </div>
                        <div className="flex items-center mt-2">
                            <CircleCheck className="w-5 h-5 mr-3 text-primary"/>
                            <p className="text-sm text-subheading">Priority support</p>
                        </div>

                    </div>
                        
                </div>

                {/* 3nd Pricing card */}
                <div className="bg-white/10 border border-gray-100/20 px-5 py-5 rounded-3xl shadow-sm">
                    <h3 className="text-2xl mt-5 font-bold text-heading">Coach</h3>
                    <p className="text-subheading mt-1 text-sm">Ultimate transformation</p>
                        <div className="flex mt-4">
                            <h1 className="text-4xl font-bold text-primary">$199 </h1>
                            <p className="mt-3 text-subheading"> /month</p>
                        </div>
                    <button className="bg-black border border-white/20 text-white w-full py-1 rounded-lg mt-2 font-bold text-sm hover:cursor-pointer hover:bg-secondary">Choose Plan</button>
                    <div className="mt-5">
                        <div className="flex items-center">
                            <CircleCheck className="w-5 h-5 mr-3 text-primary"/>
                            <p className="text-sm text-subheading">All Pro features</p>
                        </div>
                        <div className="flex items-center mt-2">
                            <CircleCheck className="w-5 h-5 mr-3 text-primary"/>
                            <p className="text-sm text-subheading">1:1 personalized coaching</p>
                        </div>
                        <div className="flex items-center mt-2">
                            <CircleCheck className="w-5 h-5 mr-3 text-primary"/>
                            <p className="text-sm text-subheading">Daily check-ins</p>
                        </div>
                        <div className="flex items-center mt-2">
                            <CircleCheck className="w-5 h-5 mr-3 text-primary"/>
                            <p className="text-sm text-subheading">VIP support 24/7</p>
                        </div>

                    </div>
                        
                </div>
                
            </div>
        </div>
    )
}