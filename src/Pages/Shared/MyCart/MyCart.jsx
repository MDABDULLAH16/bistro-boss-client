import React from "react";
import useCart from "../../../hooks/useCart/useCart";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure/useAxiosSecure";
import Swal from "sweetalert2";

const MyCart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const axiosSecure = useAxiosSecure();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/carts/${id}`)
          .then((res) => {
            console.log(res.data);
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              refetch();
            }
          })
          .catch((error) => {
            console.log(error.message);
          });
      }
    });
  };
  return (
    <div className="   mt-0">
      <SectionTitle
        subHeading={"My-Cart"}
        heading={"WANNA ADD MORE?"}
      ></SectionTitle>
      <div className="bg-white m-16 p-12">
        <div className="flex justify-between mb-8 ">
          <p className="text-3xl font-bold">Total Order:{cart.length}</p>
          <p className="text-3xl font-bold">Total Price: {totalPrice}</p>
          <button className="btn bg-[#D1A054] text-white btn-lg">Pay</button>
        </div>
        <div>
          <div className="rounded overflow-hidden">
            <table className="table text-lg">
              {/* head */}
              <thead className="">
                <tr className="uppercase bg-[#D1A054] h-[72px] font-semibold text-white ">
                  <th>
                    <label>
                      {/* <input type="checkbox" className="checkbox" /> */}
                    </label>
                  </th>
                  <th>Item Image</th>
                  <th>Item Name</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {cart.map((item, index) => (
                  <tr key={item._id}>
                    <th>
                      <label>{index + 1}</label>
                    </th>
                    <td>
                      <div className="flex items-center gap-3 ">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={item.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        {/* <div>
                        <div className="font-bold">{item.name}</div>
                        <div className="text-sm opacity-50">United States</div>
                      </div> */}
                      </div>
                    </td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <th>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="btn btn-ghost btn-lg bg-red-400 text-white "
                      >
                        <FaTrashAlt className="text-2xl"></FaTrashAlt>{" "}
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
