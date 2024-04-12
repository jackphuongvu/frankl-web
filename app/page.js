// `app/page.js` is the UI for the `/` URL
// Home page.

export default function Page() {
  return (
    <div className="home">

      <video muted loop autoPlay>
        <source src="/home/Frank_demo.mp4" type="video/mp4" />
      </video>

      {/*<div className="home-content">*/}
      {/*  <h1></h1>*/}
      {/*  <p></p>*/}

      {/*  <button></button>*/}
      {/*</div>*/}
    </div>
  )
}