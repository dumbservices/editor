const $ = sel => document.querySelector( sel )
const editor = $( '.editor textarea' )
const viewport = $( '.viewport' )

const handleEditorInput = e => {
  const content = e.target.value
  /* const domified = new DOMParser().parseFromString( content, 'text/html' ) */
  viewport.innerHTML = content
  console.log( { content } )
}

editor.addEventListener( 'input', handleEditorInput )

const init = () => {
  editor.focus()
}

document.addEventListener( 'DOMContentLoaded', init )
