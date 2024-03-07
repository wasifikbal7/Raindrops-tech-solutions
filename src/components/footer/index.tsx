import Link from "./Link";
import Logo from "@/assets/lgnav-removebg.png";
import { SelectedPage, } from "@/components/shared/types";

type Props = {
	selectedPage: SelectedPage;
	setSelectedPage: (value: SelectedPage) => void;
};


const Footer = ({ selectedPage, setSelectedPage }: Props) =>
{
	return (
		
		<footer className="shadow-md bg-slate-200">
			<div className="flex flex-col items-center justify-between mx-8">
				<div className="justify-center w-11/12 py-12 mx-auto gap-11 md:flex md:flex-row ">
					<div className="basis-2/5">
						<a href="#home"><img alt="logo" src={Logo} className="w-68 md:w-48" />
						</a>
						<p className="my-5 text-base">
						Raindrops Tech Solution is an innovative IT and Web Technology company. We specialize in delivering cutting-edge digital solutions to empower businesses. Our services range from web development to IT consulting, all tailored to meet your unique needs. With Raindrops Tech Solution, experience the fusion of technology and innovation that drives success.
						</p>
					</div>
					<div className="flex flex-col items-center mt-16 basis-1/5 md:mt-6">
						<h4 className="text-xl font-bold">Links</h4>
						<br></br>
						<div className="flex flex-col items-center">
							<Link
								page=" Services"
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
							/>
							<Link
								page=" Demo"
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
							/>
							<Link
								page="About"
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
							/>
						</div>
					</div>
					<div className="flex flex-col items-center mt-16 text-center basis-1/5 md:mt-6">
						<h4 className="mb-3 text-xl font-bold" >Contact Us</h4>
						<p className="my-2 transition duration-500 hover:text-slate-700 hover:font-semibold ">

							<a href="maps:Jadavpur,kolkata,
                West Bengal,India;
                700032">Jadavpur, Kolkata,
								<br></br>
								West Bengal, India,
								<br></br>
								700032</a></p>
						<p className="transition duration-500 hover:text-slate-700 hover:font-semibold ">
							<a href="tel:+91-8637027140">+91-8637027140</a></p>
						<p className="mt-1 transition duration-500 hover:text-slate-700 hover:font-semibold">
							<a href="mailto:contact@raindropstechsolutions.com">contact@raindropstechsolutions.com</a>
							<br/><a href="mailto:support@raindropstechsolutions.com">support@raindropstechsolutions.com</a></p>
					</div>


					<div className="flex flex-col items-center justify-center mt-16 basis-1/5 md:mt-0">
						<iframe title="location"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14745.028835856898!2d88.35669679390581!3d22.49453094798417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02713b257b4201%3A0x823fbc7ff044ca83!2sJadavpur%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1705160488999!5m2!1sen!2sin"
							width="130" height="100" loading="lazy" className="hover:w-52 hover:h-32">
						</iframe>
					</div>
				</div>
				<p className="mb-2">&copy; Raindrops Tech Solutions, 2024</p>
			</div>
		</footer>
	);
};

export default Footer;
