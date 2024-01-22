"use client"
import Content from "@/public/json/Intro.json";

const TopInfo = () => {
  return (
    <>
      <section id="our-services" className="ftco-section padding-medium ImgBg" >
        <style jsx>{`.ImgBg {background-image: url(images/services-bg.webp); background-repeat: no-repeat; background-position: center; background-position: top } `}</style>
        <div className="container">
          <div className="row">

            <div className="display-header text-light d-flex flex-wrap justify-content-between padding-medium">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <h2 className="text-light">{Content.title}</h2>
              </div>
              <div className="col-lg-7 col-md-6 col-sm-12">
                <p className="text-light justify">{Content.subtitle}</p>
              </div>
            </div>

            {Content.items.map((item, key) => (
              <div className="col-lg-3 col-md-6 pb-3">
                <div className="icon-box p-4 bg-light border-radius-10 text-center shadow-lg animate__animated animate__pulse">
                  <div className="icon-box-icon">
                  {item.icon}
                  </div>
                  <div className="icon-box-content">
                    <h3 className="card-title py-2">{item.name}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
    </>
  )
}

export default TopInfo