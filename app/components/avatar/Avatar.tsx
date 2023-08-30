import Image from "next/image";

interface IProps {
  readonly alt: string;
  readonly height: number;
  readonly src: string;
  readonly width: number;
}

export const Avatar = ({ alt, height, src, width }: IProps) => {
  return (
    <Image
      alt={alt}
      height={height}
      src={src}
      style={{borderRadius: "100%"}}
      width={width}
    />
  );
};
