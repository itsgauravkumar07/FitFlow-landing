
export default function Contact(){
    return(
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-10 px-10 place-items-center">
            <div className="px-10 py-10">
                <h1 className="text-3xl font-bold text-heading">Ready to Transform?</h1>
                <p className="mt-3 text-subheading">Get personalized guidance from our expert coaches. No credit card required for your free trial.</p>

                <div>
                    <div className="flex mt-5">
                        <div className="w-6 h-6 bg-secondary rounded-full flex justify-center items-center"> <div className="w-3 h-3 bg-primary rounded-full"></div></div>
                        <div className="ml-4">
                            <h3 className="font-bold text-heading">Instant Access</h3>
                            <p className="text-sm text-subheading">Start your free trial immediately after signup</p>
                        </div>
                    </div>

                     <div className="flex mt-5">
                        <div className="w-6 h-6 bg-secondary rounded-full flex justify-center items-center"> <div className="w-3 h-3 bg-primary rounded-full"></div></div>
                        <div className="ml-4">
                            <h3 className="font-bold text-heading">Expert Support</h3>
                            <p className="text-sm text-subheading">Our coaches will guide you every step of the way</p>
                        </div>
                    </div>

                     <div className="flex mt-5">
                       <div className="w-6 h-6 bg-secondary rounded-full flex justify-center items-center"> <div className="w-3 h-3 bg-primary rounded-full"></div></div>
                        <div className="ml-4">
                            <h3 className="font-bold text-heading">Cancel Anytime</h3>
                            <p className="text-sm text-subheading">No long-term commitments or hidden fees</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-10 py-10">
                <div className="bg-white/10 px-5 py-8 rounded-2xl border border-gray-200/20">
                    <h1 className="text-xl font-bold text-heading">Get in Touch</h1>
                    <p className="text-sm my-3 text-subheading">Fill out the form and we'll contact you within 24 hours</p>

                    <form>
                        <label className="text-sm font-bold text-heading">Full Name</label>
                        <input type="text" className="w-full px-2 py-2 border border-gray-200/30 rounded-lg mt-1 mb-4 text-subheading bg-black" placeholder="John"/>

                        <label className="text-sm font-bold text-heading">Email Address</label>
                        <input type="text" className="w-full px-2 py-2 border border-gray-200/30 rounded-lg mt-1 mb-4 text-subheading bg-black" placeholder="John123@gmail.com"/>

                        <label className="text-sm font-bold text-heading">Message</label>
                        <textarea className="w-full px-2 py-2 border border-gray-200/30 rounded-lg mt-1 mb-4 text-subheading bg-black" placeholder="Tell us about your fitness goal"/>
                    </form>

                    <button className="bg-btn-primary text-white px-2 py-1 text-center w-full rounded-lg text-sm font-bold mt-1 hover:bg-btn-primary-hover">Send Message</button>
                    <p className="text-center text-xs text-subheading mt-5">We respect your privacy. Unsubscribe at any time.</p>
                </div>
            </div>
        </div>
    )
}
