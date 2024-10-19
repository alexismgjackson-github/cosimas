import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="home-container">
        <section className="hero">
          <img
            className="hero-img"
            src="assets/images/unsplash1.jpg"
            alt="Three stainless steel portafilters filled with whole coffee beans, grinded coffee and latte art"
          />
        </section>
        <section className="our-story">
          <h1>Our Story</h1>
          <p>
            Cosima's was founded in the summer of 2024 on the goal of giving
            guests, partners and employees an uplifting and inclusive experience
            through care and intentionality. Cosima's is a group of fun,
            genuine, invested individuals who are passionate and excited about
            creating the best coffee experience.
          </p>
        </section>
        <section className="our-coffee">
          <h1>Our Coffee</h1>
          <p>
            Cosima's currently partners with small coffee producers across
            Kenya, from which we source beans used in our single origins and/or
            blends. We hand-pick the very best lots of the season - all with the
            singular purpose to be enjoyed by you. Our delicious coffee in
            roasted on location.
          </p>
        </section>
        <section className="gallery">
          <div className="gallery-container">
            <img
              src="assets/images/unsplash2.jpg"
              alt="A hand holding a beautifully designed cappuccino in a white mug"
            />
            <img
              src="assets/images/unsplash3.jpg"
              alt="A person wearing a black shirt pouring black coffee from a glass pitcher into a white mug on a wooden table"
            />
            <img
              src="assets/images/unsplash4.jpg"
              alt="A person wearing a navy blue shirt holding a beautifully designed latte in white paper cup"
            />
            <img
              src="assets/images/unsplash27.jpg"
              alt="Whole coffee beans in a clear container"
            />
            <img
              src="assets/images/unsplash6.jpg"
              alt="Milk swirling in a black iced coffee in a clear plastic cup"
            />
            <img
              src="assets/images/unsplash28.jpg"
              alt="Espresso pouring from an espresso machine into a glass cup"
            />
            <img
              src="assets/images/unsplash16.jpg"
              alt="A person holding two portafilters - one filled with grinded coffee and the other has whole coffee beans"
            />
            <img
              src="assets/images/unsplash19.jpg"
              alt="Espresso pouring from an espresso machine into a black mug"
            />
            <img
              src="assets/images/unsplash11.jpg"
              alt="Greenery wall with pink fluorescent sign reading 'But first coffee'"
            />
            <img
              src="assets/images/unsplash20.jpg"
              alt="A person wearing a white shirt pouring steamed milk from a stainless steel pitcher into a white mug to make a beautifully designed latte"
            />
            <img
              src="assets/images/unsplash23.jpg"
              alt="White and black sign reading 'Coffee' with city building in the background"
            />
            <img src="assets/images/unsplash12.jpg" alt="Whole coffee beans" />
            <img
              src="assets/images/unsplash10.jpg"
              alt="A person wearing an apron pouring steamed milk from a stainless steel pitcher into a brown paper cup to make a beautifully designed latte"
            />
            <img
              src="assets/images/unsplash7.jpg"
              alt="Espresso pouring from an espresso machine into a white mug"
            />
            <img
              src="assets/images/unsplash26.jpg"
              alt="Iced latte in a glass cup on a wooden table"
            />
            <img
              src="assets/images/unsplash5.jpg"
              alt="Diedrich coffee roaster filled with whole coffee beans"
            />
            <img
              src="assets/images/unsplash17.jpg"
              alt="Iced americano in a glass cup on a wooden table"
            />
            <img
              src="assets/images/unsplash18.jpg"
              alt="Outside view of coffee shop's large window with a sign reading 'Thank you for supporting your local coffee shop - every cup made fresh"
            />
          </div>
        </section>
        <section className="location-and-hours">
          <h1>Location & Hours</h1>
          <ul className="location-and-hours-details">
            <li>324321 Niehaus Drive</li>
            <li>Seattle WA, 98109</li>
            <li>Weekdays: 7:00am - 5:00pm</li>
            <li>Weekends: 8:00am - 5:00pm</li>
          </ul>
        </section>
      </div>
    </>
  );
}
