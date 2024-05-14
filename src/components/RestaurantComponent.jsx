import { useNavigate } from "react-router-dom";

const Restaurant = ({ data, styles, textStyle }) => {
  const naviagte = useNavigate();
  return (
    <div
      key={data.id}
      className={`rounded-xl mb-5 cursor-pointer `}
      onClick={() => naviagte(`/category/${data.id}`)}
    >
      <div className="relative rounded-3xl">
        <img
          src={data.image}
          className={`rounded-2xl w-[100%] ${styles} h-[170px] sm:h-[280px] object-cover`}
          alt="restaurant  product image"
        />
      </div>
      <div className={`${textStyle} mt-3`}>
        <h2 className="text-xl font-bold">{data.name}</h2>
        <ul className="flex">
          {data.options.map((sub) => {
            return (
              <li
                key={sub.id}
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
    </div>
  );
};

export default Restaurant;
