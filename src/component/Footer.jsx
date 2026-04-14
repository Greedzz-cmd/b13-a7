import Link from "next/link";
import instagramPic from "../../public/assets/instagram.png";
import facebookPic from "../../public/assets/facebook.png";
import twitterPic from "../../public/assets/twitter.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="text-center bg-success-content text-white pt-20 pb-8">
      <div className="container mx-auto">
        <h2 className="font-bold text-6xl">
          Keen<span className="font-semibold">Keeper</span>
        </h2>
        <p className="mb-6 mt-4">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <p className="font-medium text-xl mb-4">Social Links</p>
        <div className="flex gap-3 justify-center">
          <Link href="/">
            <Image src={instagramPic} alt="instagram"></Image>
          </Link>
          <Link href="/">
            <Image src={facebookPic} alt="facebook"></Image>
          </Link>
          <Link href="/">
            <Image src={twitterPic} alt="twitter"></Image>
          </Link>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:justify-between pt-8 mt-10 border-t border-[#1A886250]">
          <div>© 2026 KeenKeeper. All rights reserved.</div>
          <div className="flex gap-4 md:gap-10 flex-col md:flex-row">
            <div>Privacy Policy</div>
            <div>Terms of Service</div>
            <div>Cookies</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
