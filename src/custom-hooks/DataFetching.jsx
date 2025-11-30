import useFetch from "./useFetch";

export default function Data() {
  const { data, loading, error} = useFetch("https://jsonplaceholder.typicode.com/posts");
  if (error) return <p>Error: {error}</p>;
  if (loading) return <p>Loading...</p>;
  

  return (
    <ul>
      {/* <li key={data.id}>{data.title}</li> */}
      {data.map((item)=>(
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}