import React from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/Azajul-Karim")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);
  return (
    <div>
      <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl flex flex-col item-center justify-center ">
        Github Followers : {data.followers}
        <img src={data.avatar_url} alt="Github Picture" width={300} />
      </div>
    </div>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/Azajul-Karim");
  return response.json();
};
