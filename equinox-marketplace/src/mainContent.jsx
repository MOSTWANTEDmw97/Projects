import MainStyle from './Styles/MainStyle.module.scss';
import Card from './Card';
import Shopingcart from './Images/ShoppingCart.png';
import SellBook from './Images/SellBook.png'; 
import Ebook from './Images/Ebook.png';

export default function MainContent() {
  return (
    <main>
      <div className={MainStyle.mainContent}>

      <div className="row">
        <div className={`col-12 ${MainStyle.cardRow}`}>
          <Card
            title="Buy books"
            description="Visit to check all the book listings"
            image={Shopingcart}
            link="#"
          />
          
          <Card
            title="Sell Books"
            description="List your books for sale"
            image={SellBook}
            link="#"
          />

          <Card
            title="Read E-books"
            description="Access a wide range of e-books."
            image={Ebook}
            link="#"
          />
        </div>
      </div>
      <div className="container py-5">
      <h1 className="mb-4">📚 Welcome to Equinox Book Marketplace</h1>
      <p className="lead">
        Discover a vibrant marketplace where book lovers connect, buy, and sell their favorite reads. Whether you're hunting for rare editions or clearing your shelf, Equinox Book Marketplace makes it seamless.
      </p>

      <h1 className="mt-5">🛍️ What is Equinox Book Marketplace?</h1>
      <p>
        Equinox Book Marketplace is a peer-to-peer platform designed for students, collectors, and casual readers to exchange books directly. Our mission is to promote sustainable reading and make literature more accessible.
      </p>

      <h1 className="mt-5">🚀 Features Coming Soon</h1>
      <p>
        We're working on secure logins, dynamic listings, seller profiles, and smart search filters. Stay tuned as we build the future of book commerce—one page at a time.
      </p>
    </div>

      

      


        
      </div>

    </main>
      );
}