const $ = sel => document.querySelector( sel )
const editHTML = $( '.editor .html' )
const editCSS = $( '.editor .css' )
const editors = [ editHTML, editCSS ]
const style = $( 'style.editable' )
const viewport = $( '.viewport' )

const initHTML = '<div id="test">hello world</div>'
const initCSS = `#test {
  background: red;
  padding: 10px;
  color: white;
  font-family: inherit;
}`

const contentify = function ( target, content ) { target.innerHTML = content }

const handleEditorInput = e => {
  switch ( true ) {
    case e.target.classList.contains( 'html' ): {
      contentify( viewport, e.target.value )
      break
    }
    case e.target.classList.contains( 'css' ): {
      contentify( style, e.target.value )
      break
    }
  }
  /* const domified = new DOMParser().parseFromString( content, 'text/html' ) */
}

editors.forEach( editor => editor.addEventListener( 'input', handleEditorInput ) )

const init = () => {
  editHTML.focus()
  editHTML.value = initHTML
  contentify( viewport, initHTML )
  editCSS.value = initCSS
  contentify( style, initCSS )
}

document.addEventListener( 'DOMContentLoaded', init )
