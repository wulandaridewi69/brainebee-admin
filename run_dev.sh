# run docker dev :
docker build -f Dockerfile.dev -t nextjs-dev .
docker run -d -p 3000:3000 nextjs-dev
