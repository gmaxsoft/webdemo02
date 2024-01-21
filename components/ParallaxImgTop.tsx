
"use client"

import { Parallax } from 'react-parallax';
import Content from "@/public/json/ParallaxTop.json";

const ParallaxImgTop = () => {
	return (
		<>
			<section className="ftco-intro">
				<Parallax blur={0} bgImage="/images/bg_4.webp" bgImageAlt="Tło Dentysta" strength={200}>
					<div className="overlay"></div>
					<div className="container">
						<div className="row">
							<div className="col-md-12 rem-6 align-items-center text-center">
								<h2 className="mb-4">{Content.title}</h2>
								<p className="mb-0">{Content.subtitle}</p>
							</div>
						</div>
					</div>
				</Parallax>
			</section>
		</>
	)
}

export default ParallaxImgTop