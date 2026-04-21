---
name: docker-check
description: Build and run the Docker container locally to verify the portfolio before deploying
disable-model-invocation: true
---

```bash
docker rm -f portfolio-test 2>/dev/null; \
docker build -t portfolio-test /Users/ves00271/Documents/pavas/portfolio && \
docker run -d -p 8080:80 --name portfolio-test portfolio-test && \
echo "Running at http://localhost:8080" && \
echo "Stop with: docker rm -f portfolio-test"
```
