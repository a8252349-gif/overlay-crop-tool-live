import { GET as getRssFeed } from "@/app/rss.xml/route";

export const dynamic = "force-static";

export function GET() {
  return getRssFeed();
}
