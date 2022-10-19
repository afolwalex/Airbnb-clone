import React from "react";
import {
	LogoIcon,
	SearchIcon,
	GlobeIcon,
	MenuIcon,
	UserIcon,
} from "../assets/icons";
import { HiUserCircle } from "react-icons/hi";

const Header = () => {
	return (
		<div className="header">
			<div className="container head">
				<div className="logo">
					<LogoIcon color="#ff385c" />
				</div>
				<div className="search">
					<button>Anywhere</button>
					<button>Any week</button>
					<button>Add guests</button>
					<button>
						<SearchIcon />
					</button>
				</div>
				<div className="aside">
					<button>Become a Host</button>
					<button>
						<GlobeIcon />
					</button>
					<button>
						<MenuIcon className="me-2" />
						{/* <UserIcon height={25} color="#707070" /> */}
						<HiUserCircle size={30} color="#707070" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Header;
