import Image from 'next/image'


export default function Home() {
  return (
    <>
    <section className="ftco-section">
			<div className="container">
				<div className="row justify-content-center mb-5 pb-2">
          <div className="col-md-8 text-center heading-section ">
          	<span className="subheading">Pacjent</span>
            <h2 className="mb-4">Informacje dla pacjenta</h2>
            <p>Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
          </div>
        </div>	
				<div className="row">
					<div className="accordion" id="accordion">
            <div className="accordion-item border-0 py-3">
              <h2 className="accordion-header">
                <button
                  className="accordion-button fs-4  text-dark bg-transparent focus-transparent text-capitalize shadow-none"
                  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                  aria-controls="collapseOne">
                  Why to believe with Insove medical healthcare ?
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse border-0 collapse show" data-bs-parent="#accordion">
                <div className="accordion-body">
                  <p>Diam orci gravida convallis at enim risus viverra. Hac mi tristique in aliquet tincidunt nam lectus
                    nec. Placerat interdum auctor facilisi massa laoreet hendrerit posuere a. Tristique ultricies
                    consectetu at.</p>
                </div>
              </div>
            </div>
            <div className="accordion-item border-0 py-3">
              <h2 className="accordion-header">
                <button
                  className="accordion-button fs-4  text-dark bg-transparent collapsed focus-transparent text-capitalize shadow-none"
                  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                  aria-controls="collapseTwo">
                  Will we get healthcare updates after surgery ?
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordion">
                <div className="accordion-body">
                  <p>This is the second item's accordion body.It is hidden by default, until the collapse plugin adds the
                    appropriate classNamees that we use to style each element. These classNamees control the overall appearance,
                    as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or
                    overriding our default variables.</p>
                </div>
              </div>
            </div>
            <div className="accordion-item border-0 py-3">
              <h2 className="accordion-header">
                <button
                  className="accordion-button fs-4  text-dark bg-transparent collapsed focus-transparent text-capitalize shadow-none"
                  type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                  aria-controls="collapseThree">
                  What is the cost for just check-up ?
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordion">
                <div className="accordion-body">
                  <p>This is the third item's accordion body.It is hidden by default, until the collapse plugin adds the
                    appropriate classNamees that we use to style each element. These classNamees control the overall appearance,
                    as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or
                    overriding our default variables.</p>
                </div>
              </div>
            </div>
            <div className="accordion-item border-0 py-3">
              <h2 className="accordion-header">
                <button
                  className="accordion-button fs-4 text-dark bg-transparent collapsed focus-transparent text-capitalize shadow-none"
                  type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false"
                  aria-controls="collapseFour">
                  Can i cancel my appointment ?
                </button>
              </h2>
              <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordion">
                <div className="accordion-body">
                  <p>This is the third item's accordion body.It is hidden by default, until the collapse plugin adds the
                    appropriate classNamees that we use to style each element. These classNamees control the overall appearance,
                    as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or
                    overriding our default variables.</p>
                </div>
              </div>
            </div>
          </div>
				</div>
			</div>
		</section>
    </>
  )
}
