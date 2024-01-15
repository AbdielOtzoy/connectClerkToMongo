import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes: [
        '/',
        '/events/:id',
        '/api/webhook/clerk',
        '/api/webhook/stripe',
        '/api/webhooks/clerk',
        '/api/webhooks/stripe',
        '/api/uploadthing'
    ],
    ignoredRoutes: [
        '/api/webhook/stripe',
        '/api/webhook/clerk',
        '/api/webhooks/clerk',
        '/api/uploadthing',

    ]
});

export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
