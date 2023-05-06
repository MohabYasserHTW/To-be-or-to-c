import React from 'react'

function MainHeader(props) {
  console.log(props)
  return (
    <header className='main-header'>
      {props.children}
    </header>
  )
}

export default MainHeader