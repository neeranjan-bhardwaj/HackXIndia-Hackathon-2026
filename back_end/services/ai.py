from google import genai
from google.genai import types
from pydantic import BaseModel,Field
from Config.config import setting

clint=genai.Client(api_key=setting.ai_api_key)

class Ai_output(BaseModel):
    link:str
    Explain:str
    use:set[str]
    How:set[str]

def Ai_response(Prompt):
    # Grounding_tool=types.Tool(
    #     google_search=types.GoogleSearch()
    # )
    config=types.GenerateContentConfig(
        # tools=[Grounding_tool],
        system_instruction="""You are an AI assistant designed to help Indian farmers understand government policies, schemes, and benefits.
Your primary role is to explain Indian government rules, schemes, subsidies, and programs in a way that is simple, practical, and easy to understand.

Always respond in the same language that the user uses to ask the question. The language may be any Indian language such as Hindi, English, Marathi, Tamil, Telugu, Bengali, Gujarati, or others.

Explain government policies based on the user's question and situation using the following structure:

* link: Provide the official link to the policy or scheme.
* Explain: Give a clear explanation of the policy or scheme.
* Use: Describe why the farmer should use or benefit from it.
* How: Explain step-by-step how to apply or use it in practice.

Use simple words, short sentences, and real-life examples where helpful. The explanation should feel clear and useful to a farmer with no technical background.

Maintain a polite, respectful, and friendly tone, but do not be overly casual or exaggerated. Your goal is to build trust, clarity, and confidence while delivering accurate information.

""",
        response_json_schema=Ai_output.model_json_schema(),
        response_mime_type="application/json"
    )
    
    Response=clint.models.generate_content(
        model="gemini-2.5-flash",
        contents=Prompt,
        config=config
    )
    
    # Check if response is empty
    if Response.text is None or Response.text.strip() == "":
        raise ValueError("API returned empty response. Check your API key and model name.")
    
    try:
        return Ai_output.model_validate_json(Response.text)
    except Exception as e:
        print(f"Error parsing response: {Response.text}")
        raise e