import React from "react";
import { Formik, Field, Form } from "formik";
import { db } from "./services/firebase";

// Get a reference to the database service
const database = db.ref();
const memsRef = database.child("memories");

// uploads image if needed, adds to comm list if needed, posts memory
// latlong = string (maybe lat, long)
function addMemory(lat, long, title, desc, image, attr) {
  var memKey = memsRef.push().key;
  var memData = {
    lat: lat,
    long: long,
    title: title,
    description: desc,
    image: image,
    attribution: attr,
  };

  var updates = {};
  updates["/memories/" + memKey] = memData;

  database.update(updates);
}

const MemoryForm = (props) => {
  return (
    <div id="form" className="card">
      <h2>Add a Memory</h2>
      <p>Drag the blue pin to mark the memory location</p>
      <p>
        Latitude: {props.coord.lat}
        <br />
        Longitude: {props.coord.lng}
      </p>
      <Formik
        initialValues={{
          title: "",
          description: "",
          image: "",
          attribution: "",
        }}
        onSubmit={async (values) => {
          addMemory(
            props.coord.lat,
            props.coord.lng,
            values["title"],
            values["description"],
            values["image"],
            values["attribution"]
          );
        }}
      >
        <Form>
          <label htmlFor="title">Memory Name</label>
          <Field id="title" name="title" placeholder="Title" />

          <label htmlFor="description">Description</label>
          <Field
            id="description"
            name="description"
            placeholder="At this place I..."
            component="textarea"
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

export default MemoryForm;
