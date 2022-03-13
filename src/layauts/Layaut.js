import React from 'react'
import Menu from '../components/menu/Menu';

const Layaut = ({children, menuColor}) => {

    console.log(children)
  return (
    <>
        <Menu menuColor={menuColor} />

        {children}
    </>
  )
}

export default Layaut