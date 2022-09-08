import IUseCase from '@/core/domain/usecase';

export interface ICreateCertificateDto {
  password: string;
  expiresIn: Date;
}

export default class CreateCertificateUseCase
  implements IUseCase<ICreateCertificateDto, any>
{
  execute(request?: ICreateCertificateDto): any {
    return undefined;
  }
}
