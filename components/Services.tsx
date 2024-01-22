"use client"
import Content from "@/public/json/Services.json";
import Divider from '@/components/Divider';

const Services = () => {
  return (
    <>
      <Divider />
      <section className="ftco-section ftco-services">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-2">
            <div className="col-md-8 text-center heading-section ">
              <span className="subheading">{Content.title}</span>
              <h2 className="mb-4">{Content.subtitle}</h2>
              <p>{Content.minititle}</p>
            </div>
          </div>
          <div className="row">

            {Content.items.map((item, key) => (
              <div className="col-md-3 d-flex services align-self-stretch p-4 ">
                <div className="media block-6 d-block text-center">
                  <div className="icon d-flex justify-content-center align-items-center">
                  <span className={item.icon}></span>
                  </div>
                  <div className="media-body p-2 mt-3">
                    <h3 className="heading">{item.name}</h3>
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

export default Services