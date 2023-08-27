import { Heading } from "../heading/Heading";
import { Subheading } from "../subheading/Subheading";
import { defaults } from "./defaults";

export const Hero = () => {
  return (
    <div>
      <Heading text={defaults.title} variant="h1" />
      <Subheading text={defaults.subTitle} />
    </div>
  );
};
