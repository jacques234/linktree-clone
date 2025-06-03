import {signOutAction } from '@/actions/authActions'
import React from 'react'

export const AuthOptions = () => {
  return (
     <>
     <form action={signOutAction}>
        <button type="submit">Sign out</button>
     </form>
     </>
  )
}
