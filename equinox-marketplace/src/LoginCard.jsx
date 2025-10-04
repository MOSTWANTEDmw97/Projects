

export default function LoginCard({ title, description, link }) {
  return (

    
      <div className={`card shadow-sm mb-4 ${MainStyle.card} card d-flex flex-column justify-content-between`}>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          
        </div>
    
      </div>
    
  );
}