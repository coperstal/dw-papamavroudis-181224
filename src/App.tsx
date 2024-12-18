import { useEffect, useState } from "react";

// POSTS Endpoint
// https://jsonplaceholder.typicode.com/posts

interface Post {
  id: string;
  title: string;
  body: string;
}

interface PostCardProps {
  post: Post;
}

function PostCard({ post }: PostCardProps) {
  return (
    <div>
      <img src="https://picsum.photos/200/300"></img>
      {/* TODO: Add an image here that will fit in 200x200 without distortion -> "https://picsum.photos/200/300" */}
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      {/* TODO: Add Post Title */}
      {/* TODO: Add Post body with 200 chars max and add ... at the end */}
    </div>
  );
}

export default function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        { method: "GET" }
      );
      if (!response.ok) {
        throw new Error(`Response Status ${response.status}`);
      } else {
        const json: Post[] = await response.json();
        setPosts(json);
      }
    };

    getData();

  }, []);

  

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  // TODO: Fetch Posts
  // TODO: Filter posts by post title based on the given query
   const filterQuery=()=>{
    const searchedPost= posts.filter((post)=>post.title==searchText)
    setPosts(searchedPost)
   }

  return (
    <div className="App">
      {/*  TODO: Implement search */}
      <input placeholder="Search" onChange={onChangeHandler} />

      
      <div style={{ display: "flex", flexDirection: "column" }}>
        {/* TODO: Render the PostCard for each post */}

        {posts.map((post) => (
          <PostCard key={post.id} post={post}></PostCard>
        ))}
      </div>
    </div>
  );
}
