# src/projects/stack/fastapi/auth/src/main.py

import uvicorn
from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def root():
    return "Hello world"


if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8080, reload=True)
