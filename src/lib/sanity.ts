import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";

export const client = createClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET,
    apiVersion: "2023-05-03",
    useCdn: true,
})

const builder = createImageUrlBuilder(client);

export function urlFor(source: any) {
    return builder.image(source);
}