import { cn } from '@/lib/utils';

type TypographyProps = {
	children: React.ReactNode;
	className?: string;
};

export function TypographyH1(props: TypographyProps) {
	return (
		<h1
			className={cn(
				'scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl',
				props.className
			)}
		>
			{props.children}
		</h1>
	);
}

export function TypographyH2(props: TypographyProps) {
	return (
		<h2
			className={cn(
				'scroll-m-20 pb-2 text-2xl font-semibold tracking-tight first:mt-0',
				props.className
			)}
		>
			{props.children}
		</h2>
	);
}

export function TypographyH3(props: TypographyProps) {
	return (
		<h3
			className={cn(
				'scroll-m-20 text-xl font-semibold tracking-tight',
				props.className
			)}
		>
			{props.children}
		</h3>
	);
}

export function TypographyP(props: TypographyProps) {
	return (
		<p
			className={cn(
				'leading-7 [&:not(:first-child)]:mt-6',
				props.className
			)}
		>
			{props.children}
		</p>
	);
}

export function TypographyBlockquote(props: TypographyProps) {
	return (
		<blockquote
			className={cn('mt-6 border-l-2 pl-6 italic', props.className)}
		>
			{props.children}
		</blockquote>
	);
}
