# experience/src/projects/mzhvv/monorepo/apps/api-python-vercel/src/api/main.py

from fastapi import FastAPI

app = FastAPI(title="Mzhvv API")

@app.get("/")
def read_root():
    return {"message": "mzhvv"}

@app.get("/health")
def health_check():
    return {"status": "ok"}