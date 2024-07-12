import React from "react";

let name =  <para className="text-yellow-400"> Kunal.In</para>
function Nav(){
return(
    <>
    <nav className="  flex-wrap relative bg-stone-950 p-4 border-solid border-orange-500 border-b-2">
    <div class="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div class= "   text-white font-bold text-3xl mb-4 lg:mb-0 hover:text-orange-600 hover:cursor-pointer  "> 
            <h2 className="   font-bold ">
                Console.log({name}) ;
                </h2>
        </div>

        <div class="lg:hidden">
            <button class="text-white focus:outline-none">
                    <svg
                        class="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        ></path>
                    </svg>
                </button>
        </div>

     

       
     
        
    </div>

</nav>

    </>
)
}

export default Nav