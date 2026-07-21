import MainLayout from "../layouts/MainLayout";

function About() {
  return (
    <MainLayout>
      <div className="py-10 max-w-3xl mx-auto">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
          About Neuzy News
        </h1>
        <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed mb-6">
          Neuzy is a modern, high-performance React web application delivering real-time news headlines, in-depth editorial stories, and breaking updates from top global publishers.
        </p>

        <div className="bg-[var(--bg-card)] p-6 rounded-xl border-l-4 border-[#b30000] shadow-sm mb-6">
          <h3 className="font-bold text-lg mb-3">Key Architecture Features</h3>
          <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-[var(--text-main)]">
            <li><strong>Modular React Architecture:</strong> Reusable components & structured pages.</li>
            <li><strong>Live API Integration:</strong> Powered by NewsData.io API via Axios.</li>
            <li><strong>Custom Hooks:</strong> useFetch, useDebounce, useInfiniteScroll, useLocalStorage.</li>
            <li><strong>Global State Management:</strong> Context API for bookmarks & theme persistence.</li>
            <li><strong>Modern Styling:</strong> Built with Tailwind CSS v4 supporting dark and light modes.</li>
          </ul>
        </div>
      </div>
    </MainLayout>
  );
}

export default About;