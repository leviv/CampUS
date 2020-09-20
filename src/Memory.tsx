import React from "react";
import { Formik, Field, Form } from "formik";

interface Props {
  memory: any;
}

const Memory = (props: Props) => {
  return (
    <div id="form" className="card">
      <h1>Add a Memory</h1>
      <Formik
        initialValues={{
          title: "",
          description: "",
          image: "",
          name: "Anonymous",
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <label htmlFor="title">Title</label>
          <Field id="title" name="title" placeholder="Title" />

          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            placeholder="At this place I..."
          />

          <label htmlFor="image">Image url</label>
          <Field
            id="image"
            name="image"
            placeholder="https://i.imgur.com/UsQiKLd.jpeg"
          />

          <label htmlFor="name">Name</label>
          <Field id="name" name="name" placeholder="Anonymous" />

          <button type="submit" className="button">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Memory;
