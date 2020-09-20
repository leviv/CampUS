import React from "react";
import { Formik, Field, Form } from "formik";
import { db } from "./services/firebase";
import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";

// Get a reference to the database service
const database = db.ref();
const memsRef = database.child('memories');

// uploads image if needed, adds to comm list if needed, posts memory
// latlong = string (maybe lat, long)
function addMemory(title: any, desc: any, image: any, attr: any) {
  var memKey = memsRef.push().key;
  var memData = {
    title: title,
    description: desc,
    image: image,
    attribution: attr,
  }

  var updates = {};
  updates['/memories/' + memKey] = memData;

  database.update(updates);
}

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
          attribution: "Anonymous",
        }}
        onSubmit={async (values) => {
          alert(JSON.stringify(values, null, 2));
          addMemory(values['title'], values['description'], values['image'], values['attribution'])
        }}
      >
        <Form>
          <label htmlFor="title">Title</label>
          <Field id="title" name="title" placeholder="Title" />

          <label htmlFor="description">Description</label>
          <Field
            id="description"
            name="description"
            placeholder="At this place I..."
            component="textArea"
          />

          <label htmlFor="image">Image url</label>
          <Field
            id="image"
            name="image"
            placeholder="https://i.imgur.com/UsQiKLd.jpeg"
          />

          <label htmlFor="name">Name</label>
          <Field id="attribution" name="attribution" placeholder="Anonymous" />

          <button type="submit" className="button">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Memory;
