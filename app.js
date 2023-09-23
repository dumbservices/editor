const $ = sel => document.querySelector( sel )
const editHTML = $( '.editor .html' )
const editCSS = $( '.editor .css' )
const editJS = $( '.editor .javascript' )
const editors = [ editHTML, editCSS, editJS ]
const style = $( 'style.editable' )
const viewport = $( '.viewport' )

const initHTML = '<div id="test">hello world</div>'
const initCSS = `
.viewport {
  display: grid;
  place-items: center;
}

#test {
  background: red;
  padding: 10px;
  color: white;
  font-family: inherit;
}`
const initJS = 'console.log($(\'#test\').textContent, new Date().toLocaleString())'

const contentify = function ( target, content ) { target.innerHTML = content }
const scriptify = function ( content ) {
  $( 'script.editable' )?.remove()
  const script = document.createElement( 'script' )
  script.setAttribute( 'class', 'editable' )
  script.innerHTML = content
  $( 'body' ).appendChild( script )
}

const handleEditorInput = e => {
  e.preventDefault()
  switch ( true ) {
    case e.target.classList.contains( 'html' ): {
      contentify( viewport, e.target.value )
      break
    }
    case e.target.classList.contains( 'css' ): {
      contentify( style, e.target.value )
      break
    }
    case e.target.classList.contains( 'javascript' ): {
      scriptify( e.target.value )
      break
    }
  }
}

editors.forEach( editor => editor.addEventListener( 'change', handleEditorInput ) )

const init = () => {
  editHTML.focus()
  editHTML.value = initHTML
  contentify( viewport, initHTML )
  editCSS.value = initCSS
  contentify( style, initCSS )
  editJS.value = initJS
  scriptify( initJS )
}

document.addEventListener( 'DOMContentLoaded', init )
