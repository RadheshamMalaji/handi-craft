
import "../Search/style.css"
import { RiSearchLine } from "react-icons/ri";

const Search = () => {
    return (<><div className="searchBox flex justify-center items-center h-[58px] bg-[#FFF]">
        <div className="rounded-[48px] border border-[#828282] w-[503px] relative p-2">
            <input type="text" placeholder="Search" className="w-full h-[40px] focus:outline-none bg-inherit p-2" />
            <button className="!absolute flex items-center gap-[4px] top-[6px] right-[12px] z-50 rounded-[50px] bg-[#F49269] px-[20px] py-[10px] text-[16px] font-[700] text-[#FFF]"><RiSearchLine />Search</button>
        </div>
    </div>
        <div className="text-center text-[#4D736D] pt-[8px]">Crafted from the heart of India’s most remote and soulful regions</div>
    </>);
}

export default Search;