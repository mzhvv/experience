# src/projects/mzhvv/monorepo/apps/api/fastapi/main.py

from fastapi import FastAPI
import uvicorn

app = FastAPI()

@app.get('/')
def main(): 
    return 'fastapi'

if __name__ == '__main__':
    uvicorn.run('main:app', host='127.0.0.1', port=8000, reload=True, root_path='/api-fastapi')