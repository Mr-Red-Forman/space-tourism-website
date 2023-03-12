import { useEffect } from "react";
import { NavLink, redirect, useNavigate, useParams } from "react-router-dom"

export function Destination() {
  const navigate = useNavigate()
  let data = require("../assets/data.json");
  let { planet } = useParams()
  let currPlanet = data.destinations.findIndex(currPlanet => currPlanet.name === planet)
  useEffect(() => {
    if (currPlanet === -1) navigate('Moon')
  }, [planet])
  currPlanet = data.destinations[currPlanet]
  console.log('currPlanet:', currPlanet)

  return (
    <section className="main-layout destination">
      <main className="display-continuer">
        <article className="star-img">
          <h2> <span className="pageNumber">01</span> pick your destination</h2>
          <div className="planet-img">
            <img src={`/assets/destination/image-${currPlanet.name}.png`} alt={`image-${planet}`} />
          </div>

        </article>
        <article className="star-description">
          <nav>
            {data.destinations.map(planet => (
              <NavLink key={planet.name} to={`/destination/${planet.name}`}>{planet.name}</NavLink>)
            )}
          </nav>
          <h1>
            {currPlanet.name}
          </h1>
          <p>
            {currPlanet.description}
          </p>
          <div className="line">
          </div>
          <article className="travel-info">
            <div className="distance">
              <h3 className="sub-title">
                avg. distance
              </h3>
              <h2 className="data" >
                {currPlanet.distance}
              </h2>
            </div>
            <div className="time">
              <h3 className="sub-title">
                est. travel time
              </h3>
              <h2 className="data" >
                {currPlanet.travel}
              </h2>
            </div>
          </article>
        </article>
      </main>

    </section>
  )
}
