import dotenv from "dotenv";
dotenv.config();
import OpenAI from "openai";

const client = new OpenAI({
    apiKey: process.env.FIREWORKS_API_KEY,
    baseURL: "https://api.fireworks.ai/inference/v1",
});

const interviewReportJsonSchema = {
    type: "object",
    required: [
        "title",
        "matchScore",
        "technicalQuestions",
        "behavioralQuestions",
        "skillGaps",
        "preparationPlan"
    ],
    properties: {
        title: {
            type: "string"
        },

        matchScore: {
            type: "number",
            minimum: 0,
            maximum: 100
        },

        technicalQuestions: {
            type: "array",
            minItems: 5,
            items: {
                type: "object",
                required: ["question", "intention", "answer"],
                properties: {
                    question: { type: "string" },
                    intention: { type: "string" },
                    answer: { type: "string" }
                }
            }
        },

        behavioralQuestions: {
            type: "array",
            minItems: 3,
            items: {
                type: "object",
                required: ["question", "intention", "answer"],
                properties: {
                    question: { type: "string" },
                    intention: { type: "string" },
                    answer: { type: "string" }
                }
            }
        },

        skillGaps: {
            type: "array",
            minItems: 3,
            items: {
                type: "object",
                required: ["skill", "severity"],
                properties: {
                    skill: { type: "string" },
                    severity: {
                        type: "string",
                        enum: ["low", "medium", "high"]
                    }
                }
            }
        },

        preparationPlan: {
            type: "array",
            minItems: 5,
            items: {
                type: "object",
                required: ["day", "focus", "tasks"],
                properties: {
                    day: {
                        type: "integer",
                        minimum: 1
                    },
                    focus: { type: "string" },
                    tasks: {
                        type: "array",
                        minItems: 2,
                        items: {
                            type: "string"
                        }
                    }
                }
            }
        }
    }
};

async function genrateInterviewReport({ resume, selfDescription, jobDescription }) {
    
    const prompt = `
            Generate an interview preparation report using the Resume, Self Description, and Job Description.

            Return ONLY a valid JSON object. 
            No explanations, markdown, comments, or extra text.

            JSON Schema:
            {
            "title": string,
            "matchScore": number,
            "technicalQuestions": [
            { "question": string, "intention": string, "answer": string }
            ],
            "behavioralQuestions": [
            { "question": string, "intention": string, "answer": string }
            ],
            "skillGaps": [
            { "skill": string, "severity": "low" | "medium" | "high" }
            ],
            "preparationPlan": [
            { "day": number, "focus": string, "tasks": [string] }
            ]
            }

            Rules:
            - title: infer job role from Job Description
            - matchScore: number (0–100) based on resume–JD alignment

            technicalQuestions:
            - at least 3
            - based on resume skills, projects, and JD technologies
            - practical or conceptual interview questions
            - answers concise and interview-ready

            behavioralQuestions:
            - at least 2
            - first question MUST be "Introduce yourself"
            - focus on teamwork, communication, learning, problem solving

            skillGaps:
            - at least 3 skills required in JD but missing/weak in resume
            - severity: high (missing), medium (partial), low (minor improvement)

            preparationPlan:
            - 5–10 days
            - each day: focus + 3–5 practical tasks (coding, docs, concept revision, mini implementations)

            Validation:
            - return ONE JSON object only
            - arrays must contain objects, not strings
            - do not add/remove fields

            Input:
            Resume:
            ${resume}

            Self Description:
            ${selfDescription}

            Job Description:
            ${jobDescription}
    `;
    
    const response = await client.chat.completions.create({
        model: "accounts/fireworks/models/gpt-oss-20b",
        messages: [
            {
                role: "user",
                content: prompt,
            },
        ],
        response_format: {
            type: "json_schema",
            json_schema: {
                name: "InterviewReport",
                schema: interviewReportJsonSchema
            }
        },
        temperature: 0.2
    });
    let content = response.choices[0].message.content;

    try{
        return JSON.parse(content);
    }catch(error){
        console.error(error);
        throw new Error("AI returned invalid JSON");
    }
    

}

export default  genrateInterviewReport ;