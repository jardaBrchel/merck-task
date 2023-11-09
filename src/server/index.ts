import {getChartData, getLikes, putLikes} from '../api';
import { publicProcedure, router } from './trpc';
import z from 'zod';

export const appRouter = router({
    getChartData: publicProcedure.query(() => getChartData()),
    getLikes: publicProcedure.query(() => getLikes()),
    putLikes: publicProcedure
        .input(
            z.object({
                id: z.string(),
                value: z.boolean(),
            }),
        )
        .mutation(({ input }) => putLikes(input)),
});

export type AppRouter = typeof appRouter;
