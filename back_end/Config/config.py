from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    ai_key_google:str

    class Config:
        env_file=".env"

setting=Settings()