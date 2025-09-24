import MainStyle from './Styles/MainStyle.module.scss';
import Card from './Card';
import Shopingcart from './Images/ShoppingCart.png';
import SellBook from './Images/SellBook.png'; 
import Ebook from './Images/Ebook.png';

export default function MainContent() {
  return (
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
      
      

      


      <h1>Main Content ...</h1>
      <p>This is where the main content of the marketplace will be displayed.</p>
      <p>Explore various products and services available for purchase.</p>
      <p>Stay tuned for updates and new features!</p>
      <br />
      <br />
      <h1>Main Content ...</h1>
      <p>This is where the main content of the marketplace will be displayed.</p>
      <p>Explore various products and services available for purchase.</p>
      <p>Stay tuned for updates and new features!</p>
      <br />
      <br />
      <h1>Main Content ...</h1>
      <p>This is where the main content of the marketplace will be displayed.</p>
      <p>Explore various products and services available for purchase.</p>
      <p>Stay tuned for updates and new features!</p>
      <br />
      <br />
      <h1>Main Content ...</h1>
      <p>This is where the main content of the marketplace will be displayed.</p>
      <p>Explore various products and services available for purchase.</p>
      <p>Stay tuned for updates and new features!</p>
      <br />
      <br />
      <h1>Main Content ...</h1>
      <p>This is where the main content of the marketplace will be displayed.</p>
      <p>Explore various products and services available for purchase.</p>
      <p>Stay tuned for updates and new features!</p>
      <br />
      <br />
    </div>
  );
}