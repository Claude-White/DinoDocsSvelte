import type { PageLoad } from './$types';

export const load = (async ({params}) => {
    return {
        documentId: params.docid
    };
}) satisfies PageLoad;