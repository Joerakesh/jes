from fastapi import FastAPI

from app.routes.system import router as system_router
from app.routes.docker import router as docker_router

app = FastAPI(
    title="JES Agent",
    version="0.1.0"
)


@app.get("/health")
def health():
    return {
        "status": "ok"
    }


@app.get("/hello")
def hello():
    return {
        "message": "Hello Joe"
    }


app.include_router(system_router)
app.include_router(docker_router)