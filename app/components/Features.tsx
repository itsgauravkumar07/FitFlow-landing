import { Dumbbell, CircleCheckBig, Utensils } from "lucide-react";

function Features(){
    return(
        <div className="px-10 py-20">
            {/* Review and Rating section */}
            <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                <div className="bg-white/10 border border-gray-700 rounded-2xl px-4 py-5 flex flex-col justify-center items-center">
                    <h1 className="text-2xl font-bold text-primary">4.9★</h1>
                    <p className="text-sm text-subheading">from 3k users</p>
                </div>
                <div className="bg-white/10 border border-gray-700 rounded-2xl px-4 py-5 flex flex-col justify-center items-center">
                    <h1 className="text-2xl font-bold text-primary">98%</h1>
                    <p className="text-sm text-subheading">satisfaction rate</p>
                </div>
                <div className="bg-white/10 border border-gray-700 rounded-2xl px-4 py-5 flex flex-col justify-center items-center">
                    <h1 className="text-2xl font-bold text-primary">30-day</h1>
                    <p className="text-sm text-subheading">money-back guarantee</p>
                </div>
            </div>

            {/* Feature card text */}
            <div className="mt-20">
                {/* headline and sub description */}
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-heading">What You Get</h1>
                    <p className="text-subheading">Everything you need for your transformation journey</p>
                </div>

                {/* Feature sub cards */}
                <div className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-3">
                    <div className="py-5 px-2 rounded mt-5">
                        <CircleCheckBig className="w-12 h-12 text-primary bg-secondary px-2 py-2 rounded-2xl"/>
                        <h3 className="text-lg mt-5 font-bold text-heading">Personal Coaching</h3>
                        <p className="text-sm text-subheading">1:1 coaching and weekly check-ins tailored to your goals and progress</p>
                    </div>

                    <div className="py-5 px-2 rounded mt-5">
                        <Dumbbell className="w-12 h-12 text-primary bg-secondary px-2 py-2 rounded-2xl"/>
                        <h3 className="text-lg mt-5 font-bold text-heading">Custom Workouts</h3>
                        <p className="text-sm text-subheading">Personalized workout plans adapted to your fitness level and preferences</p>
                    </div>

                    <div className="py-5 px-2 rounded mt-5">
                        <Utensils className="w-12 h-12 text-primary bg-secondary px-2 py-2 rounded-2xl"/>
                        <h3 className="text-lg mt-5 font-bold text-heading">Nutrition Plans</h3>
                        <p className="text-sm text-subheading">Macro-friendly meal plans designed by certified nutritionists</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Features;