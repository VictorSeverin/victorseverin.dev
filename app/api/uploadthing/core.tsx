import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f({ image: { maxFileSize: "4MB", maxFileCount:20 },video: { maxFileSize: "32MB", maxFileCount:10 }})
    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      console.log("Upload complete");
      console.log("file url", file.url);
      console.log(metadata)
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;