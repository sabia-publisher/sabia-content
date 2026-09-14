import { MAIN_SITE, resolveMainSitePath } from '../utils/main-site-redirects.js'

export default defineEventHandler((event) => {
  const url = getRequestURL(event)
  const destination = `${MAIN_SITE}${resolveMainSitePath(url.pathname)}${url.search}`
  return sendRedirect(event, destination, 301)
})
