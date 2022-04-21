FROM node:16.14.2

ENV USER_NAME=myuser
ENV TZ=Asia/Tokyo

WORKDIR /myapp

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

RUN adduser ${USER_NAME} && \
  chown -R ${USER_NAME} /myapp
USER ${USER_NAME}

EXPOSE 3000
CMD ["npm", "run", "dev"]


