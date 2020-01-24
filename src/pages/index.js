import React from "react"
import PrimaryLayout from "../layouts/PrimaryLayout"
import Post from "../components/Post"

export default () => (
  <PrimaryLayout column="col-xs-6">
    <Post
      title="Post title"
      excerpt="Sample excerpt, ushfgouisfhg juhsfkojbhfds jhsfdijvhdf jkhfdovjdfh "
    />
    <Post
      title="Post title 1"
      excerpt="Sample excerpt, ushfgouisfhg juhsfkojbhfds jhsfdijvhdf jkhfdovjdfh "
    />
    <Post
      title="Post title 2"
      excerpt="Sample excerpt, ushfgouisfhg juhsfkojbhfds jhsfdijvhdf jkhfdovjdfh "
    />
    <Post
      title="Post title 3"
      excerpt="Sample excerpt, ushfgouisfhg juhsfkojbhfds jhsfdijvhdf jkhfdovjdfh "
    />
  </PrimaryLayout>
)
