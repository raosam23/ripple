import React from 'react'
import Post from './Post'

const BookmarksPage = () => {
  return (
    <div className="w-full max-w-3xl mx-auto px-3 sm:px-6 py-6">
      <h1 className="text-2xl font-bold mb-6">My Bookmarks</h1>
      <div className="space-y-4">
        {[1, 2, 3, 4, 5].map((num: number) => (
          <Post key={num} />
        ))}
      </div>
    </div>
  )
}

export default BookmarksPage