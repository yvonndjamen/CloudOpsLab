# Cloud Ops Lab  

A full-stack cloud-native application demonstrating best practices in:  
✅ **Containerization** (Docker, multi-stage build for frontend & backend)  
✅ **Orchestration** (Kubernetes YAML, Helm Charts, ArgoCD for GitOps)  
✅ **Cloud Infrastructure** (Azure, Pulumi for infrastructure as code)  
✅ **CI/CD & GitOps** (Automated pipelines with ArgoCD, Azure DevOps, or GitHub Actions)  

---

## Tech Stack  

- **Frontend:** React
- **Backend:** Node.js/Express
- **Ingress:** Traefik/Nginx

---

## Project Structure  

📁 `frontend/` → React with a Dockerfile  
📁 `backend/` → Node.js with a Dockerfile
📁 `k8s/` → Kubernetes manifests (YAML for Deployment, Service, Ingress, Secrets)  
📁 `helm/` → Helm chart for simplified deployment