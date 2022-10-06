export default defineNitroPlugin(async (nitroApp) => {
    nitroApp.hooks.hook('content:file:beforeParse', async (file) => {
        try {
            if (file._id.endsWith('.md')) {

                const isbn = file._id.split(':')?.find(item => item.startsWith('978'))
                if (isbn) {
                    const { references } = await import(`../../content/books/${isbn}/.references.js`)

                    if (references?.length) {
                        file.body = references.reduce((content, reference) => {
                            if (!content) return content

                            if (content.includes(reference.cit)) {
                                const regex = new RegExp(reference.cit, 'g');
                                const newContent = content.replace(
                                    regex,
                                    `[${reference.cit}]{.reference}`
                                )
                                return newContent
                            }
                            return content
                        }, file.body)
                    }
                }
            }
        } catch (err) {
            console.log({ err })
        }
    })
})
