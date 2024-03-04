import ActionButton from "@/components/shared/ActionButton";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "@/components/shared/types";
import TypingText from "../shared/typingText";
import VideoBg from '@/assets/bg-Video.mp4';
import VideoBg2 from '@/assets/video-bg2.mp4';
import { motion } from "framer-motion";

import './index.css'

type Props = {
	setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) =>
{

	return (
		<section
			id={`${SelectedPage.Home}`}
			className="w-full min-h-min mt-[70px]"
		>
			<div className="relative h-[90vh]">
			<div>
					<div className="absolute z-10 w-full bg-black h-full bg-opacity-35" />
					<video src={VideoBg} autoPlay loop muted className="absolute inset-0 object-cover w-full h-full blur-sm" />
				</div>

				{/* IMAGE AND MAIN HEADER */}
				<motion.div
					className="flex items-center justify-around"
					onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
				>
					{/* MAIN HEADER */}
					<div
						className="z-10 md:m-28 m-3 md:mt-28 mt-32 flex flex-col md:basis-4/5 opacity-100 hover:bg-slate-800 hover:bg-opacity-20 duration-200 rounded-xl shadow-zinc-700 shadow-lg p-[30px] items-end">
						{/* HEADINGS */}
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.5 }}
							transition={{ delay: 0.05, duration: 0.5 }}
							variants={{
								hidden: { opacity: 0, y: -50 },
								visible: { opacity: 1, y: 0 },
							}}
						>

							<div className="text-6xl ease-n-out ">
								<h1 className="text-center text-white transition-all duration-500 bg-transparent bg-clip-text hover:text-transparent hover:bg-teal-500 ">
									Raindrops Tech Solutions
								</h1>
							</div>
						</motion.div>

						<div className="flex flex-col pl-10 items-start mr-auto p-[30px] gap-[20px]">

							<motion.div
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.5 }}
								transition={{ delay: 0.35, duration: 0.5 }}
								variants={{
									hidden: { opacity: 0, x: -50 },
									visible: { opacity: 1, x: 0 },
								}}
								className="flex flex-col text-xl"
							>
								<span className="font-semibold text-white">class:</span>
								<span className="font-semibold text-white">&nbsp;&nbsp;&nbsp;&nbsp;&#123;</span>
								<div>
									<span className="font-semibold text-white">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;display:</span>
									<span className="font-semibold text-white">
										&nbsp;imagination... <TypingText text="hey" delay={500} speed={400}/>
									</span>
								</div>
								<span className="font-semibold text-white"> &nbsp;&nbsp;&nbsp;&nbsp;&#125; </span>
							</motion.div>
							<motion.div
								className="text-xl"
								initial='hidden'
								whileInView='visible'
								viewport={{ once: true, amount: 0.5 }}
								transition={{ delay: 0.75, duration: 0.5 }}
								variants={{
									hidden: { opacity: 0, x: 50 },
									visible: { opacity: 1, x: 0 }
								}}
							>
								<span className="font-semibold text-white">. . .Beyond Boundaraies,<br /></span>
								<span className="font-semibold text-white"> Beyond Binaries</span>
							</motion.div>

						</div>
						{/* ACTIONS */}
						<motion.div
							className="flex items-end gap-4 py-4"
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.5 }}
							transition={{ delay: 1.1, duration: 0.5 }}
							variants={{
								hidden: { opacity: 0, y: 50 },
								visible: { opacity: 1, y: 0 },
							}}
						>
							<div className="text-white transition-transform active:scale-90">
								<ActionButton variant="secondary" setSelectedPage={setSelectedPage} size="lg" className='font-bold rounded-[65px] border-2 transition-all duration-200 border-slate-600 text-slate-800 hover:border-black hover:border-2'>
									Hire Us
								</ActionButton>
							</div>
							<AnchorLink
								className="p-3 text-sm font-bold text-gray-100 underline duration-300 ease-in-out hover:text-teal-500"
								onClick={() => setSelectedPage(SelectedPage.About)}
								href={`#${SelectedPage.About}`}
							>
								<p>Learn More</p>
							</AnchorLink>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Home;
