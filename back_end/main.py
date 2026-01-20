from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from services.ai import Ai_response
from pydantic import BaseModel

class Boady(BaseModel):
    prompt:str

app=FastAPI()

origins = [
    "http://localhost:3000", 
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,          
    allow_credentials=True,         
    allow_methods=["*"],            
    allow_headers=["*"],            
)

@app.post("/")
def test(boady:Boady):
    return Ai_response(boady.prompt)