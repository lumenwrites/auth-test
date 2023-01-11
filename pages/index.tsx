import type { User } from '@supabase/supabase-js'
import { createContext, useState, useEffect, useContext } from 'react'
import { useSessionContext, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useUser } from '@supabase/auth-helpers-react'

export default function Home() {
  const supabaseClient = useSupabaseClient()
  const { isLoading, session, error } = useSessionContext()
  const helpersUser = useUser()

  async function login() {
    const { error } = await supabaseClient.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: window.location.href },
    })
  }
  return (
    <div>
      {helpersUser ? <div>Logged in as {helpersUser.email}</div> : <div>Not logged in.</div>}
      <button onClick={login}>Login</button>
    </div>
  )
}
