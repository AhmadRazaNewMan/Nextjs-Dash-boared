import { createClient } from "next-sanity";
const projectId = 'y7l6mdbj' ;
const dataset = 'production';
const apiVersion="2022-03-07";
export const sanityClient = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
})