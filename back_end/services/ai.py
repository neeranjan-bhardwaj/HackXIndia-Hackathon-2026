from google import genai
from pydantic import BaseModel,Field
from Config.config import setting

clint=genai.Client(api_key=setting.ai_api_key)

class Ai_output(BaseModel):
    message:str

def Ai_response(Prompt):

    Response=clint.models.generate_content(
        model="gemini-3-flash-preview",
        contents=Prompt,
        config={
            "system_instruction":"Response in lang the quection is asked",
            "response_mime_type":"application/json",
            "response_json_schema":Ai_output.model_json_schema()
        }
    )
    return Ai_output.model_validate_json(Response.text)