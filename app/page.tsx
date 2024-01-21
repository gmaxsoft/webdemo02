import Image from 'next/image'
import Content from "@/public/json/Home.json";

export default function Home() {
  return (
    <>
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-2">
            <div className="col-md-8 text-center heading-section ">
              <span className="subheading">{Content.title}</span>
              <h2 className="mb-4">{Content.subtitle}</h2>
              <p>{Content.minititle}</p>
            </div>
          </div>
          <div className="row">
            <div className="accordion" id="accordion">
              {Content.items.map((item, key) => (
                <div className="accordion-item border-0 py-3">
                  <h2 className="accordion-header"> 
                    <button className={`accordion-button fs-4 text-dark bg-transparent focus-transparent text-capitalize shadow-none ${ key === 0 ? '' : 'collapsed' }`} type="button" data-bs-toggle="collapse" aria-expanded={key === 0 ? 'true' : 'false'} data-bs-target={`#collapse_${key}`} aria-controls={`collapse_${key}`}>
                      {item.name}
                    </button>
                  </h2>                                 
                  <div id={`collapse_${key}`} className={`accordion-collapse border-0 collapse ${ key === 0 ? 'show' : '' }`} data-bs-parent="#accordion">
                    <div className="accordion-body">
                      <p>{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
