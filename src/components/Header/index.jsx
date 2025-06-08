import React from "react"
import { Link } from "react-router-dom";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Cart from "../../assets/Cart.svg"
import Profile from "../../assets/Profile.svg";
import Search from "../Search";
import { Tooltip } from "@mui/material";
import Navigation from "../Navigation";

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: '0 4px',
    backgroundColor: 'black',
    fontSize: '10px',
  },
}));
const Header =() =>{
    return (
        <header>
            <div className="top-strip py-2 bg-[#7FA7A0] height-[48px] flex items-center justify-center">
                    <p className="text-[14px]">We Ship Nationwide | 30 Days return Policy | Free standard shipping on order over $75</p>
            </div>
            <div className="header">
                <div>
                    <div className="col1 px-[32px] py-[19px] flex justify-between bg-[#9FA18D08]">
                        <div className="flex gap-[74px]">
                            <Link to={"/"}><img src="/logo.jpg" /></Link>
                            <Navigation />
                        </div>
                        <div>
                            <ul className="flex items-center gap-4">
                                <li className="list-none">
                                    <Tooltip title="Profile">
                                        <IconButton aria-label="Profile">
                                            <img src={Profile} alt="Your SVG" />
                                        </IconButton>
                                    </Tooltip>
                                </li>
                                <li className="list-none">
                                      <Tooltip title="Cart">
                                        <IconButton aria-label="cart">
                                            <StyledBadge badgeContent={4} color="secondary">
                                                <img src={Cart} alt="Your SVG" />
                                            </StyledBadge>
                                        </IconButton>
                                    </Tooltip>
                                </li>
                                 

                            </ul>
                        </div>
                    </div>
                    <div className="text-[32px] font-[Bona Nova SC] pt-[32px] text-center uppercase">
                    Discover Unique Handmade Treasures
                    </div>
                    <div className="pt-[14px]">
                        <Search></Search>

                    </div>
                </div>

            </div>
        </header>
    )
}

export default Header;