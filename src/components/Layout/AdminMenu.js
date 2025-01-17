import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../../context/auth";

const AdminMenu = () => {
  const [auth] = useAuth();
  const [products, setProducts] = useState([]);

  //getall products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(
        "https://shopcart-backend-4f2a.onrender.com/api/v1/product/get-product"
      );
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Someething Went Wrong");
    }
  };

  //lifecycle method
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <div className="h-screen w-64  shadow-xl shadow-blue-gray-900/5 bg-gray-900 text-white">
        <div className="text-white text-center text-xl py-4 font-semibold w-full bg-gray-800 ">
          User Dashboard
        </div>
        <div className="mb-2 pt-10">
          <div className="flex items-center justify-center bg-yellow-300 text-gray-800 rounded-full w-24 h-24 mx-auto shadow-lg">
            <span className="text-3xl font-bold">
              {auth?.user?.name?.charAt(0).toUpperCase()}
            </span>
          </div>
        </div>
        <div className="text-white text-center text-xl font-semibold w-full">
          {auth?.user?.name}
        </div>
        <List>
          <ListItem>
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5" />
            </ListItemPrefix>
            <Link
              to="/dashboard/admin/products"
              className="list-group-item list-group-item-action"
            >
              My Products
            </Link>
            <ListItemSuffix>
              <Chip
                value={products.length}
                size="sm"
                variant="ghost"
                color="yellow"
                className="rounded-full text-white"
              />
            </ListItemSuffix>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
            <Link
              to="/dashboard/admin/create-category"
              className="list-group-item list-group-item-action"
            >
              Create Category
            </Link>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <ShoppingBagIcon className="h-5 w-5" />
            </ListItemPrefix>
            <Link
              to="/dashboard/admin/create-product"
              className="list-group-item list-group-item-action"
            >
              Create Product
            </Link>
          </ListItem>

          <ListItem>
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            <Link
              to="/dashboard/admin/orders"
              className="list-group-item list-group-item-action"
            >
              Placed Orders
            </Link>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5" />
            </ListItemPrefix>
            <Link to="/" className="list-group-item list-group-item-action">
              User Panel
            </Link>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </List>
      </div>
    </>
  );
};

export default AdminMenu;
