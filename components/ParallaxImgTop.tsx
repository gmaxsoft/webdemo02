
"use client"

import { Parallax } from 'react-parallax';

const ParallaxImgTop = () => {
	return (
		<>
			<section className="ftco-intro">
				<Parallax blur={0} bgImage="/images/bg_3.jpg" bgImageAlt="Tło Dentysta" strength={200}>
					<div className="overlay"></div>
					<div className="container">
						<div className="row">
							<div className="col-md-12 rem-6 align-items-center text-center">
								<h2 className="mb-4">We promised to take care our patients and we delivered.</h2>
								<p className="mb-0">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
							</div>
						</div>
					</div>
				</Parallax>
			</section>
		</>
	)
}

export default ParallaxImgTop