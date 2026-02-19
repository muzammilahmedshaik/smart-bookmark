'use client'

import { supabase } from '@/lib/supabase'

export default function Login() {
  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin
      }
    })
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <button
        onClick={handleLogin}
        className="bg-black text-white px-6 py-3 rounded">
        Sign in with Google
      </button>
    </div>
  )
}
