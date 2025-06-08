
const Section2 =()=>{

    return (
        <div className="py-[32px] grid gap-[24px]">
            <div>
                <div className="text-[24px] font-[600]">Shop our most popular categories</div>
                <div className="text-[14px] font-[500]">Treasures crafted from the heart of India’s most remote and soulful regions</div>
            </div>
            <div className="flex gap-[16px]">
                <div className="w-[40%]">
                    <img className="w-[100%] h-[476px] rounded-[16px]" src="Frame5.jpg"/>
               </div>
               <div className="grid gap-[8px] w-[60%]">
                    <div className="flex-grow">
                         <ul className="flex gap-[8px]">
                            <li className="flex-grow flex-1">
                                <img className="w-[100%] h-[234px] rounded-[16px]" src="Frame16.jpg"/>
                            </li>
                            <li className="flex-grow flex-1">
                                <img className="w-[100%] h-[234px] rounded-[16px]" src="Frame8.jpg"/>
                            </li>
                            <li className="flex-grow flex-1">
                                <img className="w-[100%] h-[234px] rounded-[16px]" src="Frame18.jpg"/>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex gap-[8px]">
                            <li className="flex-grow flex-1">
                                <img className="w-[100%] h-[234px] rounded-[16px]" src="Frame1.jpg"/>
                            </li>
                            <li className="flex-grow flex-1">
                                <img className="w-[100%] h-[234px] rounded-[16px]" src="Frame9.jpg"/>
                            </li>
                            <li className="flex-grow flex-1">
                                <img className="w-[100%] h-[234px] rounded-[16px]" src="Frame17.jpg"/>
                            </li>
                        </ul>
                    </div>
               </div>
            </div>
        </div>
    )
}

export default Section2;