import React from "react";
import House from "../components/House";
import Map from "../components/Map";
import { houses } from "../data/houses";
import { BsMapFill } from "react-icons/bs";
import { AiOutlineUnorderedList } from "react-icons/ai";

const Home = ({ view, onChange }) => {
	return (
		<div className="container">
			<div className="home-page">
				{view === "list" ? (
					<div className="row">
						{houses.map((h) => (
							<House key={h.id} house={h} />
						))}
					</div>
				) : view === "map" ? (
					<Map />
				) : (
					<></>
				)}
				<div className="view-select">
					<button onClick={onChange}>
						<span>Show {view === "list" ? "map" : "list"}</span>
						{view === "list" ? (
							<BsMapFill />
						) : (
							<AiOutlineUnorderedList />
						)}
					</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
