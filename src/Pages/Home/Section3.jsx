
const Section3 =()=>{

    return (
        <div className="py-[32px] grid gap-[24px]">
            <div>
                <div className="text-[24px] font-[600] text-center">Shop our most popular categories</div>
                <div className="text-[14px] font-[500] text-center">Treasures crafted from the heart of India’s most remote and soulful regions</div>
            </div>
            <div className="flex gap-[16px]">
                <div className="w-[50%]">
                    <img className="w-[100%] h-[628px] rounded-[16px]" src="Frame5.jpg"/>
               </div>
               <div className="grid gap-[8px] w-[50%]">
                         <ul>
                            <li>
                                <img className="w-[100%] h-[306px] rounded-[16px]" src="Frame16.jpg"/>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <img className="w-[100%] h-[306px] rounded-[16px]" src="Frame1.jpg"/>
                            </li>
                        </ul>
               </div>
            </div>
        </div>
    )
}

export default Section3;