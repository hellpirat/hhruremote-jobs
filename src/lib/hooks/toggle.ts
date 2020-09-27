import React from 'react'

/**
 * Usage: const [toggle, toggleActions] = useToggle()
 * toggleActions.handleToggle()
 * toggleActions.handleOpen()
 * toggleActions.handleClose()
 */
export const useToggle = () => {
  const [flag, setFlag] = React.useState(false)

  const toggle = React.useCallback(() => setFlag((prev) => !prev), [])

  const close = React.useCallback(() => setFlag(false), [])

  const open = React.useCallback(() => setFlag(true), [])

  return [flag, { handleToggle: toggle, handleOpen: open, handleClose: close }] as const
}
