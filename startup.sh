# /bin/bash

DOCKER_IMAGES="cftable:1.0.1"
docker run -it -p 9000:9000 --mount "type=bind,source=$(pwd)/,target=/app" $DOCKER_IMAGES