import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Entry from "~/components/Entry";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <Welcome />
      <Entry title={"Ice"} year={1992} collected={"yes"} />
    </>
  );
}
