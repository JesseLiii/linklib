import { TypographyH2 } from '@/components/atoms/typography'
import Section from '@/components/layout/section'
import { Button } from '@/components/ui/button'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Tweet } from 'react-tweet'
import {
  InstagramEmbed,
  LinkedInEmbed,
  TikTokEmbed,
  YouTubeEmbed,
} from 'react-social-media-embed'
import db from '@/modules/db'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { useRouter } from 'next/router'
import { ContentItem, ContentType } from '@prisma/client'

export const getServerSideProps = (async () => {
  // Fetch data from external API
  const content_items: ContentItem[] = await db.contentItem.findMany()

  // Pass data to the page via props
  return {
    props: {
      content_items: content_items.map((content_item) => {
        content_item.createdAt = JSON.parse(
          JSON.stringify(content_item.createdAt),
        )
        return content_item
      }),
    },
  }
}) satisfies GetServerSideProps<{ content_items: ContentItem[] }>

export default function Home({
  content_items,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter()

  const refreshData = () => {
    router.replace(router.asPath)
  }

  const createDummyData = async (e: React.FormEvent) => {
    e.preventDefault()
    // Make a POST request to the API endpoint
    const data = [
      {
        type: ContentType.INSTAGRAM,
        link: 'https://www.instagram.com/p/CUbHfhpswxt/',
      },
      {
        type: ContentType.TIKTOK,
        link: 'https://www.tiktok.com/@epicgardening/video/7055411162212633903',
      },
      {
        type: ContentType.YOUTUBE,
        link: 'https://www.youtube.com/watch?v=HpVOs5imUN0',
      },
      {
        type: ContentType.LINKEDIN,
        link: 'https://www.linkedin.com/posts/peterdiamandis_5-discoveries-the-james-webb-telescope-will-activity-6898694773406875648-z-D7',
      },
      { type: ContentType.TWITTER, nativeId: '1628832338187636740' },
    ]
    const response = await fetch('/api/createPost', {
      method: 'POST',
      body: JSON.stringify(data),
    })

    // Handle the response
    if (response.ok) {
      const data = await response.json()
      console.log(data) // Handle successful response
      refreshData()
    } else {
      console.error('Error:', response.statusText) // Handle error response
    }
  }

  return (
    <main>
      <ResizablePanelGroup direction="horizontal" className="h-screen w-screen">
        <ResizablePanel defaultSize={20}>
          <Section>
            <h1 className="pl-3 text-3xl font-extrabold tracking-tight lg:text-4xl">
              LinkLib
            </h1>
            <div className="mt-5 space-y-4 flex flex-col">
              <Button
                variant="ghost"
                className="flex items-start justify-start text-left"
              >
                Main List
              </Button>
              <Button
                variant="ghost"
                className="flex items-start justify-start text-left"
              >
                Productivity
              </Button>
              <Button
                variant="ghost"
                className="flex items-start justify-start text-left"
              >
                Indie Hacking
              </Button>
              <Button onClick={createDummyData}>
                Click me to generate and persist posts
              </Button>
            </div>
          </Section>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50}>
          <ScrollArea className="h-screen ">
            <div className="pt-[20%] px-10 flex flex-col items-center justify-center w-full space-y-5">
              {content_items.map((item) => {
                if (item.type === ContentType.INSTAGRAM) {
                  if (item.link)
                    return <InstagramEmbed url={item.link} width={328} />
                } else if (item.type === ContentType.LINKEDIN) {
                  if (item.link)
                    return (
                      <LinkedInEmbed
                        url={item.link}
                        postUrl={item.link}
                        width={325}
                        height={570}
                      />
                    )
                } else if (item.type === ContentType.TIKTOK) {
                  if (item.link)
                    return <TikTokEmbed url={item.link} width={325} />
                } else if (item.type === ContentType.TWITTER) {
                  if (item.nativeId) return <Tweet id={item.nativeId} />
                } else if (item.type === ContentType.YOUTUBE) {
                  if (item.link)
                    return (
                      <YouTubeEmbed url={item.link} width={325} height={220} />
                    )
                }
              })}
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
  )
}
