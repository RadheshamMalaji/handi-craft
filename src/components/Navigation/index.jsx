import { Button } from "@mui/material"
import { Link } from "react-router-dom";


const Navigation =() =>{
    return (
            <ul className="flex items-center gap-4 justify-center">
                <li>
                    <Link to="/" className="link transition text-[15px] font-[600]">Explore  Collection</Link>
                </li>    
                 <li>
                    <Link to="/" className="link transition text-[15px] font-[600]">Trending</Link>
                </li>
            </ul>
    )
}

export default Navigation;