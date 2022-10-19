import React from "react";
import ImageCarousel from "./ImageCarousel";
import { AiTwotoneStar } from "react-icons/ai";

const House = ({ house }) => {
	return (
		<div className="col-lg-3 col-md-6 mb-4">
			{Array.isArray(house.images) && (
				<ImageCarousel house={house.images} id={house.id} />
			)}
			<div className="house-content">
				<div className="d-flex justify-content-between align-items-center">
					<b>{house.name}</b>
					<span className="b">
						<AiTwotoneStar />
						{house.rating}
					</span>
				</div>
				<p>{house.date}</p>
				<p>{house.distance}</p>
				<p>
					<b>${house.price}</b>
					<span className="ms-1">night</span>
				</p>
			</div>
		</div>
	);
};

export default House;
