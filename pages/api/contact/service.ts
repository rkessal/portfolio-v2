export type Payload = {
  name: string;
  email: string;
  message: string;
};

type Response = {
  error: boolean;
  message: string;
};

const headers = {
  Accept: "application/json, text/plain, */*",
  "Content-Type": "application/json",
};

export default async function sendMessage(payload: Payload): Promise<Response> {
  const response: Response = { error: true, message: "" };

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers,
      body: JSON.stringify(payload),
    });

    if (res.status === 200) {
      response.error = false;
      response.message = res.statusText;
    } else {
      response.message = res.statusText;
    }
  } catch (error: any) {
    response.message = error.message;
  }

  return response;
}
