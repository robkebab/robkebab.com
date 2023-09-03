import Image from "next/image";

interface IProps {
  readonly alt: string;
  readonly className?: string
  readonly height: number;
  readonly src: string;
  readonly width: number;
}

export const Avatar = ({ alt, className = '', height, src, width }: IProps) => {
  return (
    <div className={className}>
      <Image
        alt={alt}
        height={height}
        src={src}
        style={{ borderRadius: "100%" }}
        width={width}
      />
    </div>
  );
};
