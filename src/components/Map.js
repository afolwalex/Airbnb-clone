import { Status, Wrapper } from "@googlemaps/react-wrapper";
import React, { useEffect } from "react";

const MapComponent = () => {
	const ref = React.useRef(null);
	const [map, setMap] = React.useState();
	const center = { lat: 9.072264, lng: 7.491302 };
	const zoom = 4;

	useEffect(() => {
		if (ref.current && !map) {
			setMap(new window.google.maps.Map(ref.current, { center, zoom }));
		}
	}, [ref, map]);

	return <div style={{ height: "100vh", width: "100%" }} ref={ref} />;
};

const Map = () => {
	const render = (status) => {
		if (status === Status.FAILURE) return <p>Error Displaying Map</p>;
		return <p>Loading...</p>;
	};

	return (
		<div className="map-view">
			<Wrapper
				apiKey={"AIzaSyA0n7BQRld7oekW4aoceqjDk4c7sam8Q4Y"}
				render={render}
			>
				<MapComponent />
			</Wrapper>
		</div>
	);
};

export default Map;
