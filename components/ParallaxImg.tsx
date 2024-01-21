
"use client"

import { Parallax } from 'react-parallax';
import Content from "@/public/json/ParallaxBottom.json";

const ParallaxImg = () => {
	return (
		<>
			<section className="ftco-intro">
				<Parallax blur={0} bgImage="/images/bg_4.webp" bgImageAlt="Tło Stomatolog" strength={200}>
					<div className="overlay"></div>
					<div className="container">
						<div className="row">
							<div className="col-md-12 rem-6 align-items-center text-center">
								<h2>{Content.title}</h2>
								<p className="mb-0">{Content.subtitle}</p>
							</div>
						</div>
					</div>
				</Parallax>
			</section>
		</>
	)
}

export default ParallaxImg