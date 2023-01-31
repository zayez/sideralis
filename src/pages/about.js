const About = () => {
  return (
    <div className="container">
      <h1>Sideralis</h1>
      <h2>Overview</h2>
      <blockquote>
        <p>
          "Astronomy Picture of the Day (APOD) is a website provided by NASA.
          Each day a different image or photograph of our universe is featured,
          along with a brief explanation written by a professional astronomer."
        </p>

        <a href="https://en.wikipedia.org/wiki/Astronomy_Picture_of_the_Day">
          Wikipedia
        </a>
      </blockquote>
      <p>
        Sideralis is an open source APOD client. Read more on{" "}
        <a href="https://github.com/zayez/sideralis">Github</a>.
      </p>
      <h2>License</h2>
      <p>
        Sideralis is distributed under the terms and conditions of the MIT
        license.
      </p>
    </div>
  )
}

export default About
