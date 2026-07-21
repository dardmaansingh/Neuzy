function Newsletter() {
  return (
    <section className="my-16 p-8 bg-[var(--bg-card)] border-t-4 border-[#b30000] rounded-b-lg text-center shadow-sm">
      <h2 className="font-serif text-2xl md:text-3xl font-bold mb-3">Stay Updated</h2>
      <p className="text-[var(--text-muted)] max-w-xl mx-auto mb-6 text-sm md:text-base">
        Subscribe to receive the latest headlines every day.
      </p>

      <form className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-md mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full sm:w-80 px-4 py-3 border border-[var(--border-color)] bg-transparent rounded outline-none focus:border-[#b30000] text-sm text-[var(--text-main)] placeholder:text-[var(--text-muted)] transition-colors"
        />

        <button
          type="submit"
          className="w-full sm:w-auto px-6 py-3 bg-[#b30000] hover:bg-[#8f0000] text-white font-medium text-sm rounded transition-colors"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
}

export default Newsletter;