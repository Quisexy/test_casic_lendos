from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional
import uvicorn

app = FastAPI()

# Разрешение запросов с React
app.add_middleware(
    CORSMiddleware,
    allow_origins = ['http://localhost:3000', 'https://testcasiclendos.vercel.app'],
    allow_credentials = True,
    allow_methods = ['*'],
    allow_headers = ['*'],
)

# Модель для данных формы
class ContactData(BaseModel):
    name: str
    email: str
    message: Optional[str] = ''

# API endpoints - ИСПРАВЛЕНО (добавлен / в начале)
@app.get('/api/health/')
async def health():
    return {'status': 'ok'}

@app.post('/api/contact/')
async def handle_contact(data: ContactData):
    # Здесь можно отправить email или сохранить в БД
    print(f'New contact: {data.name} - {data.email}')
    print(f'Message: {data.message}')
    # Имитируем успешную обработку
    return {'success': True, 'message': "Thank you! We'll contact you soon."}

# Добавьте корневой маршрут для проверки
@app.get('/')
async def root():
    return {'message': 'API is working!', 'endpoints': ['/api/health/', '/api/contact/']}

if __name__ == '__main__':
    uvicorn.run(app, host='0.0.0.0', port=8000)