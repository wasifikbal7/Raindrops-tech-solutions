import AnchorLink from "react-anchor-link-smooth-scroll";
import React from "react";
import { SelectedPage } from "./types";
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { useNavigate } from "react-router-dom";

const buttonVariants = cva(
	"inline-flex items-center justify-center whitespace-nowrap rounded-md text-md font-normal ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
	{
		variants: {
			variant: {
				default: "bg-primary text-primary-foreground hover:bg-primary/90",
				destructive:
					"bg-destructive text-destructive-foreground hover:bg-destructive/90",
				outline:
					"border border-input bg-background font-normal shadow-inner shadow-slate-500 border-white rounded-3xl text-slate-800 hover:text-accent-foreground",
				secondary:
					"bg-secondary text-secondary-foreground hover:bg-secondary/80",
				ghost: "hover:bg-accent hover:text-accent-foreground",
				link: "text-primary underline-offset-4 hover:underline",
				custom: "border border-2 bg-gradient-to-b from-white from-45% to-zinc-400 font-normal rounded-3xl text-slate-800 hover:text-accent-foreground hover:scale-105 transition-all border-white shadow-md shadow-slate-600",
			},
			size: {
				default: "h-10 px-4 py-2",
				sm: "h-9 rounded-md px-3",
				lg: "h-9 rounded-md px-6",
				icon: "h-10 w-10",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	}
)

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
	VariantProps<typeof buttonVariants>
{
	asChild?: boolean
}


type Props = {
	className?: string | undefined;
	variant?: any;
	size?: any;
	children?: React.ReactNode;
	setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton =
	({ children, className, variant, size, setSelectedPage }: Props) =>
	{
		const navigate = useNavigate();

		const handleClick = () =>
		{
			setSelectedPage(SelectedPage.ContactUs);
			navigate(`#${SelectedPage.ContactUs}`, { replace: true });
		};
		return (
			<AnchorLink
				className={cn(buttonVariants({ variant, size, className }))}
				onClick={handleClick}
				href={`#${SelectedPage.ContactUs}`}
				aria-label="Button"
			>
				{children}
			</AnchorLink>
		);
	}

export default ActionButton;
