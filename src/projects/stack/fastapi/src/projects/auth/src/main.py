# src/projects/stack/fastapi/src/projects/auth/src/main.py

from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}
