import getComponentName from './getComponentName'

export default function getComponents (content) {
  return content.items
    .filter(item => {
      return item.sys.contentType.sys.id === 'component'
    })
    .sort((a, b) => {
      return getComponentName(a).localeCompare(getComponentName(b))
    })
}
