import { getChartData } from '../api';
import { publicProcedure, router } from './trpc';

export const appRouter = router({
    getChartData: publicProcedure.query(() => getChartData()),
});

export type AppRouter = typeof appRouter;
