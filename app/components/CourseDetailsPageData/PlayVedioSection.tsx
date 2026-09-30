import Image from "next/image";

interface PlayVideoSectionProps {
  videoImg: string;
  playIcon: string;
  title: string;
}

const PlayVideoSection = ({
  videoImg,
  playIcon,
  title,
}: PlayVideoSectionProps) => {
  return (
    <div className="relative w-fit">
      <Image
        src={videoImg}
        alt={title}
        width={720}
        height={479}
        className="rounded-3xl"
      />

      <Image
        src={playIcon}
        alt="play video"
        width={104}
        height={104}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
};

export default PlayVideoSection;
