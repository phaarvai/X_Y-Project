import type { Metadata } from "next";
import { ManufacturerApp } from "@/components/manufacturer/ManufacturerApp";
import "@/app/manufacturer/manufacturer.css";

export const metadata: Metadata = {
  title: "X!Y — Manufacturer Dashboard",
};

export default function ManufacturerPage() {
  return <ManufacturerApp />;
}
