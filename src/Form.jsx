import * as React from "react";
import { Formik } from "formik";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { createBlog } from "./graphql/mutations";

export const CreateBlogForm = () => {
  return (
    <Mutation mutation={gql(createBlog)}>
      {" "}
      {createBlog => (
        <Formik
          initialValues={{
            name: "",
            likes: 0
          }}
          onSubmit={async ({ name, likes }) => {
            const response = await createBlog({
              variable: {
                input: {
                  name,
                  likes
                }
              }
            });
            console.log(response);
          }}
        >
          {({ values, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <TextField
                name="name"
                label="Name"
                value={values.name}
                onChange={handleChange}
                margin="normal"
              />
              <br />
              <TextField
                name="likes"
                label="Likes"
                value={values.likes}
                onChange={handleChange}
                margin="normal"
              />
              <br />
              <Button type="submit" color="secondary">
                Submit
              </Button>
            </form>
          )}
        </Formik>
      )}
    </Mutation>
  );
};
