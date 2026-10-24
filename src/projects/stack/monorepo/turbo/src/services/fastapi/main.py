# src/projects/mzhvv/monorepo/apps/api/fastapi/main.py

from fastapi import FastAPI
import uvicorn

app = FastAPI()

@app.get('/api-fastapi')
def main_no_slash(): 
    return {"src": "projects/mzhvv/monorepo/apps/web"}

@app.get('/api-fastapi/docs', include_in_schema=False)
def custom_docs():
    from fastapi.openapi.docs import get_swagger_ui_html
    return get_swagger_ui_html(openapi_url="/api-fastapi/openapi.json", title="API Docs")

@app.get('/api-fastapi/openapi.json', include_in_schema=False)
def custom_openapi():
    return app.openapi()

if __name__ == '__main__':
    uvicorn.run('main:app', reload=True)