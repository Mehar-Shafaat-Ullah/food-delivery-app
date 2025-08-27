FROM public.ecr.aws/lambda/nodejs:18

WORKDIR /app

# Copy dependencies and install
COPY package*.json ./
RUN npm install

# Copy rest of the code
COPY . .

# Build Next.js app
RUN npm run build

# Start Lambda handler
CMD ["server.handler"]
