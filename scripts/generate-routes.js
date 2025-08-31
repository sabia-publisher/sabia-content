import { resolve } from 'path'
import { readdir } from 'fs/promises'

async function generateRoutes() {
  const contentDir = resolve('./content')
  const routes = ['/']
  
  try {
    const isbns = await readdir(contentDir)
    
    for (const isbn of isbns) {
      if (isbn.match(/^\d+$/)) {
        const isbnDir = resolve(contentDir, isbn)
        const files = await readdir(isbnDir)
        
        for (const file of files) {
          if (file.endsWith('.md')) {
            const slug = file.replace('.md', '')
            routes.push(`/${isbn}/${slug}`)
          }
        }
      }
    }
  } catch (error) {
    console.warn('Route generation error:', error)
  }
  
  return routes
}

export { generateRoutes }