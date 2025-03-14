# GitOpsLite Helm Chart

This Helm chart deploys the GitOpsLite application, which consists of a frontend and a backend service. Each service has its own Ingress resource and host, allowing for clear separation of requests.

## Prerequisites

- Kubernetes cluster
- Helm 3.x
- Minikube (for local development)

## Installation

1. **Install the Helm chart:**
   ```sh
   helm install gitopslite-chart .
   ```

2. **Port forward the Ingress controller:**
   ```sh
   kubectl port-forward --namespace ingress-nginx svc/ingress-nginx-controller 8080:80
   ```

3. **Update your /etc/hosts file:**
   On Windows, this file is located at 
   `C:\Windows\System32\drivers\etc\hosts.`
   ```
   127.0.0.1 frontend.gitopslite.com
   127.0.0.1 backend.gitopslite.com
   ```
## Explanation

### Frontend

- **Ingress:** The frontend has its own Ingress resource with the host `frontend.gitopslite.com`.
- **Environment Variable:** The `REACT_APP_BACKEND_URL` environment variable is set to 
`http://backend.gitopslite.com:8080` to allow the frontend to communicate with the backend.

### Backend

- **Ingress:** The backend has its own Ingress resource with the host `backend.gitopslite.com`.
- **CORS Configuration:** The backend server is configured to allow requests from the frontend's origin 
(`http://frontend.gitopslite.com:8080`) using the `FRONTEND_URL` environment variable.

### Deployment

- **Port Forwarding:** Port forwarding is set up for the Ingress controller to make the services accessible from your local machine.
- **Hosts File:** The `/etc/hosts` file is updated to map the custom domains to `127.0.0.1`.

## Accessing the Application

### Frontend Application:

Open your browser and navigate to:

```sh
http://frontend.gitopslite.com:8080
```
### Backend Application:

Open your browser and navigate to:

```sh
http://backend.gitopslite.com:8080/courses
```
## Troubleshooting

- **CORS Issues:** Ensure that the `FRONTEND_URL` environment variable is correctly set in the backend deployment.
- **Connection Refused:** Verify that the Ingress controller is correctly port-forwarded and that the `/etc/hosts` file is correctly configured.

## Cleanup

To uninstall the Helm chart:

```sh
helm uninstall gitopslite-chart
```