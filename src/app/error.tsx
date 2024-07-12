"use client";
import React from "react";
import { ERRORS } from "./errors";

function HomePageError({ error }: { error: Error }) {
  if (error.message === ERRORS.NOT_FOUND) {
    return <div>Articles not found ... </div>;
  }
  return <div>Something went wrong .. </div>;
}

export default HomePageError;
