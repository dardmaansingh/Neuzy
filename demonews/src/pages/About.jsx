import MainLayout from "../layouts/MainLayout";

function About() {
  return (
    <MainLayout>
      <div className="about-page-wrapper">
        <h1 className="about-main-title">
          About Neuzy News
        </h1>
        <p className="about-intro-text">
          Neuzy is a modern, high-performance React web application delivering real-time news headlines, in-depth editorial stories, and breaking updates from top global publishers.
        </p>

        <div className="about-features-card">
          <h3>Key Architecture Features</h3>
          <ul>
            <li><strong>Modular React Architecture:</strong> Reusable components & structured pages.</li>
            <li><strong>Live API Integration:</strong> Powered by NewsData.io API via Axios.</li>
            <li><strong>Custom Hooks:</strong> useFetch, useDebounce, useInfiniteScroll, useLocalStorage.</li>
            <li><strong>Global State Management:</strong> Context API for bookmarks & theme persistence.</li>
            <li><strong>Modern Styling:</strong> Responsive layout with dark and light mode support.</li>
          </ul>
        </div>
      </div>
    </MainLayout>
  );
}

export default About;