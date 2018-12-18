import React from "react";
import { graphqlOperation } from "aws-amplify";
import { listBlogs } from "./graphql/queries";
import { Connect } from "aws-amplify-react";

export class Blogs extends React.PureComponent {
  render() {
    return (
      <Connect query={graphqlOperation(listBlogs)}>
        {({ data: { listBlogs: blogs } }) => {
          if (!blogs) {
            return null;
          }
          return blogs.items.map(b => <div key={b.name}>{b.name}</div>);
        }}
      </Connect>
    );
  }
}
