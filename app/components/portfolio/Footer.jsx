import Image from 'next/image';
import facebookIcon from '../../media/facebook.png';
import twitterIcon from '../../media/twitter.png';
import instagramIcon from '../../media/instagram.png';

const Footer = () => {
  return (
    <footer className="text-center py-8 bg-white" id="contacto">
      <div className="container mx-auto">
        <a href="#" className="text-green-800 text-lg font-bold">Contacto:</a>
        <p>Correo: dsafar.ibz@gmail.com</p>
        <p>Teléfono: 652 39 45 38</p>
      </div>
      <div className="mt-5 flex justify-center">
        <a href="#" className="mx-2">
          <Image src={facebookIcon} alt="Facebook" width={30} height={30} />
        </a>
        <a href="#" className="mx-2">
          <Image src={twitterIcon} alt="Twitter" width={30} height={30} />
        </a>
        <a href="#" className="mx-2">
          <Image src={instagramIcon} alt="Instagram" width={30} height={30} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
