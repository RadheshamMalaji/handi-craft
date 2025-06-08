import React from "react";
import { Link } from "react-router-dom";
import Section2 from "./Section2";
import Section3 from "./Section3";
import CategoryTabs from "../../components/CategoryTabs.jsx";

const Home=()=>{
    return(
        <>
        <div className="px-[32px]">
        <div className="flex items-end gap-[8px] pb-[16px]">
            <div className="grid gap-[8px] flex-grow flex-1">
                <Link className="group" to="/">
                    <img className="w-[100%] h-[307px] rounded-[24px] transition-all duration-150 group-hover:scale-105" src="/Frame1.jpg"/>
                </Link>
                 <Link className="group" to="/">
                    <img  className="w-[100%] h-[160px] rounded-[24px] group-hover:scale-105" src="/Frame2.jpg"/>
                </Link>
            </div>
             <div className="flex-grow flex-1 group">
                <Link to="/">
                    <img className="w-[100%] h-[342px] rounded-[24px] group-hover:scale-105" src="/Frame3.jpg"/>
                </Link>
            </div>
             <div className="relative flex-grow flex-1 group">
                <Link to="/">
                    <img className="w-[100%] h-[221px] rounded-[24px] group-hover:scale-105" src="/Frame4.jpg"/>
                        <button style={{margin: '0px auto'}} className="!absolute bottom-[11px] border border-[#F49269] left-0 right-0 w-[200px] z-50 rounded-[50px] bg-[#FFF] px-[22px] py-[10px] text-[18px] font-[600]">
                            Explore Collection
                        </button>
                </Link>
            </div>
              <div className="flex-grow flex-1 group">
                <Link to="/">
                    <img className="w-[100%] h-[342px] rounded-[24px] group-hover:scale-105" src="/Frame5.jpg"/>
                </Link>
            </div>
             <div className="grid gap-[8px] flex-grow flex-1">
                <Link className="group" to="/">
                    <img className="w-[100%] h-[307px] rounded-[24px] group-hover:scale-105" src="/Frame6.png"/>
                </Link>
                 <Link className="group" to="/">
                    <img  className="w-[100%] h-[160px] rounded-[24px] group-hover:scale-105" src="/Frame7.png"/>
                </Link>
            </div>
        </div>
         <CategoryTabs />
        <Section2 />
        <Section3 />
        </div>
        </>
    )
}

export default Home;