import { useQuery } from "react-query";

const fetchData = async () => {
  const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
  return resp.json();
}

const PostsComponent = () => {

  const { data, error, isLoading } = useQuery('fetchPosts', fetchData);

  if (isLoading) {
    return <div>Loading....</div>
  }

  if (error) {
    return <div>Error loading data</div>
  }
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <p>{item.body}</p>
        </div>
      ))}

    </div>
  )
}


export default PostsComponent
