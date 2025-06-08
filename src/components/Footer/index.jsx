import { Link } from "react-router-dom";
import Mail from "../../assets/Mail.svg";
import Location from "../../assets/Location.svg";
const Footer =() =>{
    return (
        <footer>
             <div className="footer grid gap-[23px] bg-[#7FA7A0] px-[65px] pt-[39px] pb-[47px] text-[#FFF]">
                <div className=" flex gap-[128px]">
                    <div className="part1 flex-grow flex-1">
                        <Link to={"/"}><img src="/logo.jpg" /></Link>
                    </div>
                    <div className="part2 flex-grow flex-1">
                        <h2 className="text-[18px] font-[700]">Products</h2>
                    </div>
                    <div className="part3 flex-grow flex-1">
                        <h2 className="text-[18px] font-[700]">Shop by Price</h2>
                    </div>
                    <div className="part4 flex-grow flex-1">
                        <h2 className="text-[18px] font-[700]">Company</h2>
                    </div>
                    <div className="part5 flex-grow flex-1">
                        <h2 className="text-[18px] font-[700]">Contact Us</h2>
                    </div>
                </div>
               <div className=" flex gap-[128px]">
                    <div className="part1 flex-grow flex-1">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the </p>
                    </div>
                    <div className="part2 flex-grow flex-1">
                        <ul className="grid gap-[16px]">
                            <li><Link to="/">Category one</Link></li>
                        <li><Link to="/">Category Two</Link></li>
                        <li><Link to="/">Category three</Link></li>
                        <li><Link to="/">Category four</Link></li>
                        <li><Link to="/">Category five</Link></li>
                        </ul>
                        
                        
                    </div>
                    <div className="part3 flex-grow flex-1">
                        <ul className="grid gap-[16px]">
                        <li><Link to="/">Category one</Link></li>
                        <li><Link to="/">Category Two</Link></li>
                        <li><Link to="/">Category three</Link></li>
                        <li><Link to="/">Category four</Link></li>
                        <li><Link to="/">Category five</Link></li>
                        </ul>
                    </div>
                    <div className="part4 flex-grow flex-1">
                        <ul className="grid gap-[16px]">
                        <li><Link to="/">About Us</Link></li>
                        <li><Link to="/">Privacy Policy</Link></li>
                        <li><Link to="/">FAQs</Link></li>
                        <li><Link to="/">Disclaimer</Link></li>
                        <li><Link to="/">Return Policy</Link></li>
                        </ul>
                    </div>
                    <div className="part5 flex-grow flex-1">
                        <ul>
                            <li><Link className="link flex gap-[15px]" to="mailto:support@figma.com"><img src={Location}/> 
                                    Wisconsin Ave, Suite 700 Chevy Chase, Maryland 20815
                                </Link>
                            </li>

                            <li><Link className="link flex gap-[15px]" to="mailto:support@figma.com"><img src={Mail}/> support@figma.com</Link></li>    
                        </ul>
                        <ul>
                            <li></li>
                        </ul>
                    </div>
                </div>
             </div>
             <div className="bg-[#476E68] text-[#FFF] py-[22px] text-center">© 2021 All Rights Reserved</div>
        </footer>
    )
}

export default Footer;