import React from 'react'

const About2 = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="lg:pr-10">
          <a
            href="/"
            aria-label="Go Home"
            title="Logo"
            className="inline-block mb-5"
          >
            
          </a>
          <h5 className="mb-4 text-4xl font-extrabold leading-none">
          QUALITY ASSURANCE
          </h5>
          <p className="mb-6 text-gray-900">
          Quality is one of the major aspects, over which our company makes no compromise. This is the reason; our products are highly demanded in industry and have become the foremost choice of large customers. Experienced quality controllers team has also been recruited by us, which keep strict vigil over the entire process and ensure to supply only error free range in the market.
          </p>
          <hr className="mb-5 border-gray-300" />
         
        </div>
        <div>
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
            alt=""
          />
        </div>
      </div>
      <div className="grid gap-10 lg:grid-cols-2 py-10 sm:py-20">
      <div>
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
            alt=""
          />
        </div>
        <div className="lg:pr-10">
          <a
            href="/"
            aria-label="Go Home"
            title="Logo"
            className="inline-block mb-5"
          >
            
          </a>
          <h5 className="mb-4 text-4xl font-extrabold leading-none">
          INFRASTRUCTURE
          </h5>
          <p className="mb-6 text-gray-900">
          To achieve our set production targets and meet the prescribed objectives of an organization, our company has developed a state-of-the-art infrastructural set-up. We have installed latest machinery in our production department, which is upgraded on regular intervals to maintain an outstanding rate of production. Our infrastructure comprises designing, production, quality control and many other departments.</p>
          <hr className="mb-5 border-gray-300" />
         
        </div>
        
      </div>
    </div>
  )
}

export default About2