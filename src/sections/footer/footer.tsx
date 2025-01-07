// assets
import profileImage from "../../assets/profile.jpg";

// components
import Avatar from "../../components/avatar/avatar";

// external components
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";

// types
import type { FooterProps } from "./types";

function Footer({ name, profession, phone, email, location }: FooterProps) {
  return (
    <div
      id="#footer"
      className="w-full p-10 lg:px-32 lg:py-12 bg-zinc-600 border-t-2 border-t-cyan-500"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start">
          <span className="text-slate-200 font-medium text-lg mb-3">
            {name}
          </span>
          <span className="text-cyan-500 font-medium text-sm mb-1">
            {profession}
          </span>
          <div className="flex flex-row gap-2 items-center">
            <FaPhone className="w-4 h-4 text-cyan-500" />
            <span className="text-slate-200 font-medium text-sm underline mb-1">
              {phone}
            </span>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <MdEmail className="w-4 h-4 text-cyan-500" />
            <span className="text-slate-200 font-medium text-sm underline mb-1">
              {email}
            </span>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <img
              alt="ES"
              className="h-4 w-4 overflow-hidden rounded-full"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/255px-Flag_of_Colombia.svg.png"
            />
            <span className="text-slate-200 font-medium text-sm">
              {location}
            </span>
          </div>
        </div>
        <Avatar src={profileImage} size="md" className="rounded-full" />
      </div>
    </div>
  );
}

export default Footer;
