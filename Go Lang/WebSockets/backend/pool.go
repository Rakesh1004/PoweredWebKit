package websockets

type MemberDetails struct {
	ClientType *ClientType
	Data string
}

type Pool struct {
	Register chan *ClientType
	Unregister chan *ClientType
	Broadcast chan ClientMessage
	Details chan MemberDetails
	NameField chan *ClientType
	Clients []*ClientType
}

func CreatePool() *Pool {
	return &Pool{
		Register: make(chan *ClientType),
		Unregister: make(chan *ClientType),
		Broadcast: make(chan ClientMessage),
		Clients: make([]*ClientType, 0),
		NameField: make(chan *ClientType),
		Details: make(chan MemberDetails),
	}
}