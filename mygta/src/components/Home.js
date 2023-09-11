import "./Home.css";
function Home() {
  return (
    <>
      <div>
        <home>
          <img className="homeimg" src="/img/background.png" alt="" />
          <img className="Twologo1" src="/img/gta5.png" alt="" />
          <img className="Twologo2" src="/img/gta6.png" alt="" />
          <div className="headingss2">
            <h1 className="headingmain">
              Now available for PS5 and <br /> Xbox Series X|S
            </h1>

            <p className="mainpara">
              Experience entertainment blockbusters, Grand Theft <br /> Auto V
              and GTA Online.
            </p>

            <div className="buttonns">
              <button className="button1">WATCH THE TRAILER</button>

              <button className="button2"> BUY NOW </button>
            </div>
          </div>
        </home>
      </div>
      {/* <div></div> */}
      <div className="mid2">
        <img className="homeimg2" src="/img/rockstarlogo11.jpg" alt="" />
        <img className="poster" src="/img/rockstarlogo22.png" alt="" />
        <img className="playonlinelogo" src="/img/gta6.png" alt="" />
        <div>
          <p className="paragraph2">
            <h1>Welcome to Los Santos</h1>
            When a young street hustler, a retired bank robber, and a terrifying
            psychopath find themselves entangled with some of the most
            frightening and deranged elements of the criminal underworld, the
            U.S. government, and the entertainment industry, they must pull off
            a series of dangerous heists to survive in a ruthless city in which
            they can trust nobody — least of all each other.
            <br />
            <br />
            Current players can transfer both GTAV Story Mode progress and GTA
            Online characters and progression to PlayStation 5 and Xbox Series
            X|S with a one-time migration.
          </p>
        </div>
      </div>
      <mid3>
        <img className="homeimg3" src="/img/rockstarlogo3.jpg" alt="" />
        <img className="poster1" src="/img/rockstarlogo4.png" alt="" />
        <img className="playonlinelogo1d" src="/img/gta6.png" alt="" />
        <p className="paragraph3">
          <h1>Grand Theft Auto Online</h1>
          Experience GTA Online, a dynamic and ever-evolving online universe for
          up to 30 players, where you can rise from street-level hustler to
          become a kingpin of your own criminal empire.
          <br />
          <br />
          Enjoy new high-performance vehicle upgrades and improvements like the
          Career Builder as well as all GTA Online gameplay upgrades,
          expansions, and content released since launch, ready to enjoy solo or
          with friends. Pull off daring co-operative Heists, enter
          adrenaline-fueled Stunt Races, compete in unique Adversary Modes, or
          hang out in social spaces including nightclubs, arcades, penthouse
          parties, car meetups, and much more.
        </p>
      </mid3>
    </>
  );
}
export default Home;
