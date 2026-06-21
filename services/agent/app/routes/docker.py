import docker
from fastapi import APIRouter

router = APIRouter()

client = docker.from_env()


@router.get("/docker")
def get_containers():
    containers = []

    for container in client.containers.list(all=True):
        containers.append({
            "id": container.short_id,
            "name": container.name,
            "image": container.image.tags,
            "status": container.status
        })

    return containers