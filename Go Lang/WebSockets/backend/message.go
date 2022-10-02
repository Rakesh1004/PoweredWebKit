package websockets

type ClientMessage struct {
	ClientType *ClientType `json:"clientType"`
	Type int `json:"type`
	Body string `json:"body"`
}