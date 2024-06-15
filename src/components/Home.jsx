const Home = () => {
  return (
    <div>
      <header>
        <div className="hero">
          <div className="hero-banner">
            <h3>Book Store</h3>
            <p> &quot;When in doubt,go to library&quot; ~ Jk Rowling</p>
            <input
              type="text"
              placeholder="
        Enter book name..."
              className="input-bar"
            />
            <button className="hero-btn">Search</button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;
