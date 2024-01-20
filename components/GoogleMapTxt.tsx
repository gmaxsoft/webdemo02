"use client"

import Image from 'next/image'
import GoogleMapTag from '@/components/GoogleMapTag'

const GoogleMapTxt = () => {
    return (
        <section className="ftco-section0">
            <div className="container">
                <div className="row justify-content-center mb-5 pb-2">
                    <div className="col-md-8 text-center heading-section">
                        <span className="subheading">Lokalizacja</span>
                        <h2 className="mb-4">Znajdź nas na mapie</h2>
                        <p>Potrzebujesz pomocy? skontaktuj się z nami! W razie rezygnacji z umówionej wizyty, proszę o powiadomienie telefoniczne lub sms-owe.<br />Uzgodnimy dogodny termin kolejnego spotkania.</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12">
                <div className="row">
                    <div className="col-md-12">
                        <GoogleMapTag />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GoogleMapTxt