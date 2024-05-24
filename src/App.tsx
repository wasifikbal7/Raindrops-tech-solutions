import { useEffect, useState } from "react";

import About from "@/components/about";
import ContactUs from "@/components/contactUs";
import Footer from "@/components/footer";
import Home from "@/components/home";
import Navbar from "@/components/navbar";
import OurServices from "@/components/ourServices";
import OurWork from "@/components/ourWork";
import { SelectedPage } from "@/components/shared/types";
import Social from "./components/float_social/floatingButton";
import { ToTopBtn } from "./components/toTopBtn";
import useIntersectionObserver from "@/components/hooks/onScrollUrlUpdate";

function App()
{
	const [selectedPage, setSelectedPage] = useState<SelectedPage>(
		SelectedPage.Home
	);
	const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
	useEffect(() =>
	{
		const handleScroll = () =>
		{
			if (window.scrollY === 0)
			{
				setIsTopOfPage(true);
				setSelectedPage(SelectedPage.Home);
			}
			if (window.scrollY !== 0) setIsTopOfPage(false);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useIntersectionObserver(setSelectedPage);
	return (
		<div>
			<Navbar
				isTopOfPage={isTopOfPage}
				selectedPage={selectedPage}
				setSelectedPage={setSelectedPage}
			/>
			<div className="flex flex-col gap-5 mx-[10px] bg-white">

				<section className="md:mb-5" id="home"><Home setSelectedPage={setSelectedPage} /></section>

				<section className="md:mb-5" id="services"><OurServices setSelectedPage={setSelectedPage} /></section>

				<section className="md:mb-5" id="demo"><OurWork setSelectedPage={setSelectedPage} /></section>

				<section className="md:mb-5" id="about"><About setSelectedPage={setSelectedPage} /></section>

				<section className="md:mb-5" id="contactus"><ContactUs setSelectedPage={setSelectedPage} /></section>

			</div>
			<Footer
				selectedPage={selectedPage}
				setSelectedPage={setSelectedPage}
			/>
			<Social />
			<ToTopBtn />
		</div>
	);
}


export default App;
