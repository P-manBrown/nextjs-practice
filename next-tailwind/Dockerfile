FROM node:16.15.0

ENV TZ=Asia/Tokyo

WORKDIR /myapp
RUN corepack enable npm
USER node

EXPOSE 3000
CMD ["yarn", "dev"]
