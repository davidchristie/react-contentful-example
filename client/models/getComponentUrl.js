import getComponentName from './getComponentName'

export default function getComponentUrl (component) {
  return '/components/' + getComponentName(component)
    .toLowerCase()
    .replace(' ', '-')
}
