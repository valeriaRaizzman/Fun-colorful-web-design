import React from 'react'
import img from '/cpu_image.png'

function About() {
  return (
    <section className="w-full h-screen flex justify-between">
    <div
      className="h-full w-[72%] bg-no-repeat bg-cover bg-center flex justify-center items-center px-10"
      style={{ backgroundImage: `url(${img})` }}
    >
      <h1 className="text-8xl text-center">
        Lorem, ipsum dolor sit amet consectetur
      </h1>
    </div>

    <div className='w-[25%] h-full bg-cyan-950 flex flex-col justify-center items-center gap-16 p-20'>
      <div className='text' style={{fontSize: '1.1em'}}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          necessitatibus esse mollitia sunt, illum saepe dolore quae eveniet
          error perferendis, consequuntur tempore fugit voluptates autem nisi
          consectetur commodi tenetur
        </p>

      </div>

      <div className='flex flex-col gap-10'>

      <button className='button button-yellow'>ABOUT</button>
      <button className='button button-pink'>BLOG</button>
      <button className='button button-blue'>CONTACT</button>

      </div>
      

      <div className='text' style={{fontSize: '1.1em'}}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae,
          quos numquam, maiores deserunt suscipit dolore cum error minus id
          similique ut aspernatur velit delectus laborum, amet ducimus
          accusantium accusamus quo?
        </p>
      </div>
    </div>
  </section>
  )
}

export default About;

