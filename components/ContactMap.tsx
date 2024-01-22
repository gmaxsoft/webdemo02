"use client"

import Image from 'next/image'
import GoogleMap from '@/components/GoogleMap'
import Content from "@/public/json/ContactMap.json";

const GoogleMapTxt = () => {
    return (
        <section className="ftco-section">
            <div className="container">
                <div className="row justify-content-center mb-5 pb-2">
                    <div className="col-md-8 text-center heading-section animate__animated animate__fadeIn">
                        <span className="subheading">{Content.title}</span>
                        <h2 className="mb-4">{Content.subtitle}</h2>
                        <p>{Content.minititle}</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12">
                <div className="row">
                    <div className="col-md-12">
                        <GoogleMap />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GoogleMapTxt