'use client'

import { supabase } from '@/lib/supabase'

export default function BookmarkList({ bookmarks }: any) {
  const deleteBookmark = async (id: string) => {
    await supabase.from('bookmarks').delete().eq('id', id)
  }

  return (
    <>
      {bookmarks.map((b: any) => (
        <div
          key={b.id}
          className="flex justify-between border p-3 mb-2 rounded"
        >
          <a href={b.url} target="_blank">
            {b.title}
          </a>
          <button
            onClick={() => deleteBookmark(b.id)}
            className="text-red-500"
          >
            Delete
          </button>
        </div>
      ))}
    </>
  )
}
