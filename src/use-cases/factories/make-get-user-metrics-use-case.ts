import { PrismaCheckInsRespository } from '@/repositories/prisma/prisma-check-ins-repository';
import { GetUserMetricsUseCase } from '../get-user-metrics';

export function makeGetUserMetricsUseCase() {
  const checkInsRepository = new PrismaCheckInsRespository();
  const useCase = new GetUserMetricsUseCase(checkInsRepository);

  return useCase;
}
