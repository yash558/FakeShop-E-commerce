import React from 'react'
import { Link } from 'react-router-dom'
import about from '../assets/about.jpg'

const About = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-3">
            <img src={about} alt="" height="600px" width="650" />
          </div>
          <div className="col-md-6 my-5 py-5">
            <h1 className='fw-bold mb-4'>About <span>Us</span></h1>
            <p className="lead mb-4">
            Modi illum consequatur eaque adipisci sed sapiente blanditiis architecto ad rem commodi cum iusto perferendis ipsa iure expedita, earum quisquam labore veniam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto eius esse possimus nam. Adipisci eaque placeat dicta hic beatae, nostrum, illum temporibus quaerat corporis itaque autem perferendis quod quidem? Perferendis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nesciunt maiores laudantium autem ad. Deserunt officia similique architecto excepturi unde officiis quis rerum fuga, cupiditate provident, tempore adipisci, reiciendis veritatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quis a vel minima iure dolorum molestiae, soluta similique accusantium nulla fuga omnis corporis odit! Facilis quod fugit reiciendis ut sint quas omnis earum est dolorum libero beatae laborum unde cumque ex eius, repudiandae natus laboriosam rem quos aut qui eum?
            </p>
            <Link to="/contact" className='btn btn-outline-danger'>Contact Us</Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About