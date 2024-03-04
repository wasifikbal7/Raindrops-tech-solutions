import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { Social } from "@/components/shared/types";

const MediaData: Array<Social> = [
	{
		img: <FaYoutube className="w-[22px] h-[22px] hover:fill-[#FF0000]" />,
		title: "youtube",
		href: "https://www.youtube.com/",
		alt: "YOUTUBE",
	},
	{
		img: <FaFacebookSquare className="w-[22px] h-[22px] hover:fill-[#1877F2]" />,
		title: "facebook",
		href: "https://www.facebook.com/raindropstechsolutions/",
		alt: "FACEBOOK",
	},
	{
		img: <FaInstagram className="w-[22px] h-[22px] hover:bg-gradient-to-bl from-[#8a3ab9]  via-[#e95950] to-[#fccc63] hover:rounded-[6px] hover:text-[#ffff]" />,
		title: "instagram",
		href: "https://www.instagram.com",
		alt: "INSTAGRAM",
	},
	{
		img: <FaLinkedin className="w-[22px] h-[22px] hover:fill-[#0077b5]" />,
		title: "linkedin",
		href: "https://linkdin.com",
		alt: "LINKEDIN",
	},

	{
		img: <IoLogoWhatsapp className="w-[22px] h-[22px] hover:fill-[#25D366] hover:text-[#ffff]" />,
		title: "whatsapp",
		href: " https://wa.me/+918637027140",
		alt: "WHATSAPP",
	},
]

export default MediaData