import React, { useEffect, useState } from "react";
import AdminHeader from "../AdminHeader/AdminHeader";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GetAllBanners } from "../../../service/banner.service";
import { toast } from "react-toastify";

const BannerList = () => {
  const [data, setData] = useState([]);

  const getBanners = async () => {
    try {
      let result = await GetAllBanners();
      setData(result.result);
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    document.title = "Banner List";
    getBanners();
  }, []);

  return (
    <>
      <section className="flex justify-between items-center">
        <AdminHeader title="Banner List" />
        <Link
          to={"/admin/banner/add"}
          className="p-5 bg-white rounded-full shadow-md"
        >
          <FaPlus />
        </Link>
      </section>
    </>
  );
};

export default BannerList;
