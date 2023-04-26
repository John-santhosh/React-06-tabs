import { useState } from "react";
import { useEffect } from "react";
import JobInfo from "./components/JobInfo";
import BtnContainer from "./components/BtnContainer";
const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);
  const fetchData = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  function toggleCurrentItem(id) {
    setCurrentItem(id);
  }

  return (
    <main>
      <div className="container">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <BtnContainer
              toggleCurrentItem={toggleCurrentItem}
              currentItem={currentItem}
              data={data}
            ></BtnContainer>
            <JobInfo jobs={data} currentItem={currentItem} />
          </>
        )}
      </div>
    </main>
  );
};
export default App;
