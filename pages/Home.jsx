import "./Home.css";

export default function Home() {
  return (
    <>
      <section className="hero">
        <img
          className="hero-img"
          src="assets/images/unsplash1.jpg"
          alt="Three stainless steel portafilters filled with whole coffee beans, grinded coffee and cappuccino"
        />
      </section>
      <section className="our-story">
        <h1>Our Story</h1>
        <p>
          Cosima's was founded in the summer of 2024 on the goal of giving
          guests, partners and employees an uplifting and inclusive experience
          through care and intentionality. Cosima's is a group of fun, genuine,
          invested individuals who are passionate and excited about creating the
          best coffee experience.
        </p>
      </section>
      <section className="our-coffee">
        <h1>Our Coffee</h1>
        <p>
          Cosima's currently partners with small coffee producers across Kenya,
          and Rwanda, from which we source beans used in our single origins
          and/or blends. We hand-pick the very best lots of the season - all
          with the singular purpose to be enjoyed by you. Our delicious coffee
          in roasted on location.
        </p>
      </section>
      <section className="gallery">
        <div className="gallery-container">
          <img src="assets/images/unsplash2.jpg" alt="" />
          <img src="assets/images/unsplash3.jpg" alt="" />
          <img src="assets/images/unsplash4.jpg" alt="" />
          <img src="assets/images/unsplash27.jpg" alt="" />
          <img src="assets/images/unsplash6.jpg" alt="" />
          <img src="assets/images/unsplash28.jpg" alt="" />
          <img src="assets/images/unsplash16.jpg" alt="" />
          <img src="assets/images/unsplash19.jpg" alt="" />
          <img src="assets/images/unsplash11.jpg" alt="" />
          <img src="assets/images/unsplash20.jpg" alt="" />
          <img src="assets/images/unsplash23.jpg" alt="" />
          <img src="assets/images/unsplash12.jpg" alt="" />
          <img src="assets/images/unsplash10.jpg" alt="" />
          <img src="assets/images/unsplash7.jpg" alt="" />
          <img src="assets/images/unsplash26.jpg" alt="" />
          <img src="assets/images/unsplash5.jpg" alt="" />
          <img src="assets/images/unsplash17.jpg" alt="" />
          <img src="assets/images/unsplash18.jpg" alt="" />
        </div>
      </section>
      <section className="location-and-hours">
        <h1>Location & Hours</h1>
        <p>324321 Niehaus Drive</p>
        <br />
        <p>Seattle WA</p>
        <br />
        <p>Weekdays: 7:00am - 5:00pm</p>
        <br />
        <p>Weekends: 8:00am - 5:00pm</p>
      </section>
    </>
  );
}
