import { styled } from '@mui/material'
import React, { ReactNode } from 'react'

interface StyleButtonProps {
  children: ReactNode
  onclick: () => void 
}

const StyledButton: React.FC<StyleButtonProps> = ({children, onclick}) => {
    const StyledButton = styled('button')(({theme}) => ({
        backgroundColor:'transparent',
        border: `1px solid ${theme.palette.primary.contrastText}`,
        borderRadius: '3px',
        padding: '5px 10px',
        width: '100%',
        color: theme.palette.primary.contrastText,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        '&:hover':{
            backgroundColor: theme.palette.secondary.light
        }
    }))
  return (
    <>
      <StyledButton onClick={onclick}>
        {children}
      </StyledButton>
    </>
  )
}

export default StyledButton