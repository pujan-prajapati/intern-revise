import React, { useState } from "react";
import { useFormik } from "formik";
import { Button, Form, Input } from "antd";
import { FaPlane, FaTrash } from "react-icons/fa6";
import * as Yup from "yup";
import { uploader } from "../../../service/axios.service";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const BannerForm = () => {
  const banner_data = {
    title: "",
    description: "",
    image: "",
  };

  const navigate = useNavigate();

  const [data, setData] = useState(banner_data);

  const banner_schema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
  });

  const formik = useFormik({
    initialValues: data,
    validationSchema: banner_schema,
    onSubmit: async (values) => {
      try {
        const response = await uploader(
          "/banner",
          "post",
          values,
          "image",
          values["image"],
          false
        );
        if (response.success) {
          toast.success(response.message);
          navigate("/admin/banner");
        }
      } catch (e) {
        console.error("Exception : ", e);
        toast.error();
      }
    },
  });

  return (
    <>
      <Form
        labelAlign="left"
        labelCol={{
          xs: { span: 24 },
          sm: { span: 8 },
          md: { span: 6 },
        }}
        onFinish={formik.handleSubmit}
        onReset={formik.handleReset}
      >
        {/* title */}
        <Form.Item label="Title" htmlFor="title">
          <Input
            id="title"
            size="large"
            onChange={formik.handleChange}
            values={formik.values.title}
            name="title"
            placeholder="Enter Title..."
          />
          {formik.errors.title && formik.touched.title ? (
            <i className="text-xm text-red-500">{formik.errors.title}</i>
          ) : null}
        </Form.Item>

        {/* description */}
        <Form.Item label="Description" htmlFor="description">
          <Input.TextArea
            rows={4}
            size="large"
            id="description"
            name="description"
            placeholder="Enter Description..."
            onChange={formik.handleChange}
            value={formik.values.description}
          />
          {formik.errors.description && formik.touched.description ? (
            <i className="text-xm text-red-500">{formik.errors.description}</i>
          ) : null}
        </Form.Item>

        {/* image */}
        <Form.Item label="Image" htmlFor="image">
          <Input
            id="image"
            type="file"
            name="image[]"
            multiple
            size="large"
            onChange={(e) => {
              formik.values.image = e.currentTarget.files[0];
            }}
          />
        </Form.Item>

        {/* submit and reset buttons */}
        <div className="space-x-3">
          <Button
            icon={<FaTrash />}
            className="bg-red-500 text-white hover:!text-white hover:!border-red-500 hover:!bg-red-400"
            htmlType="reset"
          >
            Reset
          </Button>
          <Button icon={<FaPlane />} type="primary" htmlType="submit">
            Submit
          </Button>
        </div>
      </Form>
    </>
  );
};

export default BannerForm;
