import { cn } from '@/lib/utils';
import React from 'react';

type SectionProps = {
	children: React.ReactNode;
	className?: string;
};

//
const Section: React.FC<SectionProps> = ({ className, ...props }) => {
	return (
		<div className={cn('p-5 h-screen', className)} {...props}>
			{props.children}
		</div>
	);
};

export default Section;
