import Link from "next/link";
import Image from "next/image";

import Logo from "@/../public/assets/footer-logo.png";

const Footer = () => {
  return (
    <section className="bg-zinc-300 text-black py-2.5">
      <div className="flex justify-around">
        <div className="flex items-center justify-center">
          <Image src={Logo} alt="footer" className="h-fit w-auto" />
        </div>
        <div>
          <h5 className="font-bold">Product Categories</h5>
          <div className="text-xs grid py-2">
            <Link href="./AgeCard" className="py-0.5">Colorings</Link>
            <Link href="./AgeCard" className="py-0.5">Books</Link>
            <Link href="./AgeCard" className="py-0.5">Ilustrations</Link>
            <Link href="./AgeCard" className="py-0.5">Icons</Link>
            <Link href="./AgeCard" className="py-0.5">Loadings</Link>
            <Link href="./AgeCard" className="py-0.5">Posters</Link>
            <Link href="./AgeCard" className="py-0.5">Worksheets</Link>
            <Link href="./AgeCard" className="py-0.5">Landing Page</Link>
          </div>
        </div>
        <div>
          <h5 className="font-bold">Support</h5>
          <div className="text-xs grid py-2">
            <Link href="./contact-us" className="py-0.5">Contact us</Link>
            <Link href="./refund-policy" className="py-0.5">Refund policy</Link>
            <Link href="./term-of-use" className="py-0.5">Term of use</Link>
            <Link href="./PrivacyPolicy" className="py-0.5">Privacy policy</Link>
            <Link href="./license-info" className="py-0.5">License info</Link>
            <Link href="./how-to-download" className="py-0.5">How to download</Link>
          </div>
        </div>
        <div>
          <h5 className="font-bold">Company</h5>
          <div className="text-xs grid py-2">
            <Link href="./about" className="py-0.5">About brainebee</Link>
            <Link href="./our-mission" className="py-0.5">Our mission</Link>
            <Link href="./reviews" className="py-0.5">Reviews</Link>
            <Link href="./partnership" className="py-0.5">Partnership</Link>
            <Link href="./figjam" className="py-0.5">Figjam</Link>
          </div>
        </div>
      </div>
      <div>
        <hr className="w-1/2 mx-auto border-gray-400" />
        <p className="text-xs text-center py-2">
          © 2025 brainebee. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
