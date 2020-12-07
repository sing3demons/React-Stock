import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function PostList() {
    const [isLoading, setIsLoading] = useState(false)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true)
      const { id, name, desc,image, category, price } = await axios.get('/products')
      setPosts(id)
      setPosts(name)
      setPosts(desc)
      setPosts(image)
      setPosts(category)
      setPosts(price)
      setIsLoading(false)
    }

    fetchPosts()
  }, [])

  if (isLoading) return <div>Loading...</div>

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.name}</li>
      ))}
    </ul>
  )
}
