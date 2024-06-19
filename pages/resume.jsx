import React from "react";
import Head from "next/head";
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

const resume = () => {
  return (
    <>
      <Head>
        <title>Clint | Resume</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div style={{ padding: "20px" }}>
          <h1>My Resume</h1>
          <div style={{ marginBottom: "20px" }}>
            <a href="/resume.pdf" download="resume.pdf">
              <button>Download Resume</button>
            </a>
          </div>
          <div style={{ height: "600px" }}>
            <Worker
              workerUrl={`https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js`}
            >
              <Viewer fileUrl="/resume.pdf" />
            </Worker>
          </div>
        </div>
      </div>
    </>
  );
};

export default resume;
