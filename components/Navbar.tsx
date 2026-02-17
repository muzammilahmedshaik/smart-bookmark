'use client'

import { supabase } from '@/lib/supabase'

export default function Navbar({ user }: any) {
  const logout = async () => {
    await supabase.auth.signOut()
    window.location.href = '/login'
  }

  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-xl font-bold">My Bookmarks</h1>
      <button onClick={logout} className="text-sm text-gray-600">
        Logout
      </button>
    </div>
  )
}
