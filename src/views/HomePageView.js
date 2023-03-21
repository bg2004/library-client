import logo from "../images/reading.jpg";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    name: "Restaurants",

    imageUrl:
"https://www.freepik.com/premium-vector/single-black-father-son-african-americans-reading-fairy-tale-from-book_36624258.htm"  
}
];

export const HomePageView = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-screen">
        <img className="w-screen h-80" src={logo} alt="happy"></img>
      </div>

     </>
  )
};
