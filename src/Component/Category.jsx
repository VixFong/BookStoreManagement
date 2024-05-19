const categories = [
    { name: "Arts & Photography", className: "arts", color: "#f5f0ff", icon: "Arts.png" },
    { name: "Food & Drink", className: "food", color: "#fdf5e6", icon: "Food&Drink.png" },
    { name: "Romance", className: "romance", color: "#faebf0", icon: "Romance.png" },
    { name: "Health", className: "health", color: "#e8f8fa", icon: "Health.png" },
    { name: "Biography", className: "biography", color: "#fff1f0", icon: "Biography.png" },
    { name: "Story", className: "story", color: "#9FB6CD", icon: "Story.png" }
  ];

export const Category = () => {
    const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '150px',
    width: '200px',
    borderRadius: '5px',
    textAlign: 'center',
    color: '#000',
    textDecoration: 'none',
  };
  return (
    <div className="container my-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
            <h2>Featured Category</h2>
            <h5><a href="#" className="link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">All Category <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right" viewBox="0 0 16 16">
            <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753"/>
            </svg></a></h5>
        </div>
        <div className="row g-3">
        {categories.map((category, index) => (
          <div className="col-12 col-md-4 col-lg-2" key={index}>
            <a
              href="#"
              className="category-card"
              style={{ ...cardStyle, backgroundColor: category.color }}
            >
              <div className="icon mb-2">
                <img src={category.icon} alt={category.name} />
              </div>
              <h5>{category.name}</h5>
              <p>Shop Now</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Category;
