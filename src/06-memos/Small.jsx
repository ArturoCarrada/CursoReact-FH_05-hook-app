import React from 'react'

export const Small = React.memo( ({value}) => {

    console.log('Redibujado')

  return (
    <small>{value}</small>
  )
})
