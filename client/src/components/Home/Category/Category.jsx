import {useNavigate} from "react-router-dom";
import "./Category.scss";


const Category = ({categories}) => {
    const navigate = useNavigate();
    // if (!categories || categories.length === 0) {
    //     return <div>Loading...</div>; // You can show a loading state or a message while data is being fetched
    // }
    return(
        <div className="shop-by-category">
            <div className="categories">
                {categories?.data?.map((item) => (
                    <div key={item.id} className="category" onClick={() => navigate(`/category/${item.id}`)}>
                        <img src={process.env.REACT_APP_DEV_URL + item.attributes.img.data.attributes.
                        url} alt="cat1" />
                    </div>
                ))}
            </div>
        </div>
    ); 
};
  
export default Category;
