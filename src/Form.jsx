import * as React from "react";
import { Formik } from "formik";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { createAuction } from "./graphql/mutations";

export const CreateAuctionForm = () => {
  return (
    <Mutation mutation={gql(createAuction)}>
      {createBlog => (
        <Formik
          initialValues={{
            name: "",
            price: 0
          }}
          onSubmit={async ({ name, price }) => {
            // call mutation
            const response = await createAuction({
              input: {
                name,
                price
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
                name="price"
                label="Price"
                value={values.price}
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
