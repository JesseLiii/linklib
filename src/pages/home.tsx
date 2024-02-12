import { TypographyH2 } from '@/components/atoms/typography';
import Section from '@/components/layout/section';
import { Button } from '@/components/ui/button';
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from '@/components/ui/resizable';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useTheme } from 'next-themes';
import { Inter } from 'next/font/google';
import { Tweet } from 'react-tweet';
import {
	InstagramEmbed,
	LinkedInEmbed,
	PinterestEmbed,
	TikTokEmbed,
	YouTubeEmbed,
} from 'react-social-media-embed';

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
						<h1 className='pl-3 text-3xl font-extrabold tracking-tight lg:text-4xl'>
							LinkLib
						</h1>
						<div className='mt-5 space-y-4 flex flex-col'>
							<Button
								variant='ghost'
								className='flex items-start justify-start text-left'
							>
								Main List
							</Button>
							<Button
								variant='ghost'
								className='flex items-start justify-start text-left'
							>
								Productivity
							</Button>
							<Button
								variant='ghost'
								className='flex items-start justify-start text-left'
							>
								Indie Hacking
							</Button>
						</div>
					</Section>
				</ResizablePanel>
				<ResizableHandle />
				<ResizablePanel defaultSize={50}>
					<ScrollArea className='h-screen '>
						<div className='pt-[20%] px-10 flex flex-col items-center justify-center w-full space-y-5'>
							<Tweet id='1628832338187636740' />
							<InstagramEmbed
								url='https://www.instagram.com/p/CUbHfhpswxt/'
								width={328}
							/>

							<TikTokEmbed
								url='https://www.tiktok.com/@epicgardening/video/7055411162212633903'
								width={325}
							/>
							<YouTubeEmbed
								url='https://www.youtube.com/watch?v=HpVOs5imUN0'
								width={325}
								height={220}
							/>
							<LinkedInEmbed
								url='https://www.linkedin.com/embed/feed/update/urn:li:share:6898694772484112384'
								postUrl='https://www.linkedin.com/posts/peterdiamandis_5-discoveries-the-james-webb-telescope-will-activity-6898694773406875648-z-D7'
								width={325}
								height={570}
							/>
							<Tweet id='1628832338187636740' />
						</div>
					</ScrollArea>
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
