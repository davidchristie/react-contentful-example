export default function getGuides (content) {
  return content.items.filter(item => {
    return item.sys.contentType.sys.id === 'guide'
  })
}
