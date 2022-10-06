export default function (objectContent, references) {
    if (references.length === 0 || !objectContent)
        return objectContent

    const contentString = JSON.stringify(objectContent)

    const contentParsed = references.reduce((content, reference) => {
        if (!content) return content

        if (content.includes(reference.cit)) {
            const regex = new RegExp(reference.cit, 'g');
            const newContent = content.replace(
                regex,
                `[${reference.cit}]{.cit data-ref='${reference.cit}'}`
            )
            return newContent
        }
        return content
    }, contentString)

    return JSON.parse(contentParsed)
}
