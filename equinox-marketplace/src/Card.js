import MainStyle from './Styles/MainStyle.module.scss';

export default function Card({ title, description, image, link }) {
  return (

    <a href={link} style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
      <div className={`card shadow-sm mb-4 ${MainStyle.card} card d-flex flex-column justify-content-between`}>
        <img src={image} className="card-img-top" alt={title}  sizes='10'/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
    
      </div>
    </a>
  );
}