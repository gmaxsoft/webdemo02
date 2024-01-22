"use client"
import Image from 'next/image'
import Link from 'next/link'
import Content from "@/public/json/Header.json";

const header = () => {
    return (
        <>
            <div className="py-md-5 py-4 border-bottom">
                <div className="container">
                    <div className="row no-gutters d-flex align-items-start align-items-center px-3 px-md-0">
                        <div className="col-md-4 order-md-2 mb-2 mb-md-0 align-items-center text-center">
                            <Link className="navbar-brand" href="/" title='Logo Dentysta Zielona Góra'>
                                <Image
                                    className="animate__animated animate__pulse"
                                    src="/images/logo.webp"
                                    alt="Logo Dentysta"
                                    width={273}
                                    height={50}
                                    sizes="100vw"
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        maxWidth: '273px',
                                        minHeight: '45px'
                                    }}
                                    priority
                                />
                            </Link>
                        </div>
                        <div className="col-md-4 order-md-1 d-flex topper mb-md-0 mb-2 align-items-center text-md-right">
                            <div className="icon d-flex justify-content-center align-items-center order-md-last">
                                <i className="fa-solid fa-location-dot"></i>
                            </div>
                            <div className="pr-md-4 pl-md-0 pl-3 text">
                                <p className="con"><span>{Content.dataphonename}</span> <span><a href={`tel:${Content.datalink}`} title='Telefon do dentysty'>{Content.dataphone}</a></span></p>
                                <p className="con" dangerouslySetInnerHTML={{ __html: Content.dataaddress }}></p>
                            </div>
                        </div>
                        <div className="col-md-4 order-md-3 d-flex topper mb-md-0 align-items-center">
                            <div className="icon d-flex justify-content-center align-items-center"><i className="fa-regular fa-clock"></i></div>
                            <div className="text pl-3 pl-md-3">
                                <p className="hr"><span>{Content.datahours}</span></p>
                                <p className="time"><span>{Content.data_01}</span> <span>{Content.data_03}</span></p>
                                <p className="time"><span>{Content.data_02}</span> <span>{Content.data_04}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default header