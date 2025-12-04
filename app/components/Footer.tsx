
export default function footer(){

    return (
        <div>
            <hr className="border-white/10" />
            <div className="grid  gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 px-10 py-10">
                <div className="py-4">
                    <h1 className="text-lg font-bold text-heading">FitFlow</h1>
                    <p className="text-sm mt-2 text-subheading">Transform your body, one habit at a time.</p>
                </div>

                <div className="py-4">
                    <h1 className="text-lg font-bold text-heading">Products</h1>
                    
                    <button className="mt-2 text-sm text-subheading hover:text-btn-primary cursor-pointer">Coaching</button><br />
                    <button className="mt-2 text-sm text-subheading hover:text-btn-primary cursor-pointer">Workout Plans</button> <br />
                    <button className="mt-2 text-sm text-subheading hover:text-btn-primary cursor-pointer">Meal Plans</button>
                    
                </div>

                <div className="py-4">
                    <h1 className="text-lg font-bold text-heading">Company</h1>
                    
                    <button className="mt-2 text-sm text-subheading hover:text-btn-primary cursor-pointer">About Us</button><br />
                    <button className="mt-2 text-sm text-subheading hover:text-btn-primary cursor-pointer">Blog</button> <br />
                    <button className="mt-2 text-sm text-subheading hover:text-btn-primary cursor-pointer">Careers</button>
                    
                </div>

                <div className="py-4">
                    <h1 className="text-lg font-bold text-heading">Legal</h1>
                    
                    <button className="mt-2 text-sm text-subheading hover:text-btn-primary cursor-pointer">Privacy Policy</button><br />
                    <button className="mt-2 text-sm text-subheading hover:text-btn-primary cursor-pointer">Terms of Service</button> <br />
                    <button className="mt-2 text-sm text-subheading hover:text-btn-primary cursor-pointer">Contact</button>
                    
                </div>
            </div>
            

            <div className="">
                <hr className="border-white/10" />
                <h1 className="text-sm text-center m-3 text-subheading">© 2025 FitFlow. All rights reserved.</h1>
            </div>
        </div>
       
    )
}