import { IUseCase } from '@/core/domain/use-case.core';
import { IRemoveCertificateRepository } from '@certificates/domain/use-cases/remove-certificate/remove-certificate.repository';

export class RemoveCertificateUseCase implements IUseCase<string, boolean> {
  constructor(private readonly repository: IRemoveCertificateRepository) {}

  execute(id: string): Promise<boolean> {
    return this.repository.delete(id);
  }
}
