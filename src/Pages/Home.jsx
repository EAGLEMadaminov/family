import { useSelector } from "react-redux";
import { categories } from "../utils/Data";
import Restaurant from "../components/RestaurantComponent";
const Home = () => {
  const lang = useSelector((store) => store.main.lang);

  console.log(lang);
  return (
    <div className="mt-[200px] translate-y-[-100px]">
      <h2 className="text-3xl font-semibold text-center mt-5">Restaurants</h2>
      <div className="px-5  mt-5 flex gap-10 flex-wrap justify-between">
        {categories.map((item) => {
          return <Restaurant key={item.id} data={item} />;
        })}
      </div>
    </div>
  );
};

export default Home;
