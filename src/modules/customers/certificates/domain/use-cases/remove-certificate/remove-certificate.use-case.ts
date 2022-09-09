import { IUseCase } from '@/core/domain/use-case.core';
import { IRemoveCertificateRepository } from '@certificates/domain/use-cases/remove-certificate/remove-certificate.repository';

export class RemoveCertificateUseCase implements IUseCase<string, boolean> {
  constructor(private readonly repository: IRemoveCertificateRepository) {}

  async execute(id: string): Promise<boolean> {
    const certificate = await this.repository.findById(id);
    this.repository.fill(certificate);
    return await this.repository.delete();
  }
}
