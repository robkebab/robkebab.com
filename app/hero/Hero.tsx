import { Heading } from "../heading/Header";
import { defaults } from "./defaults";

export const Hero = () => {
  return (
    <div>
      <Heading text={defaults.title} variant="h1" />
    </div>
  );
};
