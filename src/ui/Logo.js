import React from 'react'
import styled from 'styled-components'

import { ReactComponent as Image }  from 'img/logo.svg'

const Lg = styled(Image)`
width: 60px;
height: 60px;
`

const Logo = () => {
  return (
    <Lg />
  )
}

export default Logo