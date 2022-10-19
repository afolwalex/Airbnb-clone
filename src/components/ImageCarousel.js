import React, { useEffect, useState } from "react";
import { AngleLeftIcon, AngleRightIcon, LoveIcon } from "../assets/icons";
import { AiTwotoneHeart } from "react-icons/ai";

const ImageCarousel = ({ house, id }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [showNavs, setShowNavs] = useState(false);

	const prevSlide = () => {
		const isFirstSlide = currentIndex === 0;
		const index = isFirstSlide ? house.length - 1 : currentIndex - 1;
		setCurrentIndex(index);
	};

	const nextSlide = () => {
		const isLastSlide = currentIndex === house.length - 1;
		const index = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(index);
	};

	const likeHandler = (id) => {
		const likedRooms = JSON.parse(localStorage.getItem("liked-rooms"));
		const likes = likedRooms || [];
		const findRoom = likes.find((l) => l === id);
		if (findRoom) {
			const filter = likes.filter((l) => l !== id);
			localStorage.setItem("liked-rooms", JSON.stringify(filter));
		} else {
			likes.push(id);
			localStorage.setItem("liked-rooms", JSON.stringify(likes));
		}
	};

	return house.length > 0 ? (
		<div
			className="image-carousel"
			style={{ backgroundImage: `url(${house[currentIndex]})` }}
			onMouseEnter={() => setShowNavs(true)}
			onMouseLeave={() => setShowNavs(false)}
		>
			<div className="text-end">
				<button onClick={() => likeHandler(id)}>
					{/* <LoveIcon style={{ color: "red" }} /> */}
					<AiTwotoneHeart
						size={25}
						color={
							localStorage.getItem("liked-rooms")
								? JSON.parse(
										localStorage.getItem("liked-rooms")
								  ).find((l) => l === id)
									? "red"
									: "#fff"
								: "#FFF"
						}
					/>
				</button>
			</div>
			{currentIndex > 0 && showNavs && (
				<button className="btt prev" onClick={prevSlide}>
					<AngleLeftIcon />
				</button>
			)}
			{showNavs && (
				<button className="btt next" onClick={nextSlide}>
					<AngleRightIcon />
				</button>
			)}
			<div className="slides">
				{house.map((s, i) => (
					<span
						key={i}
						className={i === currentIndex ? "active" : ""}
						onClick={() => setCurrentIndex(i)}
					/>
				))}
			</div>
		</div>
	) : (
		<></>
	);
};

export default ImageCarousel;
