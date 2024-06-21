import { SelectedPage } from "@/components/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useNavigate } from "react-router-dom";

type Props = {
	page: string;
	selectedPage: SelectedPage;
	setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) =>
{
	const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
	const navigate = useNavigate();

	const handleClick = () =>
	{
		setSelectedPage(lowerCasePage);
		navigate(`#${lowerCasePage}`, { replace: true });
	};

	return (
		<AnchorLink
			className={`${selectedPage === lowerCasePage ? "text-teal-500 font-normal border-b-[2px] border-teal-500" : "transition duration-300 hover:text-teal-500 font-normal relative after:content-[''] after:absolute after:inset-x-0 after:bottom-0 after:h-[2px] after:bg-teal-500 after:transform after:scale-x-0 after:transition-all after:duration-300 after:ease-in-out hover:after:scale-x-100"}
        
      `}
			href={`#${lowerCasePage}`}
			onClick={handleClick}
			offset={() => 100}
		>
			{page}
		</AnchorLink>
	);
};

export default Link;
