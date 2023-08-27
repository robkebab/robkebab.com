import { Header } from "../header/Header";
import { defaults } from "./defaults";

export const Hero = () => {
  return (
    <div>
      <Header text={defaults.title} variant="h1" />
    </div>
  );
};
