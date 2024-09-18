# Nodejs & Prisma

[ref](https://github.com/tericcabrel/blog-tutorials/blob/main/docker-prisma-build)

## Requirements

* [express]()
* [prisma](https://www.prisma.io/)
* [yup]()


### Prisma


#### Run Migration
```bash
npx prisma migrate dev --name init
```


#### seed
```bash
# follow intruction in : https://www.prisma.io/docs/orm/prisma-migrate/workflows/seeding
npx prisma db seed
```