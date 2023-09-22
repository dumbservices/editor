const $ = sel => document.querySelector( sel )
const editor = $( '.editor textarea' )
const viewport = $( '.viewport' )

const initEditorCode = '<div style="background:red;padding:10px;color: white;font-family:sans-serif">hello world</div>'

const contentify = function ( target, content ) { target.innerHTML = content }

const handleEditorInput = e => {
  contentify( viewport, e.target.value )
  /* const domified = new DOMParser().parseFromString( content, 'text/html' ) */
}

editor.addEventListener( 'input', handleEditorInput )

const init = () => {
  editor.focus()
  editor.value = initEditorCode
  contentify( viewport, initEditorCode )
}

document.addEventListener( 'DOMContentLoaded', init )
