# src/projects/mzhvv/monorepo/apps/api-python/main.py

from fastapi import FastAPI
import uvicorn

app = FastAPI()

@app.get('/')
def main(): 
  return 'fastapi'

if __name__ == '__main__':
  uvicorn.run('main:app', reload=True)