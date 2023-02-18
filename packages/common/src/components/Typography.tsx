import React from "react";

const Typography = (props: { as: any; text: string }) => {
  const { as: Component = "h5", text } = props;
  return <Component>{text}</Component>;
};

export default Typography;
