#!/bin/bash
# This script is used to cleanup orphaned Docker images. These images are
# naturally created when developing. They need to be deleted to clear up
# disk space.

# Remove all untagged docker images.
docker rmi $(docker images | grep "^<none>" | awk '{print $3}')
