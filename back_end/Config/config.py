from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    ai_api_key:str

    class Config:
        env_file=".env"

setting=Settings()