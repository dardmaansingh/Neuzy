function Newsletter() {
  return (
    <section className="newsletter">

      <h2>Stay Updated</h2>
      <p>
        Subscribe to receive the latest headlines every day.
      </p>

      <form className="newsletter-form">

        <input
          type="email"
          placeholder="Enter your email"
        />

        <button type="submit">
          Subscribe
        </button>

      </form>

    </section>
  );
}

export default Newsletter;