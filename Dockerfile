FROM node:20 as builder

RUN mkdir app

WORKDIR /app

COPY . .
COPY .env.example ./.env

RUN pwd
RUN ls 
RUN ls prisma

run echo host.docker.internal

run netstat -tlpn | grep ":3306"

RUN yarn install --frozen-lockfile

RUN npx prisma migrate dev --name migrate_from_docker

# RUN yarn prisma generate

# RUN yarn tsc


# FROM node:20 as engine-builder

# WORKDIR /app

# COPY --chown=node:node --from=builder /app/prisma/schema.prisma ./app/prisma/

# RUN npx prisma generate --schema=./app/prisma/schema.prisma


# FROM node:20-alpine AS runner

# ENV NODE_ENV=production

# WORKDIR /app

# COPY --chown=node:node --from=builder /app/package.json .

# # COPY --chown=node:node --from=builder /app/build .

# RUN yarn install --production && yarn cache clean --all

# COPY --chown=node:node --from=engine-builder  /app/node_modules/.prisma/client ./node_modules/.prisma/client

EXPOSE 4500

# CMD ["node", "./src/index.js"]
CMD ["npm", "start"]