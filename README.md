# Food Delivery App — React + AWS (ECR, ECS, Lambda, CodePipeline)

A minimal React app created with `npx create-react-app@latest` (TypeScript).  

- **Path A :** ECS Fargate behind an **Application Load Balancer (ALB)**  
- **Path B :** **AWS Lambda (container image)** with **Function URL** and **API Gateway**

CI/CD is handled by **AWS CodePipeline + CodeBuild**, images are stored in **Amazon ECR**.

---

## ✨ Features
- React (CRA) with TypeScript
- Simple UI tweak in `page.tsx`
- Dockerized and pushed to **Amazon ECR**
- Automated build & deploy via **CodePipeline/CodeBuild**
- **Lambda container** deployment with both **Function URL** and **API Gateway** integration
- Previous ECS Fargate deployment with **ALB** (no API Gateway for ECS)

---

## 🧰 Tech Stack
- **Frontend:** React, TypeScript, CRA
- **Containerization:** Docker
- **Registry:** Amazon ECR & Docker hub
- **Deployments:** ECS (Fargate + ALB), Lambda (container) and did through Blue Green (which did in AWS)
- **CI/CD:** AWS CodePipeline + CodeBuild
- **Routing for Lambda:** API Gateway + Function URL
- **Logs/Monitoring:** CloudWatch

---

## ▶️ Local Development
```bash
# install
npm install

# run
npm start
# http://localhost:3000
