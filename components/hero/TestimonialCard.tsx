"use client"
export default function TestimonialCard() {
    return (
        <div className="flex flex-col justify-center bg-white/5
                                    backdrop-blur-lg
                                    border border-white/20
                                    rounded-[40px]
                                    shadow-2xl text-white m-2 ">
            <div className="flex w-[300px] h-[50px] text-2xl m-5 gap-2">
                <img className="rounded-3xl w-[50px] h-[50px] " src={"/image/profile.jpg"}></img>
                <div className="flex flex-col">
                    <p>Prince Singh</p>
                    <div className="mt-1 text-[#FACC15] text-sm">
                        ★ ★ ★ ★ ★
                    </div>
                </div>

            </div>
            <div className="flex justify-center items-center mx-4 my-3">
                I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home
            </div>
        </div>
    )
}