import MainStyle from './Styles/MainStyle.module.scss';

export default function MarketplacePage() {
  return (
    <div className={MainStyle.mainContent}>
     <div className="container py-5">
      {/* Header */}
      <div className="text-center mb-5">
        <h2 className="fw-bold">Marketplace Preview</h2>
      </div>

      {/* Horizontal Cards */}
      <div className="row mb-5">
        {[
          { title: 'Buy Books', desc: 'Buy Brand new books from trusted sellers' },
          { title: 'Buy used Books', desc: 'Buy gently used books at affordable prices' },
          { title: 'Sell Books', desc: 'Sell your old books' },
        ].map((item, idx) => (
          <div className="col-md-4 mb-4" key={`horizontal-${idx}`}>
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text text-muted">{item.desc}</p>
                <p className="fw-semibold">{item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Vertical Content */}
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="card shadow-sm">
            <div className="card-body">
              <h4 className="card-title">Featured Seller</h4>
              <p className="text-muted">
                Meet <strong>The Indian cultural Bookstore</strong>, a top-rated seller known for a wide selection of books and excellent customer service.
              </p>
              <ul className="list-unstyled">
                <li>🌟 4.9/5 rating</li>
                <li>📦 Ships within 2 days</li>
                <li>🛍️ Over 500 items sold</li>
              </ul>
              <button className="btn btn-outline-primary mt-3">View Profile</button>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="card shadow-sm">
            <div className="card-body">
              <h4 className="card-title">Featured Seller</h4>
              <p className="text-muted">
                Meet <strong>Oxford Book House</strong>, a top-rated seller known for a wide selection of books and excellent customer service.
              </p>
              <ul className="list-unstyled">
                <li>🌟 4.9/5 rating</li>
                <li>📦 Ships within 2 days</li>
                <li>🛍️ Over 500 items sold</li>
              </ul>
              <button className="btn btn-outline-primary mt-3">View Profile</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    

  );
};
