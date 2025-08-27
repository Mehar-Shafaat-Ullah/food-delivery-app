FROM public.ecr.aws/lambda/nodejs:18

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

CMD ["server.handler"]
