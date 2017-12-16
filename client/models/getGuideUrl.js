import getGuideTitle from './getGuideTitle'

export default function getGuideUrl (guide) {
  return '/' + getGuideTitle(guide)
    .toLowerCase()
    .replace(' ', '-')
}
