"use client"
import Image from 'next/image'

const header = () => {
    return (
        <>
            <div className="py-md-5 py-4 border-bottom">
                <div className="container">
                    <div className="row no-gutters d-flex align-items-start align-items-center px-3 px-md-0">
                        <div className="col-md-4 order-md-2 mb-2 mb-md-0 align-items-center text-center">
                            <a className="navbar-brand" href="/" title='Logo Dentysta Zielona Góra'>
                                <Image
                                    className=""
                                    src="/images/logo.webp"
                                    alt="Serwis Agd Logo"
                                    width={273}
                                    height={50}
                                    sizes="100vw"
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        maxWidth: '273px'
                                    }}
                                    priority
                                />
                            </a>
                        </div>
                        <div className="col-md-4 order-md-1 d-flex topper mb-md-0 mb-2 align-items-center text-md-right">
                            <div className="icon d-flex justify-content-center align-items-center order-md-last">
                                <i className="fa-solid fa-location-dot"></i>
                            </div>
                            <div className="pr-md-4 pl-md-0 pl-3 text">
                                <p className="con"><span>Tel:</span> <span><a href="tel:+48504219034" title='Telefon do dentysty'>(+48) 504-219-034</a></span></p>
                                <p className="con">Bohaterów Westerplatte 9 piętro II pok. 216<br />65-034 Zielona Góra</p>
                            </div>
                        </div>
                        <div className="col-md-4 order-md-3 d-flex topper mb-md-0 align-items-center">
                            <div className="icon d-flex justify-content-center align-items-center"><i className="fa-regular fa-clock"></i></div>
                            <div className="text pl-3 pl-md-3">
                                <p className="hr"><span>Goddziny Otwarcia</span></p>
                                <p className="time"><span>Pn-Śr:</span> <span>10:00am - 15:00pm</span></p>
                                <p className="time"><span>Wt-Cz:</span> <span>14:00am - 18:00pm</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default header