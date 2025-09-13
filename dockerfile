FROM public.ecr.aws/lambda/nodejs:18

WORKDIR /var/task

# Copy dependencies and install
COPY package*.json ./
RUN npm install
#so we can 
# Copy rest of the code
COPY . .
# testing
# Build Next.js app
RUN npm run build

# Start Lambda handler
CMD ["server.handler"]
