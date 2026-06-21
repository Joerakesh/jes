import psutil
from fastapi import APIRouter

router = APIRouter()


@router.get("/system")
def get_system():
    memory = psutil.virtual_memory()
    disk = psutil.disk_usage("/")

    battery = psutil.sensors_battery()

    return {
        "cpu": round(psutil.cpu_percent(interval=0.5), 2),

        "memory": {
            "total": memory.total,
            "used": memory.used,
            "percent": memory.percent
        },

        "disk": {
            "total": disk.total,
            "used": disk.used,
            "percent": disk.percent
        },

        "battery": {
            "percent": battery.percent if battery else None,
            "plugged": battery.power_plugged if battery else None
        }
    }