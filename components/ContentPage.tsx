import { SiteFooter, SiteHeader } from './SiteChrome';
import { CookieBanner } from './CookieBanner';
import { copy, type Locale } from '@/lib/i18n';
export function ContentPage({locale, children}:{locale:Locale;children:React.ReactNode}){const t=copy[locale];return <><SiteHeader locale={locale} labels={t}/><main className="prosePage">{children}</main><SiteFooter locale={locale}/><CookieBanner text={t.cookieText} accept={t.accept} reject={t.reject}/></>}
