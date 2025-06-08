import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const CategoryTabs =()=>{
const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return (
        <div className="my-[32px] bg-[#9FA18D0D] rounded-[42px] px-[36px] pt-[32px] pb-[64px] grid gap-[24px]">
            <div className="text-[24px] font-[600] text-center py-[25px]">Shop our most popular categories</div>
            
            <div className='flex justify-center'><Box>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                >
                    <Tab icon={<img className="w-[130px] h-[130px] rounded-[23px]" src="Frame8.jpg"/>} label="Earrings" />
                    <Tab icon={<img className="w-[130px] h-[130px] rounded-[23px]" src="Frame9.jpg"/>} label="Leather" />
                    <Tab icon={<img className="w-[130px] h-[130px] rounded-[23px]" src="Frame10.jpg"/>} label="Candles" />
                    <Tab icon={<img className="w-[130px] h-[130px] rounded-[23px]" src="Frame11.jpg"/>}  label="Tops" />
                </Tabs>
            </Box>
            </div>
            <div className="grid gap-[24px]">
                <ul className="flex gap-[24px]">
                    <li className="relative flex-grow flex-1">
                        <img className="w-[100%] h-[308px] rounded-[20px]" src="Frame12.jpg"/>
                        <div className="absolute top-[10px] right-2 bg-[#FFF] font-[700] text-[14px] py-[6px] px-[15px] rounded-[22px]">
                            <span className="mr-[9px]">₹200</span>
                            <span className="text-[#1A1A1A61] font-[600] text-[10px] line-through">₹450</span>
                        </div>
                    </li>
                    <li className="relative flex-grow flex-1">
                        <img className="w-[100%] h-[308px] rounded-[20px]" src="Frame13.jpg"/>
                        <div className="absolute top-[10px] right-2 bg-[#FFF] font-[700] text-[14px] py-[6px] px-[15px] rounded-[22px]">
                            <span className="mr-[9px]">₹200</span>
                            <span className="text-[#1A1A1A61] font-[600] text-[10px] line-through">₹450</span>
                        </div>
                    </li>
                    <li className="relative flex-grow flex-1">
                        <img className="w-[100%] h-[308px] rounded-[20px]" src="Frame14.jpg"/>
                        <div className="absolute top-[10px] right-2 bg-[#FFF] font-[700] text-[14px] py-[6px] px-[15px] rounded-[22px]">
                            <span className="mr-[9px]">₹200</span>
                            <span className="text-[#1A1A1A61] font-[600] text-[10px] line-through">₹450</span>
                        </div>
                    </li>
                    <li className="relative flex-grow flex-1">
                        <img className="w-[100%] h-[308px] rounded-[20px]" src="Frame15.jpg"/>
                        <div className="absolute top-[10px] right-2 bg-[#FFF] font-[700] text-[14px] py-[6px] px-[15px] rounded-[22px]">
                            <span className="mr-[9px]">₹200</span>
                            <span className="text-[#1A1A1A61] font-[600] text-[10px] line-through">₹450</span>
                        </div>
                    </li>
                </ul>
              <ul className="flex gap-[24px]">
                    <li className="relative flex-grow flex-1">
                        <img className="w-[100%] h-[308px] rounded-[20px]" src="Frame12.jpg"/>
                        <div className="absolute top-[10px] right-2 bg-[#FFF] font-[700] text-[14px] py-[6px] px-[15px] rounded-[22px]">
                            <span className="mr-[9px]">₹200</span>
                            <span className="text-[#1A1A1A61] font-[600] text-[10px] line-through">₹450</span>
                        </div>
                    </li>
                    <li className="relative flex-grow flex-1">
                        <img className="w-[100%] h-[308px] rounded-[20px]" src="Frame13.jpg"/>
                        <div className="absolute top-[10px] right-2 bg-[#FFF] font-[700] text-[14px] py-[6px] px-[15px] rounded-[22px]">
                            <span className="mr-[9px]">₹200</span>
                            <span className="text-[#1A1A1A61] font-[600] text-[10px] line-through">₹450</span>
                        </div>
                    </li>
                    <li className="relative flex-grow flex-1">
                        <img className="w-[100%] h-[308px] rounded-[20px]" src="Frame14.jpg"/>
                        <div className="absolute top-[10px] right-2 bg-[#FFF] font-[700] text-[14px] py-[6px] px-[15px] rounded-[22px]">
                            <span className="mr-[9px]">₹200</span>
                            <span className="text-[#1A1A1A61] font-[600] text-[10px] line-through">₹450</span>
                        </div>
                    </li>
                    <li className="relative flex-grow flex-1">
                        <img className="w-[100%] h-[308px] rounded-[20px]" src="Frame15.jpg"/>
                        <div className="absolute top-[10px] right-2 bg-[#FFF] font-[700] text-[14px] py-[6px] px-[15px] rounded-[22px]">
                            <span className="mr-[9px]">₹200</span>
                            <span className="text-[#1A1A1A61] font-[600] text-[10px] line-through">₹450</span>
                        </div>
                    </li>
                </ul>
               <ul className="flex gap-[24px]">
                    <li className="relative flex-grow flex-1">
                        <img className="w-[100%] h-[308px] rounded-[20px]" src="Frame12.jpg"/>
                        <div className="absolute top-[10px] right-2 bg-[#FFF] font-[700] text-[14px] py-[6px] px-[15px] rounded-[22px]">
                            <span className="mr-[9px]">₹200</span>
                            <span className="text-[#1A1A1A61] font-[600] text-[10px] line-through">₹450</span>
                        </div>
                    </li>
                    <li className="relative flex-grow flex-1">
                        <img className="w-[100%] h-[308px] rounded-[20px]" src="Frame13.jpg"/>
                        <div className="absolute top-[10px] right-2 bg-[#FFF] font-[700] text-[14px] py-[6px] px-[15px] rounded-[22px]">
                            <span className="mr-[9px]">₹200</span>
                            <span className="text-[#1A1A1A61] font-[600] text-[10px] line-through">₹450</span>
                        </div>
                    </li>
                    <li className="relative flex-grow flex-1">
                        <img className="w-[100%] h-[308px] rounded-[20px]" src="Frame14.jpg"/>
                        <div className="absolute top-[10px] right-2 bg-[#FFF] font-[700] text-[14px] py-[6px] px-[15px] rounded-[22px]">
                            <span className="mr-[9px]">₹200</span>
                            <span className="text-[#1A1A1A61] font-[600] text-[10px] line-through">₹450</span>
                        </div>
                    </li>
                    <li className="relative flex-grow flex-1">
                        <img className="w-[100%] h-[308px] rounded-[20px]" src="Frame15.jpg"/>
                        <div className="absolute top-[10px] right-2 bg-[#FFF] font-[700] text-[14px] py-[6px] px-[15px] rounded-[22px]">
                            <span className="mr-[9px]">₹200</span>
                            <span className="text-[#1A1A1A61] font-[600] text-[10px] line-through">₹450</span>
                        </div>
                    </li>
                </ul>
               <ul className="flex gap-[24px]">
                    <li className="relative flex-grow flex-1">
                        <img className="w-[100%] h-[308px] rounded-[20px]" src="Frame12.jpg"/>
                        <div className="absolute top-[10px] right-2 bg-[#FFF] font-[700] text-[14px] py-[6px] px-[15px] rounded-[22px]">
                            <span className="mr-[9px]">₹200</span>
                            <span className="text-[#1A1A1A61] font-[600] text-[10px] line-through">₹450</span>
                        </div>
                    </li>
                    <li className="relative flex-grow flex-1">
                        <img className="w-[100%] h-[308px] rounded-[20px]" src="Frame13.jpg"/>
                        <div className="absolute top-[10px] right-2 bg-[#FFF] font-[700] text-[14px] py-[6px] px-[15px] rounded-[22px]">
                            <span className="mr-[9px]">₹200</span>
                            <span className="text-[#1A1A1A61] font-[600] text-[10px] line-through">₹450</span>
                        </div>
                    </li>
                    <li className="relative flex-grow flex-1">
                        <img className="w-[100%] h-[308px] rounded-[20px]" src="Frame14.jpg"/>
                        <div className="absolute top-[10px] right-2 bg-[#FFF] font-[700] text-[14px] py-[6px] px-[15px] rounded-[22px]">
                            <span className="mr-[9px]">₹200</span>
                            <span className="text-[#1A1A1A61] font-[600] text-[10px] line-through">₹450</span>
                        </div>
                    </li>
                    <li className="relative flex-grow flex-1">
                        <img className="w-[100%] h-[308px] rounded-[20px]" src="Frame15.jpg"/>
                        <div className="absolute top-[10px] right-2 bg-[#FFF] font-[700] text-[14px] py-[6px] px-[15px] rounded-[22px]">
                            <span className="mr-[9px]">₹200</span>
                            <span className="text-[#1A1A1A61] font-[600] text-[10px] line-through">₹450</span>
                        </div>
                    </li>
                </ul>
                
            </div>
        </div>
    )
}

export default CategoryTabs;