FROM node:16.15.1

ENV TZ=Asia/Tokyo

WORKDIR /myapp-frontend
RUN corepack enable npm
USER node

EXPOSE 3000
CMD ["yarn", "dev"]
