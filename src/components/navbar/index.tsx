import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/lgnav-removebg.png";
import Link from "./Link";
import { SelectedPage } from "@/components/shared/types";
import useMediaQuery from "@/components/hooks/useMediaQuery";
import ActionButton from "@/components/shared/ActionButton";


type Props = {
	isTopOfPage: boolean;
	selectedPage: SelectedPage;
	setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) =>
{
	const flexBetween = "flex items-center justify-start";
	const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
	const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
	const navbarBackground = isTopOfPage ? "" : "bg-blue-50 bg-opacity-80 min-width:1060px";

	return (
		<nav>
			<div
				className={`${navbarBackground} ${flexBetween} fixed top-0 bg-stone-50 z-50 w-[100vw] backdrop-blur-sm shadow-md py-8`}
			>
				<div className={`${flexBetween} mx-auto w-5/6`}>
					<div className={`${flexBetween} w-full gap-20`}>
						{/* LEFT SIDE */}
						<div className="absolute w-52 navlogo md:left-8 md:w-72 left-1">
							<a href="/">
								<img alt="Raindrops" src={Logo} />
							</a>
						</div>

						{/* RIGHT SIDE */}
						{isAboveMediumScreens ? (
							<div className={` w-full`}>
								<ul className={`flex items-end justify-items-end text-slate-700 font-normal absolute right-60 top-4 mb-3 gap-9 text-xl`}>
									<li><a href="#home">
										<Link
											page="Home"
											selectedPage={selectedPage}
											setSelectedPage={setSelectedPage}
										/>
									</a></li>
									<li><a href="#services">
										<Link
											page=" Services"
											selectedPage={selectedPage}
											setSelectedPage={setSelectedPage}
										/>
									</a></li>
									<li><a href="#demo">
										<Link
											page=" Demo"
											selectedPage={selectedPage}
											setSelectedPage={setSelectedPage}
										/>
									</a></li>
									<li><a href="#about">
										<Link
											page="About"
											selectedPage={selectedPage}
											setSelectedPage={setSelectedPage}
										/>
									</a></li>
									<li><a href="#contactus">
										<Link
											page="Contact Us"
											selectedPage={selectedPage}
											setSelectedPage={setSelectedPage}
										/>
									</a></li>
								</ul>

								<div className="absolute font-semibold transition-transform drop-shadow-lg right-20 top-3 active:scale-90">
									<ActionButton size='lg' variant='custom' className="text-slate-800 text-normal text-lg font-normal border-2 rounded-[65px] hover:bg-slate-100" setSelectedPage={setSelectedPage}>
										Hire Us
									</ActionButton>
								</div>
							</div>
						) : (
							<button
								className="absolute p-1 bg-red-500 rounded-full right-5 top-4"
								onClick={() => setIsMenuToggled(!isMenuToggled)} type={'button'} title='MenuButton'
							>
								<Bars3Icon className="w-6 h-6 text-white" />
							</button>
						)}
					</div>
				</div>
			</div>

			{/* MOBILE MENU MODAL */}
			{!isAboveMediumScreens && isMenuToggled && (
				<div className="fixed right-0 bottom-0 z-50 bg-opacity-80 h-full backdrop-blur-sm w-[163px] bg-sky-100">
					{/* CLOSE ICON */}
					<div className={`flex justify-end p-5 mr-2`}>
						<button onClick={() => setIsMenuToggled(!isMenuToggled)} type={'button'} title="Href">
							<XMarkIcon className="w-5 h-5 text-gray-500" />
						</button>
					</div>

					{/* MENU ITEMS */}
					<div className="absolute mt-3 pt-4 text-slate-800 h-[300px] flex items-center flex-col gap-9 justify-between">
						<ul
							className={`flex flex-col gap-9 px-4 font-semibold text-xl w-full`}
						>
							<li><a href="#home">
								<Link
									page="Home"
									selectedPage={selectedPage}
									setSelectedPage={setSelectedPage}
								/>
							</a></li>
							<li><a href="#services">
								<Link
									page=" Services"
									selectedPage={selectedPage}
									setSelectedPage={setSelectedPage}
								/>
							</a></li>
							<li><a href="#demo">
								<Link
									page=" Demo"
									selectedPage={selectedPage}
									setSelectedPage={setSelectedPage}
								/>
							</a></li>
							<li><a href="#about">
								<Link
									page="About"
									selectedPage={selectedPage}
									setSelectedPage={setSelectedPage}
								/>
							</a></li>
							<li><a href="#contactus">
								<Link
									page="Contact Us"
									selectedPage={selectedPage}
									setSelectedPage={setSelectedPage}
								/>
							</a></li>
						</ul>
						<div className="relative flex flex-col items-center justify-center font-semibold transition-transform text- text-gray-50 active:scale-90 left-2">
							<ActionButton variant='custom' className="text-slate-800 text-md rounded-[65px] bg-transparent" setSelectedPage={setSelectedPage}>
								Hire Us
							</ActionButton>
						</div>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
