import React, { useState } from "react";
import { GlobeIcon, AngleUpIcon } from "../assets/icons";
import { footer } from "../data/footer";

const Footer = () => {
	const [toggleFooter, setToggleFooter] = useState(false);

	return (
		<div className="footer">
			<div className="container">
				{!toggleFooter ? (
					<div className="footer-texts">
						<ul>
							<li>&copy; 2022 Airbnb, Inc.</li>
							<li>
								<span className="me-2">.</span>
								<a href="#">Privacy</a>
							</li>
							<li>
								<span className="me-2">.</span>
								<a href="#">Terms</a>
							</li>
							<li>
								<span className="me-2">.</span>
								<a href="#">Sitemap</a>
							</li>
							<li>
								<span className="me-2">.</span>
								<a href="#">Destinations</a>
							</li>
						</ul>
						<ul className="d-lg-block d-none">
							<li className="bold">
								<GlobeIcon />
								<a href="#" className="ms-2">
									English {"(Us)"}
								</a>
							</li>
							<li className="bold">
								<span className="me-2">$</span>
								<a href="#">USD</a>
							</li>
							<li className="bold">
								<a href="#">Support & resources</a>
							</li>

							<li className="bold align">
								<a
									href="#"
									onClick={(e) => {
										e.preventDefault();
										setToggleFooter(true);
									}}
								>
									<AngleUpIcon />
								</a>
							</li>
						</ul>
					</div>
				) : (
					<div className="footer-socials">
						<div className="row">
							{footer.map((f) => (
								<div
									className="col-md-6 col-lg-3 mb-3"
									key={f.id}
								>
									<h6 className="head">{f.header}</h6>
									<ul>
										{f.links.map((l) => (
											<li key={l.id}>
												<a href={l.link}>{l.name}</a>
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
						<button onClick={() => setToggleFooter(false)}>
							X
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default Footer;
