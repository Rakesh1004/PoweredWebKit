use std::io::{ErrorKind, Read, Write}; //imports required
use std::net::TcpListener;    //creates server 
use std::sync::mpsc;      //allows to form channel
use std::thread;

const LOCAL: &str = "127.0.0.1:6000";  //localhost with port
const MSG_SIZE: usize = 32;   //buffersize of messages 

fn sleep() {
    thread::sleep(::std::time::Duration::from_millis(100));
}

fn main() {
    let server = TcpListener::bind(LOCAL).expect("Listener failed to bind"); //bind to local ip
    server.set_nonblocking(true).expect("failed to initialize non-blocking"); //push servers to non-blocking mode; lets server constantly check for messages 

    let mut clients = vec![]; //allows multiple clients
    let (tx, rx) = mpsc::channel::<String>();
    loop {
        if let Ok((mut socket, addr)) = server.accept() {
            println!("Client {} connected", addr); //server.accept accepts connection

            let tx = tx.clone(); //tx= transmitter clone socket and push to client
            clients.push(socket.try_clone().expect("failed to clone client"));

            thread::spawn(move || loop {
                let mut buff = vec![0; MSG_SIZE];  //mutable buffer

                match socket.read_exact(&mut buff) {  //read message to buffer
                    Ok(_) => {  
                        let msg = buff.into_iter().take_while(|&x| x != 0).collect::<Vec<_>>(); //converts message to iterator, collects converted white spaces
                        let msg = String::from_utf8(msg).expect("Invalid utf8 message"); 

                        println!("{}: {:?}", addr, msg);
                        tx.send(msg).expect("failed to send msg to rx"); //sends message to receiver via tx
                    }, 
                    Err(ref err) if err.kind() == ErrorKind::WouldBlock => (),
                    Err(_) => {
                        println!("closing connection with: {}", addr);
                        break;
                    }
                }

                sleep(); //allows loop to rest when not receiving messages 
            });
        }

        if let Ok(msg) = rx.try_recv() { 
            clients = clients.into_iter().filter_map(|mut client| {
                let mut buff = msg.clone().into_bytes(); //converts buffer into bytes
                buff.resize(MSG_SIZE, 0); //resizes it

                client.write_all(&buff).map(|_| client).ok()
            }).collect::<Vec<_>>();
        }

        sleep();
    }
}
