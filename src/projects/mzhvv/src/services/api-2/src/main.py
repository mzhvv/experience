# src/projects/mzhvv/monorepo/apps/api/main.py


from fastapi import FastAPI

app = FastAPI()

@app.get("/api")
def main() -> dict[str, str]:
    return {"data": "projects/mzhvv/monorepo/apps/web"}

@app.get("/api/health")
def health() -> dict[str, str]:
    return {"status": "ok"}

@app.get("/api/openapi.json", include_in_schema=False)
def custom_openapi() -> dict:
    return app.openapi()

@app.get("/api/docs", include_in_schema=False)
def custom_docs():
    from fastapi.openapi.docs import get_swagger_ui_html
    return get_swagger_ui_html(openapi_url="/api/openapi.json", title="API Docs" )

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="127.0.0.1", port=8002, reload=True)
