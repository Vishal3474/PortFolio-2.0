import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { PAGES_DATA } from "../data/pagesData";
import PageLayout from "./PageLayout";

export default function DynamicContentPage({ directSlug }) {
  const params = useParams();
  const slug = directSlug || params.slug;
  const pageData = PAGES_DATA[slug];

  if (!pageData) {
    return <Navigate to="/explore" replace />;
  }

  return <PageLayout data={pageData} />;
}
