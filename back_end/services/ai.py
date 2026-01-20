from google import genai
from pydantic import BaseModel,Field

clint=genai.Client(api_key='AIzaSyB6wuf1dpQC1rkooUVBfnjIvfPcIHgeUDo')

class Ai_output(BaseModel):
    message:str

Response=clint.models.generate_content(
    model="gemini-3-flash-preview",
    contents="Hi",
    config={
        "response_mime_type":"application/json",
        "response_json_schema":Ai_output.model_json_schema()
    }
)

def Ai_response():
    return Ai_output.model_validate_json(Response.text)