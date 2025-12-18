import { Injectable } from '@nestjs/common';
import { UserQlModel } from '@root/user-ql/models/user-ql.model';
import { UserRoleQl } from '@root/generated/prisma/enums';
import { PrismaService } from '@root/prisma/prisma.service';

@Injectable()
export class UserQlService {
  private readonly users: UserQlModel[] = [
    {
      id: '1',
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: 'StrongP@ssw0rd',
      role: UserRoleQl.ADMIN,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '2',
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: 'StrongP@ssw0rd',
      role: UserRoleQl.ADMIN,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '3',
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: 'StrongP@ssw0rd',
      role: UserRoleQl.GUEST,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  constructor(private readonly prismaService: PrismaService) {}

  all(): UserQlModel[] {
    return this.users;
  }

  async findAll(): Promise<UserQlModel[]> {
    return this.prismaService.userQl.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }
}
