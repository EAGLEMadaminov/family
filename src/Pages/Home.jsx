import { useSelector } from "react-redux";
import { categories } from "../utils/Data";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const lang = useSelector((store) => store.main.lang);
  const naviagte = useNavigate();
  console.log(lang);
  return (
    <div>
      <h2 className="text-3xl font-semibold text-center mt-5">Restaurants</h2>
      {categories.map((item) => {
        return (
          <div
            key={item.id}
            className="px-5 rounded-xl my-5 cursor-pointer"
            onClick={() => naviagte(`/category/${item.id}`)}
          >
            <div className="relative rounded-3xl">
              <img
                src={item.image}
                className="rounded-2xl w-[100%] h-[150px] object-cover"
                alt="restaurant  product image"
              />
            </div>
            <h2 className="text-xl font-bold">{item.name}</h2>
            <ul className="flex">
              {item.options.map((sub) => {
                return (
                  <li
                    key={item.id}
                    className={`text-[#222] capitalize ${
                      sub.id !== 1 ? "list-disc mx-3" : "mr-3"
                    } `}
                  >
                    {sub.name}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
