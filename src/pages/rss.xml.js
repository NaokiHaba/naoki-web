import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET() {
    return rss({
        title: 'naoki.dev',
        description: 'naoki.dev RSS feed',
        site: 'https://naoki-web.vercel.app/',
        items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
        customData: `<language>ja-jp</language>`,
    });
}