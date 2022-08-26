# Estudo de Clear Architecture

Proposta inicial de organização

```
├── src
│   ├── domain
│   │   ├── users
│   │   |   ├── data
│   │   |   |   ├── user.data.ts
│   │   |   ├── dto
│   │   |   |   ├── create-user.dto.ts
│   │   |   |   ├── update-user.dto.ts
│   │   |   ├── value-objects
│   │   |   |   ├── errors
│   │   |   |   |   ├── email.error.ts
│   │   |   |   |   ├── password.error.ts
│   │   |   |   ├── email.vo.ts
│   │   |   |   ├── password.vo.ts
│   │   |   ├── user.entity.ts
│   ├── usecases
│   │   |   ├── create-user
│   │   |   |   ├── repositories
│   │   |   |   |   ├── user.repository-interface.ts
│   │   |   |   ├── create-user.usecase.ts
│   │   |   ├── update-user
│   │   |   |   ├── repositories
│   │   |   |   |   ├── user.repository-interface.ts
│   │   |   |   ├── update-user.usercase.ts
│   ├── adapters
│   │   ├── database
│   │   |   ├── repositories
│   │   |   |   ├── connection.repository-interface.ts
│   │   |   |   ├── connection.repository.ts
│   │   |   |   ├── user.repository-db.ts
│   │   |   ├── conection.database-interface.ts
│   │   |   ├── postgres.adapter-database.ts
│   │   |   ├── oracle.adapter-database.ts
│   │   ├── cache
│   │   |   ├── repositories
│   │   |   |   ├── connection.repository-interface.ts
│   │   |   |   ├── connection.repository.ts
│   │   |   |   ├── user.repository-cache.ts
│   │   |   ├── conection.cache-interface.ts
│   │   |   ├── redis.adapter-cache.ts
│   │   ├── http
│   │   |   ├── controllers
│   │   |   |   ├── users
│   │   |   |   |   ├── create-user.controller.ts
│   │   |   |   |   ├── update-user.controller.ts
│   │   ├── commands
│   │   |   ├── users
│   │   |   |   ├── create-user.ci.ts
│   │   |   |   ├── update-user.ci.ts
│   ├── shared
│   │   ├── ...
```