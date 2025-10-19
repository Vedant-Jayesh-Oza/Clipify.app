import { inngest } from "./client";
import { env } from "~/env";

export const processVideo = inngest.createFunction(
  { id: "process-video" },
  { event: "process-video-events" },
  async ({ event, step }) => {
    await step.run("call-modal-endpoint", async () => {
      await fetch(env.PROCESS_VIDEO_ENDPOINT, {
        method: "POST",
        body: JSON.stringify({ s3_key: "test1/prakharxsadhguru5mins.mp4" }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${env.PROCESS_VIDEO_ENDPOINT_AUTH}`,
        },
      });
    });
  },
);