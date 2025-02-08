"use client";
import { IKVideo } from "imagekitio-next";

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

type VideoTypes = {
  path: string;
  className?: string;
};

const Video = ({ path, className }: VideoTypes) => {
  return (
    <IKVideo
      urlEndpoint={urlEndpoint}
      path={path}
      className={className}
      transformation={[
        { height: "1080", width: "1920", q: "90" },
        { raw: "l-text,i-XClone,fs-100,co-white,l-end" },
      ]}
      controls
    />
  );
};

export default Video;
