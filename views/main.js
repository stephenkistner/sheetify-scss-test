var html = require('choo/html')

var TITLE = '🚂🚋🚋'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
    <body class="sans-serif">
      <p>Changing the background color in ./styles/_base.scss should be reflected on the dev server, but instead you have to change/re-save ./styles/main.scss for it to take effect</p>
    </body>
  `

  function handleClick () {
    emit('clicks:add', 1)
  }
}
