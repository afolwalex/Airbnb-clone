import React, { useRef, useState } from "react";
import { menus } from "../data/menus";
import { AngleLeftIcon, AngleRightIcon, FilterIcon } from "../assets/icons";

const Menu = () => {
	const ref = useRef();
	const [scrollPos, setScrollPos] = useState(0);
	const [showLeft, setShowLeft] = useState(true);
	const [active, setActive] = useState(1);

	const scroll = (scrollOffset) => {
		ref.current.scrollLeft += scrollOffset;
	};

	const scrollEvent = (e) => {
		setScrollPos(e.target.scrollLeft);
		if (
			e.target.scrollWidth - e.target.clientWidth ===
			e.target.scrollLeft
		) {
			setShowLeft(false);
		} else {
			setShowLeft(true);
		}
	};

	return (
		<div className="menus">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-10">
						<div className="scrolling">
							{scrollPos !== 0 && (
								<button
									className="prev"
									onClick={() => scroll(-300)}
								>
									<AngleLeftIcon />
								</button>
							)}
							<div
								className="scroll-view"
								ref={ref}
								onScroll={scrollEvent}
							>
								{menus.map((m) => (
									<a
										href="#"
										className={
											active === m.id ? "active" : ""
										}
										key={m.id}
										onClick={(e) => {
											e.preventDefault();
											setActive(m.id);
										}}
									>
										<img src={m.img} />
										<span>{m.name}</span>
									</a>
								))}
							</div>
							{showLeft && (
								<button
									className="next"
									onClick={() => scroll(300)}
								>
									<AngleRightIcon />
								</button>
							)}
						</div>
					</div>
					<div className="col-lg-2 d-lg-block d-none">
						<div className="text-end">
							<button className="filter">
								<FilterIcon />
								<span>Filters</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Menu;
