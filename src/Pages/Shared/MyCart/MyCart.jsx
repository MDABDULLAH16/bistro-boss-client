import React from "react";
import useCart from "../../../hooks/useCart/useCart";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaTrashAlt } from "react-icons/fa";

const MyCart = () => {
  const [cart] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
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
                      <button className="btn btn-ghost btn-lg bg-red-400 text-white ">
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
