import { useDispatch } from "react-redux";
import { manageConnect } from "../../../redux/slices/head";
import Delivery from "../../../assets/delivery.avif";
const Connect = () => {
  const dispatch = useDispatch();
  return (
    <div className="absolute left-0 z-[100] right-0 bottom-0 top-0 bg-white h-[100vh]">
      <div className="bg-[#671ABF] py-5 flex text-white px-10 items-center">
        <button
          className="rounded-[50%] p-1 bg-gray-500 mr-10  "
          onClick={() => dispatch(manageConnect(false))}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-x"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
          </svg>
        </button>
        <h2 className="w-[60%] text-center text-3xl font-bold">Name</h2>
      </div>
      <div className="mt-5 text-center px-5 flex flex-col gap-3">
        <h2 className="text-xl  text-center font-semibold">Name </h2>
        <img src={Delivery} alt="" className="h-[200px]  mx-auto" />
        <h2 className="text-2xl font-semibold text-center">
          Shahardagi eng tez yetkazib berish hizmati.
        </h2>
        <p>Restoranlar va cafelar uchun onlayn service</p>

        <p>
          Biznesingizga online service hizmatlari qo’shmoqchimisiz . Unda biz
          bilan bog’laning.
        </p>
        <div className="flex px-2 justify-between">
          <a
            href="https://t.me/FLY_EAGLE_99"
            className="flex items-center text-blue-700 text-center  mx-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-telegram"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
            </svg>
            <span className="font-semibold ml-3">@FLY_EAGLE_99</span>
          </a>
          <a
            href="tell:998331007155"
            className="flex mx-auto items-center  text-blue-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-telephone"
              viewBox="0 0 16 16"
            >
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
            </svg>
            <span className="font-semibold ml-3">+99833 100 71 55</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Connect;
