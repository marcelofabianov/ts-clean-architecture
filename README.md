# Clean Architecture

Proposta inicial de organização

```
├── main.ts
├── src
│   ├── shared
│   │   ├── errors
│   │   |   ├── error-handling.ts
│   │   |   ├── error-interface.ts
│   │   ├── response
│   │   |   ├── either.response.ts
│   │   ├── adapters
│   │   |   ├── database
│   │   |   |   ├── database.adapter-interface.ts
│   │   |   |   ├── postgres.adapter.ts
│   │   |   ├── http
│   │   |   |   ├── http-server.adapter-interface.ts
│   │   |   |   ├── express.adapter.ts
│   │   ├── tracker
│   │   |   ├── index.ts
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
│   │   |   |   ├── errors
│   │   |   |   |   ├── email
│   │   |   |   |   |   ├──  invalid-email-format.error.ts
│   │   |   |   |   ├── password
│   │   |   |   |   |   ├──  min-password.error.ts
│   │   |   |   ├── value-objects
│   │   |   |   |   ├── email.vo.ts
│   │   |   |   |   ├── password.vo.ts
│   │   |   |   ├── user.entity.ts
│   │   |   ├── use-cases
│   │   |   |   ├── create-user
│   │   |   |   |   ├── errors
│   │   |   |   |   |   ├── unique-email.error.ts
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

Fontes de estudo

- [Artigo: Flexible Error Handling w/ the Result Class | Enterprise Node.js + TypeScript](https://khalilstemmler.com/articles/enterprise-typescript-nodejs/handling-errors-result-class/)
- [Artigo: Functional Error Handling with Express.js and DDD | Enterprise Node.js + TypeScript](https://khalilstemmler.com/articles/enterprise-typescript-nodejs/functional-error-handling/)
- [Artigo: Better Software Design with Application Layer Use Cases | Enterprise Node.js + TypeScript](https://khalilstemmler.com/articles/enterprise-typescript-nodejs/application-layer-use-cases/)
- [Artigo: Expressive error handling in TypeScript and benefits for domain-driven design](https://medium.com/inato/expressive-error-handling-in-typescript-and-benefits-for-domain-driven-design-70726e061c86)
- [Youtube: Rodrigo Branas](https://www.youtube.com/c/RodrigoBranas)
- [Curso: Branas Turma 7](https://app.branas.io/public/products)
- [Youtube: Otavio Lemos](https://www.youtube.com/user/OtavioALLemos)
- [Artigo: Livro Arquitetura Limpa na Prática](https://hotmart.com/pt-br/marketplace/produtos/livro-arquitetura-limpa-na-pratica/O59619511K)
- [Artigo: Stop catching errors in TypeScript; Use the Either type to make your code predictable](https://antman-does-software.com/stop-catching-errors-in-typescript-use-the-either-type-to-make-your-code-predictable)
- [Artigo: Applying Google's Testing Methodology to Functional Domain-Driven Design For Scalable Testing](https://antman-does-software.com/applying-googles-testing-methodology-to-functional-domain-driven-design-for-scalable-testing)
- [Livro: Clean Code](https://www.amazon.com.br/C%C3%B3digo-limpo-Robert-C-Martin/dp/8576082675/ref=asc_df_8576082675/?tag=googleshopp00-20&linkCode=df0&hvadid=379792215563&hvpos=&hvnetw=g&hvrand=7557419235283582324&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001552&hvtargid=pla-398225630878&psc=1)
- [Livro: Clean Architecture](https://www.amazon.com.br/Arquitetura-Limpa-Artes%C3%A3o-Estrutura-Software/dp/8550804606/ref=pd_bxgy_img_sccl_1/145-8662479-5129017?pd_rd_w=FjJOK&content-id=amzn1.sym.57f5b0c5-8f2e-45a4-8595-2eb0fcbe85cd&pf_rd_p=57f5b0c5-8f2e-45a4-8595-2eb0fcbe85cd&pf_rd_r=PB1JDVXBDYGW0HYNAG2M&pd_rd_wg=WdnVR&pd_rd_r=43561bfe-5c3b-4785-adca-faedde3a8c68&pd_rd_i=8550804606&psc=1)
- [Livro: Refactoring](https://www.amazon.com.br/Refatora%C3%A7%C3%A3o-Aperfei%C3%A7oando-Design-C%C3%B3digos-Existentes/dp/8575227246/ref=d_pd_sbs_sccl_3_6/145-8662479-5129017?pd_rd_w=cysvY&content-id=amzn1.sym.9211fa30-8416-4851-b08e-894b637b015d&pf_rd_p=9211fa30-8416-4851-b08e-894b637b015d&pf_rd_r=BZA4GEBN8EFY759D9EVK&pd_rd_wg=yi0Oy&pd_rd_r=96996422-36a6-4ca3-83c9-0b1931e41eb0&pd_rd_i=8575227246&psc=1)
- [Artigo: Beginner-friendy guide to error handling in TypeScript, Node.js, Express.js API design](https://dev.to/valentinkuharic/beginner-friendy-guide-to-error-handling-in-typescript-nodejs-expressjs-api-design-432i)