
export enum SelectedPage
{
	Home = "home",
	Services = "services",
	Demo = "demo",
	About = "about",
	ContactUs = "contactus",
}

export interface BenefitType
{
	icon: JSX.Element;
	title: string;
	description: string;
}

export interface ClassType
{
	type?: string;
	name: string;
	description?: string;
	image: string;
	alt?: string;
}
export interface aboutContent
{
	name: string;
	description: string;
}


export interface teammembers
{
	name: string;
	role: string;
	img?: string;
	alt?: string;
	bio?: string;
	experience?: string;
}

export interface Social
{
	img: JSX.Element;
	title: string;
	href: string;
	alt?: string;
}

export interface emailjsId
{
	service_id: string;
	template_id: string;
	private_id: string;
}