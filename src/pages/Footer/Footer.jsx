import React from "react";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="grid grid-cols-4 p-4 mt-20 bg-red-300 rounded-sm">
      <div>
        <p>
          H#000 (0th Floor), Road #00, <br /> New DOHS, Mohakhali, Dhaka,
          Bangladesh
        </p>
      </div>
      {/* company */}
      <div className="grid">
        <h4 className="font-bold">Company</h4>
        <span>
          <Link>About</Link>
        </span>
        <span>
          <Link>Project</Link>
        </span>
        <span>
          <Link>Our team</Link>
        </span>
        <span>
          <Link>Terms And condition</Link>
        </span>
        <span>
          <Link>Submit listing</Link>
        </span>
      </div>
      {/* quick Link */}
      <div className="grid">
        <h4 className="font-bold">Quick Links</h4>
        <span>
          <Link>quick link</Link>
        </span>
        <span>
          <Link>Rentals</Link>
        </span>
        <span>
          <Link>Sales</Link>
        </span>
        <span>
          <Link>Contacts</Link>
        </span>
        <span>
          <Link>Our blogs</Link>
        </span>
      </div>
      <div className="grid">
        <h4>About us</h4>
        <span>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, iste!
        </span>
        <span className="flex gap-3">
          <FaLinkedin /> <FaYoutube /> <FaInstagram />
        </span>
      </div>
    </div>
  );
};

export default Footer;
