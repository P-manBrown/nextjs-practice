FROM node:18.15.0

ARG PROJECT_NAME
ARG USER_NAME
ENV TZ=Asia/Tokyo

RUN corepack enable npm

USER ${USER_NAME}

WORKDIR /home/${USER_NAME}/${PROJECT_NAME}

EXPOSE 3000 6006

CMD ["bash", "-c", "node ./node_modules/.bin/next dev"]
