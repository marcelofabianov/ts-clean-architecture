# Clean Architecture

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
│   │   |   ├── author.vo.ts
│   │   |   ├── created-at.vo.ts
│   │   |   ├── deleted-at.vo.ts
│   │   |   ├── id.vo.ts
│   │   |   ├── updated-at.vo.ts
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
├── test
│   ├── integration
│   ├── unit
│   ├── features
```

Fonts
- [Flexible Error Handling w/ the Result Class | Enterprise Node.js + TypeScript](https://khalilstemmler.com/articles/enterprise-typescript-nodejs/handling-errors-result-class/)
- [Functional Error Handling with Express.js and DDD | Enterprise Node.js + TypeScript](https://khalilstemmler.com/articles/enterprise-typescript-nodejs/functional-error-handling/)
- [Better Software Design with Application Layer Use Cases | Enterprise Node.js + TypeScript](https://khalilstemmler.com/articles/enterprise-typescript-nodejs/application-layer-use-cases/)
- [Expressive error handling in TypeScript and benefits for domain-driven design](https://medium.com/inato/expressive-error-handling-in-typescript-and-benefits-for-domain-driven-design-70726e061c86)
- [Youtube Canal Rodrigo Branas](https://www.youtube.com/c/RodrigoBranas)
- [Youtube Canal Otavio Lemos](https://www.youtube.com/user/OtavioALLemos)