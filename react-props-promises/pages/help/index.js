import React from "react";
import Title from "../../components/Title";
import Button from "../../components/Button";

export default function index() {
  return (
    <Button
      variant="primary"
      text="Sign Up"
      isLoading={true}
      onClick={() => {
        console.log("run");
      }}
    />
  );
}
