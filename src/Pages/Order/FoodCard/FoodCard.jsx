import React from "react";
import useAuth from "../../../hooks/useAuth/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure/useAxiosSecure";
import useCart from "../../../hooks/useCart/useCart";

const FoodCard = ({ item }) => {
  // console.log(item);

  const { name, price, recipe, image } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();
  const handleAddToCart = (food) => {
    // const { name, image, recipe } = food;
    if (user && user?.email) {
      console.log(user.email, food);
      const cartItem = {
        menuId: food._id,
        email: user?.email,
        image,
        name,
        price,
        recipe,
      };
      // console.log(cartItem);
      axiosSecure
        .post("/carts", cartItem)
        .then((res) => {
          // console.log(res.data);
          if (res.data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} is added on cart`,
              showConfirmButton: false,
              timer: 1500,
            });
            refetch();
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      Swal.fire({
        title: "Are you not Logged in?",
        text: "Please login to Add to Cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes,Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="grid md:grid-cols-3 text-center gap-3 space-y-2 space-x-2">
      <div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={image} alt="Shoes" />
          </figure>
          <p className="absolute right-0 bg-slate-800 text-white mt-4 mr-6 p-1 ">
            ${price}
          </p>
          <div className="card-body ">
            <h2 className="card-title  mx-auto">{name}</h2>
            <p>{recipe}</p>
            <div className="card-actions justify-center ">
              <button
                onClick={handleAddToCart}
                className="btn btn-outline w-2/4 bg-slate-100 border-0 border-b-2"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
