# Broadcast Service

Create a message broadcasting system using websocket where the sender will connect to `/sender` path to send a message in this format:
```json
{
    "message": "Hello Everyone"
}
```
After connecting the first message the sender should pass is:
```json
{
    "name": "Alice"
}
```
This name should must be stored in the backend so that any sucessive message sent by the sender should have that name in the broadcast message
## Client

The clients will connect using the path `/receiver` to receive all the messages broadcasted
```curl
<Sender Name>: <message>
```
### Example
```curl
Alice: Hello Everyone
```

## Requirements

Language: Golang  
Library (Websocket): https://github.com/gobwas/ws