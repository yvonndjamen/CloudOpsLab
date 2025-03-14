FROM node:lts-alpine

WORKDIR /frontend

COPY ./*.json ./
COPY public/ ./public/
COPY src/ ./src/

RUN npm ci \
    && npm install -g serve react-inject-env \
    && REACT_APP_BACKEND_URL= npx react-inject-env build npm run build

EXPOSE 3000

ENTRYPOINT ["sh", "-c", "REACT_APP_BACKEND_URL=$REACT_APP_BACKEND_URL npx react-inject-env inject -d ./build && serve -s build"]