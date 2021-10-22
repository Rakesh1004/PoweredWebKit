#!/usr/bin/python
import socket
import random
import subprocess
from subprocess import call
from time import sleep
import os
import datetime
import sys
import dbus
import click
def S_pause():
    host = socket.gethostname()  # as both code is running on same pc
    port = 5000  # socket server port number
    client_socket = socket.socket()  # instantiate
    client_socket.connect((host, port))  # connect to the server
    message = input(" ->   " )  # take input

    while message.lower().strip() != 'bye':

     if message.lower().strip() == 'pause':
       
       list_files = subprocess.run(["sp","pause"])
       print("The exit code was: %d" % list_files.returncode)

     if message.lower().strip() == 'play':
       
       list_files = subprocess.run(["sp","play"])
       print("The exit code was: %d" % list_files.returncode) 

     message = input(" ->   " )  # take input
        
   
       
     
         
   # client_socket.close()  # close the connection
if __name__ == '__main__':
    S_pause()