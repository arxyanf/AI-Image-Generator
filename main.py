app/main.py
import os
from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

# ✅ Get the current app directory (D:\AI Image Generator\app)
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

app = FastAPI()

# ✅ Mount static folder
app.mount(
    "/static",
    StaticFiles(directory=os.path.join(BASE_DIR, "static")),
    name="static"
)

# ✅ Setup templates folder
templates = Jinja2Templates(directory=os.path.join(BASE_DIR, "templates"))

# ✅ Home route
@app.get("/", response_class=HTMLResponse)
async def home(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})
