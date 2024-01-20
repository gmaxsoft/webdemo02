
"use client"

import { Parallax } from 'react-parallax';

const ParallaxImg = () => {
	return (
		<>
			<section className="ftco-intro">
				<Parallax blur={0} bgImage="/images/bg_3.jpg" bgImageAlt="Tło Stomatolog" strength={200}>
					<div className="overlay"></div>
					<div className="container">
						<div className="row">
							<div className="col-md-12 rem-6 align-items-center text-center">
								<h2>We Provide Free Dental Care Consultation</h2>
								<p className="mb-0">Your Health is Our Top Priority with Comprehensive, Affordable medical.</p>
								<p></p>
							</div>
						</div>
					</div>
				</Parallax>
			</section>
		</>
	)
}

export default ParallaxImg