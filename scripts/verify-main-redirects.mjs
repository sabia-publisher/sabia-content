import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { bookFallbacks, chapterRedirects, MAIN_SITE } from '../server/utils/main-site-redirects.js'

const redirectsPath = resolve('public/_redirects')
const vercelConfigPath = resolve('vercel.json')
if (existsSync(redirectsPath)) throw new Error('Remove public/_redirects: Vercel does not process this file.')
if (!existsSync(vercelConfigPath)) throw new Error('Missing vercel.json')

const config = JSON.parse(readFileSync(vercelConfigPath, 'utf8'))
const expectedRules = [
  ...Object.entries(chapterRedirects).map(([source, destination]) => ({ source, destination: `${MAIN_SITE}${destination}` })),
  ...Object.entries(bookFallbacks).flatMap(([isbn, destination]) => [
    { source: `/${isbn}`, destination: `${MAIN_SITE}${destination}` },
    { source: `/${isbn}/:path*`, destination: `${MAIN_SITE}${destination}` }
  ]),
  { source: '/', destination: `${MAIN_SITE}/` },
  { source: '/:path*', destination: `${MAIN_SITE}/` }
]

const missing = expectedRules.filter(expected => !config.redirects?.some(rule =>
  rule.source === expected.source &&
  rule.destination === expected.destination &&
  rule.statusCode === 301
))
if (missing.length) throw new Error(`Missing 301 redirects: ${missing.map(({ source }) => source).join(', ')}`)

console.log(`Verified ${Object.keys(chapterRedirects).length} chapter redirects and ${Object.keys(bookFallbacks).length} book fallbacks.`)
