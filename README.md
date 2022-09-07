# Estudo de Clear Architecture

Proposta inicial de organização

```
├── main.ts
├── src
│   ├── shared
│   │   ├── adapters
│   │   |   ├── database
│   │   |   |   ├── database.adapter-interface.ts
│   │   |   |   ├── postgres.adapter.ts
│   │   |   ├── http
│   │   |   |   ├── http-server.adapter-interface.ts
│   │   |   |   ├── express.adapter.ts
│   │   ├── value-objects
│   │   |   ├── created-at.vo.ts
│   │   |   ├── updated-at.vo.ts
│   │   |   ├── id-at.vo.ts
│   ├── users
│   │   ├── adapters
│   │   |   ├── http
│   │   |   |   ├── controllers
│   │   |   |   |   ├── users.controller.ts
│   │   |   |   ├── routes
│   │   |   |   |   ├── users.routes.ts
│   │   |   ├── repositories
│   │   |   |   ├── user.repository.ts
│   │   ├── domain
│   │   |   ├── entities
│   │   |   |   ├── value-objects
│   │   |   |   |   ├── email.vo.ts
│   │   |   |   |   ├── password.vo.ts
│   │   |   |   ├── user.entity.ts
│   │   |   ├── use-cases
│   │   |   |   ├── create-user
│   │   |   |   |   ├── ports
│   │   |   |   |   |   ├── user.repository-interface.ts
│   │   |   |   |   ├── create-user.dto-input.ts
│   │   |   |   |   ├── create-user.dto-output.ts
│   │   |   |   |   ├── create-user.use-case.ts
│   │   |   |   |   ├── create-user.use-case-interface.ts
```