it('runs without crashing', () => {
  const root = document.createElement('div')
  root.id = 'root'
  require('.')
})
