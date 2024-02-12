import { TypographyH2 } from '@/components/atoms/typography';
import Section from '@/components/layout/section';
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from '@/components/ui/resizable';
import { useTheme } from 'next-themes';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<main>
			<ResizablePanelGroup
				direction='horizontal'
				className='h-screen w-screen'
			>
				<ResizablePanel defaultSize={20}>
					<Section>
						<h1 className='text-3xl font-extrabold tracking-tight lg:text-4xl'>
							LinkLib
						</h1>
					</Section>
				</ResizablePanel>
				<ResizableHandle />
				<ResizablePanel defaultSize={50}>
					<Section></Section>
				</ResizablePanel>
				<ResizableHandle />
				<ResizablePanel defaultSize={30}>
					<Section>
						<TypographyH2>Notes</TypographyH2>
					</Section>
				</ResizablePanel>
			</ResizablePanelGroup>
		</main>
	);
}
