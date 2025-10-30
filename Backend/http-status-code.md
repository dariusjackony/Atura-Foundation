# 🌐 HTTP Status Codes with Example API Responses

This guide lists the most common HTTP status codes with short explanations and **example JSON responses** you might return in a REST API.

---

## 🟦 1xx — Informational
| Code | Meaning | Description |
|------|----------|-------------|
| 100 | Continue | The server has received the request headers; client should proceed. |
| 101 | Switching Protocols | The requester asked the server to switch protocols. |

---

## 🟩 2xx — Success
| Code | Meaning | Description |
|------|----------|-------------|
| 200 | OK | Request succeeded — typically used for successful GET or PUT. |
| 201 | Created | A new resource was successfully created. |
| 204 | No Content | The request succeeded, but there's no content to return. |

**Example: `200 OK`**
```json
{
  "success": true,
  "message": "User fetched successfully",
  "data": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

**Example: `201 Created`**
```json
{
  "success": true,
  "message": "User created successfully",
  "data": {
    "id": 2,
    "name": "Jane Doe"
  }
}
```

**Example: `204 No Content`**
```json
{}
```
---

## 🟥 4xx — Client Errors
| Code | Meaning | Description |
|------|----------|-------------|
| 400 | Bad Request | The server couldn’t understand the request due to invalid syntax. |
| 401 | Unauthorized | Missing or invalid authentication token. |
| 403 | Forbidden | Client authenticated but not allowed to access the resource. |
| 404 | Not Found | The requested resource could not be found. |
| 409 | Conflict | Request conflicts with the current resource state. |
| 422 | Unprocessable Entity | Request is well-formed but has semantic errors. |
| 429 | Too Many Requests | The user has sent too many requests in a given time frame. |

**Example: `400 Bad Request`**
```json
{
  "success": false,
  "error": "Invalid email format"
}
```

**Example: `401 Unauthorized`**
```json
{
  "success": false,
  "error": "Access denied. Token missing or invalid."
}
```

**Example: `403 Forbidden`**
```json
{
  "success": false,
  "error": "You do not have permission to perform this action."
}
```

**Example: `404 Not Found`**
```json
{
  "success": false,
  "error": "User not found."
}
```

**Example: `422 Unprocessable Entity`**
```json
{
  "success": false,
  "errors": {
    "email": "Email is required",
    "password": "Password must be at least 8 characters"
  }
}
```

**Example: `429 Too Many Requests`**
```json
{
  "success": false,
  "error": "Rate limit exceeded. Try again later."
}
```

---

## ⛔ 5xx — Server Errors
| Code | Meaning | Description |
|------|----------|-------------|
| 500 | Internal Server Error | Generic server-side failure. |
| 502 | Bad Gateway | Server received an invalid response from an upstream server. |
| 503 | Service Unavailable | The server is currently overloaded or down for maintenance. |
| 504 | Gateway Timeout | The upstream server didn’t respond in time. |

**Example: `500 Internal Server Error`**
```json
{
  "success": false,
  "error": "Something went wrong on our end. Please try again later."
}
```

**Example: `503 Service Unavailable`**
```json
{
  "success": false,
  "error": "Server is under maintenance. Please try again soon."
}
```

---

## 🧩 Tips for Developers
- Always include consistent fields like `success`, `message`, and/or `error`.
- Use meaningful messages that help clients understand what went wrong.
- Avoid leaking sensitive details (like stack traces) in production.
- Use `try...catch` blocks and proper validation middleware to handle responses cleanly.

---

## 📘 References
- [MDN Web Docs: HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
- [RFC 9110 – HTTP Semantics](https://datatracker.ietf.org/doc/html/rfc9110)

---

> 💡 **Pro Tip:**  
> Use this file in your backend project’s `docs/` or `reference/` folder for quick access and team consistency.