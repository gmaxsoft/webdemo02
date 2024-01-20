"use client"
import Image from 'next/image'

const footer = () => {
    return (
        <>
            <section id="subscribe" className="d-flex align-items-center ftco-bg-dark">
                <p>&nbsp;</p>
            </section>
            <footer className="ftco-footer ftco-section">
                <div className="container">
                    <div className="row d-flex flex-wrap justify-content-between">

                        <div className="col-lg-4 col-md-6 col-sm-6 pb-3">
                            <div className="footer-menu">
                                <a className="navbar-brand" href="/" title='Logo Dentysta Zielona Góra'>
                                    <Image
                                        className="pb-3"
                                        src="/images/logo.webp"
                                        alt="Logo Dentysta Zielona góra"
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
                                <p className="text-justify pr2rem"><strong>Stomatolog Zielona góra</strong>,  Dentysta, Gabinet Stomatologiczny Zielena góra, <strong>Dentysta Zielona góra</strong>, Gabinet Dentystyczny<br /><br />Stomatolog, <strong>Zielona Góra</strong>, Leczenie kanałowe, Protetyka, Chirurgia, Stomatologia estetyczna,  <strong>Protezy acronowe (elastyczne)</strong></p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 pb-3">
                            <div className="footer-menu">
                                <h5 className="widget-title fw-semibold">Godziny otwarcia</h5>
                                <table className="schedule" width="100%">
                                    <tbody>
                                        <tr className="d-flex justify-content-between border-bottom py-2">
                                            <td>Poniedziałek - Czwartek: </td>
                                            <td className="text-primary">10:00 - 18:00</td>
                                        </tr>
                                        <tr className="d-flex justify-content-between border-bottom py-2">
                                            <td>Piątek:</td>
                                            <td className="text-primary">10:00- 14:00</td>
                                        </tr>
                                        <tr className="d-flex justify-content-between border-bottom py-2">
                                            <td>Sobota:</td>
                                            <td className="text-primary">Tylko z bólem</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6 pb-3">
                            <div className="footer-menu">
                                <h5 className="widget-title pb-2 fw-semibold">Dane kontaktowe</h5>
                                <div className="contact-item">
                                    <p className="py-2"><strong>Prywatna praktyka stomatologiczna</strong><br />Lek. Stomatolog Anna Miśków</p>
                                    <p className="py-2">
                                        <i className="fa-solid fa-location-dot"></i>
                                        <span>Bohaterów Westerplatte 9<br />piętro II pok. 216 (winda)<br />65-034 Zielona Góra</span>
                                    </p>
                                    <p>
                                        <i className="fa-solid fa-phone"></i>
                                        <span><a href="tel:+48504219034" title="Telefon">(+48) 504-219-034</a></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-md-flex text-center justify-content-between border-top mt-5 py-4">
                        <p>© 2023 Zielona Góra, Stomatolog-Dentysta.pl - Wszystkie prawa zastrzeżone.</p>
                        <p>Realizacja: <a href="https://www.maxsoft.pl/" className="fw-semibold" title="Projektowanie stron www"> MaxSoft</a></p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default footer